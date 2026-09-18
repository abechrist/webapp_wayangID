# 🎭 WAYANG ID — Ekosistem Talenta Dalang Muda Kota Salatiga

> **Panggung Digital Kurasi, Paspor Seni, dan Akselerasi Regenerasi Seniman Pakeliran Muda Kota Salatiga**  
> Menghubungkan adi luhung tradisi wayang kulit Nusantara dengan ekosistem pertunjukan kontemporer global melalui model Pentahelix.

[![Live Demo](https://img.shields.io/badge/Live_Demo-wayangid.appwrite.network-ffd56d?logo=appwrite)](https://wayangid.appwrite.network)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Tentang WAYANG ID

**WAYANG ID** adalah purwarupa ekosistem kebudayaan terintegrasi yang dirancang untuk menyelamatkan dan meregenerasi seni pedalangan di Kota Salatiga, Jawa Tengah. Platform ini menutup jurang antara talenta dalang muda berbakat dengan panggung pertunjukan nyata melalui siklus produk terpadu:

$$\text{DISCOVER} \longrightarrow \text{IDENTIFY} \longrightarrow \text{DEVELOP} \longrightarrow \text{BUILD} \longrightarrow \text{EXPOSE} \longrightarrow \text{OPPORTUNITY} \longrightarrow \text{EXPERIENCE}$$

### 🛡️ Nilai Utama & Keunikan:
1. **Paspor Digital Talenta (ISO/IEC 18004)**: Penerbitan kode unik `WID-YYYY-NNNN` dan QR Code resmi yang dapat diakses publik tanpa hambatan login/registrasi paksa.
2. **Reputasi Bebas Eksploitasi**: Menolak sistem *star rating* atau ulasan komersial bebas — reputasi murni dibangun melalui kurasi resmi maestro PEPADI dan riwayat pagelaran terverifikasi.
3. **Perlindungan Privasi Anak (PII)**: Menerapkan penyamaran kontak wali dan validasi izin orang tua untuk dalang muda di bawah 18 tahun.
4. **Mesin Rekomendasi Terbobot**: Algoritma pencocokan cerdas transparan (**Keahlian 40%**, **Domisili 20%**, **Jam Terbang 20%**, **Gaya 10%**, **Ketersediaan 10%**) untuk distribusi peluang pementasan yang adil.
5. **Jejaring Pentahelix**: Sinergi antara Komda PEPADI, Disbudpar Kota Salatiga, sanggar seni lokal, akademisi/sekolah, dan komunitas kreatif.

---

## 🎨 Desain Sistem: *Nusantara Contemporary*

Antarmuka dibangun dengan estetika adiluhung berlatar gelap yang merefleksikan suasana sakral kelir pakeliran malam hari:
- **Warna Dasar**: Kelir Gelap (`#0f131d` & `#0a0e18`)
- **Aksen Utama**: Emas Pusaka (`#ffd56d` & `#e5b842`)
- **Aksen Penunjang**: Mint Kontemporer (`#65f2b5`) & Tembaga Hangat (`#ffb4a4`)
- **Tipografi**: **Playfair Display** (Judul dramatis lakon) dipadukan dengan **Plus Jakarta Sans** (Antarmuka & metadata presisi)
- **Elevasi**: Efek kaca *glassmorphism* (`backdrop-filter: blur(16px)`) dengan garis batas halus emas.

---

## 🚀 Fitur Utama Aplikasi

- **Beranda & Registri Publik (`/`)**: Eksplorasi ekosistem, katalog dalang muda terverifikasi, dan metrik dampak kebudayaan.
- **Peta Sebaran Interaktif (`/peta`)**: Pemetaan geografis Leaflet CartoDB Dark Matter untuk talenta dan sanggar di 4 kecamatan Kota Salatiga dengan filter multi-parameter.
- **Paspor Digital Dalang (`/talent/[wayangId]`)**: Kartu kredensial lengkap, QR Code SVG standar ISO/IEC, lencana akreditasi PEPADI Grade A, tab portofolio interaktif, dan tombol salin tautan/cetak instan.
- **Bursa Peluang Pementasan (`/peluang`)**: Kurasi tawaran pementasan dari dinas, perhotelan, festival, dan sekolah dengan kalkulasi skor kecocokan real-time.
- **Manajemen Portofolio Mandiri (`/portfolio`)**: Formulir rekam pagelaran baru, unggah bukti karya audio-visual, dan alur validasi kurasi maestro.
- **Etalase Pagelaran Digital (`/showcase`)**: Pemutar video 4K rekaman pakeliran dengan fitur lompat babak adegan dan soundboard suluk lossless.
- **Akademi Pedalangan Muda (`/akademi`)**: Peta jalan kurikulum penguasaan Tri-Matra pedalangan (Sabet, Sanggit, Suluk) dan agenda mentoring maestro.
- **Direktori Sanggar & Jejaring (`/sanggar`)**: Profil sanggar binaan, laboratorium budaya sekolah, dan kontak kemitraan.
- **Pusat Kurasi & Moderasi Admin (`/admin`)**: Panel kendali verifikasi talenta, audit trail aktivitas, taksonomi pakeliran, dan analitik ekosistem.

---

## 💻 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) dengan Turbopack
- **Library UI**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ikonografi**: [Google Material Symbols Outlined](https://fonts.google.com/icons)
- **Peta Interaktif**: [Leaflet](https://leafletjs.com/) & OpenStreetMap (CartoDB Dark Matter)
- **QR Engine**: `qrcode.react` (ISO/IEC 18004 Compliant)
- **Backend Architecture**: Kesiapan [Appwrite Cloud SDK](https://appwrite.io/) (20 koleksi skema) dengan *hybrid offline fallback service*.

---

## 🛠️ Panduan Instalasi & Menjalankan Lokal

### 1. Klon Repositori
```bash
git clone https://github.com/abechrist/webapp_wayangID.git
cd webapp_wayangID
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Lingkungan (Opsional)
Salin berkas template environment:
```bash
cp .env.example .env.local
```

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:3000`.

### 5. Pengujian & Verifikasi Kualitas
```bash
# Verifikasi ESLint
npm run lint

# Verifikasi Tipe TypeScript
npx tsc --noEmit

# Kompilasi Build Produksi
npm run build

# Menjalankan Build Produksi
npm run start
```

---

## 📁 Struktur Direktori

```
webapp_wayangID/
├── .agents/                 # Dokumen spesifikasi PRD, schema database, & UI/UX
├── public/                  # Aset statis, Web App Manifest (PWA), & ikon
│   ├── manifest.json
│   └── stitch-images/
├── src/
│   ├── app/                 # Halaman App Router Next.js
│   │   ├── admin/           # Dasbor verifikasi & moderasi
│   │   ├── akademi/         # Akademi pedalangan & materi Tri-Matra
│   │   ├── mentor/          # Dasbor pengujian maestro PEPADI
│   │   ├── mitra/           # Dasbor kemitraan rekrutmen pentas
│   │   ├── peluang/         # Bursa peluang & algoritma matching
│   │   ├── peta/            # Peta interaktif Leaflet Salatiga
│   │   ├── portfolio/       # Pusat portofolio karya talenta
│   │   ├── sanggar/         # Direktori sanggar & ekosistem
│   │   ├── showcase/        # Etalase video 4K & suluk soundboard
│   │   ├── talent/[id]/     # Paspor digital publik talenta dalang
│   │   ├── globals.css      # CSS global, tokens, & ligature ikon
│   │   ├── layout.tsx       # Root layout, Google Fonts, & metadata SEO
│   │   └── page.tsx         # Beranda ekosistem WAYANG ID
│   ├── components/          # Komponen UI modular
│   │   ├── CopyLinkButton.tsx
│   │   ├── DemoBanner.tsx
│   │   ├── InteractiveMap.tsx
│   │   ├── PrintButton.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── SiteHeader.tsx
│   │   └── TalentPortfolioTabs.tsx
│   ├── data/                # Mock data talenta & aset kurasi
│   │   ├── demo.ts
│   │   └── stitchImages.ts
│   └── lib/                 # Utilitas bisnis & abstraksi cloud
│       ├── appwrite.ts      # SDK Appwrite Cloud & data service
│       ├── auth.ts          # Sistem autentikasi & matriks hak akses
│       ├── matching.ts      # Algoritma pencocokan pentas terbobot
│       └── pii.ts           # Proteksi privasi talenta di bawah umur
├── stitch_full_webapp_ui_design/ # Arsip referensi visual UI Stitch
└── package.json
```

---

## 📄 Lisensi & Hak Cipta

Dikelola dan dikurasi bersama Komda PEPADI Kota Salatiga & Dewan Kesenian Salatiga.  
Didistribusikan di bawah lisensi [MIT](LICENSE).
