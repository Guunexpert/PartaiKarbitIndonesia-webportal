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
