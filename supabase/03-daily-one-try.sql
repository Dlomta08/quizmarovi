-- =====================================================================
-- 03-daily-one-try.sql — daily problem: one try, 20 XP or 0
-- Run once in the Supabase SQL Editor, AFTER 02-daily-problem.sql.
-- =====================================================================
-- Changes record_attempt() (everything else stays as in 02):
--   * Today's daily problem gives exactly xp_daily_bonus() = 20 XP when the FIRST answer
--     you give it today is right (no extra +10 for a new problem).
--   * A wrong first answer = 0 XP, and answering again later that day gives 0 XP too.
--   * Other problems: unchanged (+10 for the first correct answer on a problem).
-- Same parameters and return type as before, so "create or replace" is enough.

create or replace function public.record_attempt(
  p_problem_id text,
  p_answer     text,
  p_is_correct boolean default null,   -- ignored: the database checks the answer itself
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
  v_daily     boolean := false;   -- is this today's problem of your grade?
  v_first     boolean;            -- first answer to it today?
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

  if v_profile.id is not null then
    v_daily := exists (select 1 from public.daily_problems
                       where day = v_today and grade = v_profile.grade and problem_id = p_problem_id);
  end if;

  if v_correct and v_profile.id is not null then
    if v_daily then
      -- daily problem: 20 XP, only if this is the first answer to it today
      v_first := not exists (select 1 from public.attempts
                             where user_id = v_uid and problem_id = p_problem_id and created_at >= v_day_start);
      if v_first then v_xp := public.xp_daily_bonus(); end if;
    elsif not exists (select 1 from public.attempts
                      where user_id = v_uid and problem_id = p_problem_id and is_correct) then
      -- any other problem: +10 for the first correct answer on it
      v_xp := public.xp_per_correct();
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

-- permissions stay the same (repeated here to be safe)
revoke all on function public.record_attempt(text, text, boolean, integer, text) from public, anon;
grant execute on function public.record_attempt(text, text, boolean, integer, text) to authenticated;
