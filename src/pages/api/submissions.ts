import type { APIRoute } from 'astro';
import { getDiscordSession } from '../../lib/discord-auth';
import { createFeedback, listFeedback, listReactionTypes, listReactions } from '../../lib/feedback';

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const withReactions = async (posts: Awaited<ReturnType<typeof listFeedback>>, viewerId?: string | null) => {
  const [types, rows] = await Promise.all([listReactionTypes(), listReactions(posts.map((post) => post.id))]);
  return posts.map((post) => ({ ...post, reactions: types.map((type) => ({ ...type, count: rows.filter((row) => row.feedback_id === post.id && row.reaction_key === type.key).length, selected: Boolean(viewerId && rows.some((row) => row.feedback_id === post.id && row.reaction_key === type.key && row.discord_id === viewerId)) })) }));
};

export const GET: APIRoute = async ({ request }) => {
  try {
    const session = await getDiscordSession(request.headers.get('cookie'));
    return json({ posts: await withReactions(await listFeedback(), session?.id) });
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Unable to load feedback' }, 503); }
};

export const POST: APIRoute = async ({ request }) => {
  const session = await getDiscordSession(request.headers.get('cookie'));
  if (!session) return json({ error: 'Login dengan Discord terlebih dahulu.' }, 401);
  try {
    const data = await request.json();
    const kind = data.kind === 'bug' || data.kind === 'suggestion' ? data.kind : null;
    const title = typeof data.title === 'string' ? data.title.trim() : '';
    const body = typeof data.body === 'string' ? data.body.trim() : '';
    if (!kind || title.length < 3 || title.length > 120 || body.length < 10 || body.length > 4000) return json({ error: 'Kategori, judul (3-120 karakter), dan isi (10-4000 karakter) wajib valid.' }, 400);
    const posts = await createFeedback({ kind, title, body, discord_id: session.id, author_name: session.global_name || session.username, author_avatar: session.avatar ? `https://cdn.discordapp.com/avatars/${session.id}/${session.avatar}.png?size=64` : null });
    return json({ post: (await withReactions(posts, session.id))[0] }, 201);
  } catch (error) { return json({ error: error instanceof Error ? error.message : 'Unable to create feedback' }, 503); }
};
