"use client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { stitchImages } from "@/data/stitchImages";

type Cat = "all" | "school" | "council" | "partner";
type District = "all" | "sidorejo" | "tingkir" | "argomulyo" | "sidomukti";

const cards = [
  {
    id: "SGR-SLTG-001",
    title: "Sanggar Seni Pedalangan Bima Suci",
    pembina: "Ki Dalang Sutrisno",
    role: "Maestro Gaya Surakarta",
    district: "sidorejo" as District,
    cat: "all" as Cat,
    members: "8 Dalang Muda",
    sub: "Termasuk Inaz Fairoza",
    spec: "Gaya Surakarta",
    specSub: "Wayang Kulit Purwa",
    jadwal: "Sel & Sab Sore",
    jadwalSub: "15:30 - 20:00 WIB",
    loc: "Sidorejo Lor",
    badge: "Unggulan Utama PEPADI",
    badgeCls: "bg-primary-container/20 text-primary",
    image: stitchImages.sanggarBimaSuci,
  },
  {
    id: "SGR-SLTG-003",
    title: "Sanggar Karawitan Giri Siswo",
    pembina: "Ki Warsito",
    role: "Pengrawit Senior & Dalang Bocah",
    district: "tingkir" as District,
    cat: "all" as Cat,
    members: "6 Dalang Remaja",
    sub: "+15 Penabuh Muda",
    spec: "Pesisiran & Bocah",
    specSub: "Sabetan Cepat & Kompak",
    jadwal: "Rabu & Minggu",
    jadwalSub: "09:00 - 14:00 WIB",
    loc: "Tingkir Tengah",
    badge: "Spesialisasi Bocah & Pesisiran",
    badgeCls: "bg-secondary-container/30 text-secondary",
    image: stitchImages.sanggarGiriSiswo,
  },
  {
    id: "SGR-SLTG-007",
    title: "Padepokan Madukara",
    pembina: "Nyi Cendaniraras",
    role: "Maestro Suluk & Antawacana",
    district: "argomulyo" as District,
    cat: "all" as Cat,
    members: "Studio Akustik",
    sub: "Laras Gender Slendro",
    spec: "Vokal & Keprakan",
    specSub: "Pelatihan Suluk Klasik",
    jadwal: "Kamis & Sabtu",
    jadwalSub: "19:00 - 22:00 WIB",
    loc: "Argomulyo",
    badge: "Vokal Sindhen, Keprak & Suluk",
    badgeCls: "bg-tertiary-container/20 text-tertiary",
    image: stitchImages.padepokanMadukara,
  },
  {
    id: "SCH-SLTG-001",
    title: "Laboratorium Seni Tradisi SMAN 1 Salatiga",
    pembina: "SMASA Wayang Lab",
    role: "Inkubator Kelahiran Inovasi WAYANG ID",
    district: "sidorejo" as District,
    cat: "school" as Cat,
    members: "42 Siswa",
    sub: "Eskul & Vokasi IT",
    spec: "Digitalisasi Lakon",
    specSub: "Platform WAYANG ID",
    jadwal: "Studio Rekam",
    jadwalSub: "& Ruang Bedah Naskah",
    loc: "SMASA Wayang Lab",
    badge: "Sekolah Penggerak Budaya",
    badgeCls: "bg-primary-container/20 text-primary",
    image: stitchImages.smaLabDigital,
  },
  {
    id: "SCH-SLTG-004",
    title: "SMKN 1 Salatiga — Konsentrasi Seni Musik Karawitan",
    pembina: "Konsentrasi Karawitan",
    role: "Inkubasi Pengrawit Profesional",
    district: "sidomukti" as District,
    cat: "school" as Cat,
    members: "28 Pengrawit",
    sub: "Sertifikasi BNSP",
    spec: "3 Rancak Gamelan",
    specSub: "Standar Konser Terbuka",
    jadwal: "8 Production House",
    jadwalSub: "Pentas Keliling Jateng",
    loc: "Sidomukti",
    badge: "Vokasi Karawitan & Tata Suara",
    badgeCls: "bg-tertiary-container/20 text-tertiary",
    image: stitchImages.smknKarawitan,
  },
];

