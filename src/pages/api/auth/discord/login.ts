import type { APIRoute } from 'astro';
import { getDiscordLoginUrl } from '../../../../lib/discord-auth';

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const state = crypto.randomUUID();
  const loginUrl = getDiscordLoginUrl(new URL(request.url).origin, state);
  if (!loginUrl) return new Response('Discord OAuth is not configured', { status: 503 });
  cookies.set('pki_discord_oauth_state', state, { httpOnly: true, sameSite: 'lax', secure: import.meta.env.PROD, path: '/', maxAge: 600 });
  return redirect(loginUrl, 302);
};
