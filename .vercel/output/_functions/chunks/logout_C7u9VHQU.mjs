import { a as clearSessionCookie } from './auth_CXYZZ7Sg.mjs';

const POST = ({ redirect }) => new Response(null, { status: 303, headers: { Location: "/admin/login", "Set-Cookie": clearSessionCookie() } });

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
