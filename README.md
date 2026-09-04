## Thank You

Thank you for downloading this template! If you have any questions or run into issues, feel free to join my discord https://discord.gg/fh9qgtJ7h6.

## Requirements

Node.js 18 or newer - https://nodejs.org

## Getting Started

1. npm install
2. npm run dev
3. Open http://localhost:4321 in your browser.

## Configuration

Everything is in one file: `src/config.ts`
Configure as you please!

## Adding Images

Drop your files into the `/public` folder and reference them in `src/config.ts`:

/public/bg.png     →    backgroundImage: '/bg.png'
/public/logo.png   →    logo: '/logo.png'

## Build for Production

npm run build

Output will be in the `/dist` folder. Upload that to any static host (Netlify, Vercel, Cloudflare Pages, etc).