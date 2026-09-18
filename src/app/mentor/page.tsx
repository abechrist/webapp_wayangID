"use client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import { useState } from "react";
import { stitchImages } from "@/data/stitchImages";

export default function MentorPage() {
  const [sabetVal, setSabetVal] = useState(88);
  const [sanggitVal, setSanggitVal] = useState(85);
  const [sulukVal, setSulukVal] = useState(82);
  const [note, setNote] = useState("Teknik perang gada sangat bertenaga dan irama kendang sigrak telah menyatu. Perhatikan artikulasi saat ada-ada girisa agar nafas penjiwaan tidak terengah. Sangat layak terakreditasi Utama.");
  const [approved, setApproved] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary/30 selection:text-primary">
      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden bg-surface-container-lowest pb-12 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
          <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-[-150px] w-[450px] h-[450px] bg-tertiary-container/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-7xl mx-auto pt-8 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8">
              <div className="flex items-start gap-5">
                <div className="relative shrink-0">
                  <Image
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-2xl ring-2 ring-primary/30"
                    src={stitchImages.sutrisnoPortrait}
                    alt="Ki Dalang Sutrisno"
                    width={96}
                    height={96}
                    unoptimized
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary-container rounded-full p-1 shadow-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary-container/20 text-primary font-bold tracking-wider uppercase">Ketua PEPADI Salatiga</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-medium">Dewan Kurasi Kota</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">shield</span> Paspor Digital Validator
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                    Ki Dalang Sutrisno, S.Sn.
                  </h1>
                  <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mt-1 leading-relaxed">
                    Ruang Kurasi &amp; Pembinaan Dalang Senior — Menjaga Kemurnian Pakeliran Gaya Surakarta &amp; Menuntun Dinamika Kreasi Generasi Muda.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-sm font-medium transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">history_edu</span>
                  <span>Arsip Penilaian</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container text-sm font-bold shadow-lg shadow-primary-container/20 transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">add_box</span>
                  <span>Jadwal Bimbingan Baru</span>
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between shadow-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Kaderisasi Aktif</span>
                  <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">groups</span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-primary font-bold">12</span>
                    <span className="text-base text-on-surface font-semibold">Dalang Muda Binaan</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">4 Sanggar resmi se-Kota Salatiga</p>
                </div>
                <div className="mt-4 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full" style={{ width: "75%" }} />
                </div>
              </div>

              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between shadow-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary uppercase tracking-wider font-semibold">Perlu Tinjauan Segera</span>
                  <span className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">pending_actions</span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-secondary font-bold">5</span>
                    <span className="text-base text-on-surface font-semibold">Verifikasi Menunggu</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">Sabet, Suluk, &amp; Sanggit terkini</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">priority_high</span>
                  <span>2 berkas melewati 48 jam</span>
                </div>
              </div>

              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between shadow-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Agenda Pendampingan</span>
                  <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">event_repeat</span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-tertiary font-bold">4</span>
                    <span className="text-base text-on-surface font-semibold">Sesi Pekan Ini</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">2 Tatap muka klinik sanggar, 2 bedah naskah</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">near_me</span>
                  <span>Terdekat: Besok di Bima Suci</span>
                </div>
              </div>

              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between shadow-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Total Kurasi Lulus</span>
                  <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-primary-fixed font-bold">28</span>
                    <span className="text-base text-on-surface font-semibold">Keahlian Tervalidasi</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">Tersinkronisasi QR Paspor Budaya</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-tertiary text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span>+6 bulan ini terakreditasi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Queue Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">fact_check</span>
                <h2 className="text-2xl font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Antrean Penilaian Otentik &amp; Portofolio</h2>
              </div>
              <p className="text-sm text-on-surface-variant mt-1">Verifikasi berbasis bukti lakon, video performa rekaman langsung, dan capaian teknik pakeliran.</p>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/20">
              <button className="px-4 py-1.5 rounded-lg bg-primary-container text-on-primary-container text-xs font-semibold shadow-sm transition-all" type="button">Semua Permintaan (5)</button>
              <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-xs font-medium transition-all" type="button">Verifikasi Sabet</button>
              <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-xs font-medium transition-all" type="button">Verifikasi Suluk</button>
              <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-xs font-medium transition-all" type="button">Verifikasi Sanggit</button>
              <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high text-xs font-medium transition-all" type="button">Riwayat (28)</button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Main Validation Card (Inaz Dewa Ruci) */}
            <div className="bg-surface-container-low/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-outline-variant/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent" />
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                
                {/* Left 5 cols: Profile & Video Preview */}
                <div className="xl:col-span-5 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-container/40" src={stitchImages.inazHeadshot} alt="Inaz Fairoza" width={56} height={56} unoptimized />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-on-surface">Nyi Inaz Fairoza Rizqillah</h3>
                          <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        </div>
                        <span className="text-xs text-on-surface-variant">MAN Salatiga • Sanggar Bima Suci</span>
                        <span className="text-xs text-primary font-semibold mt-0.5">Paspor ID: WID-2026-0001</span>
                      </div>
                    </div>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary font-bold tracking-wide">PENGUJIAN UTAMA</span>
                  </div>

                  <div className="bg-surface-container-lowest/70 rounded-2xl p-4 border border-outline-variant/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-outline font-semibold">Artefak Bukti Pengujian</span>
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span> 12 Menit Rekaman
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Lakon Dewa Ruci: Perang Gada &amp; Karakter Alus Werkudara</h4>
                    <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">Menampilkan transisi sabetan kasar Gandamana ke keheningan mistis karakter Werkudara bertemu Sang Hyang Dewa Ruci dalam kelir panggung tertutup.</p>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg bg-surface-container">
                      <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={stitchImages.pagelaranDewaRuci} alt="Dewa Ruci" fill unoptimized />
                      <div className="absolute inset-0 bg-surface-container-lowest/40 group-hover:bg-surface-container-lowest/20 flex items-center justify-center transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-[11px]">
                        Rekaman Pentas Disbudpar Salatiga 2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle 4 cols: Sliders */}
                <div className="xl:col-span-4 flex flex-col justify-between bg-surface-container/60 rounded-2xl p-5 border border-outline-variant/10">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                      <h4 className="text-sm font-semibold text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">tune</span>
                        Kalibrasi Metrik Penilaian
                      </h4>
                      <span className="text-xs text-outline">Standar Keraton Surakarta</span>
                    </div>

                    <div className="flex flex-col gap-5 mt-5">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-on-surface">Sabet (Manipulasi Wayang)</span>
                          <span className="text-sm font-bold text-primary">{sabetVal}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={sabetVal}
                          onChange={(e) => setSabetVal(Number(e.target.value))}
                          className="w-full accent-primary bg-surface-container-highest rounded-lg h-2 cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-outline">
                          <span>Kelenturan Cekatan (Madya)</span>
                          <span className="text-tertiary">Mumpuni Unggul (Utama)</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-on-surface">Sanggit (Kreativitas Lakon)</span>
                          <span className="text-sm font-bold text-primary">{sanggitVal}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={sanggitVal}
                          onChange={(e) => setSanggitVal(Number(e.target.value))}
                          className="w-full accent-primary bg-surface-container-highest rounded-lg h-2 cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-outline">
                          <span>Harmonisasi Alur</span>
                          <span className="text-tertiary">Dramaturgi Tajam</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-on-surface">Suluk &amp; Tembang (Vokal Nada)</span>
                          <span className="text-sm font-bold text-primary">{sulukVal}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={sulukVal}
                          onChange={(e) => setSulukVal(Number(e.target.value))}
                          className="w-full accent-primary bg-surface-container-highest rounded-lg h-2 cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-outline">
                          <span>Ketepatan Titilaras</span>
                          <span className="text-tertiary">Laras Gandrung Mantap</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-surface-container-lowest/80 rounded-xl flex items-center justify-between border border-outline-variant/10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">equalizer</span>
                      <span className="text-xs font-medium text-on-surface">Akumulasi Nilai Kompetensi</span>
                    </div>
                    <span className="text-base text-tertiary font-bold">{((sabetVal + sanggitVal + sulukVal) / 3).toFixed(1)} / 100</span>
                  </div>
                </div>

                {/* Right 3 cols: Notes & Actions */}
                <div className="xl:col-span-3 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-on-surface flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">edit_note</span>
                      Catatan Instruksional Sanggar
                    </label>
                    <textarea
                      rows={5}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full bg-surface-container-lowest/90 rounded-xl p-3 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container resize-none border border-outline-variant/20"
                    />
                    <div className="flex items-center gap-2 text-outline text-[11px] mt-1">
                      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                      <span>Tersinkronisasi ke Rekomendasi PEPADI</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <button
                      onClick={() => setApproved(true)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${approved ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-primary-container hover:bg-primary text-on-primary-container shadow-primary-container/25'}`}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {approved ? 'check_circle' : 'approval'}
                      </span>
                      <span>{approved ? 'Telah Disetujui & Diterbitkan' : 'Setujui & Terbitkan ke Paspor QR'}</span>
                    </button>
                    <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all border border-outline-variant/10" type="button">
                      <span className="material-symbols-outlined text-[16px]">rate_review</span>
                      <span>Beri Catatan Sanggar (Revisi)</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Other Queue Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bagas */}
              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-outline-variant/20">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image className="w-12 h-12 rounded-full object-cover" src={stitchImages.bagasMale} alt="Bagas Wicaksono" width={48} height={48} unoptimized />
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">Bagas Wicaksono</h4>
                        <span className="text-xs text-on-surface-variant">SMKN 1 Salatiga • Sanggar Sarotama</span>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-semibold">Butuh Review Vokal</span>
                  </div>
                  <div className="bg-surface-container-lowest/80 rounded-xl p-3 border border-outline-variant/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-outline uppercase font-semibold">Pengajuan Skill Suluk</span>
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">mic</span> Audio 4 Menit
                      </span>
                    </div>
                    <h5 className="text-xs font-semibold text-on-surface">Suluk Tembang Pathet 6 (Laras Slendro)</h5>
                    <div className="mt-3 flex items-center gap-3 bg-surface-container p-2 rounded-lg">
                      <button className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0" type="button">
                        <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                      </button>
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: "42%" }} />
                        </div>
                        <div className="flex justify-between text-[10px] text-outline">
                          <span>01:42</span>
                          <span>04:08</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Titilaras</span>
                      <span className="text-on-surface font-bold">78%</span>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Pernafasan</span>
                      <span className="text-secondary font-bold">71%</span>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Dodotan</span>
                      <span className="text-on-surface font-bold">75%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-outline-variant/30">
                  <button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium text-center transition-all border border-outline-variant/10" type="button">
                    Jadwalkan Klinik Vokal
                  </button>
                  <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container/20 text-primary hover:bg-primary-container hover:text-on-primary-container text-xs font-semibold text-center transition-all" type="button">
                    Kirim Feedback Detail
                  </button>
                </div>
              </div>

              {/* Sekar */}
              <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-outline-variant/20">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image className="w-12 h-12 rounded-full object-cover" src={stitchImages.sekarProfile} alt="Sekar Ayu Danastri" width={48} height={48} unoptimized />
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">Sekar Ayu Danastri</h4>
                        <span className="text-xs text-on-surface-variant">SMA Kristen Satya Wacana • Sanggar Karawitan</span>
                      </div>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-semibold">Verifikasi Sanggit</span>
                  </div>
                  <div className="bg-surface-container-lowest/80 rounded-xl p-3 border border-outline-variant/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-outline uppercase font-semibold">Naskah Pakeliran Padat</span>
                      <span className="text-xs text-tertiary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">description</span> PDF &amp; Bagan
                      </span>
                    </div>
                    <h5 className="text-xs font-semibold text-on-surface">Sanggit Lakon Srikandi Krida: Sudut Pandang Kepemimpinan</h5>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Eksplorasi gubahan carangan dengan menekankan ketangguhan moral senapati wanita tanpa menyimpang dari kakawin Bharatayuddha.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Relevansi Moral</span>
                      <span className="text-tertiary font-bold">92%</span>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Kesesuaian Pakem</span>
                      <span className="text-primary font-bold">86%</span>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg border border-outline-variant/10">
                      <span className="text-outline block text-[10px]">Artikulasi Omon</span>
                      <span className="text-on-surface font-bold">84%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-outline-variant/30">
                  <button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium text-center transition-all flex items-center justify-center gap-1 border border-outline-variant/10" type="button">
                    <span className="material-symbols-outlined text-[16px]">visibility</span> Baca Naskah
                  </button>
                  <button className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary text-xs font-semibold text-center transition-all" type="button">
                    Validasi Sanggit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule & Endorsement Section */}
        <section className="w-full bg-surface-container-low py-12 border-t border-outline-variant/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left 7 Cols: Schedules */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <span className="text-xs text-primary uppercase tracking-widest font-semibold">Tatap Muka &amp; Bedah Lakon</span>
                  <h2 className="text-2xl font-bold text-on-surface mt-1" style={{ fontFamily: "var(--font-playfair)" }}>Jadwal Bimbingan &amp; Mentoring Sanggar</h2>
                  <p className="text-sm text-on-surface-variant mt-1">Sesi pembinaan langsung di sanggar mitra untuk pendalaman rasa, irama karawitan, dan dramaturgi.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-surface-container/90 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border border-outline-variant/20">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary-container/20 text-primary flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] uppercase font-bold">KAM</span>
                        <span className="text-lg font-bold leading-none">24</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-medium">Praktik Sabet</span>
                          <span className="text-xs text-outline">15.30 - 18.00 WIB</span>
                        </div>
                        <h4 className="text-sm font-semibold text-on-surface mt-1">Penyelarasan Kendang &amp; Karakter Antasena</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">Sanggar Bima Suci, Sidorejo Salatiga • Mentee: Nyi Inaz Fairoza</p>
                        <div className="flex items-center gap-1 text-primary text-xs font-medium mt-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          <span>Jl. Patimura No. 42, Sidorejo Lor</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0">
                      <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-primary-container text-on-primary-container text-xs font-semibold shadow hover:bg-primary transition-all" type="button">
                        Konfirmasi Hadir
                      </button>
                      <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-xs font-medium hover:bg-surface-bright transition-all border border-outline-variant/10" type="button">
                        Rute Lokasi
                      </button>
                    </div>
                  </div>

                  <div className="bg-surface-container/90 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border border-outline-variant/20">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-highest text-on-surface-variant flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] uppercase font-bold">SAB</span>
                        <span className="text-lg font-bold leading-none">26</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded bg-primary-container/20 text-primary font-medium">Bedah Naskah</span>
                          <span className="text-xs text-outline">09.00 - 12.30 WIB</span>
                        </div>
                        <h4 className="text-sm font-semibold text-on-surface mt-1">Bedah Naskah Lakon Palgunadi (Karna Tanding Prekuel)</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">Pendopo Disbudpar Kota Salatiga • 4 Dalang Remaja Peserta</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">group</span> Bagas, Sekar, Danendra, &amp; Galih
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0">
                      <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-surface-container-high text-on-surface text-xs font-medium hover:bg-surface-bright transition-all border border-outline-variant/10" type="button">
                        Unduh Silabus (PDF)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Endorsement Sheet */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <span className="text-xs text-tertiary uppercase tracking-widest font-semibold">Legitimasi Budaya</span>
                  <h2 className="text-2xl font-bold text-on-surface mt-1" style={{ fontFamily: "var(--font-playfair)" }}>Lembar Endorsement Maestro</h2>
                  <p className="text-sm text-on-surface-variant mt-1">Sertifikat terikat secara kriptografis pada Paspor Digital WID Talenta.</p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-3xl relative overflow-hidden shadow-2xl border border-outline-variant/20">
                  <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <span className="material-symbols-outlined text-[120px] text-primary">military_tech</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                      <span className="text-xs text-on-surface font-bold uppercase tracking-wider">PEPADI CABANG SALATIGA</span>
                    </div>
                    <span className="text-xs text-tertiary font-mono">REG: PEP-SLT-2025-X09</span>
                  </div>
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-outline">Penerima Sertifikasi:</span>
                      <span className="text-sm text-primary font-semibold">Nyi Inaz Fairoza Rizqillah</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-outline">Nomor Identifikasi:</span>
                      <span className="font-mono text-xs text-on-surface font-bold">WID-2026-0001</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-outline">Tingkat Kualifikasi:</span>
                      <span className="text-xs px-2.5 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-bold">Dalang Madya Utama (Mandiri)</span>
                    </div>
                    <div className="mt-2 p-3 bg-surface-container/60 rounded-xl border border-outline-variant/10">
                      <p className="text-xs italic text-on-surface-variant leading-relaxed">
                        &quot;Kanthi rahmat Hyang Widhi, Inaz dipuntetepaken gadhah kasantosan sabet tuwin suluk ingkang purna kanggé mbabar lakon ageng ing adicara resmi festival kraton lan publik nusantara.&quot;
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <rect fill="white" height="100" width="100" />
                            <rect fill="black" height="30" width="30" x="10" y="10" />
                            <rect fill="black" height="30" width="30" x="60" y="10" />
                            <rect fill="black" height="30" width="30" x="10" y="60" />
                            <rect fill="white" height="14" width="14" x="18" y="18" />
                            <rect fill="white" height="14" width="14" x="68" y="18" />
                            <rect fill="white" height="14" width="14" x="18" y="68" />
                            <rect fill="black" height="20" width="8" x="45" y="15" />
                            <rect fill="black" height="12" width="12" x="45" y="45" />
                            <rect fill="black" height="15" width="15" x="60" y="60" />
                            <rect fill="black" height="15" width="10" x="80" y="75" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-on-surface font-semibold">Digital Seal Cryptographic</span>
                          <span className="text-[11px] text-outline">Verifikasi QR via PEPADI Node</span>
                        </div>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-[11px] text-outline">Pengesah:</span>
                        <span className="text-xs text-primary font-semibold">Ki Sutrisno, S.Sn.</span>
                        <span className="text-[10px] text-on-surface-variant">23 Oktober 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium flex items-center justify-center gap-2 transition-all border border-outline-variant/10" type="button">
                    <span className="material-symbols-outlined text-[18px]">share</span>
                    <span>Bagikan ke Profil Publik Talenta</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom Ranking Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-surface-container-low/60 rounded-3xl p-6 sm:p-8 border border-outline-variant/20 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Daftar Talenta Binaan &amp; Jalur Registri Salatiga</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Memantau kemajuan regenerasi dalang pelajar dan lulusan binaan sanggar.</p>
              </div>
              <div className="flex items-center gap-2">
                <input className="bg-surface-container-lowest px-3 py-1.5 rounded-xl text-xs text-on-surface placeholder:text-outline focus:outline-none w-56 border border-outline-variant/20" placeholder="Cari nama cantrik/mentee..." type="text" />
                <button className="p-2 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-bright border border-outline-variant/10" type="button">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="text-outline uppercase tracking-wider border-b border-outline-variant/30">
                    <th className="pb-3 px-3">Nama Dalang Remaja</th>
                    <th className="pb-3 px-3">Asal Sekolah / Sanggar</th>
                    <th className="pb-3 px-3">Spesialisasi Pakem</th>
                    <th className="pb-3 px-3">Indeks Kompetensi</th>
                    <th className="pb-3 px-3">Status Sertifikat</th>
                    <th className="pb-3 px-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-on-surface">
                  {[
                    { name: "Nyi Inaz Fairoza Rizqillah", color: "bg-tertiary", school: "MAN Salatiga", style: "Gaya Surakarta (Dewa Ruci)", score: "88.2 (Utama)", status: "Tervalidasi 2025", tagBg: "bg-tertiary-container/20 text-tertiary" },
                    { name: "Bagas Wicaksono", color: "bg-secondary", school: "SMKN 1 Salatiga", style: "Gaya Surakarta (Gatotkaca Lahir)", score: "74.6 (Madya)", status: "Review Tertunda", tagBg: "bg-secondary-container/20 text-secondary" },
                    { name: "Sekar Ayu Danastri", color: "bg-primary", school: "SMA Kristen Satya Wacana", style: "Srikandi Krida (Gaya Pesisiran)", score: "87.3 (Utama)", status: "Siap Sidang Naskah", tagBg: "bg-primary-container/20 text-primary" },
                    { name: "Galih Danendra", color: "bg-outline", school: "SMPN 2 Salatiga", style: "Gaya Pedalangan Klasik Mataram", score: "80.0 (Madya)", status: "Proses Bimbingan", tagBg: "bg-surface-container-high text-on-surface-variant" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-container/40 transition-colors">
                      <td className="py-3 px-3 font-medium flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${row.color}`} />
                        {row.name}
                      </td>
                      <td className="py-3 px-3 text-on-surface-variant">{row.school}</td>
                      <td className="py-3 px-3">{row.style}</td>
                      <td className="py-3 px-3 font-semibold text-tertiary">{row.score}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${row.tagBg}`}>{row.status}</span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-primary hover:text-primary-fixed text-xs font-medium" type="button">Buka Paspor →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
