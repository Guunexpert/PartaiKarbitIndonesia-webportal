import type { APIRoute } from 'astro';
import { createDiscordSessionCookie, getDiscordRedirectUri } from '../../../../lib/discord-auth';

export const GET: APIRoute = async ({ request, redirect, cookies }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  if (!code || !state || state !== cookies.get('pki_discord_oauth_state')?.value) return new Response('Invalid OAuth state', { status: 400 });
  const clientId = import.meta.env.DISCORD_CLIENT_ID;
  const clientSecret = import.meta.env.DISCORD_CLIENT_SECRET;
  if (!clientId || !clientSecret) return new Response('Discord OAuth is not configured', { status: 503 });
  const tokenResponse = await fetch('https://discord.com/api/oauth2/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ client_id: clientId, client_secret: clientSecret, grant_type: 'authorization_code', code, redirect_uri: getDiscordRedirectUri(url.origin) }) });
  if (!tokenResponse.ok) return new Response('Discord token exchange failed', { status: 502 });
  const token = await tokenResponse.json();
  const userResponse = await fetch('https://discord.com/api/users/@me', { headers: { Authorization: `Bearer ${token.access_token}` } });
  if (!userResponse.ok) return new Response('Discord user lookup failed', { status: 502 });
  const user = await userResponse.json();
  cookies.delete('pki_discord_oauth_state', { path: '/' });
  return new Response(null, { status: 303, headers: { Location: '/laporsaran', 'Set-Cookie': await createDiscordSessionCookie(user) } });
};
