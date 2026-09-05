import type { APIRoute } from 'astro';
import { clearDiscordSessionCookie } from '../../../../lib/discord-auth';

export const GET: APIRoute = async () => new Response(null, { status: 303, headers: { Location: '/laporsaran', 'Set-Cookie': clearDiscordSessionCookie() } });
