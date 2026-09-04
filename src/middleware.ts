import { defineMiddleware } from 'astro:middleware';
import { hasValidSession } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const protectedRoute = pathname === '/admin' || pathname.startsWith('/admin/') && pathname !== '/admin/login' || pathname.startsWith('/api/admin/');
  if (protectedRoute && !(await hasValidSession(context.request.headers.get('cookie')))) {
    if (pathname.startsWith('/api/')) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    return context.redirect('/admin/login');
  }
  return next();
});