const config = {

  serverName: 'PKI-SMP',

  logo: '/logo.png',

  backgroundImage: '/bg.png',

  hueColor: '#3b82f6',

  serverInfo: {
    ip: 'pkii.mooo.com:25577',
    ip2: 'pkii.mooo.com:25641',
    version: 'Java Edition 1.21.x - Keatas',
    version2: 'Bedrock Edition Terbaru',
    rules: [
      'Hormati semua pemain dan staff.',
      'Dilarang menggunakan cheat, exploit, mod, atau area yang merugikan pemain lain.',
      'Dilarang kill player lain tanpa alasan yang jelas.',
      'Ikuti arahan staff demi kenyamanan bersama.'
    ],
    features: [
      'Terrain Generation custom dan unik',
      'Komunitas yang aktif dan ramah',
      'Event serta aktivitas server berkala',
      'Sistem Ekonomi',
      'Coming Soon'
    ],
    latestNews: {
      label: 'Event Terkini',
      title: 'Belum ada Event',
      date: '-- --',
      description: '-- --'
    },
    changelog: [{ version: '1.0.0', title: 'Portal launch', description: 'Portal server resmi PKI-SMP telah diluncurkan.' }],
    leaderboardApi: ''
  },

  links: [
    {
      label: 'Our Teams',
      href: '/team',
      color: '#6b3fa8',
    },
    {
      label: 'Donation',
      href: '/donate',
      color: '#2d8c52',
    },
    {
      label: 'FAQ',
      href: '/faq',
      color: '#c04444',
    },
    {
      label: 'Info Server',
      href: '/infoserver',
      color: '#2d6fa8',
    },
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
    },
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

export default config;
