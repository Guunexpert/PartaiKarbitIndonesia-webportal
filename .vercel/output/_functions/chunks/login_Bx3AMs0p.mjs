import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DQPLUECD.mjs';
import { r as renderComponent } from './entrypoint_BQ3Xg7I-.mjs';
import { $ as $$Layout, c as config } from './config_DrxXjdxB.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const hasError = Astro2.url.searchParams.has("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Admin Login - ${config.serverName}`, "data-astro-cid-rf56lckb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="login-shell"${addAttribute(`--accent: ${config.hueColor};`, "style")} data-astro-cid-rf56lckb> <section class="login-card" data-astro-cid-rf56lckb> ${renderTemplate`<img${addAttribute(config.logo, "src")}${addAttribute(config.serverName, "alt")} data-astro-cid-rf56lckb>`} <p class="eyebrow" data-astro-cid-rf56lckb>Private workspace</p> <h1 data-astro-cid-rf56lckb>Admin login</h1> <p class="intro" data-astro-cid-rf56lckb>Masuk untuk mengelola event dan announcement server.</p> ${hasError && renderTemplate`<p class="error-message" role="alert" data-astro-cid-rf56lckb>Username atau password salah.</p>`} <form method="post" action="/api/auth/login" data-astro-cid-rf56lckb> <label data-astro-cid-rf56lckb>Username<input name="username" autocomplete="username" required data-astro-cid-rf56lckb></label> <label data-astro-cid-rf56lckb>Password<input name="password" type="password" autocomplete="current-password" required data-astro-cid-rf56lckb></label> <button type="submit" data-astro-cid-rf56lckb>Sign in</button> </form> <a href="/" data-astro-cid-rf56lckb>Back to portal</a> </section> </main> ` })}`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/admin/login.astro", void 0);

const $$file = "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
