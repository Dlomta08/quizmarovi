-- =====================================================================
-- komaroviqvizebi.ge  -  Supabase schema (Phase 1: student accounts)
-- Run this whole file ONCE in: Supabase Dashboard -> SQL Editor -> New query -> Run.
-- It is safe to read top to bottom; every block has a comment saying what it does.
--
-- Privacy rule: we store ONLY what is listed below. No real names, birth
-- dates, phones, school IDs. (Supabase itself keeps the Google e-mail in
-- its private auth.users table; our own tables never copy it.)
-- =====================================================================


-- ---------------------------------------------------------------------
-- 1. TABLES
-- ---------------------------------------------------------------------

-- One row per student. id is the same id Supabase Auth gives the login.
-- "on delete cascade" = when the auth user is deleted, this row disappears too.
create table public.profiles (
  id                  uuid primary key references auth.users (id) on delete cascade,
  username            text not null
                        constraint username_format check (username ~ '^[A-Za-z0-9_ა-ჰ-]{3,20}$'),
  grade               smallint not null check (grade between 7 and 11),
  avatar              text not null check (char_length(avatar) between 1 and 30), -- preset key, e.g. 'fox'
  xp                  integer not null default 0,
  current_streak      integer not null default 0,
  longest_streak      integer not null default 0,
  last_active_date    date,                         -- last day (Tbilisi) a problem was solved
  show_on_leaderboard boolean not null default false,  -- opt-in, used in Phase 2
  created_at          timestamptz not null default now()
);

-- Usernames must be unique ignoring upper/lower case ("Nika" = "nika").
-- Trying to insert a duplicate fails with error code 23505; the site shows "taken".
create unique index profiles_username_lower_key on public.profiles (lower(username));

-- Every answer a logged-in student gives.
-- problem_id uses the SAME format as the site's localStorage: grade-year-quiz-n,
-- e.g. '10-2025-26-1-7'.  (n = position of the problem inside the quiz file, so
-- never reorder/insert problems in published quiz files - only append.)
create table public.attempts (
  id                 bigint generated always as identity primary key,
  user_id            uuid not null default auth.uid() references auth.users (id) on delete cascade,
  subject            text not null default 'math' check (subject in ('math', 'physics')),
  problem_id         text not null check (char_length(problem_id) <= 40),
  answer             text check (char_length(answer) <= 20),  -- chosen option index as text
  is_correct         boolean not null,
  time_spent_seconds integer check (time_spent_seconds is null or time_spent_seconds between 0 and 86400),
  created_at         timestamptz not null default now()
);

create index attempts_user_problem_idx on public.attempts (user_id, subject, problem_id);
create index attempts_user_time_idx    on public.attempts (user_id, created_at desc);

-- Saved problems (table only in Phase 1; no button on the site yet).
create table public.bookmarks (
  user_id    uuid not null default auth.uid() references auth.users (id) on delete cascade,
  problem_id text not null check (char_length(problem_id) <= 40),
  created_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);


-- ---------------------------------------------------------------------
-- 2. WHO MAY DO WHAT  (table permissions, then Row Level Security)
-- ---------------------------------------------------------------------

-- Start from zero: nobody (guests = "anon", logged in = "authenticated") can do anything...
revoke all on public.profiles, public.attempts, public.bookmarks from anon, authenticated;

-- ...then give back only what the site needs.
grant select on public.profiles to authenticated;
-- Column-level grants: a student can NEVER write xp / streaks / dates directly
-- (e.g. from the browser console). Only the record_attempt() function below can.
grant insert (id, username, grade, avatar)                        on public.profiles to authenticated;
grant update (username, grade, avatar, show_on_leaderboard)       on public.profiles to authenticated;

grant select on public.attempts to authenticated;                 -- no insert: attempts go through record_attempt()
grant select, insert, delete on public.bookmarks to authenticated;

-- Row Level Security: even with the permissions above, a student only ever sees/touches THEIR OWN rows.
alter table public.profiles  enable row level security;
alter table public.attempts  enable row level security;
alter table public.bookmarks enable row level security;

-- profiles
create policy "profiles: read own"   on public.profiles for select to authenticated
  using (id = auth.uid());                       -- you can read only your own profile
create policy "profiles: insert own" on public.profiles for insert to authenticated
  with check (id = auth.uid());                  -- you can create only your own profile row
create policy "profiles: update own" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());  -- you can edit only your own row

-- attempts (read-only from the browser)
create policy "attempts: read own"   on public.attempts for select to authenticated
  using (user_id = auth.uid());                  -- you can see only your own attempts

-- bookmarks
create policy "bookmarks: read own"   on public.bookmarks for select to authenticated
  using (user_id = auth.uid());                  -- you see only your own bookmarks
create policy "bookmarks: insert own" on public.bookmarks for insert to authenticated
  with check (user_id = auth.uid());             -- you add bookmarks only for yourself
create policy "bookmarks: delete own" on public.bookmarks for delete to authenticated
  using (user_id = auth.uid());                  -- you remove only your own bookmarks


