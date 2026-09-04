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

## Admin Panel

Buka `http://localhost:4321/admin` untuk mengatur event, pengumuman, dan status server tanpa mengubah kode. Data panel disimpan di `localStorage` browser dan langsung dibaca oleh halaman Info Server.

Catatan: mode ini hanya berlaku pada browser/perangkat yang sama. Untuk sinkronisasi realtime antar perangkat atau akses admin yang aman, hubungkan panel ke database/API dan tambahkan autentikasi.

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
