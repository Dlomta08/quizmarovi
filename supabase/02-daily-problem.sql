-- =====================================================================
-- Phase 2, step 1: daily problem + answers checked by the database (anti-cheat)
-- Run ONCE in Supabase -> SQL Editor (after schema.sql). Then run answer-key.sql.
-- =====================================================================


-- ---------------------------------------------------------------------
-- 1. PRIVATE ANSWER KEY
-- ---------------------------------------------------------------------
-- The correct option(s) of every live math problem. Filled by answer-key.sql
-- (generated with: node tools/build-answer-key.js). Nobody can read it from the
-- browser: RLS is on and there are no policies; only the functions below use it.
create table public.problem_keys (
  problem_id  text primary key,          -- '10-2025-26-1-7', same id as attempts
  grade       smallint not null,
  correct     smallint[] not null,       -- accepted option indexes (0 = ა)
  has_options boolean not null           -- false = open question (no automatic check)
);
create index problem_keys_grade_idx on public.problem_keys (grade) where has_options;
alter table public.problem_keys enable row level security;
revoke all on public.problem_keys from anon, authenticated;


-- ---------------------------------------------------------------------
-- 2. DAILY PROBLEMS
-- ---------------------------------------------------------------------
-- One problem per grade per Tbilisi day. Picked the first time someone asks for it
-- (daily_problem() below) and then fixed for that day, so everyone gets the same one.
create table public.daily_problems (
  day        date not null,
  grade      smallint not null check (grade between 7 and 11),
  problem_id text not null,
  primary key (day, grade)
);
alter table public.daily_problems enable row level security;
revoke all on public.daily_problems from anon, authenticated;   -- read through daily_problem() only


-- ---------------------------------------------------------------------
-- 3. XP PER ANSWER  (needed for daily caps now and weekly leaderboards later)
-- ---------------------------------------------------------------------
alter table public.attempts add column xp_awarded smallint not null default 0;

-- Days (Tbilisi) on which the student answered at least one problem correctly
-- = the days that count for the streak. Used for the week row on the home page.
create view public.my_active_days with (security_invoker = true) as
  select distinct (created_at at time zone 'Asia/Tbilisi')::date as day
  from public.attempts
  where is_correct;
revoke all on public.my_active_days from anon, authenticated;
grant select on public.my_active_days to authenticated;


-- ---------------------------------------------------------------------
-- 4. SETTINGS  (change a number = re-run that one line)
-- ---------------------------------------------------------------------
create or replace function public.xp_per_correct() returns integer language sql immutable as $$ select 10 $$;   -- new correct problem
create or replace function public.xp_daily_bonus() returns integer language sql immutable as $$ select 20 $$;   -- daily problem bonus
create or replace function public.xp_daily_cap()   returns integer language sql immutable as $$ select 500 $$;  -- max XP per day
create or replace function public.burst_limit()    returns integer language sql immutable as $$ select 40 $$;   -- answers per 10 min that still earn XP

create or replace function public.tbilisi_today() returns date language sql stable as
  $$ select (now() at time zone 'Asia/Tbilisi')::date $$;


-- ---------------------------------------------------------------------
-- 5. daily_problem(grade): today's problem id for a grade (guests too)
-- ---------------------------------------------------------------------
create or replace function public.daily_problem(p_grade integer)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_today date := public.tbilisi_today();
  v_id    text;
begin
  if p_grade is null or p_grade not between 7 and 11 then
    raise exception 'bad grade';
  end if;

  select problem_id into v_id from public.daily_problems where day = v_today and grade = p_grade;
  if v_id is not null then
    return v_id;
  end if;

  -- pick a random multiple-choice problem of this grade not used as a daily problem before
  select k.problem_id into v_id
  from public.problem_keys k
  where k.grade = p_grade and k.has_options
    and not exists (select 1 from public.daily_problems d where d.grade = p_grade and d.problem_id = k.problem_id)
  order by random()
  limit 1;
  if v_id is null then           -- every problem was used once: allow repeats
    select problem_id into v_id from public.problem_keys
    where grade = p_grade and has_options order by random() limit 1;
  end if;
  if v_id is null then
    return null;                 -- answer key not loaded yet
  end if;

  insert into public.daily_problems (day, grade, problem_id) values (v_today, p_grade, v_id)
  on conflict (day, grade) do nothing;           -- two people at the same moment: first one wins
  select problem_id into v_id from public.daily_problems where day = v_today and grade = p_grade;
  return v_id;
