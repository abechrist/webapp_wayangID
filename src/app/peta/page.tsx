"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { talents, Talent } from "@/data/demo";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[420px] rounded-3xl bg-surface-container-lowest flex flex-col items-center justify-center text-primary gap-3 border border-outline-variant/30">
      <span className="material-symbols-outlined text-4xl animate-spin text-primary">progress_activity</span>
      <span className="text-xs text-on-surface-variant font-medium">Memuat Peta Geospasial Salatiga...</span>
    </div>
  ),
});

export default function PetaPage() {
  const [search, setSearch] = useState("");
  const [gaya, setGaya] = useState("all");
  const [jenjang, setJenjang] = useState("all");
  const [sabet, setSabet] = useState(true);
  const [sanggit, setSanggit] = useState(true);
  const [suluk, setSuluk] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);

  const filtered = talents.filter((t) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.sanggar.toLowerCase().includes(q) ||
      t.wayangId.toLowerCase().includes(q) ||
      t.kecamatan.toLowerCase().includes(q) ||
      t.style.toLowerCase().includes(q);
    const matchGaya = gaya === "all" || t.style.toLowerCase() === gaya.toLowerCase();
    const matchJenjang =
      jenjang === "all" ||
      (jenjang === "SMP" && t.school.toLowerCase().includes("smp")) ||
      (jenjang === "SMA" && (t.school.includes("SMA") || t.school.includes("SMK") || t.school.includes("SMAN") || t.school.includes("MAN"))) ||
      (jenjang === "Mahasiswa" && (t.school.includes("ISI") || t.school.includes("Universitas"))) ||
      (jenjang === "Komunitas" && t.sanggar === "Madukara");
    const hasSabet = t.skills.some((s) => s.name === "Sabet");
    const hasSanggit = t.skills.some((s) => s.name === "Sanggit");
    const hasSuluk = t.skills.some((s) => s.name === "Suluk");
    const matchSkill = (!sabet ? !hasSabet : true) && (!sanggit ? !hasSanggit : true) && (!suluk ? !hasSuluk : true);
    const matchVerified = !verifiedOnly || t.verified;
    return matchSearch && matchGaya && matchJenjang && matchSkill && matchVerified;
  });

  const roster = filtered.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main className="pt-8 bg-background min-h-screen">
        <section className="max-w-7xl mx-auto px-gutter pt-8 pb-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-primary">
                <span className="p-1 rounded bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                </span>
                Sistem Informasi Geospasial Kesenian (SIG)
              </span>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Peta &amp; Direktori Talenta Dalang Salatiga
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Eksplorasi geospasial interaktif talenta dalang muda, sanggar binaan, sekolah vokasi seni, dan titik pagelaran aktif di 4 kecamatan Kota Salatiga.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-xl self-start lg:self-auto border border-outline-variant/20">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-semibold text-sm">
                <span className="material-symbols-outlined text-[16px]">map</span> Peta Interaktif
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-[16px]">view_agenda</span> {filtered.length} Terdata
              </span>
            </div>
          </div>

          <div className="bg-surface-container p-4 rounded-2xl shadow-xl flex flex-col gap-4 border border-outline-variant/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
              <div className="lg:col-span-6 relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-[20px] pointer-events-none">
                  search
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari nama dalang, sanggar binaan, lakon andalan, atau kecamatan..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-sm placeholder:text-outline border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="lg:col-span-3 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">
                  theater_comedy
                </span>
                <select
                  value={gaya}
                  onChange={(e) => setGaya(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-sm border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="all">Semua Gaya Pedalangan</option>
                  <option value="Surakarta">Gaya Surakarta (Solo)</option>
                  <option value="Yogyakarta">Gaya Yogyakarta</option>
                  <option value="Pesisiran">Gaya Pesisiran</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">
                  expand_more
                </span>
              </div>
              <div className="lg:col-span-3 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">
                  school
                </span>
                <select
                  value={jenjang}
                  onChange={(e) => setJenjang(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface text-sm border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer"
                >
                  <option value="all">Semua Jenjang Pendidikan</option>
                  <option value="SMP">SMP</option>
                  <option value="SMA">SMA</option>
                  <option value="Mahasiswa">Mahasiswa</option>
                  <option value="Komunitas">Komunitas</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-on-surface-variant mr-1">Kemampuan Inti:</span>
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
                  <input checked={sabet} onChange={(e) => setSabet(e.target.checked)} type="checkbox" className="w-3.5 h-3.5 accent-primary rounded" />
                  <span className="text-xs font-medium text-primary">Sabet (Gerak Wayang)</span>
                </label>
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
                  <input checked={sanggit} onChange={(e) => setSanggit(e.target.checked)} type="checkbox" className="w-3.5 h-3.5 accent-primary rounded" />
                  <span className="text-xs font-medium text-tertiary">Sanggit (Kreativitas Lakon)</span>
                </label>
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 hover:bg-surface-container-high transition-colors">
                  <input checked={suluk} onChange={(e) => setSuluk(e.target.checked)} type="checkbox" className="w-3.5 h-3.5 accent-primary rounded" />
                  <span className="text-xs font-medium text-secondary">Suluk (Vokal &amp; Tembang)</span>
                </label>
              </div>
              <div className="flex items-center gap-4">
                <label className="cursor-pointer inline-flex items-center gap-2">
                  <input checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} type="checkbox" className="w-4 h-4 accent-tertiary rounded" />
                  <span className="text-sm font-medium text-tertiary-fixed flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">verified</span> Hanya Terverifikasi
                  </span>
                </label>
                <button
                  onClick={() => {
                    setSearch("");
                    setGaya("all");
                    setJenjang("all");
                    setSabet(true);
                    setSanggit(true);
                    setSuluk(true);
                    setVerifiedOnly(false);
                  }}
                  className="text-xs text-on-surface-variant hover:text-primary flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">refresh</span> Reset Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 flex flex-col gap-3 lg:sticky lg:top-28">
              <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30">
                <InteractiveMap
                  filteredTalents={filtered}
                  onSelectTalent={(t) => setSelectedTalent(t)}
                  selectedTalentId={selectedTalent?.id}
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex flex-col gap-0.5 sm:gap-1 bg-surface-container-low/90 backdrop-blur-md px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-lg border border-outline-variant/20 pointer-events-none">
                  <span className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-tertiary animate-pulse" /> Peta Interaktif Salatiga
                  </span>
                  <span className="text-[10px] sm:text-xs text-on-surface-variant">Koordinat: 7.3305° S, 110.5084° E • 4 Kecamatan</span>
                </div>

                {selectedTalent ? (
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 p-3 sm:p-4 rounded-2xl bg-surface-container-high/95 backdrop-blur-xl shadow-2xl border border-primary/30 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Image
                          src={selectedTalent.photo}
                          alt={selectedTalent.name}
                          width={44}
                          height={44}
                          unoptimized
                          className="w-11 h-11 rounded-xl object-cover ring-2 ring-primary shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-sm font-bold text-on-surface truncate">
                              {selectedTalent.name}
                            </span>
                            {selectedTalent.verified && (
                              <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                                verified
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-primary truncate">
                            Sanggar {selectedTalent.sanggar} ({selectedTalent.kecamatan}) • Gaya {selectedTalent.style}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTalent(null);
                        }}
                        className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors shrink-0 border border-outline-variant/30 cursor-pointer"
                        title="Tutup detail modal"
                        aria-label="Tutup detail modal"
                      >
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-outline-variant/15 text-xs">
                      <span className="text-[11px] text-on-surface-variant truncate">
                        {selectedTalent.performances} Pagelaran Mandiri • {selectedTalent.school}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/talent/${selectedTalent.wayangId}`}
                          className="flex-1 sm:flex-none text-center px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface text-xs font-medium hover:bg-surface-variant border border-outline-variant/20 transition-colors"
                        >
                          Profil Lengkap
                        </Link>
                        <button className="flex-1 sm:flex-none justify-center px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container text-xs font-semibold flex items-center gap-1 hover:brightness-110 transition-colors">
                          <span className="material-symbols-outlined text-[14px]">send</span> Hubungi Sanggar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-auto z-20 px-3.5 py-2 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-lg border border-outline-variant/20 pointer-events-none text-xs text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">touch_app</span>
                    <span className="text-[11px] sm:text-xs">Klik penanda <span className="text-primary font-bold">🪆</span> di peta untuk profil dalang</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-on-surface-variant border border-outline-variant/20">
                <span className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold text-on-surface">Legenda Peta:</span>
                  <span className="flex items-center gap-1.5 text-on-surface"><span className="w-3 h-3 rounded-full bg-primary inline-block" /> Talenta Muda (🪆)</span>
                  <span className="flex items-center gap-1.5 text-on-surface"><span className="w-3 h-3 rounded-full bg-tertiary inline-block" /> Sanggar Binaan (🏛️)</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-primary"><span className="material-symbols-outlined text-[14px]">my_location</span> Salatiga Digital Node</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="text-sm font-bold text-on-surface">Talenta Terdekat &amp; Hasil Kurasi</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold">{filtered.length} Dalang</span>
                </span>
                <span className="text-xs text-on-surface-variant flex items-center gap-1">Urutkan: <span className="text-primary font-semibold flex items-center">Relevansi <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span></span></span>
              </div>

              {roster.map((t, idx) => {
                const isSelected = selectedTalent?.id === t.id;
                return (
                  <article
                    key={t.id}
                    onClick={() => setSelectedTalent((prev) => prev?.id === t.id ? null : t)}
                    className={`cursor-pointer ${isSelected ? "bg-surface-container-high shadow-xl border-primary" : "bg-surface-container border-outline-variant/20"} rounded-2xl p-4 shadow-md border hover:border-primary/40 transition-all`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={56}
                          height={56}
                          unoptimized
                          className="w-14 h-14 rounded-2xl object-cover shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="flex items-center gap-1.5 text-sm font-bold truncate">
                            <span className={isSelected ? "text-primary" : "text-on-surface"}>{t.name}</span>
                            {t.verified && <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>}
                          </span>
                          <span className="text-xs text-on-surface-variant font-mono">{t.wayangId} • {t.age} Th</span>
                          <span className="text-xs text-on-surface truncate">{t.sanggar} • {t.kecamatan}</span>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${idx === 0 ? "bg-primary/10 text-primary border border-primary/20" : "bg-surface-container-high text-on-surface border border-outline-variant/20"}`}>{t.style}</span>
                    </div>
                    <div className="space-y-2 bg-surface-container-lowest/60 p-3 rounded-xl">
                      {t.skills.map((s) => (
                        <div key={s.name} className="space-y-1">
                          <div className="flex justify-between text-xs text-on-surface-variant">
                            <span>{s.name}</span>
                            <span className={`font-bold ${s.name === "Sabet" ? "text-primary" : s.name === "Sanggit" ? "text-tertiary" : "text-secondary"}`}>{s.level}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${s.name === "Sabet" ? "bg-primary" : s.name === "Sanggit" ? "bg-tertiary" : "bg-secondary"}`} style={{ width: `${s.level}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-1">
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">theater_comedy</span> {t.performances} Lakon Dipentaskan
                      </span>
                      <div className="flex items-center gap-2">
                        <Link href={`/talent/${t.wayangId}`} className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-variant text-on-surface text-xs border border-outline-variant/20 transition-colors">Lihat Paspor</Link>
                        <button className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 ${isSelected ? "bg-primary text-on-primary hover:brightness-110" : "bg-primary-container text-on-primary-container hover:brightness-110"}`}>
                          <span className="material-symbols-outlined text-[14px]">handshake</span> Ajak Kolaborasi
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}

              {roster.length === 0 && (
                <div className="rounded-2xl bg-surface-container border border-outline-variant/20 p-8 text-center text-sm text-on-surface-variant">Tidak ada talenta yang cocok dengan filter.</div>
              )}

              <div className="pt-1 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">Menampilkan {roster.length} dari {filtered.length} profil terkurasi</span>
                <button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold flex items-center gap-1 border border-outline-variant/20">
                  Muat Talenta Lainnya <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-6">
          <div className="bg-surface-container-low rounded-2xl p-5 shadow-lg border border-outline-variant/20 grid grid-cols-1 md:grid-cols-3 gap-5 divide-y md:divide-y-0 divide-outline-variant/20">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined text-[24px]">density_medium</span></span>
              <span className="flex flex-col"><span className="text-xl font-bold text-primary">42%</span><span className="text-xs text-on-surface-variant">Kerapatan Talenta Tertinggi: Kec. Sidorejo</span></span>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <span className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0"><span className="material-symbols-outlined text-[24px]">holiday_village</span></span>
              <span className="flex flex-col"><span className="text-xl font-bold text-tertiary-fixed">6 Sanggar</span><span className="text-xs text-on-surface-variant">Aktif Menggembleng Generasi Muda Salatiga</span></span>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <span className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0"><span className="material-symbols-outlined text-[24px]">verified_user</span></span>
              <span className="flex flex-col"><span className="text-xl font-bold text-secondary">100%</span><span className="text-xs text-on-surface-variant">Terhubung Pendampingan PEPADI &amp; Disbudpar</span></span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
