"use client";
import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { opportunities, talents } from "@/data/demo";
import { stitchImages } from "@/data/stitchImages";
import { calculateMatchScore } from "@/lib/matching";

const cats = [
  { label: "Semua Peluang (12)", key: "all" },
  { label: "Pentas & Festival", key: "festival" },
  { label: "Edukasi Sekolah", key: "edukasi" },
  { label: "Pariwisata & Budaya", key: "pariwisata" },
  { label: "Kolaborasi Kreatif", key: "digital" },
];

const mapCat = (c: string) => {
  if (c === "Festival") return "festival";
  if (c === "Edukasi") return "edukasi";
  if (c === "Hospitality") return "pariwisata";
  return "digital";
};

export default function PeluangPage() {
  const [active, setActive] = useState("all");
  const [toast, setToast] = useState<string | null>(null);

  const activeTalent = talents[0]; // Inaz Fairoza sebagai persona talenta default
  const filtered = active === "all" ? opportunities : opportunities.filter((o) => mapCat(o.category) === active);

  const show = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(null), 2800);
  };

  return (
    <>
      <SiteHeader />
      <main className="pt-8 bg-background min-h-screen">
        <div className="relative w-full max-w-7xl mx-auto px-gutter py-6 lg:py-8 flex flex-col gap-6">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-80 right-10 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <section className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-primary text-xs tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /> Bursa Karir &amp; Panggung Terbuka
                  </span>
                  <span className="text-on-surface-variant text-xs">| Salatiga Creative Hub</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>
                  Bursa Peluang &amp; Kolaborasi Seni Pedalangan
                </h1>
                <p className="text-sm text-on-surface-variant">
                  Menghubungkan dalang muda Salatiga dengan panggung festival, proyek pendidikan, pariwisata hotel, dan kolaborasi kreatif lintas disiplin secara transparan dan terverifikasi.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low px-4 py-3 rounded-xl shadow-md self-start lg:self-auto border border-outline-variant/20">
                <span className="flex flex-col">
                  <span className="text-[11px] text-on-surface-variant">Peluang Aktif</span>
                  <span className="text-xl font-bold text-primary leading-none">12 Open</span>
                </span>
                <span className="w-px h-8 bg-surface-variant" />
                <span className="flex flex-col">
                  <span className="text-[11px] text-on-surface-variant">Mitra Terverifikasi</span>
                  <span className="text-xl font-bold text-tertiary leading-none">8 Mitra</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {cats.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={
                    active === c.key
                      ? "px-4 py-2 rounded-lg bg-primary-container text-on-primary-container text-sm font-semibold shadow-md whitespace-nowrap"
                      : "px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant text-sm whitespace-nowrap"
                  }
                >
                  {c.label}
                </button>
              ))}
            </div>
          </section>

          <section className="w-full bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-high rounded-xl p-4 lg:p-6 shadow-xl relative overflow-hidden border border-outline-variant/20">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center bg-surface-container-lowest rounded-full shadow-inner">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
                    <circle cx="36" cy="36" r="30" fill="transparent" stroke="#313540" strokeWidth="6" />
                    <circle cx="36" cy="36" r="30" fill="transparent" stroke="#e5b842" strokeDasharray="188.4" strokeDashoffset="12" strokeLinecap="round" strokeWidth="6" />
                  </svg>
                  <span className="absolute flex flex-col items-center">
                    <span className="text-xl font-bold text-primary leading-none">94%</span>
                    <span className="text-[10px] text-on-surface-variant">COCOK</span>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">auto_awesome</span> Rekomendasi Cerdas
                    </span>
                    <span className="text-xs text-on-surface-variant">Profil Aktif: {activeTalent.name}</span>
                  </div>
                  <h2 className="text-sm font-bold text-on-surface">Formula Pencocokan Terbobot: Keahlian 40% + Lokasi 20% + Jam Terbang 20% + Gaya 10% + Ketersediaan 10%</h2>
                  <p className="text-xs text-on-surface-variant max-w-xl">
                    Sistem secara otomatis menghitung matriks kecocokan antara parameter keahlian dalang muda dengan kualifikasi pementasan yang dibuka oleh penyelenggara.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full lg:w-auto shrink-0">
                <button
                  onClick={() => setActive("festival")}
                  className="flex-1 lg:flex-none px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary text-sm font-bold shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span> Tampilkan Sangat Cocok
                </button>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[22px]">theater_comedy</span> Katalog Peluang Tersedia
                </span>
                <span className="text-xs text-on-surface-variant">Menampilkan {filtered.length} dari 12 Peluang Aktif</span>
              </div>

              {filtered.map((o) => {
                const matchResult = calculateMatchScore(activeTalent, o);
                return (
                  <article
                    key={o.id}
                    className="group p-5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors shadow-md flex flex-col gap-4 relative overflow-hidden border border-outline-variant/20"
                  >
                    {matchResult.score >= 90 && <span className="absolute top-0 left-0 w-1.5 h-full bg-primary" />}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[26px]">
                            {o.category === "Festival" ? "account_balance" : o.category === "Edukasi" ? "school" : o.category === "Hospitality" ? "hotel" : "movie_edit"}
                          </span>
                        </span>
                        <span className="flex flex-col">
                          <span className="flex items-center gap-1 text-xs font-bold text-primary">
                            {o.org} <span className="material-symbols-outlined text-tertiary text-[15px]">verified</span>
                          </span>
                          <span className="text-xs text-on-surface-variant">{o.category} · {o.capacity}</span>
                        </span>
                      </span>
                      <span className="flex items-center gap-2 self-start">
                        <span className={matchResult.score >= 90 ? "px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30" : "px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant text-xs font-bold"}>
                          {matchResult.score}% Cocok
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary text-xs flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px]">timer</span> {o.deadline}
                        </span>
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="flex gap-2">
                        <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant text-xs">{o.category}</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-low text-tertiary text-xs hidden sm:inline">{o.honor}</span>
                      </span>
                      <h3 className="text-base font-bold text-on-surface group-hover:text-primary leading-tight">{o.title}</h3>
                      <p className="text-sm text-on-surface-variant line-clamp-2">
                        {o.category === "Festival"
                          ? "Dicari dalang muda untuk lakon carangan 90 menit di Alun-Alun Pancasila — diiringi Sanggar Karawitan Pelajar Daerah."
                          : o.category === "Edukasi"
                          ? "Fasilitator Punakawan & demonstrasi sabetan dasar bagi siswa SMA — filosofi kepemimpinan Jawa untuk Gen Z."
                          : o.category === "Hospitality"
                          ? "Pagelaran Wayang Padat 60 menit dwibahasa (Jawa & Inggris) untuk delegasi heritage & gala dinner eksekutif."
                          : "Riset gerak pedalangan untuk projection mapping & gamelan elektronik di panggung kontemporer."}
                      </p>
                    </div>

                    {matchResult.reasons.length > 0 && (
                      <div className="p-2.5 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/15 flex flex-col gap-1">
                        <span className="text-[11px] text-primary font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">insights</span> Alasan Rekomendasi:
                        </span>
                        <ul className="text-[11px] text-on-surface-variant list-disc pl-4 space-y-0.5">
                          {matchResult.reasons.slice(0, 2).map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-3 rounded-lg bg-surface-container-low/80">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">calendar_month</span>
                        <span className="flex flex-col text-xs"><span className="text-on-surface-variant">Pelaksanaan</span><span className="font-semibold text-on-surface">{o.date}</span></span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
                        <span className="flex flex-col text-xs"><span className="text-on-surface-variant">Lokasi</span><span className="font-semibold text-on-surface truncate">{o.location}</span></span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">payments</span>
                        <span className="flex flex-col text-xs"><span className="text-on-surface-variant">Kompensasi</span><span className="font-semibold text-primary truncate">{o.honor}</span></span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {o.required.map((r) => (
                        <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant">{r}</span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs text-on-surface-variant">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">group</span> {o.applicants} pendaftar</span>
                        <span>Kapasitas terisi {Math.min(100, o.applicants * 6)}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <span className="block h-full bg-primary rounded-full" style={{ width: `${Math.min(100, o.applicants * 6)}%` }} />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-outline-variant/20">
                      <span className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Terverifikasi PEPADI &amp; Disbudpar
                      </span>
                      <span className="flex gap-2">
                        <button onClick={() => show(`Detail "${o.title}" dibuka.`)} className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface text-sm font-medium">
                          Lihat Detail
                        </button>
                        <button onClick={() => show(`Lamaran untuk "${o.title}" terkirim!`)} className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-bold shadow-md inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">send</span> Lamar Sekarang
                        </button>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="p-5 rounded-xl bg-surface-container-low shadow-xl flex flex-col gap-4 border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-primary font-bold">Standard Operating Procedure</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant text-xs">WAYANG ID</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-on-surface">Alur Seleksi &amp; Siklus Karir</h3>
                  <span className="text-xs text-on-surface-variant">Sistem Rekam Jejak Digital Pedalangan Muda</span>
                </div>
                <div className="flex flex-col relative pl-6 gap-4 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-variant">
                  {[
                    ["Daftar Terarah", "Kirim portofolio rekaman sabetan & suluk 1-klik.", true],
                    ["Kurasi Kurator & Mitra", "Dewan PEPADI & panggung meninjau kelayakan artistik.", false],
                    ["Terpilih & Brief Teknis", "Konfirmasi jadwal, kelir & koordinasi pengrawit.", false],
                    ["Pagelaran Terlaksana", "Dokumentasi resmi & pengawasan mutu panggung.", false],
                    ["Otomatis Menjadi Portofolio", "Rekam prestasi tercatat di e-badge WAYANG ID.", true],
                  ].map(([title, desc, activeDot]) => (
                    <div key={title as string} className="relative flex flex-col gap-0.5">
                      <span className={activeDot ? "absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-low" : (title as string).includes("Otomatis") ? "absolute -left-6 top-1 w-3 h-3 rounded-full bg-tertiary ring-4 ring-surface-container-low" : "absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-variant ring-4 ring-surface-container-low"} />
                      <span className={(activeDot as boolean) ? "text-sm font-bold text-primary" : (title as string).includes("Otomatis") ? "text-sm font-bold text-tertiary" : "text-sm font-semibold text-on-surface"}>Step: {title as string}</span>
                      <p className="text-xs text-on-surface-variant">{desc as string}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg bg-surface-container flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                  <span className="flex flex-col text-xs"><span className="font-semibold text-on-surface">Perlindungan Seniman</span><span className="text-on-surface-variant">Kolaborasi dilindungi honorarium &amp; hak cipta lakon.</span></span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container shadow-md flex flex-col gap-3 border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">Status Kesiapan Panggung</span>
                  <span className="flex items-center gap-1 text-tertiary text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-tertiary" /> Siap Pentas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={stitchImages.inazBlangkon}
                    alt={activeTalent.name}
                    width={48}
                    height={48}
                    unoptimized
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">{activeTalent.name}</span>
                    <span className="text-xs text-primary">Dalang Remaja Putri • Gaya {activeTalent.style}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant pt-2 border-t border-outline-variant/10">
                  <span>Lamaran Terkirim: <strong className="text-on-surface">2 Aktif</strong></span>
                  <span>Rekomendasi Baru: <strong className="text-primary">+3 Peluang</strong></span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container shadow-lg flex flex-col gap-3 border border-outline-variant/20">
                <span className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider"><span className="material-symbols-outlined text-[20px]">handshake</span> Buka Peluang Baru</span>
                <h4 className="text-base font-bold text-on-surface">Penyelenggara Acara / Hotel / Sekolah?</h4>
                <p className="text-xs text-on-surface-variant">Rancang pagelaran wayang eksklusif atau workshop budaya dengan talenta terverifikasi Salatiga.</p>
                <button onClick={() => show("Formulir pembukaan peluang untuk mitra dibuka.")} className="mt-1 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary text-sm font-bold shadow flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span> Pasang Lowongan Peluang
                </button>
              </div>
            </aside>
          </div>
        </div>

        {toast && (
          <div className="fixed bottom-6 right-6 max-w-md bg-surface-container-highest text-on-surface p-4 rounded-xl shadow-2xl z-50 flex items-start gap-3 border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary">task_alt</span>
            <span className="flex flex-col text-sm">
              <span className="font-bold">Berhasil</span>
              <span className="text-on-surface-variant text-xs">{toast}</span>
            </span>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
