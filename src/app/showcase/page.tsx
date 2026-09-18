"use client";
import React, { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { showcaseItems } from "@/data/demo";
import { stitchImages } from "@/data/stitchImages";

const categories = ["Semua Dokumentasi", "Lakon Mahabarata", "Lakon Ramayana", "Carangan Kontemporer", "Pentas Wayang Bocah", "Eksperimen Multimedia"];

const chapters = [
  { time: "00:00", title: "Jejer Ayodya & Suluk Pathet Nem", desc: "Pembukaan agung, laras slendro, introduksi sang Prabu." },
  { time: "14:20", title: "Kumbakarna Gugur & Wejangan Dharma", desc: "Dialog batin membela tumpah darah demi bangsa." },
  { time: "38:45", title: "Sabetan Perang Kembang", desc: "Koreografi bambangan gerak luwes menaklukkan Cakil." },
  { time: "55:10", title: "Tancep Kayon & Epilog Filosofi", desc: "Simbolisasi kosmos gunungan, penutupan pathet manyura." },
];

const tracks = [
  { title: "Suluk Pathet Nem Jingking", meta: "Laras Slendro • Nyi Inaz Fairoza", dur: "03:24", lyric: "Mijil cucuringan, kang sekar arum...", trans: "Tembang pembuka yang menggambarkan kesucian pencarian jati diri Bima di samudra rasa." },
  { title: "Ada-Ada Girisa", meta: "Laras Pelog Barang • Bagas Wicaksono", dur: "02:15", lyric: "Girisa kencana, gumebyar...", trans: "Ada-ada perang yang membakar semangat kesatria sebelum terjun ke medan Kurusetra." },
  { title: "Sendhon Kloloran", meta: "Laras Slendro Manyura • Sekar Ayu", dur: "04:10", lyric: "Kloloran, roning puspa...", trans: "Sendhon sendu yang mengiringi perpisahan dan doa keselamatan bagi sang pahlawan." },
];

export default function ShowcasePage() {
  const [activeCat, setActiveCat] = useState(0);
  const [activeChapter, setActiveChapter] = useState(2);
  const [activeTrack, setActiveTrack] = useState(0);
  const [playing, setPlaying] = useState(true);

  const hero = showcaseItems[0];

  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

          <section className="max-w-7xl mx-auto px-gutter pt-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs uppercase tracking-widest font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Virtual Kelir Sanctum • Arsip Digital Pagelaran
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-outline text-xs"><span className="material-symbols-outlined text-[14px] text-tertiary">verified_user</span> Kurasi Resmi PEPADI Komda Salatiga</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Panggung Virtual &amp; <span className="italic text-primary">Etalase Karya</span> Dalang Muda
                </h1>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-outline">Resolusi Arsip</span>
                  <span className="text-xs font-semibold text-on-surface">4K UHD Master • 24-bit PCM</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest relative">
                  <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
                    <Image src={hero.image} alt={hero.title} fill unoptimized className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/40" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                      <span className="px-2.5 py-1 rounded bg-secondary-container text-secondary text-xs font-bold tracking-wider uppercase flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">radio_button_checked</span> Live Archive</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container-highest/90 text-on-surface text-xs backdrop-blur-md">4K UHD 60FPS</span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary text-xs"><span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" } as unknown as React.CSSProperties}>workspace_premium</span> Nilai Kurasi PEPADI: 98/100</span>
                    </div>
                    <button className="relative z-20 w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[44px]" style={{ fontVariationSettings: "'FILL' 1" } as unknown as React.CSSProperties}>play_arrow</span>
                      <span className="absolute -inset-2 rounded-full bg-primary/20 animate-ping" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col gap-2 bg-gradient-to-t from-surface-container-lowest to-transparent">
                      <div className="w-full flex items-center gap-3">
                        <div className="relative w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: "38.5%" }} />
                          <span className="absolute top-0 left-[0%] w-0.5 h-full bg-on-surface-variant/70" />
                          <span className="absolute top-0 left-[14.3%] w-0.5 h-full bg-on-surface-variant/70" />
                          <span className="absolute top-0 left-[38.75%] w-0.5 h-full bg-primary ring-2 ring-primary" />
                          <span className="absolute top-0 left-[55.1%] w-0.5 h-full bg-on-surface-variant/70" />
                        </div>
                        <span className="text-xs text-primary font-semibold whitespace-nowrap">38:45 / 01:38:12</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-on-surface">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">play_circle</span> Mainkan</span>
                          <span className="inline-flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">volume_up</span> 24-bit Lossless</span>
                          <span className="text-outline hidden sm:inline">|</span>
                          <span className="text-on-surface-variant hidden sm:inline-flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> 8,421 Pemirsa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">subtitles</span>
                          <span className="material-symbols-outlined text-[18px]">surround_sound</span>
                          <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary text-xs font-semibold">Lakon Klasik Dewa Ruci</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs">Gaya Surakarta Prasaja</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container text-tertiary text-xs inline-flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">theater_comedy</span> Pendopo Pakuwon Salatiga</span>
                      </div>
                      <h2 className="text-xl font-bold text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>Lakon Dewa Ruci: Samudra Makrifat</h2>
                      <p className="text-sm text-on-surface-variant max-w-2xl">Eksplorasi mistisisme Bima mengarungi Samodra Minangkalbu mencari Tirta Perwitasari. Teknik sabetan halus gemulai nan tegas oleh dalang remaja putri.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm flex items-center gap-1.5 font-semibold"><span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" } as unknown as React.CSSProperties}>volunteer_activism</span> Dukung Talenta</button>
                      <button className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface text-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">share</span> Bagikan Arsip</button>
                      <button className="px-4 py-2 rounded-lg bg-surface-container-highest text-primary-fixed text-sm flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">badge</span> Paspor Dalang</button>
                    </div>
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-3 bg-surface-container/40 p-3 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Image src={stitchImages.inazHeadshot} alt="Inaz" width={40} height={40} unoptimized className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <div className="flex items-center gap-1.5"><span className="text-sm font-semibold text-on-surface">Nyi Inaz Fairoza Rizqillah</span><span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" } as unknown as React.CSSProperties}>verified</span></div>
                          <span className="text-xs text-on-surface-variant">Dalang Remaja Putri • Sanggar Sarotama</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <div className="flex -space-x-2"><span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary shadow">ML</span><span className="w-8 h-8 rounded-full bg-surface-bright flex items-center justify-center text-xs font-bold text-tertiary shadow">SM</span></div>
                        <div className="flex flex-col text-xs"><span className="font-semibold text-on-surface">Pengrawit: Mudha Laras SMAN 1</span><span className="text-outline">16 Penabuh &amp; 3 Pesinden</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-surface-container flex flex-col">
                  <div className="p-4">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/20">
                      <span className="flex items-center gap-2 text-sm font-semibold text-on-surface"><span className="material-symbols-outlined text-primary text-[20px]">movie_edit</span> Cuplikan Babak Pilihan</span>
                      <span className="text-[11px] text-outline px-2 py-0.5 rounded bg-surface-container-highest">4 Cuplikan</span>
                    </div>
                    <p className="text-xs text-on-surface-variant mb-3">Klik babak untuk melompat ke momen dramatik dan sabetan wayang.</p>
                    <div className="flex flex-col gap-2">
                      {chapters.map((c, i) => (
                        <button key={c.time} onClick={() => setActiveChapter(i)} className={i === activeChapter ? "text-left w-full p-3 rounded-lg bg-surface-container-high shadow-sm flex items-start gap-3 border border-primary/20" : "text-left w-full p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high flex items-start gap-3 border border-transparent"}>
                          <span className={i === activeChapter ? "px-2 py-1 rounded bg-primary-container text-on-primary-container text-xs font-mono font-bold shrink-0" : "px-2 py-1 rounded bg-surface-container-highest text-primary text-xs font-mono shrink-0"}>{c.time}</span>
                          <span className="flex flex-col flex-1 min-w-0 text-left">
                            <span className={i === activeChapter ? "text-sm font-semibold text-primary flex items-center justify-between gap-2" : "text-sm font-semibold text-on-surface flex items-center justify-between gap-2"}><span className="truncate">{c.title}</span><span className={i === activeChapter ? "material-symbols-outlined text-primary text-[18px]" : "material-symbols-outlined text-outline text-[18px]"}>{i === activeChapter ? "graphic_eq" : "play_arrow"}</span></span>
                            <span className={i === activeChapter ? "text-xs text-on-surface mt-0.5 line-clamp-1" : "text-xs text-on-surface-variant mt-0.5 line-clamp-1"}>{c.desc}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 m-4 bg-surface-container-low rounded-xl">
                    <div className="flex items-center gap-2 mb-2"><span className="material-symbols-outlined text-primary text-[18px]">auto_stories</span><span className="text-sm font-semibold text-on-surface">Catatan Kurator Budaya</span></div>
                    <p className="text-xs text-on-surface-variant italic">“Inaz menampilkan penguasaan antawacana suara ksatria yang sangat matang bagi dalang seusianya.”</p>
                    <div className="flex items-center justify-between text-xs text-outline mt-2"><span>Ki Suwito Radyo (PEPADI)</span><span className="text-tertiary">Terverifikasi Arsip A</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-gutter pb-4">
            <div className="bg-surface-container-low/70 backdrop-blur-md rounded-xl p-4 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-lg border border-outline-variant/20">
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                {categories.map((cat, i) => (
                  <button key={cat} onClick={() => setActiveCat(i)} className={i === activeCat ? "px-4 py-2 rounded-lg bg-primary-container text-on-primary-container text-xs font-semibold whitespace-nowrap shadow-sm" : "px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant text-xs whitespace-nowrap"}>{cat} {i === 0 ? "(42)" : i === 1 ? "(24)" : i === 2 ? "(8)" : ""}</button>
                ))}
              </div>
              <div className="flex items-center gap-2 w-full lg:w-auto justify-end flex-wrap">
                <span className="flex items-center gap-1 bg-surface-container-lowest rounded-lg px-3 py-1.5 text-xs text-on-surface"><span className="material-symbols-outlined text-outline text-[18px]">theater_comedy</span> Semua Gaya</span>
                <span className="flex items-center gap-1 bg-surface-container-lowest rounded-lg px-3 py-1.5 text-xs text-on-surface"><span className="material-symbols-outlined text-outline text-[18px]">timer</span> Durasi Pentas</span>
                <span className="flex items-center gap-1 bg-surface-container-lowest rounded-lg px-3 py-1.5 text-xs text-on-surface"><span className="material-symbols-outlined text-outline text-[18px]">calendar_month</span> Arsip 2024-2026</span>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-gutter py-6">
            <div className="flex items-center justify-between mb-6">
              <span className="flex items-center gap-2 text-lg font-semibold text-on-surface"><span className="w-2.5 h-6 bg-primary rounded-full" /> Dokumentasi Pagelaran Unggulan Salatiga</span>
              <span className="hidden sm:inline text-xs text-outline">Menampilkan 5 dari 42 Master Rekaman</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {showcaseItems.map((item) => (
                <div key={item.id} className="bg-surface-container-low rounded-xl overflow-hidden group flex flex-col hover:bg-surface-container transition-colors shadow-lg border border-outline-variant/20">
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-container-lowest">
                    <Image src={item.image} alt={item.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 text-primary text-[11px] font-semibold backdrop-blur-sm">4K UHD</span>
                    <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-surface-container-lowest/90 text-on-surface text-xs font-mono backdrop-blur-sm">{item.duration}</span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/90 text-on-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined">play_arrow</span></span>
                  </div>
                  <div className="p-4 flex flex-col flex-1 gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-primary text-xs">Mahabarata • Baratayuda</span>
                        <span className="text-xs text-outline flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> {(item.views / 1000).toFixed(1)}k</span>
                      </div>
                      <h3 className="text-sm font-bold text-on-surface group-hover:text-primary leading-tight">{item.title}</h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2">Pagelaran wayang kulit Salatiga — kolaborasi sanggar dan talenta muda terverifikasi.</p>
                    </div>
                    <div className="pt-3 flex items-center justify-between border-t border-outline-variant/20">
                      <span className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary">{item.artist.slice(0, 2).toUpperCase()}</span><span className="flex flex-col text-xs"><span className="font-semibold text-on-surface leading-none">{item.artist}</span><span className="text-outline">Sanggar Bima Suci</span></span></span>
                      <span className="p-2 rounded-lg bg-surface-container-highest text-primary"><span className="material-symbols-outlined text-[18px]">arrow_forward</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-gutter py-8">
            <div className="bg-surface-container rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl border border-outline-variant/20">
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold"><span className="material-symbols-outlined text-[20px]">graphic_eq</span> Resonansi Rasa Pedalangan</span>
                  <h2 className="text-2xl font-bold text-on-surface mt-1" style={{ fontFamily: "var(--font-playfair)" }}>Audio Suluk &amp; Karawitan Soundboard</h2>
                  <p className="text-sm text-on-surface-variant max-w-2xl mt-1">Dengarkan lantunan suluk vokal dalang muda bersama lirik tembang macapat klasik.</p>
                </div>
                <span className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl self-start md:self-auto"><span className="material-symbols-outlined text-tertiary text-[20px]">music_note</span><span className="flex flex-col text-xs"><span className="text-outline uppercase text-[10px]">Master Audio</span><span className="font-semibold text-tertiary">24-bit 96kHz Lossless FLAC</span></span></span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-outline font-semibold">Daftar Rekaman Suluk Unggulan</span>
                  {tracks.map((t, i) => (
                    <button key={t.title} onClick={() => { setActiveTrack(i); setPlaying(true); }} className={i === activeTrack ? "p-4 rounded-xl bg-surface-container-high flex items-center justify-between text-left border border-primary/20" : "p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high flex items-center justify-between text-left border border-transparent"}>
                      <span className="flex items-center gap-3">
                        <span className={i === activeTrack && playing ? "w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center" : "w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center"}>
                          <span className="material-symbols-outlined text-[20px]" style={i === activeTrack && playing ? ({ fontVariationSettings: "'FILL' 1" } as unknown as React.CSSProperties) : undefined}>{i === activeTrack && playing ? "pause" : "play_arrow"}</span>
                        </span>
                        <span className="flex flex-col"><span className={i === activeTrack ? "text-sm font-semibold text-primary" : "text-sm font-semibold text-on-surface"}>{t.title}</span><span className="text-xs text-on-surface-variant">{t.meta}</span></span>
                      </span>
                      <span className="flex flex-col items-end"><span className="text-xs text-outline font-mono">{t.dur}</span>{i === activeTrack && playing && <span className="w-2 h-2 rounded-full bg-primary mt-1 animate-ping" />}</span>
                    </button>
                  ))}
                  <div className="mt-2 bg-surface-container-lowest p-4 rounded-xl">
                    <span className="text-xs text-primary uppercase font-semibold flex items-center gap-1 mb-2"><span className="material-symbols-outlined text-[16px]">touch_app</span> Interaktif Dodogan &amp; Kepyak</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        ["radio_button_checked", "Dodogan Kayu"],
                        ["lens_blur", "Kepyak Perunggu"],
                        ["album", "Gong Gedhe"],
                      ].map(([icon, label]) => (
                        <span key={label} className="p-2 rounded bg-surface-container text-on-surface text-xs font-semibold flex flex-col items-center gap-1"><span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>{label}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-on-surface">{tracks[activeTrack].title}</span>
                    <span className="text-xs text-outline">{tracks[activeTrack].meta}</span>
                  </div>
                  <div className="rounded-xl bg-surface-container p-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">Lirik Tembang</span>
                    <p className="text-sm text-on-surface italic mt-2 leading-relaxed">“{tracks[activeTrack].lyric}”</p>
                    <p className="text-xs text-on-surface-variant mt-3">{tracks[activeTrack].trans}</p>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span key={i} className={i % 3 === 0 ? "flex-1 rounded-full bg-primary" : "flex-1 rounded-full bg-primary/40"} style={{ height: `${20 + Math.abs(Math.sin((i + activeTrack * 3) * 0.9)) * 60}%` }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setPlaying(!playing)} className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined">{playing ? "pause" : "play_arrow"}</span></button>
                    <div className="flex-1 h-1.5 bg-surface-variant rounded-full overflow-hidden"><span className="block h-full bg-primary" style={{ width: playing ? "46%" : "18%" }} /></div>
                    <span className="text-xs text-outline font-mono">{playing ? "01:12 / " + tracks[activeTrack].dur : "00:00 / " + tracks[activeTrack].dur}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