-- ---------------------------------------------------------------------
-- 3. VIEWS  (summaries the site reads; they respect the RLS above)
-- ---------------------------------------------------------------------
-- security_invoker = true  ->  the view runs with the CALLER's permissions,
-- so each student still sees only their own data.

-- One row per problem the student has tried.
create view public.my_problem_stats with (security_invoker = true) as
  select subject,
         problem_id,
         count(*)::int                              as attempts,
         (count(*) filter (where is_correct))::int  as correct_count,
         max(created_at)                            as last_attempt_at
  from public.attempts
  group by subject, problem_id;

-- "Mistakes notebook": tried at least once, never solved correctly yet.
create view public.my_mistakes with (security_invoker = true) as
  select subject, problem_id, attempts, last_attempt_at
  from public.my_problem_stats
  where correct_count = 0;

revoke all on public.my_problem_stats, public.my_mistakes from anon, authenticated;
grant select on public.my_problem_stats, public.my_mistakes to authenticated;


-- ---------------------------------------------------------------------
-- 4. FUNCTIONS  (the only way to save attempts / change xp, streak, delete account)
-- ---------------------------------------------------------------------

-- XP for one correct answer. To change it later, just re-run this one block
-- with another number.
create or replace function public.xp_per_correct()
returns integer language sql immutable as $$ select 10 $$;

-- Called by the site after every graded answer.
--  * saves the attempt for the logged-in user (auth.uid() = the caller, can't be faked)
--  * if correct: updates the daily streak (Tbilisi day) and adds XP
--  * XP is given only for the FIRST correct answer on a problem (stops XP farming by
--    re-answering). To give XP on every correct answer, delete the v_first_correct test.
-- NOTE: answers are checked in the browser (quiz files are public), so a determined
-- user could fake "correct". Fine for now; keep in mind before real prizes/leaderboards.
create or replace function public.record_attempt(
  p_problem_id text,
  p_answer     text,
  p_is_correct boolean,
  p_time       integer default null,
  p_subject    text    default 'math'
) returns void
language plpgsql
security definer                 -- runs with the function owner's rights (so it may update xp)
set search_path = public
as $$
declare
  v_uid           uuid := auth.uid();
  v_today         date := (now() at time zone 'Asia/Tbilisi')::date;   -- Tbilisi calendar day (UTC+4)
  v_first_correct boolean;
  v_last          date;
  v_streak        integer;
begin
  if v_uid is null then
    raise exception 'not logged in';
  end if;
  -- only real problem ids, like 10-2025-26-1-7
  if p_problem_id !~ '^[0-9]{1,2}-[0-9]{4}-[0-9]{2}-[0-9]{1,2}-[0-9]{1,3}$' then
    raise exception 'bad problem id';
  end if;

  -- must be checked BEFORE inserting this attempt
  v_first_correct := p_is_correct and not exists (
    select 1 from public.attempts
    where user_id = v_uid and subject = p_subject and problem_id = p_problem_id and is_correct
  );

  insert into public.attempts (user_id, subject, problem_id, answer, is_correct, time_spent_seconds)
  values (v_uid, p_subject, p_problem_id, left(p_answer, 20), p_is_correct,
          case when p_time is null then null else least(greatest(p_time, 0), 86400) end);

  if not p_is_correct then
    return;                      -- wrong answers never touch xp or streak
  end if;

  select last_active_date, current_streak into v_last, v_streak
  from public.profiles where id = v_uid for update;
  if not found then
    return;                      -- attempt saved, but no profile yet (onboarding not finished)
  end if;

  if v_last = v_today then
    null;                                   -- already solved something today: streak unchanged
  elsif v_last = v_today - 1 then
    v_streak := v_streak + 1;               -- solved yesterday too: streak grows
  else
    v_streak := 1;                          -- first time, or a day was skipped: start again
  end if;

  update public.profiles
  set current_streak   = v_streak,
      longest_streak   = greatest(longest_streak, v_streak),
      last_active_date = v_today,
      xp               = xp + case when v_first_correct then public.xp_per_correct() else 0 end
  where id = v_uid;
end;
$$;

-- "Delete my account": removes the login; cascade deletes profile, attempts, bookmarks.
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  if auth.uid() is null then
    raise exception 'not logged in';
  end if;
  delete from auth.users where id = auth.uid();
end;
$$;

-- Only logged-in users may call these (not guests).
revoke all on function public.record_attempt(text, text, boolean, integer, text) from public, anon;
revoke all on function public.delete_my_account()                                from public, anon;
grant execute on function public.record_attempt(text, text, boolean, integer, text) to authenticated;
grant execute on function public.delete_my_account()                                to authenticated;


-- =====================================================================
-- Phase 2 note (nothing to run now): weekly leaderboards will be a function that
-- sums correct attempts per Monday-week and returns only username/avatar/xp of
-- users with show_on_leaderboard = true in the same grade. Badges, daily problem
-- and duels will be new tables. The tables above need no change for that.
-- =====================================================================
