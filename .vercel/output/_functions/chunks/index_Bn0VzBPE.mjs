import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DQPLUECD.mjs';
import { r as renderComponent } from './entrypoint_BQ3Xg7I-.mjs';
import { $ as $$Layout, c as config } from './config_DrxXjdxB.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": config.serverName, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen w-full" data-astro-cid-j7pv25f6> <!-- Background --> <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url('${config.backgroundImage}');`, "style")} data-astro-cid-j7pv25f6></div> <div class="fixed inset-0 -z-10 bg-black/93" data-astro-cid-j7pv25f6></div> <div class="fixed inset-0 -z-10"${addAttribute(`background: linear-gradient(to top, ${config.hueColor}40 0%, ${config.hueColor}1a 50%, transparent 100%);`, "style")} data-astro-cid-j7pv25f6></div> <!-- Mobile --> <div class="md:hidden flex flex-col gap-3 px-4 pt-6 pb-4" data-astro-cid-j7pv25f6> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} class="h-14 w-auto object-contain mx-auto mb-2" data-astro-cid-j7pv25f6>`} ${config.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="corner-card flex items-center justify-center rounded-[0.4rem] backdrop-blur-md transition-all duration-300"${addAttribute(`--card-color: ${link.color};`, "style")} data-astro-cid-j7pv25f6> <span class="text-white font-black text-3xl tracking-widest uppercase card-label" data-astro-cid-j7pv25f6>${link.label}</span> </a>`)} </div> <!-- Desktop --> <div class="fixed inset-4 z-0 gap-3 hidden md:grid md:grid-cols-2 md:grid-rows-2" data-astro-cid-j7pv25f6> ${config.links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="corner-card flex items-center justify-center rounded-[0.4rem] backdrop-blur-md transition-all duration-300"${addAttribute(`--card-color: ${link.color};`, "style")} data-astro-cid-j7pv25f6> <span class="text-white font-black text-5xl tracking-widest uppercase card-label" data-astro-cid-j7pv25f6>${link.label}</span> </a>`)} </div> <div class="hidden md:flex fixed inset-0 items-center justify-center pointer-events-none z-10" data-astro-cid-j7pv25f6> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} class="h-24 w-auto object-contain" data-astro-cid-j7pv25f6>`} </div> </main> ` })}`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/index.astro", void 0);

const $$file = "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
