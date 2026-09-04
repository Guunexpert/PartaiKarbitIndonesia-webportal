import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DQPLUECD.mjs';
import { r as renderComponent } from './entrypoint_BQ3Xg7I-.mjs';
import { $ as $$Layout, c as config } from './config_DrxXjdxB.mjs';

const $$Donate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Donation - ${config.serverName}`, "data-astro-cid-vfkcmhic": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen w-full flex items-center justify-center p-4" data-astro-cid-vfkcmhic> <!-- bg --> <div class="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url('${config.backgroundImage}');`, "style")} data-astro-cid-vfkcmhic></div> <div class="fixed inset-0 -z-10 bg-black/93" data-astro-cid-vfkcmhic></div> <div class="fixed inset-0 -z-10"${addAttribute(`background: linear-gradient(to top, ${config.hueColor}40 0%, ${config.hueColor}1a 50%, transparent 100%);`, "style")} data-astro-cid-vfkcmhic></div> <div class="relative z-10 max-w-xl w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[0.4rem] p-8 text-center space-y-6 shadow-2xl" data-astro-cid-vfkcmhic> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} class="h-24 w-auto object-contain mx-auto mb-2" data-astro-cid-vfkcmhic>`} <div class="space-y-2" data-astro-cid-vfkcmhic> <h1 class="text-white font-black text-3xl sm:text-4xl tracking-widest uppercase"${addAttribute(`color: ${config.hueColor};`, "style")} data-astro-cid-vfkcmhic>
Donation
</h1> <p class="text-white text-sm sm:text-base font-medium" data-astro-cid-vfkcmhic>
Dukung kelangsungan dan operasional server <span class="text-white font-bold" data-astro-cid-vfkcmhic>${config.serverName}</span> agar tetap aktif dengan berdonasi melalui tautan di bawah ini (Sukarela dan tidak ada Paksaan).
</p> </div> <div data-astro-cid-vfkcmhic> <a href="https://saweria.co/RyoichiNakajima" target="_blank" rel="noopener noreferrer" class="corner-card inline-flex items-center justify-center w-full py-4 px-6 rounded-[0.4rem] backdrop-blur-md transition-all duration-300 text-white font-black text-xl tracking-widest uppercase" style="--card-color: #2d8c52;" data-astro-cid-vfkcmhic>
Donasi via Saweria
</a> </div> <div class="pt-2" data-astro-cid-vfkcmhic> <a href="/" class="home-link text-xs text-white transition-colors tracking-wider uppercase font-bold"${addAttribute(`--hue-color: ${config.hueColor};`, "style")} data-astro-cid-vfkcmhic>
&larr; Kembali ke Beranda
</a> </div> </div> </main> ` })}`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/donate.astro", void 0);

const $$file = "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/donate.astro";
const $$url = "/donate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Donate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
