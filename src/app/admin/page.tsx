"use client";
import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { stitchImages } from "@/data/stitchImages";

interface VerificationItem {
  id: string;
  type: "talent" | "skill" | "portfolio" | "sanggar";
  name: string;
  applicant: string;
  details: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected" | "needs_revision";
  evidenceThumb?: string;
  badgeText: string;
}

const initialQueue: VerificationItem[] = [
  {
    id: "VER-001",
    type: "talent",
    name: "Registrasi Dalang Remaja: Danendra Galih",
    applicant: "Danendra Galih (16 th)",
    details: "SMAN 2 Salatiga • Spesialisasi Gaya Surakarta Lakon Karno Tanding • Izin Wali Terlampir",
    submittedAt: "2 jam lalu",
    status: "pending",
    evidenceThumb: stitchImages.anomMale,
    badgeText: "Akreditasi Paspor Baru",
  },
  {
    id: "VER-002",
    type: "skill",
    name: "Validasi Keahlian Suluk Laras Slendro",
    applicant: "Bagas Wicaksono (WID-2026-0004)",
    details: "Pengajuan kenaikan tingkat Suluk (75% → 85%) • Rekaman audio 4 menit di Padepokan Giri Siswo",
    submittedAt: "5 jam lalu",
    status: "pending",
    evidenceThumb: stitchImages.bagasAvatar,
    badgeText: "Kenaikan Grade Skill",
  },
  {
    id: "VER-003",
    type: "portfolio",
    name: "Arsip Pagelaran: Bima Suci Jejer Sanga",
    applicant: "Nyi Inaz Fairoza (WID-2026-0001)",
    details: "Dokumentasi 4K pentas Pendopo Disbudpar • Rekomendasi Maestro Ki Sutrisno 94/100",
    submittedAt: "1 hari lalu",
    status: "pending",
    evidenceThumb: stitchImages.pagelaranDewaRuci,
    badgeText: "Validasi Portofolio",
  },
  {
    id: "VER-004",
    type: "sanggar",
    name: "Verifikasi Entitas: Sanggar Surya Kencana",
    applicant: "Ki Supriyadi (Tingkir)",
    details: "Pendaftaran sanggar binaan baru • 12 siswa aktif karawitan & pedalangan bocah",
    submittedAt: "2 hari lalu",
    status: "pending",
    evidenceThumb: stitchImages.sanggarGiriSiswo,
    badgeText: "Mitra Sanggar Baru",
  },
];

