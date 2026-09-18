# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primer**:
  - **Talenta Dalang Muda**: Remaja dan pemuda (usia 12–25 tahun, termasuk talenta di bawah umur dengan perlindungan wali sah) di Kota Salatiga yang membutuhkan rekam jejak resmi, validasi reputasi tanpa eksploitasi komersial bintang/rating, dan akses langsung ke panggung pementasan. Persona inti: *Inaz Fairoza Rizqillah (WID-2026-0001, 17 th, gaya Surakarta)*.
  - **Mitra Penyelenggara & Pemerhati Budaya**: Dinas Kebudayaan & Pariwisata Kota Salatiga, instansi pemerintah, pengelola hotel, festival, dan komunitas yang mencari dalang muda terakreditasi sesuai kebutuhan acara (klasik, kontemporer, ruwatan, parade pemuda).
- **Sekunder**:
  - **Mentor & Maestro Dalang (PEPADI)**: Mengkurasi dan memverifikasi keahlian (sabet, sanggit, suluk, catur, keprak).
  - **Sanggar & Sekolah**: Menjembatani pembinaan dan inventarisasi aset budaya lokal.
  - **Publik & Penikmat Budaya**: Masyarakat penonton seni tradisi di 4 kecamatan Salatiga.

## Product Purpose

WAYANG ID hadir untuk menyelamatkan dan meregenerasi ekosistem seni pedalangan di Kota Salatiga dengan menutup kesenjangan antara talenta muda potensial dan panggung pementasan nyata. Melalui siklus produk terpadu:
`DISCOVER → IDENTIFY (WAYANG ID + Paspor QR) → DEVELOP → BUILD (Portofolio) → EXPOSE → OPPORTUNITY → EXPERIENCE → DISCOVER AGAIN`, platform ini memberikan kepastian jam terbang, rekognisi adiluhung, dan perlindungan masa depan bagi para dalang muda.

## Positioning

Satu-satunya ekosistem talenta kebudayaan berbasis **Paspor Digital Resmi (ISO/IEC 18004)** dan model **Pentahelix Kota Salatiga**. 
Berbeda dari direktori talenta atau platform freelancer komersial:
- Menolak sistem *star ratings* / ulasan subjektif — reputasi sepenuhnya dibangun melalui kurasi mentor ahli PEPADI dan rekam pentas terverifikasi.
- Menerapkan perlindungan privasi data pribadi anak (PII PRD §44) bagi talenta di bawah 18 tahun.
- Menggunakan mesin pencocokan berbobot (*weighted matching algorithm*) transparan (Skill 40%, Lokasi 20%, Jam Terbang 20%, Gaya 10%, Ketersediaan 10%) untuk mendistribusikan peluang pementasan secara adil.

## Operating Context

- **Wilayah Geografis**: Kota Salatiga, Jawa Tengah, meliputi 4 kecamatan (Sidomukti, Sidorejo, Tingkir, Argomulyo).
- **Ritual & Arena**: Panggung kelir malam hari, pendopo sanggar, festival budaya daerah, aula sekolah, dan siaran langsung digital.
- **Perangkat**: Digunakan secara *mobile-first* oleh talenta di lapangan (pindai QR via smartphone di panggung) dan *desktop-ready* oleh kurator/penyelenggara acara.

## Capabilities and Constraints

- **Kemampuan Utama**:
  - Penerbitan identitas unik format `WID-YYYY-NNNN` dan QR Code ISO/IEC 18004 yang dapat diakses publik tanpa login.
  - Peta sebaran talenta dan sanggar interaktif berbasis OpenStreetMap / Leaflet bertema *Dark Matter*.
  - Dasbor verifikasi kurasi, moderasi konten, dan taksonomi keahlian untuk admin/mentor.
  - Algoritma pencocokan cerdas peluang kolaborasi dengan breakdown skor terperinci.
  - Penyamaran kontak wali dan badge persetujuan orang tua untuk talenta di bawah umur.
- **Batasan Teknis**:
  - Berjalan di Next.js 16 (App Router), React 19, TypeScript, dan Tailwind CSS v4.
  - Kesiapan integrasi Appwrite Cloud (20 collections) dengan sistem fallback data lokal offline yang mandiri tanpa dependensi credentials eksternal.

## Brand Commitments

- **Bahasa Desain**: *Nusantara Contemporary* — estetika mewah adiluhung berlatar gelap (kelir `#0f131d` / `#0a0e18`) dengan aksen emas pusaka (`#ffd56d` / `#e5b842`), tembaga (`#ffb4a4`), dan mint kontemporer (`#65f2b5`).
- **Tipografi**: Playfair Display (judul dramatis pakeliran) dipadukan dengan Plus Jakarta Sans (antarmuka presisi dan label data).
- **Integritas Budaya**: Menyajikan istilah pakeliran baku (Sabet, Sanggit, Suluk, Catur, Karawitan, Tancep Kayon, dsb.) secara presisi.

## Evidence on Hand

- Desain antarmuka 10 layar Stitch (`stitch_full_webapp_ui_design/`) lengkap dengan token Material-3.
- Spesifikasi teknis dan persyaratan produk komprehensif (`.agents/PRD.md`, `.agents/technical_specification.md`, `.agents/database-schema.md`).
- Demonstrasi data lokal (`src/data/demo.ts`) dengan profil talenta dalang muda Salatiga (*Inaz Fairoza Rizqillah*).

## Product Principles

1. **Adiluhung Tanpa Komersialisasi Murahan**: Menjaga kehormatan seni wayang; verifikasi berbasis kompetensi mentor, bukan popularitas viral atau rating bintang.
2. **Peluang Nyata, Bukan Sekadar Sertifikat**: Setiap fitur diarahkan agar talenta dalang muda mendapatkan jadwal panggung dan regenerasi penonton.
3. **Amanah Perlindungan Generasi Muda**: Data pribadi dan kontak talenta di bawah umur terlindungi dengan persetujuan wali sah sebelum dipublikasikan.
4. **Keterbukaan Akses Publik**: Paspor dalang dan QR Code dapat dipindai seketika oleh siapa saja tanpa hambatan registrasi/login paksa.

## Accessibility & Inclusion

- Kontras warna tinggi memenuhi standar WCAG AA pada latar gelap (*dark kelir*).
- Ikonografi ganda (Google Material Symbols + label teks deskriptif) pada seluruh tombol aksi dan navigasi.
- Desain responsif ramah sentuhan (*touch-target minimal 44x44px*) untuk penggunaan perangkat genggam di sanggar dan lapangan pentas.
