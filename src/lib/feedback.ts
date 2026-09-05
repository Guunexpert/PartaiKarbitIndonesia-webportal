export type FeedbackKind = 'bug' | 'suggestion';
export type ImplementationStatus = 'pending' | 'considered' | 'planned' | 'in_progress' | 'completed' | 'rejected';
export type Reaction = { key: string; label: string; emoji: string; count: number; selected: boolean };
export type FeedbackPost = { id: string; kind: FeedbackKind; title: string; body: string; discord_id: string; author_name: string; author_avatar: string | null; implementation_status: ImplementationStatus; created_at: string; updated_at: string; reactions: Reaction[] };

const getConfig = () => {
  const url = import.meta.env.SUPABASE_URL;
  const key = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase environment variables are not configured');
  return { url: url.replace(/\/$/, ''), key };
};
const request = async (path: string, options: RequestInit = {}) => {
  const { url, key } = getConfig();
  const response = await fetch(`${url}/rest/v1/${path}`, { ...options, headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', ...(options.headers || {}) } });
  if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
  return response.status === 204 ? null : response.json();
};

export const listReactionTypes = async () => request('reaction_types?enabled=eq.true&order=sort_order.asc') as Promise<{ key: string; label: string; emoji: string }[]>;
export const listFeedback = async (publicOnly = true) => {
  const filter = publicOnly ? 'deleted_at=is.null' : 'select=*';
  return request(`feedback_posts?${filter}&order=created_at.desc`) as Promise<Omit<FeedbackPost, 'reactions'>[]>;
};
export const createFeedback = async (post: { kind: FeedbackKind; title: string; body: string; discord_id: string; author_name: string; author_avatar?: string | null }) => request('feedback_posts', { method: 'POST', headers: { Prefer: 'return=representation' }, body: JSON.stringify(post) }) as Promise<Omit<FeedbackPost, 'reactions'>[]>;
export const listReactions = async (feedbackIds: string[]) => feedbackIds.length ? request(`feedback_reactions?feedback_id=in.(${feedbackIds.join(',')})&select=feedback_id,reaction_key,discord_id`) as Promise<{ feedback_id: string; reaction_key: string; discord_id: string }[]> : [];
export const toggleReaction = async (feedbackId: string, reactionKey: string, discordId: string) => {
  const { url, key } = getConfig();
  const existing = await request(`feedback_reactions?feedback_id=eq.${feedbackId}&reaction_key=eq.${reactionKey}&discord_id=eq.${discordId}&select=feedback_id`);
  if (existing.length) {
    const response = await fetch(`${url}/rest/v1/feedback_reactions?feedback_id=eq.${feedbackId}&reaction_key=eq.${reactionKey}&discord_id=eq.${discordId}`, { method: 'DELETE', headers: { apikey: key, Authorization: `Bearer ${key}` } });
    if (!response.ok) throw new Error(`Supabase delete failed: ${response.status}`);
    return false;
  }
  await request('feedback_reactions', { method: 'POST', body: JSON.stringify({ feedback_id: feedbackId, reaction_key: reactionKey, discord_id: discordId }) });
  return true;
};
export const updateFeedback = async (id: string, values: { implementation_status?: ImplementationStatus; deleted_at?: string | null }) => request(`feedback_posts?id=eq.${id}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify({ ...values, updated_at: new Date().toISOString() }) });
