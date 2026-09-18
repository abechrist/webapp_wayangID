"use client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { stitchImages } from "@/data/stitchImages";

export default function MitraPage() {
  const [activeOrg, setActiveOrg] = useState<"disbudpar" | "wahid">("disbudpar");
  const [showQR, setShowQR] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [toast, setToast] = useState("");
  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 2500); };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary/30 selection:text-primary">
      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        <section className="w-full bg-surface-container-lowest py-10 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Partner Authority Suite
                </span>
                <span className="text-outline text-xs">•</span>
                <span className="text-xs text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
                  {activeOrg === "disbudpar" ? "Dinas Kebudayaan & Pariwisata Kota Salatiga" : "Grand Wahid Hotel Salatiga"}
                </span>
                <span className="text-xs text-tertiary flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">verified</span> Terakreditasi Pemkot</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                Pusat Rekrutmen &amp; Kolaborasi Budaya
              </h1>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Pusat kendali kurasi pementasan, pemilihan dalang muda berprestasi, dan automasi kemitraan sanggar budaya Kota Salatiga untuk perhelatan akbar daerah.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <div className="relative">
                <button
                  onClick={() => setActiveOrg(activeOrg === "disbudpar" ? "wahid" : "disbudpar")}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-between gap-4 transition-all shadow-sm border border-outline-variant/20"
                  type="button"
                >
                  <div className="flex items-center gap-2 text-left">
                    <span className="material-symbols-outlined text-primary text-[20px]">{activeOrg === "disbudpar" ? "account_balance" : "hotel"}</span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] text-outline font-semibold uppercase">Profil Aktif</span>
                      <span className="text-sm font-semibold truncate max-w-[150px]">{activeOrg === "disbudpar" ? "Disbudpar Salatiga" : "Grand Wahid"}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[18px]">unfold_more</span>
                </button>
              </div>
              <button onClick={() => setShowNew(true)} className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2" type="button">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                + Pasang Lowongan Baru
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">Peluang Aktif</span>
              <span className="material-symbols-outlined text-primary text-[20px]">event_seat</span>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-bold">3</span>
              <span className="text-xs text-tertiary ml-2 font-semibold">+1 Menunggu Review</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Festival, Ruwatan, &amp; Panggung Hotel</p>
          </div>
          <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">Pelamar Masuk</span>
              <span className="material-symbols-outlined text-primary text-[20px]">how_to_reg</span>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-bold">18</span>
              <span className="text-xs text-primary ml-2 font-semibold">+6 Hari Ini</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Dalang Muda &amp; Karawitan Terdata</p>
          </div>
          <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">Talenta Terpilih</span>
              <span className="material-symbols-outlined text-tertiary text-[20px]">hotel_class</span>
            </div>
            <div className="mt-3">
              <span className="text-3xl text-tertiary font-bold">4</span>
              <span className="text-xs text-outline ml-2 font-medium">Tahap Finalisasi</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Lolos Standar Kurasi PEPADI</p>
          </div>
          <div className="bg-surface-container-low/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-semibold tracking-wider text-on-surface-variant">Pagelaran Sukses</span>
              <span className="material-symbols-outlined text-outline text-[20px]">theater_comedy</span>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-bold">1</span>
              <span className="text-xs text-outline ml-2">Q1 2026</span>
            </div>
            <p className="text-xs text-on-surface-variant mt-1">Lakon Bima Suci (98% Rating Audiens)</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="material-symbols-outlined text-primary text-[20px]">campaign</span>
              Kelola Pementasan yang Berjalan
            </h2>
            <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl border border-outline-variant/20">
              <button className="px-4 py-1.5 rounded-lg bg-primary-container text-on-primary-container text-xs font-bold shadow-sm">Semua Pementasan (3)</button>
              <button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface text-xs font-medium">Arsip Tertutup (9)</button>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="flex flex-col gap-2 max-w-3xl relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">timer</span> Deadline: 7 Hari Lagi
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary text-[11px]">Gaya Surakarta / Bebas</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">payments</span> Standar Pemkot (Grade A)
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Pentas Utama Festival Wayang Bocah &amp; Remaja Hati Beriman 2026</h3>
              <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-xs mt-1">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-outline text-[16px]">calendar_month</span> Pementasan: 2 Mei 2026</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-outline text-[16px]">pin_drop</span> Alun-alun Pancasila, Salatiga</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-outline text-[16px]">group</span> Target Audiens: 1.200 Hadirin</span>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto shrink-0 relative z-10">
              <div className="flex flex-col text-left lg:text-right">
                <span className="text-[11px] text-outline">Progres Rekrutmen</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-32 h-2 bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: "65%" }} /></div>
                  <span className="text-xs text-primary font-bold">65%</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => showToast("Detail teknis diunduh")} className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs transition-colors border border-outline-variant/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">tune</span> Detail Teknis
                </button>
                <button onClick={() => showToast("Tautan dibagikan")} className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs transition-colors border border-outline-variant/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">share</span> Bagikan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            </div>
            <div>
              <h2 className="text-lg font-bold">Smart Talent Recommendation &amp; Matching Engine</h2>
              <p className="text-xs text-on-surface-variant">Pencocokan berdasarkan spesialisasi lakon, sertifikasi PEPADI, dan jam terbang terverifikasi.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image className="w-14 h-14 rounded-xl object-cover shadow-md" src={stitchImages.inazPortrait} alt="Inaz" width={56} height={56} unoptimized />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
                        <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">Nyi Inaz Fairoza</p>
                      <p className="text-xs text-on-surface-variant">Dalang Remaja Putri</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">award_star</span> 96% Match</span>
                    <span className="text-[10px] text-tertiary mt-1 font-semibold">Rekomendasi Utama</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px]">Gaya Surakarta</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-[11px] font-semibold">PEPADI Grade A</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px]">12 Jam Terbang</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2">Juara 1 Festival Dalang Remaja Tingkat Karesidenan. Ahli suluk dan sabet lakon kepahlawanan.</p>
              </div>
              <div className="pt-4 flex items-center gap-2 mt-4">
                <button onClick={() => showToast("Undangan dikirim ke Inaz")} className="flex-1 py-2 px-3 rounded-lg bg-primary text-on-primary text-xs font-bold hover:brightness-110 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">forward_to_inbox</span> Undang Langsung
                </button>
                <button onClick={() => setShowQR(true)} className="py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[16px]">qr_code_2</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image className="w-14 h-14 rounded-xl object-cover shadow-md" src={stitchImages.bagasMale} alt="Bagas" width={56} height={56} unoptimized />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
                        <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">Bagas Wicaksono</p>
                      <p className="text-xs text-on-surface-variant">Dalang Muda Klasik</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary text-xs font-bold">92% Match</span>
                    <span className="text-[10px] text-outline mt-1">Sanggar Giri Siswo</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px]">Gaya Yogyakarta</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-[11px] font-semibold">PEPADI Grade B+</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px]">9 Jam Terbang</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2">Vokal antawecana tegap, sangat pas untuk karakter satria gagah (Bima, Antasena).</p>
              </div>
              <div className="pt-4 flex items-center gap-2 mt-4">
                <button onClick={() => showToast("Undangan audisi dikirim ke Bagas")} className="flex-1 py-2 px-3 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-xs font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">forward_to_inbox</span> Undang Audisi
                </button>
                <button onClick={() => showToast("Profil Bagas dibuka")} className="py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/20 shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image className="w-14 h-14 rounded-xl object-cover shadow-md" src={stitchImages.sekarPortrait} alt="Sekar" width={56} height={56} unoptimized />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary-container rounded-full flex items-center justify-center text-on-tertiary-container">
                        <span className="material-symbols-outlined text-[11px] font-bold">check</span>
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold group-hover:text-primary transition-colors">Sekar Ayu Kinanti</p>
                      <p className="text-xs text-on-surface-variant">Spesialis Lakon Srikandi</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold">88% Match</span>
                    <span className="text-[10px] text-outline mt-1">SMAN 1 Salatiga</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-[11px]">Gaya Surakarta</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-[11px] font-semibold">Bakat Muda</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px]">6 Jam Terbang</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2">Juara FLS2N Seni Pedalangan. Piawai memadukan tembang macapat kontemporer dengan lakon Srikandi.</p>
              </div>
              <div className="pt-4 flex items-center gap-2 mt-4">
                <button onClick={() => showToast("Undangan audisi dikirim ke Sekar")} className="flex-1 py-2 px-3 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface text-xs font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">forward_to_inbox</span> Undang Audisi
                </button>
                <button onClick={() => showToast("Profil Sekar dibuka")} className="py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="material-symbols-outlined text-primary text-[20px]">view_kanban</span>
                Papan Kurasi &amp; Pipeline Seleksi Pelamar
              </h2>
              <p className="text-xs text-on-surface-variant">Lacak status pendaftar, kurasi rekam audio/video, dan terbitkan persetujuan pentas.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center bg-surface-container rounded-lg px-3 py-1.5 text-on-surface text-xs border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline text-[16px] mr-1.5">filter_list</span>
                Urut: Nilai Tertinggi
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 overflow-x-auto pb-2">
            <div className="bg-surface-container-low/60 rounded-xl p-3 flex flex-col gap-3 min-w-[240px] border border-outline-variant/10">
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-outline" />
                  <span className="text-xs font-bold">Pendaftar Baru</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-outline text-[11px] font-semibold">6</span>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Raditya Danang</p><p className="text-[11px] text-outline">SMPN 1 Salatiga • 14 Thn</p></div>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary text-xs font-bold">84%</span>
                </div>
                <div className="w-full bg-surface-container-lowest rounded-lg p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">play_arrow</span></span>
                    <div><p className="text-xs font-medium">Suluk Pathet Nem</p><p className="text-[10px] text-outline">00:42 • Audio</p></div>
                  </div>
                  <span className="material-symbols-outlined text-outline text-[16px]">graphic_eq</span>
                </div>
                <button onClick={() => showToast("Raditya masuk Review")} className="w-full py-1.5 rounded-lg bg-surface-bright text-on-surface hover:text-primary text-xs font-semibold flex items-center justify-center gap-1 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span> Masukkan Review
                </button>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Wahyu Damarjati</p><p className="text-[11px] text-outline">Sanggar Sarotama • 16 Thn</p></div>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary text-xs font-bold">81%</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2">Menguasai Lakon Gatotkaca Jedi, kendang mantap.</p>
                <button onClick={() => showToast("Wahyu masuk Review")} className="w-full py-1.5 rounded-lg bg-surface-bright text-on-surface hover:text-primary text-xs font-semibold flex items-center justify-center gap-1 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span> Masukkan Review
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low/60 rounded-xl p-3 flex flex-col gap-3 min-w-[240px] border border-outline-variant/10">
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim" />
                  <span className="text-xs font-bold">Review Kurasi</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-semibold">4</span>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Sekar Ayu Kinanti</p><p className="text-[11px] text-tertiary">SMAN 1 • Grade B+</p></div>
                  <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container text-xs font-bold">88%</span>
                </div>
                <div className="relative w-full h-20 rounded-lg overflow-hidden my-1">
                  <Image className="w-full h-full object-cover" src={stitchImages.performSrikandi} alt="Sekar clip" fill unoptimized />
                  <div className="absolute inset-0 bg-surface-container-lowest/40 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-primary/90 text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">play_arrow</span></span>
                  </div>
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-surface-container-lowest text-[10px]">02:14 Clip</span>
                </div>
                <div className="grid grid-cols-3 gap-1 pt-1">
                  <button onClick={() => showToast("Sekar diterima")} className="py-1 rounded bg-tertiary-container/30 hover:bg-tertiary-container text-tertiary hover:text-on-tertiary-container text-xs font-bold">Terima</button>
                  <button onClick={() => showToast("Sekar dialihkan")} className="py-1 rounded bg-primary-container/20 hover:bg-primary-container text-primary hover:text-on-primary-container text-xs font-semibold">Alternatif</button>
                  <button onClick={() => showToast("Sekar ditolak halus")} className="py-1 rounded bg-surface-container-high hover:bg-error-container text-outline hover:text-on-error-container text-xs">Tolak</button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low/60 rounded-xl p-3 flex flex-col gap-3 min-w-[240px] border border-outline-variant/10">
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-bold">Terpilih / Shortlist</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary text-[11px] font-semibold">3</span>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 ring-1 ring-primary/30 border border-primary/20">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-[16px]">verified</span><p className="text-sm font-bold">Nyi Inaz Fairoza</p></div>
                  <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container text-xs font-bold">96%</span>
                </div>
                <p className="text-[11px] text-tertiary font-medium">Rekomendasi Dewan Kurator</p>
                <div className="bg-surface-container-lowest p-2 rounded-lg text-xs text-on-surface-variant flex flex-col gap-1">
                  <div className="flex justify-between"><span className="text-outline">Lakon:</span><span className="font-medium text-on-surface">Karno Tanding</span></div>
                  <div className="flex justify-between"><span className="text-outline">Durasi:</span><span className="font-medium text-on-surface">3 Jam (Padat)</span></div>
                </div>
                <button onClick={() => showToast("Draf kontrak diajukan")} className="w-full py-1.5 mt-1 rounded-lg bg-primary text-on-primary text-xs font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">description</span> Ajukan Draf Kontrak
                </button>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Bagas Wicaksono</p><p className="text-[11px] text-outline">Gaya Yogyakarta • Cadangan 1</p></div>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary text-xs font-bold">92%</span>
                </div>
                <p className="text-xs text-on-surface-variant">Lakon Bima Suci terverifikasi PEPADI Komda Salatiga.</p>
                <button onClick={() => showToast("Bagas standby")} className="w-full py-1.5 mt-1 rounded-lg bg-surface-bright text-on-surface hover:text-primary text-xs font-semibold border border-outline-variant/10">Siapkan Standby</button>
              </div>
            </div>

            <div className="bg-surface-container-low/60 rounded-xl p-3 flex flex-col gap-3 min-w-[240px] border border-outline-variant/10">
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                  <span className="text-xs font-bold">Kontrak &amp; Gladi</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-tertiary text-[11px] font-semibold">2</span>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Ki Bayu Aji Pratama</p><p className="text-[11px] text-outline">Gladi: 28 April 2026</p></div>
                  <span className="material-symbols-outlined text-tertiary text-[18px]">verified_user</span>
                </div>
                <div className="flex items-center gap-1.5 bg-tertiary-container/20 px-2 py-1 rounded text-tertiary">
                  <span className="material-symbols-outlined text-[14px]">task_alt</span>
                  <span className="text-[11px] font-semibold">SK Pemkot &amp; SPK Terbit</span>
                </div>
                <button onClick={() => showToast("Jadwal gladi dikirim")} className="w-full py-1.5 mt-1 rounded-lg bg-surface-bright text-on-surface hover:text-primary text-xs border border-outline-variant/10">Detail Gladi</button>
              </div>
            </div>

            <div className="bg-surface-container-low/60 rounded-xl p-3 flex flex-col gap-3 min-w-[240px] border border-outline-variant/10">
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-outline" />
                  <span className="text-xs font-bold">Selesai Pentas</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-outline text-[11px] font-semibold">1</span>
              </div>
              <div className="bg-surface-container rounded-xl p-3 shadow-md flex flex-col gap-2 opacity-90 border border-outline-variant/10">
                <div className="flex items-start justify-between">
                  <div><p className="text-sm font-bold">Ananda Arya Sena</p><p className="text-[11px] text-outline">Pentas: HUT Kota Salatiga</p></div>
                  <span className="text-primary text-xs font-bold">★ 4.9</span>
                </div>
                <div className="bg-surface-container-lowest p-2 rounded-lg text-[11px] text-outline">Honorarium Dicairkan • Passport +4 Jam</div>
                <button onClick={() => showToast("Sertifikat diunduh")} className="w-full py-1.5 mt-1 rounded-lg bg-surface-container-high text-on-surface hover:text-primary text-xs border border-outline-variant/10">Arsip &amp; Piagam</button>
              </div>
            </div>
          </div>
        </section>

        {showQR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md p-4" onClick={() => setShowQR(false)}>
            <div className="bg-surface-container-low max-w-md w-full rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center relative border border-outline-variant/20" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-outline" onClick={() => setShowQR(false)}>
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-3 text-primary">
                <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
              </div>
              <span className="text-xs text-primary font-bold uppercase tracking-widest">Passport Talenta Wayang ID</span>
              <h3 className="text-xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair)" }}>Nyi Inaz Fairoza Rizqillah</h3>
              <p className="text-xs text-on-surface-variant mt-1">ID: WID-2026-0001 • PEPADI Grade A</p>
              <div className="w-56 h-56 bg-surface-container rounded-xl p-4 my-4 flex flex-col items-center justify-center shadow-inner border border-outline-variant/20">
                <svg className="w-40 h-40 text-primary" fill="currentColor" viewBox="0 0 100 100">
                  <path d="M0 0h30v30H0zM8 8h14v14H8z M70 0h30v30H70zM78 8h14v14H78z M0 70h30v30H0zM8 78h14v14H8z M40 10h10v10H40z M55 10h10v10H55z M40 25h25v5H40z M10 40h15v10H10z M35 40h30v15H35z M75 40h15v20H75z M40 65h10v25H40z M60 70h10v10H60z M80 75h10v15H80z M20 60h10v10H20z M60 85h20v10H60z" />
                </svg>
                <span className="text-[10px] text-outline mt-2 tracking-tighter">HASH: 9A88-F012-PEPADI-SLTG</span>
              </div>
              <div className="w-full bg-surface-container p-3 rounded-xl flex justify-between items-center text-left border border-outline-variant/10">
                <div>
                  <p className="text-[11px] text-outline">Status Verifikasi</p>
                  <p className="text-xs text-tertiary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span> Terverifikasi UNESCO Track</p>
                </div>
                <Link href="/talent/WID-2026-0001" className="px-3 py-1.5 rounded-lg bg-surface-bright text-on-surface text-xs flex items-center gap-1">Buka Profil</Link>
              </div>
            </div>
          </div>
        )}

        {showNew && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-md p-4" onClick={() => setShowNew(false)}>
            <div className="bg-surface-container-low max-w-2xl w-full rounded-2xl shadow-2xl p-6 flex flex-col gap-4 max-h-[90vh] overflow-y-auto border border-outline-variant/20" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Pasang Lowongan Baru</h3>
                <button onClick={() => setShowNew(false)} className="p-2 rounded-full hover:bg-surface-container"><span className="material-symbols-outlined">close</span></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs text-primary font-semibold">Nama Pementasan</label>
                  <input className="bg-surface-container-lowest text-on-surface text-sm rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant/20" defaultValue="Gelar Budaya Ksatria Praja Tingkir 2026" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-on-surface-variant">Tanggal Pentas</label>
                  <input className="bg-surface-container-lowest text-on-surface text-sm rounded-lg p-3 border border-outline-variant/20" type="date" defaultValue="2026-05-18" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-on-surface-variant">Deadline</label>
                  <input className="bg-surface-container-lowest text-on-surface text-sm rounded-lg p-3 border border-outline-variant/20" type="date" defaultValue="2026-04-10" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button onClick={() => setShowNew(false)} className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface text-sm">Batal</button>
                <button onClick={() => { setShowNew(false); showToast("Lowongan ditayangkan"); }} className="px-6 py-2 rounded-lg bg-primary-container text-on-primary-container text-sm font-bold">Tayangkan Lowongan</button>
              </div>
            </div>
          </div>
        )}

        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-tertiary-container text-on-tertiary-container px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span className="text-sm font-semibold">{toast}</span>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