end;
$$;


-- ---------------------------------------------------------------------
-- 6. record_attempt(): now the DATABASE decides if the answer is right
-- ---------------------------------------------------------------------
-- Returns {is_correct, xp, daily} so the site could show what was earned.
-- p_is_correct from the browser is IGNORED (kept only so older pages still work).
drop function if exists public.record_attempt(text, text, boolean, integer, text);

create function public.record_attempt(
  p_problem_id text,
  p_answer     text,
  p_is_correct boolean default null,
  p_time       integer default null,
  p_subject    text    default 'math'
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid       uuid := auth.uid();
  v_today     date := public.tbilisi_today();
  v_day_start timestamptz := (public.tbilisi_today()::timestamp at time zone 'Asia/Tbilisi');
  v_key       public.problem_keys%rowtype;
  v_idx       integer;
  v_correct   boolean;
  v_xp        integer := 0;
  v_daily     boolean := false;
  v_profile   public.profiles%rowtype;
  v_streak    integer;
  v_today_xp  integer;
begin
  if v_uid is null then raise exception 'not logged in'; end if;
  if p_subject <> 'math' then raise exception 'only math is saved'; end if;

  select * into v_key from public.problem_keys where problem_id = p_problem_id;
  if not found or not v_key.has_options then raise exception 'unknown problem'; end if;
  if p_answer is null or p_answer !~ '^[0-9]$' then raise exception 'bad answer'; end if;
  v_idx := p_answer::integer;
  v_correct := v_idx = any (v_key.correct);

  select * into v_profile from public.profiles where id = v_uid for update;

  if v_correct and found then
    -- +10 only for the first correct answer on this problem
    if not exists (select 1 from public.attempts
                   where user_id = v_uid and problem_id = p_problem_id and is_correct) then
      v_xp := public.xp_per_correct();
    end if;
    -- +20 for today's problem of your grade (once per day)
    if exists (select 1 from public.daily_problems
               where day = v_today and grade = v_profile.grade and problem_id = p_problem_id)
       and not exists (select 1 from public.attempts
                       where user_id = v_uid and problem_id = p_problem_id and is_correct
                         and created_at >= v_day_start) then
      v_xp := v_xp + public.xp_daily_bonus();
      v_daily := true;
    end if;
    -- too many answers in 10 minutes (scripted?) -> no XP
    if (select count(*) from public.attempts
        where user_id = v_uid and created_at > now() - interval '10 minutes') >= public.burst_limit() then
      v_xp := 0;
    end if;
    -- daily cap
    select coalesce(sum(xp_awarded), 0) into v_today_xp from public.attempts
    where user_id = v_uid and created_at >= v_day_start;
    v_xp := greatest(0, least(v_xp, public.xp_daily_cap() - v_today_xp));
  end if;

  insert into public.attempts (user_id, subject, problem_id, answer, is_correct, time_spent_seconds, xp_awarded)
  values (v_uid, 'math', p_problem_id, p_answer, v_correct,
          case when p_time is null then null else least(greatest(p_time, 0), 86400) end, v_xp);

  -- streak + xp (needs a profile; onboarding may not be finished yet)
  if v_correct and v_profile.id is not null then
    if v_profile.last_active_date = v_today then
      v_streak := v_profile.current_streak;
    elsif v_profile.last_active_date = v_today - 1 then
      v_streak := v_profile.current_streak + 1;
    else
      v_streak := 1;
    end if;
    update public.profiles
    set current_streak   = v_streak,
        longest_streak   = greatest(longest_streak, v_streak),
        last_active_date = v_today,
        xp               = xp + v_xp
    where id = v_uid;
  end if;

  return jsonb_build_object('is_correct', v_correct, 'xp', v_xp, 'daily', v_daily);
end;
$$;


-- ---------------------------------------------------------------------
-- 7. PERMISSIONS
-- ---------------------------------------------------------------------
revoke all on function public.record_attempt(text, text, boolean, integer, text) from public, anon;
grant execute on function public.record_attempt(text, text, boolean, integer, text) to authenticated;

revoke all on function public.daily_problem(integer) from public;
grant execute on function public.daily_problem(integer) to anon, authenticated;   -- guests see it too
