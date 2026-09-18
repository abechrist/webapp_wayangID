"use client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { stitchImages } from "@/data/stitchImages";

export default function AkademiPage() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary/30 selection:text-primary">
      <SiteHeader />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden bg-surface-container-lowest py-10 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-tertiary-container/5 blur-2xl pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-bold uppercase tracking-wider">Portal Talenta WID</span>
                  <span className="text-outline-variant">•</span>
                  <span className="text-xs text-on-surface-variant font-medium">ID Seniman: <strong className="text-on-surface">WID-2026-0001</strong></span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Terverifikasi PEPADI
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>
                  Sugeng Rawuh, <span className="text-primary italic">Inaz Fairoza Rizqillah</span>!
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                  Pusat kendali sanggit, evaluasi kurasi pedalangan muda, dan rekam jejak transformasi dari panggung lokal Salatiga menuju panggung kultural nusantara.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link href="/talent/WID-2026-0001" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-sm font-medium transition-all shadow-md group">
                  <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">qr_code_2</span>
                  <span>Talent Passport</span>
                </Link>
                <Link href="/peluang" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-container via-primary to-primary-fixed-dim text-on-primary-container text-sm font-bold shadow-lg hover:shadow-primary/20 transition-all">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Ajukan Pentas</span>
                </Link>
              </div>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col gap-1 border border-outline-variant/20 shadow-sm">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Tingkatan Karier</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-primary font-bold">Performer</span>
                  <span className="text-xs text-on-surface-variant">(Menuju Creator)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest mt-2 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col gap-1 border border-outline-variant/20 shadow-sm">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Pagelaran Tuntas</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-on-surface font-bold leading-none">12</span>
                  <span className="text-xs text-tertiary font-semibold flex items-center">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +3 Thn Ini
                  </span>
                </div>
                <span className="text-xs text-on-surface-variant mt-1">Gaya Surakarta &amp; Kontemporer</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col gap-1 border border-outline-variant/20 shadow-sm">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Validasi Maestro</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-on-surface font-bold leading-none">3</span>
                  <span className="text-xs text-on-surface-variant">Sertifikat Resmi</span>
                </div>
                <span className="text-xs text-tertiary-fixed-dim mt-1 truncate">Ki Sutrisno, Ki Warsito</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md flex flex-col gap-1 border border-outline-variant/20 shadow-sm">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Poin Ekosistem</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-primary font-bold leading-none">850</span>
                  <span className="text-xs text-on-surface-variant">XP Budaya</span>
                </div>
                <span className="text-xs text-on-surface-variant mt-1">Peringkat 3 se-Salatiga</span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Milestone Section */}
        <section className="w-full bg-surface-container-low py-10 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <span className="material-symbols-outlined text-[20px]">timeline</span>
                  <span className="text-xs uppercase tracking-wider font-bold">Jejak Perkembangan Talenta</span>
                </div>
                <h2 className="text-2xl text-on-surface font-bold" style={{ fontFamily: "var(--font-playfair)" }}>Peta Jalan Dedikasi Dalang Muda</h2>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <span>Progres Kumulatif:</span>
                <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-bold text-xs">Fase 6 dari 8 (68%)</span>
              </div>
            </div>

            <div className="w-full overflow-x-auto pb-2 pt-2">
              <div className="min-w-[940px] grid grid-cols-8 gap-3 relative">
                <div className="absolute top-5 left-6 right-6 h-1 bg-surface-container-highest rounded-full z-0 pointer-events-none">
                  <div className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full" style={{ width: "68%" }} />
                </div>
                
                {/* Steps */}
                {[
                  { step: 1, title: "Pendaftaran & Profil", status: "Selesai", done: true },
                  { step: 2, title: "Portofolio Perdana", status: "Selesai", done: true },
                  { step: 3, title: "Verifikasi Mentor", status: "Ki Sutrisno", done: true },
                  { step: 4, title: "QR Passport WID", status: "Diterbitkan", done: true },
                  { step: 5, title: "Peta Talenta Salatiga", status: "Aktif di Peta", done: true },
                  { step: 6, title: "Akademi Fase 2", status: "75% Berjalan", active: true },
                  { step: 7, title: "Kolaborasi Lintas Aliran", status: "Mendatang" },
                  { step: 8, title: "Rekomendasi Profesional", status: "Taraf Nasional" },
                ].map((st, i) => (
                  <div key={i} className={`relative z-10 flex flex-col items-center text-center gap-2 ${st.active ? '' : st.done ? '' : 'opacity-60 hover:opacity-100 transition-opacity'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${st.done ? 'bg-primary text-on-primary shadow-[0_0_16px_rgba(255,213,109,0.4)]' : st.active ? 'bg-primary-container text-on-primary-container ring-4 ring-primary/30 animate-pulse shadow-[0_0_24px_rgba(229,184,66,0.5)]' : 'bg-surface-container-high text-on-surface-variant'}`}>
                      <span className="material-symbols-outlined text-[20px] font-bold">
                        {st.done ? 'check' : st.active ? 'menu_book' : 'radio_button_unchecked'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-xs font-bold ${st.active ? 'text-primary font-bold' : st.done ? 'text-primary' : 'text-on-surface-variant'}`}>Langkah {st.step}</span>
                      <span className={`text-xs font-semibold leading-tight mt-0.5 ${st.active ? 'text-primary font-bold' : 'text-on-surface'}`}>{st.title}</span>
                      <span className="text-[11px] text-tertiary-fixed-dim mt-1 font-medium">{st.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Mosaic */}
        <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Masterclass Cards */}
              <div className="p-6 rounded-2xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">school</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Masterclass Pedalangan Salatiga</h3>
                      <p className="text-xs text-on-surface-variant">Kurikulum komprehensif bersama kurator PEPADI &amp; Dalang Senior</p>
                    </div>
                  </div>
                  <Link href="/akademi" className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                    Jelajahi Semua Silabus
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Course 1 */}
                  <div className="p-4 rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[26px]">sports_kabaddi</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                            Teknik Sabet Tingkat Lanjut: Perang Kembang &amp; Alus
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-primary-container/30 text-primary text-[11px] font-bold">Sedang Aktif</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant text-xs flex-wrap">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">person</span> Ki Warsito</span>
                          <span>•</span>
                          <span>4 dari 5 Modul Selesai</span>
                          <span>•</span>
                          <span className="text-tertiary font-semibold">Tinggal Tugas Mandiri</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                      <span className="text-xs text-primary font-bold hidden sm:block">80%</span>
                      <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container text-xs font-bold hover:bg-primary transition-colors w-full sm:w-auto flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">play_arrow</span> Lanjutkan
                      </button>
                    </div>
                  </div>

                  {/* Course 2 */}
                  <div className="p-4 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-tertiary shrink-0">
                        <span className="material-symbols-outlined text-[26px]">graphic_eq</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                            Suluk &amp; Tembang Pathet Manyura
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary text-[11px] font-bold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">check_circle</span> Selesai
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant text-xs flex-wrap">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">person</span> Ki Sutrisno</span>
                          <span>•</span>
                          <span>Nilai Kurasi: 94/100 (A+)</span>
                          <span>•</span>
                          <span className="text-on-surface-variant">Sertifikat Tersedia</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface text-xs font-medium transition-colors flex items-center gap-1 w-full sm:w-auto justify-center">
                      <span className="material-symbols-outlined text-[16px]">download</span> Unduh Sertifikat
                    </button>
                  </div>

                  {/* Course 3 */}
                  <div className="p-4 rounded-xl bg-surface-container-high/40 hover:bg-surface-container-high transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined text-[26px]">campaign</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                            Digital Branding &amp; Manajemen Panggung Mandiri
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-[11px] font-bold">Modul Baru Disbudpar</span>
                        </div>
                        <div className="flex items-center gap-3 text-on-surface-variant text-xs flex-wrap">
                          <span>Ekonomi Kreatif Pedalangan Era Digital</span>
                          <span>•</span>
                          <span>Durasi 3 Jam Materi</span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface text-xs font-medium transition-colors flex items-center gap-1 w-full sm:w-auto justify-center">
                      <span className="material-symbols-outlined text-[16px]">lock_open</span> Buka Modul
                    </button>
                  </div>
                </div>
              </div>

              {/* Mentoring Session */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-container via-surface-container to-surface-container-high shadow-md border border-outline-variant/20 flex flex-col gap-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">event_upcoming</span>
                    <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Jadwal Mentoring Terdekat</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Tatap Muka Sanggar</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-lowest flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-outline-variant/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex flex-col items-center justify-center text-center shrink-0">
                      <span className="text-[10px] text-primary uppercase font-bold">SABTU</span>
                      <span className="text-xl text-on-surface font-bold leading-none">15</span>
                    </div>
                    <div className="flex flex-col gap-1">
                       <h4 className="text-sm font-bold text-on-surface">Bedah Lakon &quot;Bima Suci&quot; &amp; Olah Karakter Antasena</h4>
                      <div className="flex items-center gap-2 text-on-surface-variant text-xs flex-wrap">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">schedule</span> 15:00 - 17:30 WIB</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-tertiary">location_on</span> Sanggar Bima Suci, Sidorejo Salatiga</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Image alt="Mentor" className="w-6 h-6 rounded-full object-cover" src={stitchImages.sutrisnoPortrait} width={24} height={24} unoptimized />
                        <span className="text-xs text-on-surface">Pembina: <strong>Ki Dalang Sutrisno</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                    <button 
                      onClick={() => setConfirmed(!confirmed)}
                      className={`flex-1 md:flex-initial px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 ${confirmed ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-primary-container hover:bg-primary text-on-primary-container'}`}
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">{confirmed ? 'check' : 'how_to_reg'}</span>
                      <span>{confirmed ? 'Terkonfirmasi' : 'Konfirmasi Hadir'}</span>
                    </button>
                    <button className="px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium transition-colors flex items-center justify-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[18px]">description</span> Catatan Sesi
                    </button>
                  </div>
                </div>
              </div>

              {/* Feed / Documentation */}
              <div className="p-6 rounded-2xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Dokumentasi Pagelaran Terakhir</h3>
                  <Link href="/showcase" className="text-primary text-xs font-semibold hover:underline flex items-center gap-1">
                    Lihat Galeri Sabetan
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden bg-surface-container-high group flex flex-col border border-outline-variant/10 shadow-sm">
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={stitchImages.mentorSilhouette} alt="Gatotkaca Gugur" fill unoptimized />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary text-xs font-semibold">Gatutkaca Gugur</span>
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-on-surface">Pentas Malam 1 Suro Salatiga</h4>
                      <p className="text-xs text-on-surface-variant line-clamp-2">Pementasan durasi 4 jam padat sanggit di Pendopo Pakuwon dengan gamelan pelog selendro gabungan.</p>
                      <div className="flex items-center justify-between pt-2 mt-1">
                        <span className="text-xs text-on-surface-variant">12 Juli 2024</span>
                        <span className="text-tertiary text-xs font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">visibility</span> 1.4k Pemirsa
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-surface-container-high group flex flex-col border border-outline-variant/10 shadow-sm">
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={stitchImages.sabetanBima} alt="Karna Tanding" fill unoptimized />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary text-xs font-semibold">Karna Tanding</span>
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-on-surface">Festival Budaya Pelajar Tingkat Karesidenan</h4>
                      <p className="text-xs text-on-surface-variant line-clamp-2">Eksplorasi sabetan dinamis dengan orkestrasi kendang rancak gagrak anyar.</p>
                      <div className="flex items-center justify-between pt-2 mt-1">
                        <span className="text-xs text-on-surface-variant">28 September 2024</span>
                        <span className="text-tertiary text-xs font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">star</span> Penghargaan Khusus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 4 Cols */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Badges */}
              <div className="p-6 rounded-2xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">workspace_premium</span>
                    <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Pencapaian Budaya</h3>
                  </div>
                  <span className="text-xs text-primary font-bold">4 / 5 Diraih</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Lencana apresiasi non-kompetitif pelestari adiluhung Kota Salatiga.
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { title: "Bintang Pentas Perdana", desc: "Menyelesaikan 1 kelir penuh semalam suntuk", icon: "grade", unlocked: true },
                    { title: "Sabet Sejati", desc: "Penguasaan 5 karakter perang gada & panah", icon: "swords", unlocked: true },
                    { title: "Duta Budaya Pelajar", desc: "Edukasi wayang ke 3 sekolah menengah", icon: "local_library", unlocked: true },
                    { title: "Pelestari Muda Aktif", desc: "Keaktifan latihan sanggar 6 bulan konsisten", icon: "eco", unlocked: true },
                    { title: "Kolaborator Kreatif", desc: "Selesaikan 1 kolaborasi lintas genre seni lagi", icon: "lock", unlocked: false },
                  ].map((b, idx) => (
                    <div key={idx} className={`p-3 rounded-xl flex items-center gap-3 border ${b.unlocked ? 'bg-surface-container-high border-outline-variant/10' : 'bg-surface-container-high/40 border-outline-variant/5 opacity-60'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${b.unlocked ? 'bg-primary/20 text-primary shadow-[0_0_12px_rgba(255,213,109,0.3)]' : 'bg-surface-container-highest text-outline'}`}>
                        <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-sm font-bold ${b.unlocked ? 'text-on-surface' : 'text-outline'}`}>{b.title}</span>
                          {b.unlocked ? <span className="material-symbols-outlined text-primary text-[14px]">verified</span> : <span className="text-[10px] px-1.5 rounded bg-surface-container-highest text-outline">Terkunci</span>}
                        </div>
                        <span className="text-xs text-on-surface-variant leading-tight mt-0.5">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apps */}
              <div className="p-6 rounded-2xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">assignment</span>
                    <h3 className="text-lg font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Aplikasi Peluang Saya</h3>
                  </div>
                  <Link href="/peluang" className="text-xs text-primary hover:underline">Semua</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-3.5 rounded-xl bg-surface-container-high flex flex-col gap-1.5 border border-outline-variant/10">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary text-[11px] font-bold">Menunggu Kurasi</span>
                      <span className="text-xs text-on-surface-variant">Diajukan 4 hari lalu</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface">Pagelaran Kolosal Hari Wayang Nasional 2025</h4>
                    <span className="text-xs text-on-surface-variant">Dinas Kebudayaan &amp; Pariwisata Kota Salatiga</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container-high flex flex-col gap-1.5 border border-outline-variant/10">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary text-[11px] font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">check</span> Terpilih Utama
                      </span>
                      <span className="text-xs text-on-surface-variant">Pentas Juli</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface">Panggung Apresiasi Hari Jadi ke-1275 Salatiga</h4>
                    <span className="text-xs text-tertiary font-semibold">Jadwal Gladi Bersih: 20 Juli 2025</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 rounded-2xl bg-surface-container shadow-md border border-outline-variant/20 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-on-surface flex items-center gap-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
                  Aksi Cepat Talenta
                </h3>
                <div className="flex flex-col gap-2.5">
                  {[
                    { title: "Tambah Rekam Pagelaran Baru", desc: "Unggah sinopsis & video cuplikan", icon: "library_add", color: "text-primary bg-primary-container/20" },
                    { title: "Minta Verifikasi Skill ke Mentor", desc: "Kirim evaluasi sabet & sanggit", icon: "verified_user", color: "text-tertiary bg-tertiary-container/20" },
                    { title: "Perbarui Video Showcase", desc: "Tampilkan ke profil publik WID", icon: "smart_display", color: "text-secondary bg-secondary-container/20" },
                  ].map((act, i) => (
                    <button key={i} className="w-full p-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-left text-on-surface flex items-center gap-3 transition-colors group border border-outline-variant/10" type="button">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${act.color}`}>
                        <span className="material-symbols-outlined text-[20px]">{act.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold group-hover:text-primary transition-colors">{act.title}</span>
                        <span className="text-[11px] text-on-surface-variant">{act.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
