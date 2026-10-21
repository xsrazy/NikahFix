# NikahFix

**Live: https://nikahfix.xsrazy.web.id**

NikahFix adalah undangan pernikahan digital interaktif. Tamu membuka satu tautan dan mendapat undangan lengkap di browser: sampul undangan, profil mempelai, jadwal acara, galeri, dan buku tamu online tempat tamu bisa menulis ucapan yang langsung tampil di halaman.

## Isi Web

- **Sampul undangan:** halaman pembuka undangan sebelum masuk ke isi.
- **Profil mempelai:** perkenalan kedua mempelai.
- **Info acara:** jadwal dan lokasi rangkaian acara pernikahan.
- **Galeri:** foto-foto pasangan.
- **Buku tamu online:** formulir nama dan ucapan. Ucapan yang dikirim tersimpan dan tampil sebagai daftar komentar di undangan (saat ini sudah ada 11 ucapan tersimpan). Nama pada formulir divalidasi hanya boleh huruf dan spasi.

Halaman-halaman undangan tersusun di `src/pages/`, dengan komponen dan aset gambar di `src/assets/`.

## Frontend

- React yang dibangun dengan Vite (SPA), styling memakai Tailwind CSS.
- Entry point `src/main.jsx` merender `src/App.jsx`; gaya tambahan ada di `App.css` dan `index.css`.
- Frontend ini yang di-deploy di Vercel pada project `nikahfix`.

## Backend

Backend berada di repo terpisah bernama **nikahfix-be**:

- Server Express (Node.js) yang melayani pengiriman dan pembacaan ucapan buku tamu.
- Data ucapan tersimpan di **Supabase** (PostgreSQL), tabel `wishs`.
- Backend terkunci secara ketat: hanya menerima request yang Origin atau Referer-nya berasal dari nikahfix.xsrazy.web.id, nikahfix.web.id, deployment Vercel NikahFix, atau localhost. Request dari situs lain ditolak dengan 403, jadi endpoint buku tamu tidak bisa dipakai web lain.
- Alur: tamu menulis ucapan di frontend, frontend mengirim ke API backend, backend menyimpan ke Supabase, lalu ucapan tampil di daftar buku tamu untuk semua pengunjung.

## Struktur Project (repo ini)

```
index.html      Entry HTML Vite
src/            main.jsx, App.jsx, pages/, assets/
public/         Aset statis
vercel.json     Konfigurasi deployment Vercel
```
