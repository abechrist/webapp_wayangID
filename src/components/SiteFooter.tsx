import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-gutter py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold tracking-wider text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                WAYANG ID
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-surface-container-high text-primary-fixed border border-primary/20 font-bold">ID</span>
            </div>
            <p className="text-on-surface-variant leading-relaxed max-w-xs">
              Ekosistem talenta dalang muda Kota Salatiga — DISCOVER → IDENTIFY → DEVELOP → EXPOSE → OPPORTUNITY → EXPERIENCE.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-secondary-container/30 text-secondary border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              DEMO DATA — bukan data resmi Kota Salatiga
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-on-surface mb-3">Discover</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><a href="/peta" className="hover:text-primary">Peta Talenta</a></li>
              <li><Link href="/talent/WID-2026-0001" className="hover:text-primary">Profil Talent</Link></li>
              <li><a href="/showcase" className="hover:text-primary">Showcase</a></li>
              <li><a href="/peluang" className="hover:text-primary">Peluang</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-on-surface mb-3">Develop</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><a href="/akademi" className="hover:text-primary">Akademi</a></li>
              <li><a href="/mentor" className="hover:text-primary">Mentor</a></li>
              <li><a href="/portfolio" className="hover:text-primary">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-on-surface mb-3">Ekosistem</h4>
            <ul className="space-y-2 text-on-surface-variant">
              <li><a href="/sanggar" className="hover:text-primary">Sanggar</a></li>
              <li><a href="/mitra" className="hover:text-primary">Mitra</a></li>
              <li><span className="opacity-60">Admin (internal)</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
          <span>© 2026 WAYANG ID — Ekosistem Talenta Dalang Muda Salatiga · Pentahelix: Pemkot · Sanggar · Sekolah · Mentor · Dalang Muda</span>
          <span className="opacity-60">Stitch — Nusantara Contemporary · Dark Kelir #0f131d</span>
        </div>
      </div>
    </footer>
  );
}
