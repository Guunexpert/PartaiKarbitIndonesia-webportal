import type { APIRoute } from 'astro';
import { clearSessionCookie } from '../../../lib/auth';

export const POST: APIRoute = ({ redirect }) => new Response(null, { status: 303, headers: { Location: '/admin/login', 'Set-Cookie': clearSessionCookie() } });