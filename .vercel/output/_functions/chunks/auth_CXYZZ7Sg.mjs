const sessionCookie = "pki_admin_session";
const sessionDuration = 60 * 60 * 8;
const toBase64Url = (value) => {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const fromBase64Url = (value) => Uint8Array.from(atob(value.replace(/-/g, "+").replace(/_/g, "/")), (character) => character.charCodeAt(0));
const getKey = () => {
  throw new Error("SESSION_SECRET is not configured");
};
const createSessionCookie = async () => {
  const expires = Math.floor(Date.now() / 1e3) + sessionDuration;
  const payload = `${expires}`;
  const signature = await crypto.subtle.sign("HMAC", await getKey(), new TextEncoder().encode(payload));
  return `${sessionCookie}=${payload}.${toBase64Url(signature)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${sessionDuration}; ${"Secure; " }`;
};
const clearSessionCookie = () => `${sessionCookie}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0; ${"Secure; " }`;
const hasValidSession = async (cookieHeader) => {
  const value = cookieHeader?.match(new RegExp(`${sessionCookie}=([^;]+)`))?.[1];
  if (!value) return false;
  const [expires, encodedSignature] = value.split(".");
  if (!expires || !encodedSignature || Number(expires) < Math.floor(Date.now() / 1e3)) return false;
  try {
    return await crypto.subtle.verify("HMAC", await getKey(), fromBase64Url(encodedSignature), new TextEncoder().encode(expires));
  } catch {
    return false;
  }
};
const verifyPassword = async (password) => {
  throw new Error("ADMIN_PASSWORD_HASH is not configured");
};

export { clearSessionCookie as a, createSessionCookie as c, hasValidSession as h, verifyPassword as v };
