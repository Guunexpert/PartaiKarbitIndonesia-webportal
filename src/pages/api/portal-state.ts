import type { APIRoute } from 'astro';
import config from '../../config';
import { getPortalState } from '../../lib/portal-state';

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(await getPortalState()), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  } catch {
    return new Response(JSON.stringify({ events: [{ id: 'default', title: config.serverInfo.latestNews.title, date: '2026-09-04', time: '20:00', description: config.serverInfo.latestNews.description }], announcement: '', online: true, changelog: config.serverInfo.changelog, updated: new Date().toISOString() }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  }
};