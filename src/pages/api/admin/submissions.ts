import type { APIRoute } from 'astro';
import { listFeedback, listReactionTypes, listReactions, updateFeedback } from '../../../lib/feedback';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const statuses = ['pending', 'considered', 'planned', 'in_progress', 'completed', 'rejected'];

export const GET: APIRoute = async () => {
  try {
    const posts = await listFeedback(false);
    const [types, rows] = await Promise.all([listReactionTypes(), listReactions(posts.map((post) => post.id))]);
    return json({ posts: posts.map((post) => ({ ...post, reactions: types.map((type) => ({ ...type, count: rows.filter((row) => row.feedback_id === post.id && row.reaction_key === type.key).length })) })) });
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Unable to load moderation queue' }, 503); }
};

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    if (typeof data.id !== 'string' || (data.implementation_status && !statuses.includes(data.implementation_status))) return json({ error: 'Data moderasi tidak valid.' }, 400);
    const values = data.deleted === true ? { deleted_at: new Date().toISOString() } : { implementation_status: data.implementation_status };
    await updateFeedback(data.id, values);
    return json({ ok: true });
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Unable to update feedback' }, 503); }
};
