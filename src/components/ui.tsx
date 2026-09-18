export function Pill({ children, active, className = "" }: { children: React.ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-primary-container text-on-primary-container border-primary/30 shadow-[0_0_12px_rgba(229,184,66,0.15)]"
          : "bg-surface-container-high/90 text-on-surface-variant border-outline-variant/30 hover:border-primary/20 hover:text-on-surface"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function VerifiedBadge({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-tertiary-container/20 text-tertiary border border-tertiary/30 font-semibold ${size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1"}`}
    >
      <span className="material-symbols-outlined text-[14px]">verified</span> Terverifikasi
    </span>
  );
}

export function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="flex flex-col gap-2">
      {kicker && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
          <span className="w-6 h-px bg-primary/40" />
          {kicker}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-playfair)" }}>
        {title}
      </h2>
      {desc && <p className="text-on-surface-variant max-w-2xl leading-relaxed">{desc}</p>}
    </div>
  );
}
