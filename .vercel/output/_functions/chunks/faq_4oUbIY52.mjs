import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DQPLUECD.mjs';
import { r as renderComponent } from './entrypoint_BQ3Xg7I-.mjs';
import { $ as $$Layout, c as config } from './config_DrxXjdxB.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `FAQ - ${config.serverName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen w-full"> <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url('${config.backgroundImage}');`, "style")}></div> <div class="fixed inset-0 -z-10 bg-black/93"></div> <div class="fixed inset-0 -z-10"${addAttribute(`background: linear-gradient(to top, ${config.hueColor}40 0%, ${config.hueColor}1a 50%, transparent 100%);`, "style")}></div> <div class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center"> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} class="mb-6 h-24 w-auto object-contain md:h-32">`} <p class="text-2xl font-black uppercase tracking-[0.2em] text-white md:text-4xl">Coming Soon</p> </div> </main> ` })}`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/faq.astro", void 0);

const $$file = "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Faq,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
