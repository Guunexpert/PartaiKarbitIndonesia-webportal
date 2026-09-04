const config = {

  serverName: 'PKI-SMP',

  logo: '/logo.png',

  backgroundImage: '/bg.png',

  hueColor: '#3b82f6',

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
      label: 'Leaderboard',
      href: '/leaderboard',
      color: '#2d6fa8',
    },
  ],
  
  teamSections: [
    {
      category: "Community",
      description: "Tanpa Kalian Server ini mungkin tidak ada",
      members: [
        {
          name: "All",
          role: "Community",
          avatar: "/images/team/placeholder.png",
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
          avatar: "/images/team/placeholder.png",
          socialUrl: "#"
        },
        {
          name: "Ryo",
          role: "Developer nya gais",
          avatar: "/images/team/placeholder.png",
          socialUrl: "#"
        }
      ]
    },
    {
      category: "Moderator",
      description: "Mata mata dalam Server",
      members: [
        {
          name: "Rain",
          role: "Moderator",
          avatar: "/images/team/placeholder.png",
          socialUrl: "#"
        },
        {
          name: "Reserved Slot",
          role: "Open for Application",
          avatar: "/images/team/placeholder.png",
          socialUrl: "#"
        }
      ]
    },
    {
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
    }
  ]
};

export default config;
