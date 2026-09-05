const discordSessionCookie = 'pki_discord_session';
const sessionDuration = 60 * 60 * 24 * 30;

type DiscordUser = { id: string; username: string; global_name?: string | null; avatar?: string | null };

const encode = (value: string | ArrayBuffer) => {
  const bytes = typeof value === 'string' ? new TextEncoder().encode(value) : new Uint8Array(value);
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const decode = (value: string) => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), (character) => character.charCodeAt(0));
const getKey = () => {
  const secret = import.meta.env.SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET is not configured');
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
};

export const getDiscordRedirectUri = (origin: string) => import.meta.env.DISCORD_REDIRECT_URI || `${origin}/api/auth/discord/callback`;
export const getDiscordLoginUrl = (origin: string, state: string) => {
  const clientId = import.meta.env.DISCORD_CLIENT_ID;
  if (!clientId) return null;
  const params = new URLSearchParams({ client_id: clientId, response_type: 'code', redirect_uri: getDiscordRedirectUri(origin), scope: 'identify', state });
  return `https://discord.com/oauth2/authorize?${params}`;
};

export const createDiscordSessionCookie = async (user: DiscordUser) => {
  const payload = JSON.stringify({ ...user, exp: Math.floor(Date.now() / 1000) + sessionDuration });
  const encoded = encode(payload);
  const signature = await crypto.subtle.sign('HMAC', await getKey(), new TextEncoder().encode(encoded));
  return `${discordSessionCookie}=${encoded}.${encode(signature)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${sessionDuration}; ${import.meta.env.PROD ? 'Secure; ' : ''}`;
};

export const getDiscordSession = async (cookieHeader: string | null) => {
  const value = cookieHeader?.match(new RegExp(`${discordSessionCookie}=([^;]+)`))?.[1];
  if (!value) return null;
  const [encoded, signature] = value.split('.');
  if (!encoded || !signature) return null;
  try {
    const valid = await crypto.subtle.verify('HMAC', await getKey(), decode(signature), new TextEncoder().encode(encoded));
    if (!valid) return null;
    const user = JSON.parse(new TextDecoder().decode(decode(encoded))) as DiscordUser & { exp: number };
    return user.exp > Math.floor(Date.now() / 1000) ? user : null;
  } catch { return null; }
};

export const clearDiscordSessionCookie = () => `${discordSessionCookie}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; ${import.meta.env.PROD ? 'Secure; ' : ''}`;
export { discordSessionCookie };