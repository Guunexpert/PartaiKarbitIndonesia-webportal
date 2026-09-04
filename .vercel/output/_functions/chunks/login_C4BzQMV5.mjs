import { v as verifyPassword, c as createSessionCookie } from './auth_CXYZZ7Sg.mjs';

const POST = async ({ request, redirect }) => {
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) return new Response("Bad origin", { status: 403 });
  const form = await request.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");
  const validUsername = Boolean(undefined                              ) && username === undefined                              ;
  let validPassword = false;
  try {
    validPassword = password.length > 0 && await verifyPassword(password);
  } catch {
    return new Response("Authentication is not configured", { status: 503 });
  }
  if (!validUsername || !validPassword) return redirect("/admin/login?error=1", 303);
  return new Response(null, { status: 303, headers: { Location: "/admin", "Set-Cookie": await createSessionCookie() } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
