create table if not exists portal_state (
  id text primary key,
  events jsonb not null default '[]'::jsonb,
  announcement text not null default '',
  online boolean not null default true,
  changelog jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table portal_state add column if not exists changelog jsonb not null default '[]'::jsonb;

insert into portal_state (id)
values ('main')
on conflict (id) do nothing;

create table if not exists feedback_posts (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('bug', 'suggestion')),
  title text not null check (char_length(title) between 3 and 120),
  body text not null check (char_length(body) between 10 and 4000),
  discord_id text not null,
  author_name text not null,
  author_avatar text,
  implementation_status text not null default 'pending' check (implementation_status in ('pending', 'considered', 'planned', 'in_progress', 'completed', 'rejected')),
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists feedback_posts_public_idx on feedback_posts (deleted_at, created_at desc);
create index if not exists feedback_posts_status_idx on feedback_posts (implementation_status, created_at desc);

create table if not exists reaction_types (
  key text primary key,
  label text not null,
  emoji text not null,
  enabled boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists feedback_reactions (
  feedback_id uuid not null references feedback_posts(id) on delete cascade,
  reaction_key text not null references reaction_types(key) on delete restrict,
  discord_id text not null,
  created_at timestamptz not null default now(),
  primary key (feedback_id, reaction_key, discord_id)
);

create index if not exists feedback_reactions_counts_idx on feedback_reactions (feedback_id, reaction_key);

insert into reaction_types (key, label, emoji, sort_order)
values
  ('upvote', 'Upvote', '👍', 1),
  ('downvote', 'Downvote', '👎', 2),
  ('heart', 'Suka', '❤️', 3),
  ('thinking', 'Menarik', '🤔', 4),
  ('rocket', 'Gas', '🚀', 5),
  ('sempak', 'Sempak', '🩲', 6),
  ('basahbang', 'Basah Banget', '💦', 7)
on conflict (key) do nothing;
