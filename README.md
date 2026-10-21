# NikahFix

**Live: https://nikahfix.xsrazy.web.id**

NikahFix adalah undangan pernikahan digital untuk Usra & Azizi Asadel, dikemas dengan gaya ala Netflix. Tamu memilih namanya sendiri di layar pembuka untuk masuk ke undangan.

## Isi Web

- **Layar pembuka "Who's Watching":** tamu menekan namanya (CLICK YOUR NAME) untuk membuka undangan yang ditujukan untuknya, meniru layar pilih profil Netflix.
- **Isi undangan:** detail acara pernikahan untuk tamu yang membuka.
- **Ucapan dan doa (wishes):** tamu bisa menulis ucapan; daftar ucapan tampil di halaman dan tersimpan di backend. Saat terakhir dicek ada 11 ucapan tersimpan.

## Frontend

- Vite + React single page application (repo ini hanya berisi frontend).
- Tema visual mengikuti gaya antarmuka Netflix: gelap, merah, dan layar pilih profil.

## Backend

- Backend berada di repo terpisah: `nikahfix-be` (Express + Supabase).
- Backend menyimpan ucapan di tabel `wishs` pada database Supabase project `nikahfix`, dan menyediakan endpoint untuk mengirim serta membaca ucapan.
- Akses backend dikunci berdasarkan Origin/Referer: hanya situs nikahfix.xsrazy.web.id, nikahfix.web.id, deployment Vercel project ini, dan localhost yang dilayani; permintaan dari origin lain ditolak 403.
