import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { talents, opportunities, showcaseItems } from "@/data/demo";
import { stitchImages } from "@/data/stitchImages";

export default function BerandaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 bg-background">
        <section className="relative overflow-hidden bg-surface-container-lowest -mt-20 pt-28 pb-16 lg:pb-24">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-12 right-10 w-[380px] h-[280px] bg-secondary-container/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-gutter relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container-high/90 shadow-sm text-xs">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="font-semibold tracking-widest uppercase text-primary">Inisiatif Kebudayaan Kota Salatiga</span>
                  <span className="text-on-surface-variant hidden sm:inline">• Generasi Penerus Adiluhung</span>
                </span>
                <div className="flex flex-col gap-3">
                  <h1
                    className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Talenta Muda. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-primary-container">
                      Identitas Budaya.
                    </span>{" "}
                    <br />
                    Masa Depan Wayang.
                  </h1>
                  <p className="text-on-surface-variant leading-relaxed max-w-xl">
                    Temukan, kenali, kembangkan, dan hubungkan talenta dalang muda Salatiga dengan panggung apresiasi nasional, kurasi maestro
                    senior, dan jejaring industri kreatif masa kini.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/peta"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-container via-primary-fixed-dim to-primary text-on-primary-container font-semibold text-sm shadow-lg shadow-primary-container/20 hover:shadow-primary-container/35 hover:scale-[1.02] transition-all"
                  >
                    Jelajahi Talenta Dalang <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="/talent/WID-2026-0001"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/40 text-on-surface font-semibold text-sm hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">person_add</span> Daftar sebagai Dalang Muda
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { v: "28", l: "Talenta Terdata" },
                    { v: "14", l: "Mentor Maestro" },
                    { v: "08", l: "Sanggar Aktif" },
                    { v: "42+", l: "Kolaborasi" },
                  ].map((m) => (
                    <div
                      key={m.l}
                      className="rounded-xl bg-surface-container/70 backdrop-blur-md border border-outline-variant/30 px-4 py-3 flex flex-col gap-1"
                    >
                      <span className="text-xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                        {m.v}
                      </span>
                      <span className="text-xs text-on-surface-variant font-medium">{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-2xl aspect-[4/5]">
                  <Image src={stitchImages.inazPortrait} alt="Inaz Fairoza" fill unoptimized className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-3">
                    <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-tertiary-container/90 text-on-tertiary-container text-xs font-semibold">
                      <span className="material-symbols-outlined text-[14px]">verified</span> Terverifikasi • WID-2026-0001
                    </span>
                    <div className="rounded-xl bg-surface/85 backdrop-blur-xl border border-outline-variant/20 p-3">
                      <p className="font-semibold text-on-surface text-sm">Nyi Inaz Fairoza Rizqillah</p>
                      <p className="text-xs text-on-surface-variant">Dalang Muda Putri • 19 Pementasan • Sabet Carangan Ramayana</p>
                      <div className="mt-2 flex gap-1.5 flex-wrap">
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary-container/20 text-primary border border-primary/20">Sabet 88</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                          Sanggit 85
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                          Suluk 82
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              5 Pilar Ekosistem
            </h2>
            <Link href="/sanggar" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Lihat ekosistem <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: "map", title: "Talent Mapping", desc: "4 Kecamatan — persebaran & konsentrasi talenta", accent: "primary" },
              { icon: "badge", title: "Digital Passport", desc: "QR WAYANG ID — identitas profesional", accent: "secondary" },
              { icon: "school", title: "Mentorship Maestro", desc: "1:1 Coaching — 14 dalang senior", accent: "tertiary" },
              { icon: "play_circle", title: "Virtual Showcase", desc: "Arsip digital — audio 24-bit & video 4K", accent: "primary" },
              { icon: "handshake", title: "Talent Booking", desc: "Kontrak aman — honor standar pemkot", accent: "secondary" },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-5 flex flex-col gap-3 hover:border-primary/30 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{p.icon}</span>
                </span>
                <h3 className="font-semibold text-sm">{p.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              Dalang Pilihan
            </h2>
            <Link href="/peta" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Lihat semua talenta <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {talents.slice(0, 3).map((t) => (
              <Link
                key={t.id}
                href={`/talent/${t.wayangId}`}
                className="group rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/30 transition-colors shadow-xl shadow-black/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={t.photo} alt={t.name} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {t.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-[11px] font-semibold">
                        <span className="material-symbols-outlined text-[12px]">verified</span> Terverifikasi
                      </span>
                    )}
                    <span className="px-2 py-1 rounded-full bg-surface/80 backdrop-blur text-on-surface text-[11px] font-medium border border-outline-variant/20">
                      {t.style}
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] font-mono px-2 py-1 rounded bg-surface/80 backdrop-blur text-on-surface border border-outline-variant/20">
                    {t.wayangId}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors">{t.name}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">{t.bio}</p>
                  <div className="flex gap-1.5 flex-wrap pt-1">
                    {t.skills.map((s) => (
                      <span key={s.name} className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant">
                        {s.name} {s.level}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">event</span> {t.performances} pentas
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">school</span> {t.sanggar}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-8">
          <div className="rounded-3xl bg-surface-container-low border border-outline-variant/30 p-6 lg:p-10 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-container/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
              <div className="flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
                  <span className="w-6 h-px bg-primary/40" /> PETA PERSEBARAN
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Di Mana Talenta Berada?
                </h2>
                <p className="text-on-surface-variant leading-relaxed">Persebaran ekosistem talenta dalang muda di 4 kecamatan Kota Salatiga.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { kec: "Sidorejo", count: "11 talenta", sanggar: "4 sanggar" },
                    { kec: "Tingkir", count: "8 talenta", sanggar: "2 komunitas" },
                    { kec: "Argomulyo", count: "5 talenta", sanggar: "1 padepokan" },
                    { kec: "Sidomukti", count: "4 talenta", sanggar: "1 sanggar" },
                  ].map((k) => (
                    <div key={k.kec} className="rounded-xl bg-surface-container border border-outline-variant/20 p-3">
                      <p className="font-semibold text-sm text-primary">{k.kec}</p>
                      <p className="text-xs text-on-surface-variant">{k.count} • {k.sanggar}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/peta"
                  className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container font-semibold text-sm hover:brightness-110 transition-all mt-2"
                >
                  Buka Peta Interaktif <span className="material-symbols-outlined text-[18px]">map</span>
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/20 h-80 lg:h-96">
                <Image src={stitchImages.cctvSs} alt="Peta Kawasan Budaya Salatiga" fill unoptimized className="object-cover opacity-60 blur-[1px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href="/peta" className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-sm shadow-lg hover:scale-105 transition-transform">
                    Jelajahi Peta →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              Showcase Terbaru
            </h2>
            <Link href="/showcase" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Lihat semua <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <Link
              href="/showcase"
              className="lg:col-span-7 group rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-primary/30 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image src={showcaseItems[0].image} alt={showcaseItems[0].title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[28px] ml-0.5">play_arrow</span>
                </span>
                <span className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-black/40 backdrop-blur border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" /> LIVE ARCHIVE • 01:38:12 • 8.4k penonton
                  </span>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                  {showcaseItems[0].title}: Dharma & Tangisan Alengka
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">Gaya Surakarta Prasaja — Pendopo Pakuwon · Chapters: Jejer 00:00 • Kumbakarna 14:20 • Perang Kembang 38:45</p>
              </div>
            </Link>
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {showcaseItems.slice(1, 4).map((s) => (
                <Link
                  key={s.id}
                  href="/showcase"
                  className="group flex gap-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 p-3 hover:border-primary/20 transition-colors"
                >
                  <span className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-surface-container-high">
                    <Image src={s.image} alt={s.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform" />
                    <span className="absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-white font-mono">{s.duration}</span>
                  </span>
                  <span className="flex flex-col gap-1 min-w-0">
                    <span className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">{s.title}</span>
                    <span className="text-xs text-on-surface-variant">{s.artist} • {s.views.toLocaleString("id-ID")} views</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
              Peluang & Kolaborasi
            </h2>
            <Link href="/peluang" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              Lihat semua peluang <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.slice(0, 2).map((o) => (
              <div key={o.id} className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-6 flex flex-col gap-3">
                <span className="inline-flex self-start text-xs px-2.5 py-1 rounded-full bg-primary-container/20 text-primary border border-primary/20 font-semibold">
                  {o.category}
                </span>
                <h3 className="font-semibold leading-tight">{o.title}</h3>
                <p className="text-xs text-on-surface-variant inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">apartment</span> {o.org} •{" "}
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span> {o.date}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {o.required.map((r) => (
                    <span key={r} className="text-xs px-2 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface-variant">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20 mt-1">
                  <span className="text-xs text-on-surface-variant">{o.applicants} pendaftar • Deadline {o.deadline}</span>
                  <Link href="/peluang" className="text-sm font-semibold text-primary hover:underline">
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter py-8">
          <div className="rounded-2xl bg-gradient-to-br from-surface-container-low to-surface-container border border-primary/20 p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                Pentahelix Ekosistem
              </h2>
              <p className="text-on-surface-variant text-sm max-w-lg">Kolaborasi 5 pilar: Pemkot — Sanggar — Sekolah — Mentor — Dalang Muda. Bersama membangun jejaring budaya berkelanjutan.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Pemkot Salatiga", "PEPADI", "SMAN 1", "Giri Siswo", "Dewan Kesenian"].map((b) => (
                  <span key={b} className="text-xs px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/sanggar"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary-container font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform"
            >
              Jelajahi Ekosistem <span className="material-symbols-outlined text-[18px]">explore</span>
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-gutter pb-12">
          <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/50 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">Siap bergabung dengan WAYANG ID?</h3>
              <p className="text-sm text-on-surface-variant mt-1">Daftarkan talenta dalang muda — dapatkan WAYANG ID & QR Passport.</p>
            </div>
            <Link href="/talent/WID-2026-0001" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:brightness-110 transition-all">
              Lihat Contoh Passport <span className="material-symbols-outlined text-[18px]">badge</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
