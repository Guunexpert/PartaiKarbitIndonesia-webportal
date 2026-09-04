import { c as createComponent } from './astro-component_B8yuwLKA.mjs';
import 'piccolore';
import { a2 as addAttribute, b8 as renderHead, b9 as renderSlot, L as renderTemplate } from './sequence_DQPLUECD.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Minecraft Portal" } = Astro2.props;
  return renderTemplate`<html lang="en" class="w-full min-h-screen"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">${renderHead()}</head> <body class="w-full min-h-screen m-0 p-0 font-['Rubik',sans-serif] bg-black"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "H:/GAME/Project/PartaiKarbitIndonesia-webportal/src/layouts/Layout.astro", void 0);

const config = {
  serverName: "PKI-SMP",
  logo: "/logo.png",
  backgroundImage: "/bg.png",
  hueColor: "#3b82f6",
  serverInfo: {
    ip: "pkii.mooo.com:25577",
    ip2: "pkii.mooo.com:25641",
    version: "Java Edition 1.21.x - Keatas",
    version2: "Bedrock Edition Terbaru",
    rules: [
      "Hormati semua pemain dan staff.",
      "Dilarang menggunakan cheat, exploit, mod, atau area yang merugikan pemain lain.",
      "Dilarang kill player lain tanpa alasan yang jelas.",
      "Ikuti arahan staff demi kenyamanan bersama."
    ],
    features: [
      "Terrain Generation custom dan unik",
      "Komunitas yang aktif dan ramah",
      "Event serta aktivitas server berkala",
      "Sistem Ekonomi",
      "Coming Soon"
    ],
    latestNews: {
      label: "Event Terkini",
      title: "Belum ada Event",
      date: "-- --",
      description: "-- --"
    },
    leaderboardApi: ""
  },
  links: [
    {
      label: "Our Teams",
      href: "/team",
      color: "#6b3fa8"
    },
    {
      label: "Donation",
      href: "/donate",
      color: "#2d8c52"
    },
    {
      label: "FAQ",
      href: "/faq",
      color: "#c04444"
    },
    {
      label: "Info Server",
      href: "/infoserver",
      color: "#2d6fa8"
    }
  ],
  teamSections: [
    {
      category: "Community",
      description: "Tanpa Kalian Server ini mungkin tidak ada",
      fullWidth: true,
      members: [
        {
          name: "All",
          role: "Persahabatan",
          avatar: "/sahabat.jpg",
          socialUrl: "#"
        }
      ]
    },
    {
      category: "Teknisi",
      description: "Para Teknisi ygy",
      members: [
        {
          name: "Arul",
          role: "Admin loh ya",
          avatar: "/arul.jpg",
          socialUrl: "#"
        },
        {
          name: "Ryo",
          role: "Developer nya gais",
          avatar: "/ryo.jpg",
          socialUrl: "#"
        },
        {
          name: "GunahD",
          role: "Dev Magang",
          avatar: "/gunah.jpg",
          socialUrl: "https://github.com/guunexpert"
        }
      ]
    },
    {
      category: "Moderator",
      description: "Penjaga ketengangan server",
      members: [
        {
          name: "Rain",
          role: "Moderator",
          avatar: "/rain.gif",
          socialUrl: "#"
        }
      ]
    }
    /* {
      category: "Support",
      description: "Gw sendiri yang ngurus web, domain, bantu-bantu secara sukarela",
      members: [
        {
          name: "GunahD (GuunExpert)",
          role: "Support?",
          avatar: "/gunah.jpg",
          socialUrl: "#"
        }
      ]
    } */
  ]
};

export { $$Layout as $, config as c };
