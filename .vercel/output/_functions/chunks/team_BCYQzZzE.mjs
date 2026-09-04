import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DQPLUECD.mjs';
import { r as renderComponent } from './entrypoint_BQ3Xg7I-.mjs';
import { $ as $$Layout, c as config } from './config_DrxXjdxB.mjs';

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Our Teams - ${config.serverName}`, "data-astro-cid-6sqsh2pf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen w-full flex flex-col items-center p-6 md:p-12 overflow-y-auto" data-astro-cid-6sqsh2pf> <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url('${config.backgroundImage}');`, "style")} data-astro-cid-6sqsh2pf></div> <div class="fixed inset-0 -z-10 bg-black/93" data-astro-cid-6sqsh2pf></div> <div class="fixed inset-0 -z-10"${addAttribute(`background: linear-gradient(to top, ${config.hueColor}40 0%, ${config.hueColor}1a 50%, transparent 100%);`, "style")} data-astro-cid-6sqsh2pf></div> <div class="w-full max-w-4xl flex justify-between items-center z-10 mb-12" data-astro-cid-6sqsh2pf> <a href="/" class="corner-card px-4 py-2 rounded-[0.4rem] backdrop-blur-md text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-white/30" data-astro-cid-6sqsh2pf>
← Kembali
</a> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} class="h-24 w-auto object-contain" data-astro-cid-6sqsh2pf>`} </div> <div class="w-full max-w-4xl z-10 text-center mb-12" data-astro-cid-6sqsh2pf> <h1 class="text-white font-black text-4xl md:text-5xl tracking-widest uppercase mb-3 drop-shadow-md" data-astro-cid-6sqsh2pf>
Our Teams
</h1> <p class="text-white text-sm md:text-base tracking-wide" data-astro-cid-6sqsh2pf>
Orang-orang hebat di balik berjalannya ${config.serverName}.
</p> </div> <div class="w-full max-w-4xl z-10 flex flex-col gap-12 pb-16" data-astro-cid-6sqsh2pf> ${config.teamSections.map((section) => renderTemplate`<div class="flex flex-col gap-4" data-astro-cid-6sqsh2pf> <div class="border-b border-white/10 pb-2" data-astro-cid-6sqsh2pf> <h2 class="text-white font-black text-2xl md:text-3xl tracking-wider uppercase"${addAttribute(`color: ${config.hueColor};`, "style")} data-astro-cid-6sqsh2pf> ${section.category} </h2> <p class="text-white font-medium text-xs md:text-sm tracking-wide mt-1" data-astro-cid-6sqsh2pf> ${section.description} </p> </div> <div${addAttribute([
    "grid grid-cols-1 gap-4",
    section.fullWidth ? "w-full" : "sm:grid-cols-2 md:grid-cols-3"
  ], "class:list")} data-astro-cid-6sqsh2pf> ${section.members.map((member) => renderTemplate`<div${addAttribute([
    "corner-card p-5 rounded-[0.4rem] backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 border border-white/10 hover:border-white/30 bg-white/[0.02]",
    section.fullWidth && "w-full"
  ], "class:list")} data-astro-cid-6sqsh2pf> <div${addAttribute([
    "w-20 h-20 bg-white/10 mb-3 overflow-hidden border border-white/20 flex items-center justify-center",
    section.fullWidth ? "rounded-[0.4rem]" : "rounded-full"
  ], "class:list")} data-astro-cid-6sqsh2pf> <img${addAttribute(member.avatar, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover" onerror="this.style.display='none'" data-astro-cid-6sqsh2pf> <!-- fallback jika gambar belum ada --> <span class="text-white/40 text-xs absolute" data-astro-cid-6sqsh2pf>Foto</span> </div> <h3 class="text-white font-bold text-base tracking-wider uppercase" data-astro-cid-6sqsh2pf>${member.name}</h3> <p class="text-white/60 text-xs tracking-widest uppercase mt-1" data-astro-cid-6sqsh2pf>${member.role}</p> </div>`)} </div> </div>`)} </div> <div class="w-full max-w-4xl z-10 text-center text-white/30 text-xs tracking-widest uppercase mt-auto pt-6 border-t border-white/5" data-astro-cid-6sqsh2pf> ${config.serverName} &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} </div> </main> ` })}`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/team.astro", void 0);

const $$file = "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
