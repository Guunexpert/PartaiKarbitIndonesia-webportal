## Partai Karbit Indonesia SMP

Web portal buat semua kebutuhan untuk server minecraft

Mulai dari
- Team
- FAQ ?
- Donation
- info server

masih dalam pengembangan so ya kalo pengen ikut kontribusi dipersilahkan

## Requirements

Node.js 22.12 or newer - https://nodejs.org

## Cara Mulainya

1. npm install
2. npm run dev
3. Open http://localhost:4321 di browser.

## Admin Panel

Buka `http://localhost:4321/admin` untuk mengatur event, pengumuman, status server, changelog, dan memoderasi laporan/saran. Data panel disimpan di Supabase dan akses admin dilindungi session.

## Feedback Discord

Halaman `/laporsaran` memakai Discord OAuth. Buat aplikasi di Discord Developer Portal, tambahkan redirect URL `http://localhost:4321/api/auth/discord/callback`, lalu isi environment variables berikut:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
SESSION_SECRET=...
ADMIN_USERNAME=...
ADMIN_PASSWORD_HASH=...
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
DISCORD_REDIRECT_URI=http://localhost:4321/api/auth/discord/callback
```

Jalankan isi `supabase/schema.sql` pada project Supabase sebelum memakai feed. Pengguna harus login Discord untuk membuat posting atau memberi reaction. Posting langsung terlihat; admin dapat mengubah status implementasi dan menghapus posting duplikat/spam.

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
