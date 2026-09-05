import { defineMiddleware } from 'astro:middleware';
import { hasValidSession } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const protectedRoute = pathname === '/admin' || pathname.startsWith('/admin/') && pathname !== '/admin/login' || pathname.startsWith('/api/admin/');
  if (protectedRoute && !(await hasValidSession(context.request.headers.get('cookie')))) {
    if (pathname.startsWith('/api/')) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    return context.redirect('/admin/login');
  }
  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Content-Security-Policy', "default-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' https://discord.com; img-src 'self' https://cdn.discordapp.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'");
  return response;
});