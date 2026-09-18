"use client";
import { useState, useEffect } from "react";
import { UserRole, DEMO_PERSONAS } from "@/lib/auth";

const getInitialRole = (): UserRole => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("wayang_demo_role") as UserRole;
      if (saved && DEMO_PERSONAS[saved]) return saved;
    } catch {
      // fallback
    }
  }
  return "talent";
};

export default function DemoBanner() {
  const [role, setRole] = useState<UserRole>(getInitialRole);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const handleRole = (e: Event) => {
      const custom = e as CustomEvent<UserRole>;
      if (custom.detail && DEMO_PERSONAS[custom.detail]) {
        setRole(custom.detail);
      }
    };
    window.addEventListener("wayang_role_changed", handleRole);
    return () => window.removeEventListener("wayang_role_changed", handleRole);
  }, []);

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
    localStorage.setItem("wayang_demo_role", newRole);
    window.dispatchEvent(new CustomEvent("wayang_role_changed", { detail: newRole }));
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed top-2 right-2 z-50 px-2.5 py-1 rounded-full bg-secondary-container/90 text-on-secondary-container text-[11px] font-bold shadow-lg border border-secondary/30 backdrop-blur-md flex items-center gap-1.5 hover:scale-105 transition-transform"
      >
        <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
        <span>DEMO DATA — {DEMO_PERSONAS[role].name.split(" ")[0]} ({role.toUpperCase()})</span>
      </button>
    );
  }

  return (
    <div className="relative z-50 bg-gradient-to-r from-secondary-container/95 via-surface-container-high/95 to-secondary-container/95 text-on-surface border-b border-secondary/30 backdrop-blur-md px-4 py-1.5 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-secondary/20 text-secondary font-bold text-[10px] tracking-wider uppercase border border-secondary/30">
            DEMO DATA
          </span>
          <span className="text-on-surface-variant text-[11px] sm:text-xs">
            Prototype Ekosistem Talenta Dalang Muda Salatiga <span className="text-secondary font-medium">(Bukan data resmi Pemkot/PEPADI)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline text-[11px] text-outline font-medium">Mode Persona:</span>
          <div className="flex items-center gap-1 p-0.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
            {(["talent", "mentor", "partner", "admin"] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => switchRole(r)}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  role === r
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {r === "talent" && "🎭 Talenta"}
                {r === "mentor" && "🎓 Mentor"}
                {r === "partner" && "🏛️ Mitra"}
                {r === "admin" && "🛡️ Admin"}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMinimized(true)}
            aria-label="Sembunyikan banner"
            className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[14px]">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
