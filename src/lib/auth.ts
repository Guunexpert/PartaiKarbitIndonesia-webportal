const sessionCookie = 'pki_admin_session';
const sessionDuration = 60 * 60 * 8;

const toBase64Url = (value: ArrayBuffer | string) => {
  const bytes = typeof value === 'string' ? new TextEncoder().encode(value) : new Uint8Array(value);
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const fromBase64Url = (value: string) => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), (character) => character.charCodeAt(0));

const getKey = () => {
  const secret = import.meta.env.SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET is not configured');
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
};

export const createSessionCookie = async () => {
  const expires = Math.floor(Date.now() / 1000) + sessionDuration;
  const payload = `${expires}`;
  const signature = await crypto.subtle.sign('HMAC', await getKey(), new TextEncoder().encode(payload));
  return `${sessionCookie}=${payload}.${toBase64Url(signature)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${sessionDuration}; ${import.meta.env.PROD ? 'Secure; ' : ''}`;
};

export const clearSessionCookie = () => `${sessionCookie}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; ${import.meta.env.PROD ? 'Secure; ' : ''}`;

export const hasValidSession = async (cookieHeader: string | null) => {
  const value = cookieHeader?.match(new RegExp(`${sessionCookie}=([^;]+)`))?.[1];
  if (!value) return false;
  const [expires, encodedSignature] = value.split('.');
  if (!expires || !encodedSignature || Number(expires) < Math.floor(Date.now() / 1000)) return false;
  try {
    return await crypto.subtle.verify('HMAC', await getKey(), fromBase64Url(encodedSignature), new TextEncoder().encode(expires));
  } catch {
    return false;
  }
};

export const verifyPassword = async (password: string) => {
  const storedHash = import.meta.env.ADMIN_PASSWORD_HASH;
  if (!storedHash) throw new Error('ADMIN_PASSWORD_HASH is not configured');
  const [encodedSalt, encodedHash, iterationsText] = storedHash.split('$');
  const iterations = Number(iterationsText || 210000);
  if (!encodedSalt || !encodedHash || !Number.isSafeInteger(iterations)) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const derived = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: fromBase64Url(encodedSalt), iterations, hash: 'SHA-256' }, key, 256);
  const actual = toBase64Url(derived);
  return actual.length === encodedHash.length && [...actual].every((character, index) => character === encodedHash[index]);
};

export { sessionCookie };