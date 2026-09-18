"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { stitchImages } from "@/data/stitchImages";
import { UserRole, DEMO_PERSONAS } from "@/lib/auth";

const GUNUNGAN = stitchImages.gununganEmblem;

const nav = [
  { label: "Beranda", href: "/" },
  { label: "Peta & Talenta", href: "/peta" },
  { label: "Showcase Karya", href: "/showcase" },
  { label: "Peluang & Kolaborasi", href: "/peluang" },
  { label: "Akademi", href: "/akademi" },
  { label: "Direktori Sanggar", href: "/sanggar" },
  { label: "Admin & Moderasi", href: "/admin" },
];

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

export default function SiteHeader() {
  const pathname = usePathname();
  const [role, setRole] = useState<UserRole>(getInitialRole);

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

  const persona = DEMO_PERSONAS[role];
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Link profil sesuai persona aktif
  const profileHref =
    role === "talent"
      ? "/talent/WID-2026-0001"
      : role === "mentor"
      ? "/mentor"
      : role === "partner"
      ? "/mitra"
      : "/admin";

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-gutter h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <Image
            src={GUNUNGAN}
            alt="WAYANG ID"
            width={32}
            height={32}
            unoptimized
            className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold tracking-wider" style={{ fontFamily: "var(--font-playfair)" }}>
                WAYANG
              </span>
              <span className="text-[10px] leading-none px-1.5 py-0.5 rounded bg-surface-container-high text-primary-fixed border border-primary/20 font-bold">
                ID
              </span>
            </span>
            <span className="text-[10px] tracking-wide text-on-surface-variant hidden lg:block">Talenta Dalang Muda Salatiga</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 px-2 py-1 rounded-xl bg-surface-container-low/60 border border-outline-variant/20">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                isActive(n.href)
                  ? "px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-semibold text-xs shadow-[0_0_16px_rgba(229,184,66,0.2)]"
                  : "px-3 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:flex items-center relative w-48 lg:w-56">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px] pointer-events-none">search</span>
            <input
              placeholder="Cari talenta, sanggar..."
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-surface-container-low text-on-surface text-xs placeholder:text-outline border border-outline-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
            />
          </div>

          <Link
            href={profileHref}
            className="flex items-center gap-2 p-1 pr-3 rounded-full bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/30 transition-colors"
          >
            <span className="relative block">
              <Image
                src={persona.avatarUrl || stitchImages.inazHeadshot}
                alt={persona.name}
                width={32}
                height={32}
                unoptimized
                className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/40"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-tertiary-container flex items-center justify-center ring-1 ring-surface">
                <span className="material-symbols-outlined text-[10px] font-bold text-on-tertiary-container">verified</span>
              </span>
            </span>
            <span className="hidden sm:flex flex-col text-left leading-none">
              <span className="text-xs font-semibold text-on-surface truncate max-w-[120px]">{persona.name.split(" ")[0]}</span>
              <span className="text-[10px] font-medium text-primary capitalize">{role}</span>
            </span>
          </Link>

          <details className="xl:hidden relative">
            <summary className="list-none p-2 rounded-lg bg-surface-container-low border border-outline-variant/30 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </summary>
            <div className="absolute right-0 top-12 w-56 rounded-xl bg-surface-container-high border border-outline-variant/30 shadow-2xl p-2 flex flex-col gap-1 z-50">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="px-3 py-2 rounded-lg text-xs hover:bg-surface-container">
                  {n.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
