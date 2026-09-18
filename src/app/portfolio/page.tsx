"use client";
import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { portfolioItems } from "@/data/demo";
import { stitchImages } from "@/data/stitchImages";

const steps = ["Data Pentas", "Dokumentasi", "Mentor", "Showcase"];

export default function PortfolioPage() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const [judul, setJudul] = useState("Lakon Bima Suci: Tirta Perwitasari");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        <section className="w-full bg-surface-container-low/70 backdrop-blur-md relative overflow-hidden border-b border-outline-variant/20">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-gutter py-6 lg:py-8 relative">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Buku Besar Portofolio Terverifikasi
              </span>
              <div className="flex items-center gap-2 bg-surface-container-highest/80 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                <span className="text-xs text-on-surface">QR Talent Passport:</span>
                <span className="text-xs text-primary font-bold tracking-wider">WID-2026-0001</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8 flex flex-col gap-2">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>
                  Pusat Manajemen Portofolio &amp; Rekam Pentas Talenta
                </h1>
                <p className="text-sm lg:text-base text-on-surface-variant max-w-3xl">
                  Setiap pementasan dan karya yang Anda daftarkan diverifikasi oleh mentor maestro untuk memperkuat rekam jejak profesional di QR Talent Passport.
                </p>
              </div>
              <div className="lg:col-span-4 bg-surface-container/90 rounded-xl p-4 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <Image src={stitchImages.inazStudio} alt="Inaz" width={56} height={56} unoptimized className="w-14 h-14 rounded-lg object-cover" />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[13px]">shield</span>
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-tertiary">Dalang Remaja Putri · Grade A+</span>
                    <span className="text-sm font-semibold text-on-surface truncate">Nyi Inaz Fairoza Rizqillah</span>
                    <span className="text-xs text-outline truncate">MAN Salatiga · Sanggar Bima Suci</span>
                  </div>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-surface-container-lowest shrink-0">
                  <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center text-primary text-[10px] font-bold">85%</div>
                  <span className="text-[10px] text-outline mt-1">Integritas</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-surface-container-lowest/60 rounded-xl p-4">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-outline font-semibold">Total Pagelaran</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-primary">12</span>
                  <span className="text-xs text-tertiary">+3 Kurasi 2025</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-outline font-semibold">Verifikasi Maestro</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-on-surface">11</span>
                  <span className="text-xs text-outline">/ 1 Tertunda</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-outline font-semibold">Apresiasi Publik (Views)</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-on-surface">38.4k</span>
                  <span className="text-xs text-tertiary">▲ 14.8%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-outline font-semibold">Indeks Sabetan &amp; Catur</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-primary-fixed-dim">96.8</span>
                  <span className="text-xs text-outline">Skala 100</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto w-full px-gutter py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-surface-container/85 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl border border-outline-variant/20">
                <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 lg:p-5 bg-surface-container-high/40 border-b border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">theater_comedy</span>
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold text-on-surface">Formulir Rekam Pentas Baru</h2>
                      <span className="text-xs text-outline">Protokol Kurasi &amp; Validasi Maestro PEPADI</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-outline text-xs">
                    <span className="w-2 h-2 rounded-full bg-tertiary" /> Auto-save aktif: 14:32 WIB
                  </span>
                </div>

                <div className="px-4 lg:px-6 pt-5">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {steps.map((s, i) => (
                      <button key={s} onClick={() => setActive(i)} className="flex flex-col items-center gap-1 group">
                        <span className={i === active ? "w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-bold shadow-[0_0_14px_rgba(229,184,66,0.4)]" : i < active ? "w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center text-sm font-bold" : "w-9 h-9 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-sm font-bold group-hover:text-on-surface"}>
                          {i < active ? <span className="material-symbols-outlined text-[18px]">check</span> : i + 1}
                        </span>
                        <span className={i === active ? "text-xs font-bold text-primary" : "text-xs text-on-surface-variant group-hover:text-on-surface"}>{s}</span>
                        <span className={i === active ? "w-full h-1 bg-primary rounded-full mt-1" : i < active ? "w-full h-1 bg-tertiary rounded-full mt-1" : "w-full h-1 bg-surface-container-highest rounded-full mt-1"} />
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); showToast(`Karya "${judul}" diajukan ke Ki Dalang Sutrisno!`); }} className="flex flex-col gap-5 p-4 lg:p-6">
                  <div className={active !== 0 ? "hidden" : "flex flex-col gap-4"}>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] tracking-widest uppercase font-bold text-primary">Langkah 1: Identitas &amp; Konteks Pagelaran</span>
                      <span className="text-xs text-outline">Wajib diisi lengkap</span>
                    </div>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium text-on-surface flex items-center justify-between"><span>Judul Pagelaran / Lakon *</span><span className="text-xs font-normal text-outline">Contoh: Bima Suci: Tirta Perwitasari</span></span>
                      <div className="relative">
                        <input value={judul} onChange={(e) => setJudul(e.target.value)} className="w-full bg-surface-container-lowest rounded-lg px-4 py-3 pr-10 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-transparent" />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-primary text-[20px]">auto_stories</span>
                      </div>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface">Kategori Pagelaran *</span>
                        <select className="w-full bg-surface-container-lowest rounded-lg px-3 py-3 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                          <option>Pentas Mandiri (Komersial/Nanggap)</option>
                          <option selected>Festival Kebudayaan &amp; Ruwat Desa</option>
                          <option>Pentas Sekolah &amp; Dies Natalis</option>
                          <option>Kolaborasi Multimedia Komersial</option>
                        </select>
                      </label>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface flex items-center justify-between"><span>Partner / Penyelenggara</span><span className="text-xs text-outline">Mitra Pentahelix</span></span>
                        <div className="flex items-center bg-surface-container-lowest rounded-lg px-3 py-3 gap-2">
                          <span className="material-symbols-outlined text-outline text-[18px]">handshake</span>
                          <input defaultValue="Disbudpar Kota Salatiga" className="w-full bg-transparent text-sm text-on-surface focus:outline-none" placeholder="Nama mitra" />
                        </div>
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                      <label className="sm:col-span-5 flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface">Tanggal Pentas *</span>
                        <input type="date" defaultValue="2025-07-18" className="w-full bg-surface-container-lowest rounded-lg px-3 py-3 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" />
                      </label>
                      <label className="sm:col-span-7 flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface">Lokasi / Venue *</span>
                        <input defaultValue="Pendopo Bung Karno, Kota Salatiga" className="w-full bg-surface-container-lowest rounded-lg px-3 py-3 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" />
                      </label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface">Durasi Bersih</span>
                        <div className="flex items-center bg-surface-container-lowest rounded-lg px-3 py-2.5 gap-2">
                          <span className="material-symbols-outlined text-outline text-[20px]">timer</span>
                          <input defaultValue="1 Jam 42 Menit" className="w-full bg-transparent text-sm text-on-surface focus:outline-none" />
                        </div>
                      </label>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-sm text-on-surface">Gaya Pedalangan *</span>
                        <div className="flex gap-2">
                          {["Surakarta", "Yogyakarta", "Semarangan"].map((g) => (
                            <button key={g} type="button" className={g === "Surakarta" ? "flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary-container text-xs font-semibold" : "flex-1 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant text-xs"}>{g}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={active !== 1 ? "hidden" : "flex flex-col gap-4 bg-surface-container-lowest/40 rounded-xl p-4"}>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] tracking-widest uppercase font-bold text-primary">Langkah 2: Dokumentasi &amp; Kelir</span>
                      <span className="material-symbols-outlined text-primary text-[18px]">videocam</span>
                    </div>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm text-on-surface flex items-center justify-between"><span>Tautan Video Rekaman *</span><span className="text-xs text-tertiary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">high_quality</span> 4K Dianjurkan</span></span>
                      <div className="flex items-center bg-surface-container-lowest rounded-lg px-3 py-2.5 gap-2">
                        <span className="material-symbols-outlined text-secondary text-[20px]">smart_display</span>
                        <input defaultValue="https://youtube.com/watch?v=sabetan-bimasuci-salatiga" className="w-full bg-transparent text-sm text-on-surface focus:outline-none" />
                        <button type="button" className="px-3 py-1 rounded bg-surface-container-high text-xs shrink-0">Uji Tautan</button>
                      </div>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { t: "Sabetan Perang Tirta", s: "Slot 1 (Utama)", seed: "port1" },
                        { t: "Adegan Jejer Ayodya", s: "Slot 2", seed: "port2" },
                        { t: "Tancep Kayon Penutup", s: "Slot 3", seed: "port3" },
                      ].map((f, idx) => (
                        <div key={f.t} className="relative rounded-lg overflow-hidden bg-surface-container-lowest aspect-video flex flex-col justify-end">
                          <Image src={stitchImages.portfolioThumbs[idx % stitchImages.portfolioThumbs.length]} alt={f.t} fill unoptimized className="object-cover" />
                          <div className="relative z-10 p-2 bg-gradient-to-t from-black/70 to-transparent">
                            <span className="text-[11px] text-primary block truncate font-semibold">{f.t}</span>
                            <span className="text-[10px] text-white/80">{f.s}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={active !== 2 ? "hidden" : "flex flex-col gap-4"}>
                    <span className="text-[11px] tracking-widest uppercase font-bold text-primary">Langkah 3: Mentor Verifikator</span>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm text-on-surface flex items-center justify-between"><span>Pilih Maestro Verifikator *</span><span className="text-xs text-tertiary">SLA ~48 Jam</span></span>
                      <select className="w-full bg-surface-container-lowest rounded-lg px-3 py-3 text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>Ki Dalang Sutrisno, S.Sn (Ketua PEPADI Salatiga)</option>
                        <option>Ki Anom Warsito (Sanggar Sarotama)</option>
                        <option>Ki Dr. Suryo Handoko, M.Hum (ISI Surakarta)</option>
                      </select>
                      <p className="text-xs text-outline">Verifikator akan menilai Sabetan, Catur, dan Dodogan/Kepyakan sebelum sertifikat QR Passport.</p>
                    </label>
                  </div>

                  <div className={active !== 3 ? "hidden" : "flex flex-col gap-4"}>
                    <span className="text-[11px] tracking-widest uppercase font-bold text-primary">Langkah 4: Publikasi Showcase</span>
                    <label className="p-4 rounded-xl bg-surface-container-high/60 flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="mt-1 accent-primary" />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-on-surface">Izinkan ditampilkan di Showcase Virtual Publik WAYANG ID</span>
                        <span className="text-xs text-on-surface-variant">Pagelaran terverifikasi akan dipromosikan ke bursa promotor &amp; direktori Disbudpar.</span>
                      </span>
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                      <span className="flex items-center gap-2 text-sm text-on-surface"><span className="material-symbols-outlined text-[18px]">visibility</span> Visibilitas Publik</span>
                      <button type="button" onClick={() => setVisible(!visible)} className={visible ? "w-12 h-7 rounded-full bg-primary relative transition-colors" : "w-12 h-7 rounded-full bg-surface-container-high relative transition-colors"}>
                        <span className={visible ? "absolute top-0.5 right-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all" : "absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all"}>
                          <span className="material-symbols-outlined text-[14px] text-surface">{visible ? "visibility" : "visibility_off"}</span>
                        </span>
                      </button>
                    </label>
                  </div>

                  {toast && <div className="p-3 rounded-lg bg-tertiary-container text-on-tertiary-container text-sm font-medium flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span>{toast}</div>}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-outline-variant/20">
                    <div className="flex gap-2 w-full sm:w-auto">
                      {active > 0 && <button type="button" onClick={() => setActive(active - 1)} className="px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface text-sm font-semibold">Kembali</button>}
                      {active < 3 ? <button type="button" onClick={() => setActive(active + 1)} className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-primary text-on-primary text-sm font-bold">Lanjut</button> : null}
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button type="button" onClick={() => showToast(`Draf "${judul}" disimpan.`)} className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-surface-container-high text-on-surface text-sm font-semibold inline-flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[18px]">drafts</span> Simpan Draf</button>
                      <button type="submit" className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary text-sm font-bold shadow-[0_4px_24px_rgba(229,184,66,0.35)] inline-flex items-center justify-center gap-2"><span className="material-symbols-outlined text-[18px]">verified</span> Kirim Verifikasi</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="bg-surface-container-low/70 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-on-surface"><span className="material-symbols-outlined text-primary text-[18px]">account_tree</span> Alur Sertifikasi Paspor Pedalangan</span>
                  <span className="text-xs text-tertiary">Standar Resmi</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                  {[
                    ["01", "Unggah Portofolio", "Input audio-visual 4K"],
                    ["02", "Uji Rubrik Maestro", "Skor Catur, Sabet, Gendhing"],
                    ["03", "Kunci Hak Cipta", "Disbudpar & Pepadi ID"],
                    ["04", "QR Passport Terbit", "Siap Kurasi UNESCO"],
                  ].map(([n, t, d]) => (
                    <div key={n} className="bg-surface-container p-3 rounded-lg flex flex-col items-center">
                      <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center mb-1">{n}</span>
                      <span className="text-xs font-semibold text-on-surface">{t}</span>
                      <span className="text-[11px] text-outline">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-container/85 rounded-xl shadow-xl p-4 lg:p-5 flex flex-col gap-4 border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-semibold text-on-surface"><span className="material-symbols-outlined text-primary">history_edu</span> Riwayat Portofolio Terbit</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary text-xs font-bold">12 Pagelaran</span>
                </div>
                <p className="text-xs text-on-surface-variant">Arsip terakreditasi yang tersemat di QR paspor seni Anda.</p>
                <div className="flex flex-col gap-3">
                  {portfolioItems.map((it, idx) => {
                    const meta = [
                      { label: "Lakon Klasik Surakarta", grade: "A+", verified: "Terverifikasi Maestro - Ki Sutrisno", views: it.views, icon: "verified" },
                      { label: "Perang Bharatayuddha", grade: "A", verified: "Terverifikasi Maestro - Ki Anom Warsito", views: 2800, icon: "verified" },
                      { label: "Pentas Kolaborasi Edukasi", grade: "A", verified: "Terverifikasi MAN Salatiga", views: 1900, icon: "school" },
                      { label: "Ruwatan Tradisi", grade: "Menunggu", verified: "Dalam Peninjauan (Ki Dr. Suryo Handoko)", views: 0, icon: "hourglass_top" },
                    ][idx];
                    const pending = idx === 3;
                    return (
                      <div key={it.title} className={pending ? "p-4 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/20" : "p-4 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/10 hover:bg-surface-container-high transition-colors group"}>
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <span className={pending ? "text-[10px] font-bold tracking-wider uppercase text-secondary" : idx === 1 ? "text-[10px] font-bold tracking-wider uppercase text-primary" : idx === 0 ? "text-[10px] font-bold tracking-wider uppercase text-tertiary" : "text-[10px] font-bold tracking-wider uppercase text-outline"}>{meta.label}</span>
                            <h4 className="text-sm font-bold text-on-surface group-hover:text-primary leading-tight">{it.title}</h4>
                          </div>
                          <span className={pending ? "shrink-0 px-2 py-1 rounded bg-secondary-container/40 text-secondary text-xs font-bold inline-flex items-center gap-1" : it.grade === "A+" ? "shrink-0 px-2 py-1 rounded bg-tertiary-container/30 text-tertiary text-xs font-extrabold" : "shrink-0 px-2 py-1 rounded bg-surface-container text-on-surface-variant text-xs font-bold"}>
                            {pending ? <><span className="material-symbols-outlined text-[14px] animate-spin">sync</span> Menunggu</> : `Grade ${it.grade}`}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={pending ? "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-xs" : meta.icon === "school" ? "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-bright text-on-surface text-xs" : "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-xs"}>
                            <span className="material-symbols-outlined text-[14px]">{meta.icon}</span>{meta.verified}
                          </span>
                          {!pending && <span className="text-xs text-on-surface-variant inline-flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span>{it.views.toLocaleString("id-ID")} ditonton</span>}
                        </div>
                        <div className="flex items-center justify-between text-xs text-outline pt-2 border-t border-outline-variant/10">
                          <span>{pending ? "Diajukan: 24 Juli 2025" : `${it.venue} · ${it.date}`}</span>
                          {!pending && <span className="text-primary inline-flex items-center gap-1 font-semibold">{idx === 0 ? "Tautan Paspor" : idx === 1 ? "Lihat Rubrik" : "Sertifikat PDF"} <span className="material-symbols-outlined text-[14px]">{idx === 0 ? "qr_code_2" : idx === 1 ? "fact_check" : "download"}</span></span>}
                          {pending && <span className="italic text-[11px]">Estimasi selesai besok</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="w-full py-2.5 rounded-lg bg-surface-container-high text-on-surface text-sm font-semibold inline-flex items-center justify-center gap-1.5 hover:text-primary">Buka Arsip Lengkap 12 Pagelaran <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
              </div>

              <div className="bg-gradient-to-br from-surface-container-high/90 via-surface-container to-surface-container-low rounded-xl p-5 border border-outline-variant/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center"><span className="material-symbols-outlined">lightbulb</span></span>
                  <div>
                    <h3 className="text-sm font-semibold text-on-surface">Tips Kurasi Dewan Pakar</h3>
                    <span className="text-[11px] text-primary uppercase tracking-wider font-semibold">Standar PEPADI & UNESCO</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    ["sports_kabaddi", "1. Rekaman Kinetika Sabetan Bambangan", "Pastikan kamera 45° sejajar dada dalang. Gunakan shutter minimal 1/100s agar sabetan halus terlihat tanpa motion blur."],
                    ["wb_incandescent", "2. Pencahayaan Kelir & Suhu Blencong", "Pertahankan temperatur hangat 2800K-3200K. Hindari backwash lampu sorot agar tatahan wayang tetap tajam."],
                    ["edit_note", "3. Sanggit Lakon yang Konseptual", "Jelaskan relevansi lakon klasik seperti Bima Suci dengan perjuangan generasi muda Salatiga hari ini."],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="p-3 rounded-xl bg-surface-container-lowest/70">
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold"><span className="material-symbols-outlined text-[18px]">{icon}</span>{title}</div>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-container-lowest"><span className="material-symbols-outlined text-primary text-3xl">qr_code_2</span></div>
                  <div>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Pratinjau Paspor Digital</span>
                    <p className="text-sm font-semibold text-on-surface">Nyi Inaz · Salatiga Muda</p>
                    <p className="text-xs text-on-surface-variant">wayang.id/p/WID-2026-0001</p>
                  </div>
                </div>
                <button className="p-2.5 rounded-lg bg-surface-container-high text-on-surface"><span className="material-symbols-outlined">share</span></button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