export default function SanggarPage() {
  const [cat, setCat] = useState<Cat>("all");
  const [district, setDistrict] = useState<District>("all");

  const filtered = cards.filter((c) => {
    const matchCat = cat === "all" ? true : c.cat === cat;
    const matchDist = district === "all" ? true : c.district === district;
    if (cat === "council" || cat === "partner") return false;
    return matchCat && matchDist;
  });

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary/30 selection:text-primary">
      <SiteHeader />
      <main className="flex-1 pt-24 pb-16">
        <section className="w-full relative overflow-hidden bg-surface-container-lowest py-10 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/20">
          <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
          <div className="absolute left-1/3 -bottom-24 w-80 h-80 rounded-full bg-tertiary-container/10 blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs uppercase tracking-widest shadow-sm border border-outline-variant/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Registri Resmi Kebudayaan Disbudpar Kota Salatiga
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-none mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Pilar Ekosistem &amp; Direktori <span className="text-primary italic">Sanggar Budaya</span> Salatiga
                </h1>
                <p className="text-sm sm:text-base text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
                  Menghubungkan ruang pembinaan sanggar tradisional, laboratorium seni sekolah vokasi, dan jejaring pentahelix pelestari wayang di 4 kecamatan.
                </p>
              </div>
              <div className="flex items-center gap-3 self-start lg:self-end shrink-0">
                <button className="px-4 py-2.5 rounded-xl bg-primary-container text-on-primary-container text-sm font-semibold flex items-center gap-2 shadow-md hover:bg-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">domain_add</span>
                  Daftarkan Sanggar Baru
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-surface-container-high text-on-surface text-sm font-medium flex items-center gap-2 hover:bg-surface-bright transition-all border border-outline-variant/20" type="button">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Buku Induk PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-sm border border-outline-variant/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/40" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Pusat Latihan</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">theater_comedy</span>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">8</p>
                <p className="text-xs text-on-surface-variant">Sanggar Aktif Terverifikasi</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-sm border border-outline-variant/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-tertiary/40" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Vokasi Seni</span>
                  <span className="material-symbols-outlined text-tertiary text-[20px]">school</span>
                </div>
                <p className="text-3xl font-bold text-tertiary mt-2">12</p>
                <p className="text-xs text-on-surface-variant">Sekolah Mitra Penggerak</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-sm border border-outline-variant/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary-fixed-dim/40" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Kurator &amp; Guru</span>
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">person_celebrate</span>
                </div>
                <p className="text-3xl font-bold text-primary-fixed-dim mt-2">14</p>
                <p className="text-xs text-on-surface-variant">Maestro Pendamping</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-sm border border-outline-variant/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary/40" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Pentahelix Venue</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
                </div>
                <p className="text-3xl font-bold text-secondary mt-2">18</p>
                <p className="text-xs text-on-surface-variant">Mitra Industri &amp; Pariwisata</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-sm border border-outline-variant/20 relative overflow-hidden col-span-2 sm:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-tertiary-container" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Legalitas Daerah</span>
                  <span className="material-symbols-outlined text-tertiary text-[20px]">verified_user</span>
                </div>
                <p className="text-3xl font-bold text-tertiary mt-2">100%</p>
                <p className="text-xs text-on-surface-variant">Terintegrasi Disbudpar</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setCat("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${cat === "all" ? "bg-primary-container text-on-primary-container shadow-md border-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border-outline-variant/20"}`}
                type="button"
              >
                Semua Sanggar Pedalangan (8)
              </button>
              <button
                onClick={() => setCat("school")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${cat === "school" ? "bg-primary-container text-on-primary-container shadow-md border-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border-outline-variant/20"}`}
                type="button"
              >
                Sekolah Binaan (12)
              </button>
              <button
                onClick={() => setCat("council")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${cat === "council" ? "bg-primary-container text-on-primary-container shadow-md border-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border-outline-variant/20"}`}
                type="button"
              >
                Dewan &amp; Asosiasi (PEPADI/DKS)
              </button>
              <button
                onClick={() => setCat("partner")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${cat === "partner" ? "bg-primary-container text-on-primary-container shadow-md border-primary-container" : "bg-surface-container-high text-on-surface-variant hover:text-on-surface border-outline-variant/20"}`}
                type="button"
              >
                Mitra Venue &amp; Industri
              </button>
            </div>
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              {(["all", "sidorejo", "tingkir", "argomulyo", "sidomukti"] as District[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDistrict(d)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${district === d ? "bg-primary text-on-primary border-primary" : "bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/20"}`}
                >
                  {d === "all" ? "Semua" : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {filtered.length === 0 ? (
                <div className="p-10 rounded-2xl bg-surface-container-low border border-outline-variant/20 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[32px] text-outline">search_off</span>
                  <p className="mt-2 text-sm">Tidak ada sanggar pada kategori ini — hubungi Disbudpar untuk registrasi.</p>
                </div>
              ) : (
                filtered.map((s) => (
                  <article key={s.id} className="bg-surface-container-low rounded-2xl p-5 shadow-lg border border-outline-variant/20 relative overflow-hidden hover:shadow-2xl transition-all">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-fixed-dim to-transparent" />
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <div className="w-full sm:w-56 h-52 shrink-0 rounded-xl overflow-hidden relative shadow-md">
                        <Image fill unoptimized className="object-cover" src={s.image} alt={s.title} />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-primary text-xs font-semibold">
                          {s.loc}
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${s.badgeCls}`}>{s.badge}</span>
                          <span className="text-xs text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-tertiary">verified</span>
                            ID: {s.id}
                          </span>
                        </div>
                        <h2 className="text-base font-bold tracking-tight">{s.title}</h2>
                        <p className="text-xs text-primary mt-0.5 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">record_voice_over</span>
                          Pembina: <span className="font-semibold text-on-surface">{s.pembina}</span> ({s.role})
                        </p>
                        <div className="grid grid-cols-3 gap-2 my-3 py-2 border-y border-outline-variant/30">
                          <div className="flex flex-col">
                            <span className="text-[11px] text-on-surface-variant">Binaan</span>
                            <span className="text-xs font-bold">{s.members}</span>
                            <span className="text-[10px] text-tertiary leading-tight">{s.sub}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] text-on-surface-variant">Spesialisasi</span>
                            <span className="text-xs font-bold truncate">{s.spec}</span>
                            <span className="text-[10px] text-on-surface-variant">{s.specSub}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] text-on-surface-variant">Jadwal</span>
                            <span className="text-xs font-bold text-primary">{s.jadwal}</span>
                            <span className="text-[10px] text-on-surface-variant">{s.jadwalSub}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pt-1 mt-auto flex-wrap">
                          <Link href="/peta" className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-primary-fixed-dim transition-colors shadow-sm">
                            Lihat Peta
                          </Link>
                          <button className="px-4 py-2 rounded-xl bg-surface-container-highest text-on-surface text-xs font-medium hover:bg-surface-bright transition-colors flex items-center gap-1.5 border border-outline-variant/10" type="button">
                            <span className="material-symbols-outlined text-[16px]">call</span>
                            Hubungi Pembina
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="bg-surface-container-low rounded-2xl p-5 shadow-lg border border-outline-variant/20 overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                    <h3 className="text-sm font-bold">Peta Sebaran Sanggar</h3>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-semibold">4 Kecamatan</span>
                </div>
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner mb-3 group border border-outline-variant/20">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${stitchImages.cctvSs}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                  <div className="absolute top-[22%] left-[32%] flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-[14px]">theater_comedy</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[33%] right-[24%] flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-[14px]">music_note</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] left-[24%] flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-[14px]">mic</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center shadow-lg animate-bounce">
                      <span className="material-symbols-outlined text-[14px]">school</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-surface">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface/90 backdrop-blur-md">-7.3305, 110.5084</span>
                    <Link href="/peta" className="text-[11px] px-3 py-1 rounded-full bg-primary text-on-primary flex items-center gap-1 font-semibold hover:bg-primary-fixed-dim shadow-sm">
                      Lihat Peta <span className="material-symbols-outlined text-[14px]">directions</span>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "Sidorejo", detail: "3 Sanggar • 4 Sekolah" },
                    { name: "Tingkir", detail: "2 Sanggar • 3 Sekolah" },
                    { name: "Argomulyo", detail: "2 Sanggar • 3 Sekolah" },
                    { name: "Sidomukti", detail: "1 Sanggar • 2 Sekolah" },
                  ].map((d) => (
                    <button key={d.name} onClick={() => setDistrict(d.name.toLowerCase() as District)} className="p-2 rounded-xl bg-surface-container text-left flex items-center justify-between hover:bg-surface-container-high transition-colors border border-outline-variant/10">
                      <div>
                        <p className="text-xs font-semibold">{d.name}</p>
                        <p className="text-[10px] text-outline">{d.detail}</p>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-primary">navigation</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-surface-container-low rounded-2xl p-5 shadow-lg border border-outline-variant/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">account_balance</span>
                  <h3 className="text-sm font-bold">Lembaga Kurasi &amp; Pengawas</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-surface-container flex items-start gap-3 border border-outline-variant/10">
                    <div className="p-2 rounded-lg bg-primary-container/20 text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">shield</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold">PEPADI Komda Kota Salatiga</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Pengawas pakem pedalangan, standarisasi lakon, dan akreditasi dalang muda.</p>
                      <span className="text-[11px] text-primary font-semibold">Sekretariat: Gedung Kesenian Salatiga</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container flex items-start gap-3 border border-outline-variant/10">
                    <div className="p-2 rounded-lg bg-tertiary-container/20 text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">palette</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold">Dewan Kesenian Salatiga (DKS)</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">Komite Seni Tradisi &amp; Teater Rakyat. Fasilitator ruang publik dan festival tahunan.</p>
                      <span className="text-[11px] text-tertiary font-semibold">Komite Pedalangan &amp; Karawitan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-10 pt-8 border-t border-outline-variant/30">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-tertiary text-xs uppercase tracking-widest">
                  Akselerasi Pentahelix 2025
                </div>
                <h2 className="text-2xl font-bold tracking-tight mt-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  Program Kolaborasi Sanggar Terpadu
                </h2>
                <p className="text-sm text-on-surface-variant mt-1 max-w-2xl">Sinergi pendanaan daerah, pertukaran instrumen, dan transfer keilmuan antargenerasi.</p>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                3 Inisiatif Aktif Berjalan
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 relative overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">swap_horizontal_circle</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-semibold">Fasilitas Bergilir</span>
                <h3 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Sanggar Berbagi Kelir</h3>
                <p className="text-sm text-on-surface-variant mt-3 mb-6 leading-relaxed">Optimalisasi peminjaman gamelan perunggu slendro pelog, kelir 12 meter, dan sound panggung antarsanggar tanpa biaya sewa komersial.</p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Terpakai: <span className="text-on-surface font-semibold">24 Sesi / bln</span></span>
                  <span className="text-xs text-primary font-semibold flex items-center gap-1">Jadwal Kelir <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 relative overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-tertiary/10 group-hover:bg-tertiary/20 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-semibold">Pendampingan Intim</span>
                <h3 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Magang Pentas Maestro</h3>
                <p className="text-sm text-on-surface-variant mt-3 mb-6 leading-relaxed">Penempatan dalang muda terbaik ke 14 dalang senior saat pentas malam suntuk sebagai asisten dalang dan penabuh kendang.</p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Kuota: <span className="text-on-surface font-semibold">18 Kursi / Kuartal</span></span>
                  <span className="text-xs text-tertiary font-semibold flex items-center gap-1">Formulir Magang <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/20 relative overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">savings</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-semibold">APBD Kebudayaan 2025</span>
                <h3 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-playfair)" }}>Stimulan Alat Seni Pemkot</h3>
                <p className="text-sm text-on-surface-variant mt-3 mb-6 leading-relaxed">Hibah renovasi rancakan kendang, tatah sungging wayang kulit, dan blencong hemat energi untuk sanggar dan lab sekolah vokasi.</p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Plafon: <span className="text-on-surface font-semibold">Rp 35 Juta / Sanggar</span></span>
                  <span className="text-xs text-secondary font-semibold flex items-center gap-1">Panduan Hibah <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