export default function AdminPage() {
  const [queue, setQueue] = useState<VerificationItem[]>(initialQueue);
  const [activeTab, setActiveTab] = useState<"queue" | "moderation" | "taxonomy" | "analytics">("queue");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const updateStatus = (id: string, newStatus: VerificationItem["status"], label: string) => {
    setQueue((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    showToast(`${label} untuk item ${id}`);
  };

  const pendingCount = queue.filter((i) => i.status === "pending").length;

  return (
    <>
      <SiteHeader />
      <main className="pt-8 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-gutter py-8 flex flex-col gap-6">
          
          {/* Header Admin */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-outline-variant/20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-secondary/30">
                  <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
                  Pusat Kurasi &amp; Moderasi Admin
                </span>
                <span className="text-xs text-on-surface-variant">• Otoritas Kurasi Terakreditasi</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-on-surface" style={{ fontFamily: "var(--font-playfair)" }}>
                Tata Kelola Ekosistem &amp; Verifikasi Talenta
              </h1>
              <p className="text-sm text-on-surface-variant max-w-3xl leading-relaxed">
                Panel otoritas verifikasi akreditasi paspor WAYANG ID, moderasi rekam pentas budaya, manajemen taksonomi pakeliran, dan pemantauan analitik Pentahelix Kota Salatiga.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-surface-container flex items-center gap-3 border border-outline-variant/20 shadow-md">
                <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                  {pendingCount}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-bold text-on-surface">Antrean Tertunda</span>
                  <span className="text-[11px] text-on-surface-variant">Memerlukan Aksi Kurator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-outline-variant/20">
            {[
              { id: "queue" as const, label: `Antrean Verifikasi (${pendingCount})`, icon: "pending_actions" },
              { id: "analytics" as const, label: "Analitik Ekosistem", icon: "analytics" },
              { id: "taxonomy" as const, label: "Taksonomi Keahlian", icon: "category" },
              { id: "moderation" as const, label: "Log Audit & Moderasi", icon: "security" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === t.id
                    ? "bg-primary-container text-on-primary-container shadow-md"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>

          {/* TAB 1: Antrean Verifikasi */}
          {activeTab === "queue" && (
            <section className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4">
                {queue.map((item) => (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl bg-surface-container border transition-all ${
                      item.status === "approved"
                        ? "border-tertiary/40 opacity-75"
                        : item.status === "rejected"
                        ? "border-error/40 opacity-75"
                        : "border-outline-variant/30 hover:border-primary/40 shadow-lg"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {item.evidenceThumb && (
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high shrink-0 border border-outline-variant/20">
                            <Image
                              src={item.evidenceThumb}
                              alt={item.name}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-md bg-surface-container-high text-primary font-mono text-xs font-bold">
                              {item.id}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-md bg-primary-container/20 text-primary text-[11px] font-semibold">
                              {item.badgeText}
                            </span>
                            <span className="text-xs text-on-surface-variant">• Diajukan {item.submittedAt}</span>
                          </div>
                          <h3 className="text-base font-bold text-on-surface">{item.name}</h3>
                          <p className="text-xs text-on-surface-variant max-w-2xl">{item.details}</p>
                          <span className="text-xs font-semibold text-tertiary mt-0.5">Pemohon: {item.applicant}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                        {item.status === "pending" ? (
                          <>
                            <button
                              onClick={() => updateStatus(item.id, "approved", "Persetujuan Diterbitkan")}
                              className="px-3.5 py-2 rounded-xl bg-tertiary-container text-on-tertiary-container text-xs font-bold flex items-center gap-1.5 shadow hover:brightness-110 transition-all"
                            >
                              <span className="material-symbols-outlined text-[16px]">check_circle</span>
                              Setujui
                            </button>
                            <button
                              onClick={() => updateStatus(item.id, "needs_revision", "Catatan Revisi Terkirim")}
                              className="px-3.5 py-2 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-semibold flex items-center gap-1.5 border border-outline-variant/20 transition-all"
                            >
                              <span className="material-symbols-outlined text-[16px]">edit_note</span>
                              Minta Revisi
                            </button>
                            <button
                              onClick={() => updateStatus(item.id, "rejected", "Pengajuan Ditolak")}
                              className="px-3.5 py-2 rounded-xl bg-error-container text-on-error-container text-xs font-bold flex items-center gap-1.5 hover:brightness-110 transition-all"
                            >
                              <span className="material-symbols-outlined text-[16px]">cancel</span>
                              Tolak
                            </button>
                          </>
                        ) : (
                          <span className="px-3 py-1.5 rounded-xl bg-surface-container-lowest text-xs font-bold capitalize flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              {item.status === "approved" ? "verified" : "info"}
                            </span>
                            Status: {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: Analitik Ekosistem */}
          {activeTab === "analytics" && (
            <section className="flex flex-col gap-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col justify-between">
                  <span className="text-xs font-semibold text-outline uppercase">Total Talenta Terdaftar</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-primary">24</span>
                    <span className="text-xs text-tertiary font-bold">+4 Bulan Ini</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant mt-1">4 Kecamatan Salatiga</span>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col justify-between">
                  <span className="text-xs font-semibold text-outline uppercase">Pagelaran Terverifikasi</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-on-surface">48</span>
                    <span className="text-xs text-primary font-bold">100% Legal</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant mt-1">Tersinkronisasi PEPADI</span>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col justify-between">
                  <span className="text-xs font-semibold text-outline uppercase">Sanggar &amp; Vokasi Aktif</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-tertiary">6</span>
                    <span className="text-xs text-on-surface-variant">Sanggar Resmi</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant mt-1">SMASA &amp; SMKN Lab</span>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col justify-between">
                  <span className="text-xs font-semibold text-outline uppercase">Peluang &amp; Kolaborasi</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-3xl font-bold text-secondary">12</span>
                    <span className="text-xs text-outline">Open Bidding</span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant mt-1">Pemkot &amp; Hospitality</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col gap-4">
                  <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">donut_large</span>
                    Kerapatan Talenta per Kecamatan
                  </h3>
                  <div className="space-y-3 pt-2">
                    {[
                      { kec: "Kecamatan Sidorejo", pct: 42, count: "10 Dalang", color: "bg-primary" },
                      { kec: "Kecamatan Tingkir", pct: 25, count: "6 Dalang", color: "bg-tertiary" },
                      { kec: "Kecamatan Argomulyo", pct: 18, count: "5 Dalang", color: "bg-secondary" },
                      { kec: "Kecamatan Sidomukti", pct: 15, count: "3 Dalang", color: "bg-outline" },
                    ].map((item) => (
                      <div key={item.kec} className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs text-on-surface">
                          <span className="font-semibold">{item.kec}</span>
                          <span className="text-on-surface-variant font-mono">{item.count} ({item.pct}%)</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col gap-4">
                  <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">theater_comedy</span>
                    Distribusi Gaya Pedalangan (Gagrak)
                  </h3>
                  <div className="space-y-3 pt-2">
                    {[
                      { style: "Gaya Surakarta (Mangkunegaran & Kasunanan)", pct: 65, color: "bg-primary" },
                      { style: "Gaya Yogyakarta (Kraton & Madukara)", pct: 20, color: "bg-tertiary" },
                      { style: "Gaya Pesisiran (Bocah & Kontemporer)", pct: 15, color: "bg-secondary" },
                    ].map((item) => (
                      <div key={item.style} className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs text-on-surface">
                          <span className="font-semibold">{item.style}</span>
                          <span className="text-on-surface-variant font-mono">{item.pct}%</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 3: Taksonomi Keahlian */}
          {activeTab === "taxonomy" && (
            <section className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-on-surface">Standar Taksonomi Keahlian Budaya</h3>
                  <p className="text-xs text-on-surface-variant">Taksonomi resmi yang diuji dewan juri PEPADI Salatiga.</p>
                </div>
                <button
                  onClick={() => showToast("Fitur penambahan taksonomi dibuka")}
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold shadow flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">add</span> Tambah Kategori
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                    <span className="text-sm font-bold text-primary">1. Sabet (Gerak Wayang)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">Pilar Inti</span>
                  </div>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 mt-3">
                    <li>• Perang Kembang (Alusan vs Raksasa)</li>
                    <li>• Bedhol Bedhayan &amp; Tancep Kayon</li>
                    <li>• Gebug Bagoncong &amp; Perang Gada</li>
                    <li>• Koreografi Tari Wayang Halus</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                    <span className="text-sm font-bold text-tertiary">2. Sanggit (Naskah &amp; Lakon)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-tertiary/20 text-tertiary font-bold">Pilar Inti</span>
                  </div>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 mt-3">
                    <li>• Adaptasi Lakon Carangan</li>
                    <li>• Dramaturgi &amp; Humor Punakawan</li>
                    <li>• Ontowecono (Karakteristik Vokal Tokoh)</li>
                    <li>• Kontekstualisasi Isu Sosial Modern</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/15">
                    <span className="text-sm font-bold text-secondary">3. Suluk (Vokal &amp; Laras)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-secondary/20 text-secondary font-bold">Pilar Inti</span>
                  </div>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 mt-3">
                    <li>• Ada-Ada Girisa &amp; Greget Saut</li>
                    <li>• Pathet Nem, Sanga, &amp; Manyura</li>
                    <li>• Sendhon Kloloran &amp; Tembang Raras</li>
                    <li>• Harmonisasi Kendang &amp; Gender</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* TAB 4: Log Audit & Moderasi */}
          {activeTab === "moderation" && (
            <section className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 shadow-md flex flex-col gap-4">
              <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">history</span>
                Log Aktivitas &amp; Audit Trail Sistem
              </h3>
              <div className="divide-y divide-outline-variant/10 text-xs">
                {[
                  { user: "Ki Dalang Sutrisno", action: "Memvalidasi Skill Sabet", target: "Inaz Fairoza (WID-2026-0001)", time: "18 Sep 2026, 19:45" },
                  { user: "Disbudpar Salatiga", action: "Mempublikasikan Lowongan", target: "Festival Wayang Bocah 2026", time: "18 Sep 2026, 14:12" },
                  { user: "Admin PEPADI", action: "Menerbitkan QR Paspor", target: "Bagas Wicaksono (WID-2026-0004)", time: "17 Sep 2026, 11:30" },
                  { user: "System Automator", action: "Perhitungan Skor Kecocokan", target: "4 Lamaran Masuk", time: "16 Sep 2026, 09:15" },
                ].map((log, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-semibold text-on-surface">{log.user}</span>
                      <span className="text-on-surface-variant">{log.action}:</span>
                      <span className="text-primary font-medium">{log.target}</span>
                    </div>
                    <span className="text-outline shrink-0 font-mono text-[11px]">{log.time}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {toast && (
          <div className="fixed bottom-6 right-6 max-w-md bg-surface-container-highest text-on-surface p-4 rounded-xl shadow-2xl z-50 flex items-start gap-3 border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary">task_alt</span>
            <span className="flex flex-col text-sm">
              <span className="font-bold">Notifikasi Admin</span>
              <span className="text-on-surface-variant text-xs">{toast}</span>
            </span>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
