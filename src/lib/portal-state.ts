export type PortalEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
};

export type ChangelogItem = { version: string; title: string; description: string };

export type PortalState = {
  events: PortalEvent[];
  announcement: string;
  online: boolean;
  updated: string;
  activity?: { text: string; time: string }[];
  changelog: ChangelogItem[];
};

const getSupabaseConfig = () => {
  const url = import.meta.env.SUPABASE_URL;
  const key = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase environment variables are not configured');
  return { url: url.replace(/\/$/, ''), key };
};

export const getPortalState = async () => {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/portal_state?id=eq.main&select=id,events,announcement,online,changelog,updated_at`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` }
  });
  if (!response.ok) throw new Error(`Supabase read failed: ${response.status}`);
  const rows = await response.json();
  if (!rows[0]) throw new Error('Supabase portal_state row is missing');
  return { events: rows[0].events || [], announcement: rows[0].announcement || '', online: rows[0].online !== false, changelog: rows[0].changelog || [], updated: rows[0].updated_at } as PortalState;
};

export const savePortalState = async (state: PortalState) => {
  const { url, key } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/portal_state?id=eq.main`, {
    method: 'PATCH',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify({ events: state.events, announcement: state.announcement, online: state.online, changelog: state.changelog || [], updated_at: new Date().toISOString() })
  });
  if (!response.ok) throw new Error(`Supabase write failed: ${response.status}`);
};