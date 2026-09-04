import { a6 as defineMiddleware, af as sequence } from './chunks/sequence_DQPLUECD.mjs';
import 'piccolore';
import 'clsx';
import { h as hasValidSession } from './chunks/auth_CXYZZ7Sg.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const protectedRoute = pathname === "/admin" || pathname.startsWith("/admin/") && pathname !== "/admin/login" || pathname.startsWith("/api/admin/");
  if (protectedRoute && !await hasValidSession(context.request.headers.get("cookie"))) {
    if (pathname.startsWith("/api/")) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
    return context.redirect("/admin/login");
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
