import Link from "next/link";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrintButton from "@/components/PrintButton";
import CopyLinkButton from "@/components/CopyLinkButton";
import TalentPortfolioTabs, { AwardItem, MentorReviewItem, GalleryItem } from "@/components/TalentPortfolioTabs";
import { talents, portfolioItems } from "@/data/demo";
import { stitchImages } from "@/data/stitchImages";
import { evaluateMinorProtection } from "@/lib/pii";

export function generateStaticParams() {
  return talents.map((t) => ({ wayangId: t.wayangId }));
}

export default async function TalentPassportPage({ params }: { params: Promise<{ wayangId: string }> }) {
  const { wayangId } = await params;
  const talent = talents.find((t) => t.wayangId === wayangId) ?? talents[0];
  const sabet = talent.skills.find((s) => s.name === "Sabet")?.level ?? 88;
  const sanggit = talent.skills.find((s) => s.name === "Sanggit")?.level ?? 85;
  const suluk = talent.skills.find((s) => s.name === "Suluk")?.level ?? 82;
  const avg = Math.round(((sabet + sanggit + suluk) / 3) * 10) / 10;
  const privacy = evaluateMinorProtection(talent.age);

  const passportUrl = `https://wayang.id/talent/${talent.wayangId}`;

  const tabsPortfolio = portfolioItems.slice(0, 6).map((p, i) => ({
    ...p,
    thumbnail: stitchImages.portfolioThumbs[i % stitchImages.portfolioThumbs.length],
  }));

  const awards: AwardItem[] = [
    {
      icon: "trophy",
      color: "primary",
      year: "2024 • KARESIDENAN SEMARANG",
      title: "Juara 1 Festival Dalang Remaja",
      desc: "Keunggulan harmonisasi sabet ksatria dan tembang suluk gaya Surakarta.",
    },
    {
      icon: "military_tech",
      color: "tertiary",
      year: "2025 • PEMKOT SALATIGA",
      title: "Apresiasi Pelestari Seni Tradisi Muda",
      desc: "Revitalisasi panggung wayang di kalangan Gen Z dan sekolah.",
    },
  ];

  const mentors: MentorReviewItem[] = [
    {
      q: "Inaz memiliki keistimewaan rasa dalam olah sabet. Tangannya lincah namun tetap menghormati karakter wayang.",
      n: "Ki Dalang Sutrisno",
      r: "Ketua PEPADI Salatiga",
      i: "ST",
      c: "text-primary",
    },
    {
      q: "Artikulasi ontowecono-nya jernih, terutama tokoh ksatria halus seperti Arjuna dan Puntadewa.",
      n: "Ki Anom Warsito",
      r: "Maestro Surakarta",
      i: "AW",
      c: "text-tertiary",
    },
    {
      q: "Kepekaan musikalitas terhadap kendang dan gender sangat menyatu — memimpin tanpa mendikte.",
      n: "Nyi Cendaniraras",
      r: "Praktisi Karawitan",
      i: "NC",
      c: "text-secondary",
    },
  ];

  const gallery: GalleryItem[] = ["Simpingan", "Latihan Gender", "Blencong", "Edukasi Siswa"].map((title, i) => ({
    title,
    src: stitchImages.galleryThumbs[i % stitchImages.galleryThumbs.length],
  }));

  return (
    <>
      <SiteHeader />
      <main className="pt-8 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-gutter py-6">
          <div className="absolute pointer-events-none left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0" />
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 text-xs text-on-surface-variant relative">
            <span className="flex items-center gap-2">
              <Link href="/" className="hover:text-primary">WAYANG ID</Link>
              <span>/</span>
              <Link href="/peta" className="hover:text-primary">Talenta</Link>
              <span>/</span>
              <span className="text-primary font-semibold">{talent.name}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs tracking-wider uppercase border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" /> Akreditasi 2025/2026
            </span>
          </div>

          <section className="rounded-2xl bg-surface-container-low shadow-xl p-5 md:p-8 relative overflow-hidden mb-8 border border-outline-variant/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="w-64 sm:w-72 flex flex-col items-center">
                  <div className="w-full h-80 sm:h-88 rounded-2xl overflow-hidden bg-surface-container-high shadow-2xl relative border border-outline-variant/30 group">
                    <Image
                      src={talent.photo}
                      alt={talent.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-outline-variant/20 shadow-sm">
                        <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                        <span className="text-xs text-primary font-bold font-mono tracking-wide">{talent.wayangId}</span>
                      </span>
                      <span className="text-[11px] font-medium text-on-surface bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-outline-variant/20 shadow-sm">
                        Gagrak {talent.style}
                      </span>
                    </div>
                  </div>

                  {/* PEPADI Verified Badge - Proportional, Aesthetic & Never Obscures */}
                  <div className="w-full mt-3 bg-surface-container/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-primary/25 hover:border-primary/40 transition-colors flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 shadow-inner">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    </span>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-on-surface font-bold whitespace-nowrap">PEPADI Verified</span>
                        <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-extrabold tracking-wide text-primary bg-primary/15 px-2 py-0.5 rounded-md border border-primary/30 shrink-0">
                          Grade A
                        </span>
                        <span className="text-[11px] text-on-surface-variant truncate">
                          {talent.name.includes("Inaz") ? "Dalang Remaja Putri" : "Dalang Muda Salatiga"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim text-xs font-semibold flex items-center gap-1 border border-tertiary/20">
                    <span className="material-symbols-outlined text-sm">stars</span> Pelopor Dalang Putri Muda — {talent.age}th {talent.wayangId} Gagrak {talent.style} Grade A PEPADI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">{talent.school}</span>
                  {privacy.isMinor && (
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-tertiary text-xs border border-tertiary/30 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">family_restroom</span> Izin Wali Terverifikasi
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl text-primary font-bold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>{talent.name}</h1>
                <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">{talent.bio}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2">
                  <div className="bg-surface-container p-3 rounded-xl flex flex-col border border-outline-variant/20">
                    <span className="text-xs text-outline">Sekolah / Asal</span>
                    <span className="text-sm font-semibold text-on-surface truncate">{talent.school}</span>
                    <span className="text-xs text-on-surface-variant">{talent.kecamatan}, Salatiga</span>
                  </div>
                  <div className="bg-surface-container p-3 rounded-xl flex flex-col border border-outline-variant/20">
                    <span className="text-xs text-outline">Sanggar Binaan</span>
                    <span className="text-sm font-semibold text-primary truncate">Sanggar {talent.sanggar}</span>
                    <span className="text-xs text-on-surface-variant">{talent.kecamatan}, Salatiga</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-surface-container p-3 rounded-xl flex flex-col border border-outline-variant/20">
                    <span className="text-xs text-outline">Gaya Pedalangan</span>
                    <span className="text-sm font-semibold text-on-surface truncate">Gaya {talent.style}</span>
                    <span className="text-xs text-on-surface-variant">Mangkunegaran &amp; Kasunanan</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a href="#qr-passport" className="px-5 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-bold flex items-center gap-2 hover:brightness-110 shadow-lg">
                    <span className="material-symbols-outlined text-lg">qr_code_2</span> Pindai QR Passport
                  </a>
                  <PrintButton />
                  <CopyLinkButton url={passportUrl} />
                  <Link href={`/peluang?talent=${talent.wayangId}`} className="px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary text-sm font-semibold flex items-center gap-2 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-lg">calendar_month</span> Ajak Pentas
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="qr-passport" className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-7 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-high p-6 rounded-2xl shadow-2xl relative overflow-hidden border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex items-center gap-2 text-xs tracking-widest text-primary font-bold uppercase">
                    <span className="w-3 h-3 rounded-full bg-primary animate-ping" /> Official Digital Talent Passport (ISO/IEC 18004)
                  </span>
                  <span className="text-xs text-on-surface-variant px-2.5 py-1 rounded bg-surface-container-lowest border border-outline-variant/20">Standar Budaya Salatiga</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 my-3">
                  <div className="p-3 bg-surface-container-lowest rounded-xl shadow-inner flex flex-col items-center shrink-0 border border-outline-variant/20">
                    <QRCodeSVG
                      value={passportUrl}
                      size={136}
                      fgColor="#ffd56d"
                      bgColor="#0a0e18"
                      level="H"
                      includeMargin={true}
                      className="rounded-lg shadow-md"
                    />
                    <span className="mt-2 font-mono text-xs text-primary font-bold">{talent.wayangId}</span>
                    <span className="text-[9px] text-on-surface-variant font-mono text-center">SCAN KAMERA PONSEL</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-lg font-semibold text-on-surface">Kredensial Resmi Paspor Talenta</h2>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Paspor digital otentik berstandar ISO/IEC 18004 — arahkan kamera smartphone langsung ke QR code di samping untuk memvalidasi legalitas pagelaran dan kompetensi seni tradisi {talent.name}.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface text-xs border border-outline-variant/20">✓ Hak Cipta Pakem Aman</span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface text-xs border border-outline-variant/20">✓ Terdaftar di PEPADI Cabang Salatiga</span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-high text-tertiary text-xs border border-tertiary/20">✓ Terkoneksi Sistem Evaluasi Mentor</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 mt-3 text-xs text-on-surface-variant border-t border-outline-variant/20">
                <span>Diterbitkan: 12 Januari 2025</span>
                <span className="text-primary font-semibold">Tervalidasi Digital Signature PEPADI Salatiga</span>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/20">
                <span className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-2xl">theater_comedy</span></span>
                  <span><span className="block text-xl text-primary font-bold leading-none">{talent.performances}+</span><span className="text-xs text-on-surface-variant">Pagelaran Skala Besar</span></span>
                </span>
                <span className="text-right"><span className="block text-xs text-tertiary font-semibold">Tingkat Sukses 100%</span><span className="text-xs text-on-surface-variant">Review Mentor 4.9/5</span></span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/20">
                <span className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary"><span className="material-symbols-outlined text-2xl">groups</span></span>
                  <span><span className="block text-xl text-tertiary font-bold leading-none">{(talent.views / 1000).toFixed(1)}k</span><span className="text-xs text-on-surface-variant">Penonton Terjangkau</span></span>
                </span>
                <span className="text-right"><span className="block text-xs text-on-surface font-semibold">Live &amp; Streaming</span><span className="text-xs text-on-surface-variant">Salatiga &amp; Karesidenan</span></span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/20">
                <span className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary"><span className="material-symbols-outlined text-2xl">menu_book</span></span>
                  <span><span className="block text-xl text-secondary font-bold leading-none">6 Lakon</span><span className="text-xs text-on-surface-variant">Repertoar Dikuasai Penuh</span></span>
                </span>
                <span className="text-right"><span className="block text-xs text-primary font-semibold">Mahabharata Core</span><span className="text-xs text-on-surface-variant">Durasi Padat &amp; Semalam</span></span>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low p-5 md:p-8 rounded-2xl shadow-xl mb-8 border border-outline-variant/20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">Matriks Kompetensi Pedagogis</span>
                <h2 className="text-xl font-semibold text-on-surface">Validasi Keterampilan Pedalangan</h2>
              </div>
              <p className="text-xs text-on-surface-variant max-w-md">Pengujian terstandarisasi Dewan Pakar PEPADI Salatiga berdasarkan uji sabetan, sanggit naskah, dan penguasaan laras gamelan.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-primary flex items-center gap-2"><span className="material-symbols-outlined">gavel</span> Tiga Pilar Pedalangan Utama</h3>
                {[
                  { name: "Sabet (Olah Gerak & Anatomi Wayang)", desc: "Ketepatan gerak perang, tari wayang gagah, dan karakter halus.", level: sabet, mentor: "Diverifikasi Ki Dalang Senior Sutrisno (Ketua PEPADI Salatiga) • 14 Nov 2024" },
                  { name: "Sanggit (Kreativitas Lakon & Alur Cerita)", desc: "Daya kreasi adaptasi carangan tanpa merusak pakem klasik.", level: sanggit, mentor: "Diverifikasi Ki Anom Warsito (Maestro Gaya Surakarta) • 02 Des 2024" },
                  { name: "Suluk (Vokal, Tembang, & Penghayatan Rasa)", desc: "Kekuatan artikulasi ada-ada, pathet sanga, dan sendhon.", level: suluk, mentor: "Diverifikasi Nyi Cendaniraras (Pesinden & Pendidik Vokal) • 19 Jan 2025" },
                ].map((s) => (
                  <div key={s.name} className="p-4 bg-surface-container rounded-xl flex flex-col gap-2 border border-outline-variant/20">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <span className="text-sm font-semibold text-on-surface">{s.name}</span>
                        <p className="text-xs text-on-surface-variant">{s.desc}</p>
                      </div>
                      <span className="text-xl text-primary font-bold shrink-0">{s.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                    <span className="flex items-center gap-1.5 text-tertiary text-xs pt-1">
                      <span className="material-symbols-outlined text-xs">verified</span> {s.mentor}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-tertiary flex items-center gap-2"><span className="material-symbols-outlined">vital_signs</span> Keterampilan Lintas Era &amp; Panggung</h3>
                {[
                  { name: "Public Speaking & Moderasi Budaya", desc: "Edukasi wayang interaktif bagi penonton sekolah dan umum", level: 90, label: "Sangat Unggul" },
                  { name: "Digital Storytelling & Media Sosialisasi", desc: "Pengemasan lakon melalui visual reels & live-stream", level: 85, label: "Kompeten" },
                  { name: "Manajemen Produksi & Harmonisasi Kelir", desc: "Koordinasi pengrawit gamelan, sinden, dan tata cahaya", level: 78, label: "Siap Lapangan" },
                ].map((s) => (
                  <div key={s.name} className="bg-surface-container p-4 rounded-xl flex items-center justify-between border border-outline-variant/20">
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-on-surface">{s.name}</span>
                      <span className="text-xs text-on-surface-variant">{s.desc}</span>
                    </span>
                    <span className="text-right shrink-0 ml-4">
                      <span className="text-lg text-tertiary font-bold">{s.level}%</span>
                      <span className="block text-xs text-on-surface-variant">{s.label}</span>
                    </span>
                  </div>
                ))}
                <div className="bg-surface-container-high/60 p-4 rounded-xl flex items-center gap-4 border border-outline-variant/20">
                  <span className="w-16 h-16 shrink-0 flex items-center justify-center bg-surface-container-lowest rounded-lg">
                    <svg className="w-12 h-12 text-primary" viewBox="0 0 40 40">
                      <polygon fill="none" opacity="0.4" points="20,4 35,14 30,34 10,34 5,14" stroke="currentColor" strokeWidth="1.5" />
                      <polygon fill="currentColor" fillOpacity="0.2" points="20,8 32,16 28,30 12,30 8,16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-sm text-primary font-semibold">Keseimbangan Estetika Tri-Matra</span>
                    <p className="text-xs text-on-surface-variant">Rasio keselarasan vokal, tangan, dan logika lakon: nilai kumulatif {avg} (Kategori: Prima Madya).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <TalentPortfolioTabs
            portfolioItems={tabsPortfolio}
            awards={awards}
            mentors={mentors}
            gallery={gallery}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
