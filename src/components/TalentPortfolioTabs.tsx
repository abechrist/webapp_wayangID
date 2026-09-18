"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface PortfolioItem {
  title: string;
  duration: string;
  venue: string;
  date: string;
  views: number;
  grade: string;
  thumbnail: string;
}

export interface AwardItem {
  icon: string;
  color: "primary" | "tertiary";
  year: string;
  title: string;
  desc: string;
}

export interface MentorReviewItem {
  q: string;
  n: string;
  r: string;
  i: string;
  c: "text-primary" | "text-tertiary" | "text-secondary";
}

export interface GalleryItem {
  title: string;
  src: string;
}

interface TalentPortfolioTabsProps {
  portfolioItems: PortfolioItem[];
  awards: AwardItem[];
  mentors: MentorReviewItem[];
  gallery: GalleryItem[];
}

type TabType = "all" | "portfolio" | "awards" | "mentors" | "gallery";

export default function TalentPortfolioTabs({
  portfolioItems,
  awards,
  mentors,
  gallery,
}: TalentPortfolioTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("portfolio");

  const tabs: { id: TabType; label: string; icon: string; count: number }[] = [
    { id: "portfolio", label: "Portofolio Pentas", icon: "theater_comedy", count: portfolioItems.length },
    { id: "awards", label: "Prestasi & Penghargaan", icon: "military_tech", count: awards.length },
    { id: "mentors", label: "Validasi Maestro", icon: "verified_user", count: mentors.length },
    { id: "gallery", label: "Galeri Dokumentasi", icon: "photo_library", count: gallery.length },
  ];

  return (
    <section className="mb-10">
      {/* Interactive Tabs Header */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-outline-variant/20 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer border ${
                isActive
                  ? "bg-primary-container text-on-primary-container border-primary shadow-[0_0_16px_rgba(229,184,66,0.25)]"
                  : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border-outline-variant/20"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-surface-container-lowest/40 text-on-primary-container"
                    : "bg-surface-container-highest text-outline"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="pt-6">
        {/* Panel 1: Portofolio Pagelaran */}
        {activeTab === "portfolio" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-on-surface-variant">Menampilkan {portfolioItems.length} rekaman pagelaran terverifikasi</span>
              <span className="text-xs text-primary font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Dalang Utama &amp; Penata Gendhing
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioItems.map((p) => (
                <article
                  key={p.title}
                  className="bg-surface-container-low rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 group hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-surface-container-high">
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-surface-container-lowest/85 backdrop-blur-md px-2.5 py-1 rounded-full text-primary text-xs font-semibold">
                      Dalang Utama
                    </span>
                    <span className="absolute bottom-3 right-3 bg-surface-container-lowest/90 px-2 py-0.5 rounded text-on-surface font-mono text-xs">
                      {p.duration}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="text-xs text-tertiary font-medium">
                      {p.venue} • {p.date}
                    </span>
                    <h4 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                      Lakon {p.title}
                    </h4>
                    <div className="pt-2 mt-1 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1 truncate max-w-[150px]">
                        <span className="material-symbols-outlined text-sm">location_on</span> {p.venue}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-semibold shrink-0">
                        <span className="material-symbols-outlined text-sm">visibility</span> {(p.views / 1000).toFixed(1)}k • {p.grade}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Panel 2: Prestasi & Kejuaraan */}
        {activeTab === "awards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((a) => {
              const isPrimary = a.color === "primary";
              return (
                <div
                  key={a.title}
                  className="bg-surface-container-low p-5 rounded-2xl flex items-start gap-4 border border-outline-variant/20 hover:border-outline-variant/40 transition-colors"
                >
                  <span
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                      isPrimary ? "bg-primary/10 text-primary" : "bg-tertiary/10 text-tertiary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl">{a.icon}</span>
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className={`text-xs font-bold ${isPrimary ? "text-primary" : "text-tertiary"}`}>
                      {a.year}
                    </span>
                    <span className="text-base font-semibold text-on-surface">{a.title}</span>
                    <span className="text-xs text-on-surface-variant leading-relaxed">{a.desc}</span>
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Panel 3: Validasi Maestro / Mentor PEPADI */}
        {activeTab === "mentors" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mentors.map((v) => (
              <div
                key={v.n}
                className="bg-surface-container-low p-5 rounded-2xl flex flex-col justify-between gap-4 border border-outline-variant/20"
              >
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
                  <p className="text-sm text-on-surface italic leading-relaxed">“{v.q}”</p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/20">
                  <span
                    className={`w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-sm ${v.c}`}
                  >
                    {v.i}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-on-surface">{v.n}</span>
                    <span className="text-xs text-on-surface-variant">{v.r}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Panel 4: Galeri Dokumentasi */}
        {activeTab === "gallery" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <div
                key={g.title}
                className="h-60 rounded-2xl overflow-hidden bg-surface-container-high relative group border border-outline-variant/20 shadow-md"
              >
                <Image
                  src={g.src}
                  alt={g.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-75" />
                <span className="absolute bottom-3 left-3 right-3 text-xs text-on-surface font-medium truncate">
                  Penataan {g.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
