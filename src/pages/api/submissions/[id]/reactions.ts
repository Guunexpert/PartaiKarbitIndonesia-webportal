import type { APIRoute } from 'astro';
import { getDiscordSession } from '../../../../lib/discord-auth';
import { listFeedback, listReactionTypes, listReactions, toggleReaction } from '../../../../lib/feedback';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const POST: APIRoute = async ({ request, params }) => {
  const session = await getDiscordSession(request.headers.get('cookie'));
  if (!session) return json({ error: 'Login dengan Discord terlebih dahulu.' }, 401);
  if (!params.id || !uuid.test(params.id)) return json({ error: 'Feedback tidak valid.' }, 400);
  try {
    const data = await request.json();
    const types = await listReactionTypes();
    if (!types.some((type) => type.key === data.key)) return json({ error: 'Reaction tidak tersedia.' }, 400);
    await toggleReaction(params.id, data.key, session.id);
    const [posts, rows] = await Promise.all([listFeedback(), listReactions([params.id])]);
    if (!posts.some((post) => post.id === params.id)) return json({ error: 'Feedback tidak ditemukan.' }, 404);
    return json({ reactions: types.map((type) => ({ ...type, count: rows.filter((row) => row.reaction_key === type.key).length, selected: rows.some((row) => row.reaction_key === type.key && row.discord_id === session.id) })) });
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Unable to update reaction' }, 503); }
};
