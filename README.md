## Partai Karbit Indonesia SMP

Web portal buat semua kebutuhan untuk server minecraft

Mulai dari
- Team
- FAQ ?
- Donation
- info server

masih dalam pengembangan so ya kalo pengen ikut kontribusi dipersilahkan

## Requirements

Node.js 18 or newer - https://nodejs.org

## Cara Mulainya

1. npm install
2. npm run dev
3. Open http://localhost:4321 di browser.

## Configuration

semua konfigurasi ada di file: `src/config.ts`
Kustomisasi sesuka mu!

## Adding Images

Drop gambar di folder `/public` dan referensi kan di file `src/config.ts`:

/public/bg.png     →    backgroundImage: '/bg.png'

/public/logo.png   →    logo: '/logo.png'

## Build for Production

npm run build

Output nya di folder `/dist` . Nah upload ke manapun penyedia hosting (Netlify, Vercel, Cloudflare Pages, dll)
