import type { APIRoute } from 'astro';
import { getPortalState, savePortalState } from '../../../lib/portal-state';

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(await getPortalState()), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unable to load portal state' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    await savePortalState(await request.json());
    return new Response(JSON.stringify(await getPortalState()), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unable to save portal state' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }
};