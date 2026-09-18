# Task Breakdown — WAYANG ID

**Source:** PRD §1–69 → `technical_specification.md` + `database-schema.md` + `ui-ux-specification.md`
**Method:** Vertical slices per Golden Journey; MVP = PRD §54. Urutan = dependency order.
**Estimasi:** S/M/L (S ≤1d, M 2–3d, L 4–5d) untuk 1 dev — sesuaikan tim.
**DoD tiap task:** code + Appwrite collection setup/permissions (bila DB) + UI responsive + empty/loading/error + demo seed bila perlu + manual QA Golden Journey terkait.

---

## Milestone 0 — Foundation (Week 1)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-00 | Repo & tooling | Next.js (App Router) + TS + Appwrite SDK + env (ENDPOINT, PROJECT, API_KEY) | S | - | `npm run dev` jalan |
| T-01 | Design tokens & layout | Palette sogan/gold/teal, nav responsive, IA (§32) | M | T-00 | - |
| T-02 | Appwrite collections | Setup DB, collections, attributes, indexes, buckets, teams | M | T-00 | `appwrite.json` terverifikasi |
| T-03 | Auth & RBAC | Appwrite Auth + Team membership, middleware check session/role | M | T-02 | RBAC PRD §59 enforced |

## Milestone 1 — Talent Identity (Core Loop: Discover → Identify)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-10 | Talent registration & profile | Form identitas (nama, TTL, sekolah, sanggar, lokasi lat/lng kecamatan, bio, style, collab pref), edit, visibility (public/ecosystem/private) | M | T-03 | CRUD talent, validasi, PII safety §44 |
| T-11 | WAYANG ID & QR | Generator via Function `generateWayangId` (counter doc `counters/wayang_id`), unique, QR SVG/PNG cache di bucket `qr`, route `wayang.id/talent/[wayang_id]` publik tanpa login, print-friendly | M | T-10 | Scan <2s, shareable, print 300dpi |
| T-12 | Skill taxonomy & TalentSkill | CRUD skill (sabet/sanggit/suluk + supporting), talent pilih skill + level 0–100 + evidence | S | T-02 | Filter by skill jalan |
| T-13 | Skill verification flow | `self_declared → under_review → mentor_verified` (verified_by/at), mentor verify/reject | M | T-12 | Status & badge update, notif |

## Milestone 2 — Portfolio & Showcase (Build → Expose)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-20 | Portfolio CRUD + media | Types performance/achievement/training/project/gallery, upload image/video/doc, thumbnail, visibility | M | T-10 | Drag-drop, lazy load, pagination |
| T-21 | Talent Detail (Passport) | Hero passport (foto, WID, QR, verified, style, skill bars + verified by), tabs Tentang/Portfolio/Performances/Achievements | M | T-11,T-20 | Magic Moment 3 terpenuhi |
| T-22 | Showcase feed | Curated feed video/short/BTS/cerita, filter kategori, bukan full social | S | T-20 | Grid + lightbox, play rate |

## Milestone 3 — Discovery (Map & Search)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-30 | Talent Discovery list | Search nama/skill/sanggar/sekolah/lokasi/style/mentor/opportunity via Appwrite Query & fulltext index, filter kombinasi | M | T-10,T-12 | Search <500ms, filter kombinasi |
| T-31 | Talent Map | Map Salatiga, marker cluster (talent/sanggar/sekolah/mentor/partner/venue), filter drawer, mini card → profil | L | T-30 | Magic Moment 1: ≥3 talent dalam 10s |
| T-32 | Public pages (Ecosystem, Mentor Directory) | Pentahelix, stats, mentor grid/detail | S | T-30 | Publik tanpa login |

## Milestone 4 — Development (Academy & Mentoring)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-40 | Academy & Learning Journey | Stages TALENT→PERFORMER→CREATOR→PROFESSIONAL, material/challenge/quiz, progress | M | T-12 | Stepper + progress ring |
| T-41 | Mentoring | Request/accept/active/completed, mentor talent list, feedback thread, mentor_reviews | M | T-13 | Notif mentoring_request/update |

## Milestone 5 — Opportunity Marketplace

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-50 | Organizations & Partner profile | CRUD org (type, lokasi), verification | S | T-03 | Partner dapat create opportunity |
| T-51 | Opportunity CRUD | Kategori performance/education/collaboration/tourism/creative, field PRD §42, status draft/open/closed/completed | M | T-50 | Filter kategori/lokasi/deadline |
| T-52 | Application workflow | Applied→Reviewed→Shortlisted→Selected→Completed (+ rejected/withdrawn), kanban partner, talent tabs | M | T-51 | State machine enforced |
| T-53 | Smart recommendation (rule-based) | Scoring via Appwrite Function (skill 40%, location 20%, exp 20%, style 10%, avail 10%), ranked + match reason | M | T-30,T-51 | Magic Moment 4: shortlist <1 menit |
| T-54 | Performance Record | Auto create via Function `completePerformance` dari Completed, auto portfolio item + achievement | M | T-52 | Magic Moment 5: banner +1 portfolio |

## Milestone 6 — Engagement & Admin

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-60 | Achievement & Journey | Badges (profile_complete, first_performance…), talent_achievements, My Journey checklist PRD §27 | S | T-20,T-54 | No leaderboard utama |
| T-61 | Notification | Appwrite Realtime sub channel + email via Function (verification, mentoring, opportunity, app-status, feedback) | M | T-13,T-52 | Realtime bell + email, is_read |
| T-62 | Admin — verification & moderation | Queue talent/mentor/org/skill/portfolio, approve/reject/needs_revision, report/block/suspend, audit log | M | T-03 | Queue <2 click action |
| T-63 | Admin — taxonomy & analytics | CRUD skill/style, view ecosystem_analytics (aggregated via Function `aggregateAnalytics` → `analytics_cache` + charts) | M | T-02 | PRD §31 charts |
| T-64 | Landing Page | Hero + 9 sections PRD §51, featured talents, map teaser, showcase, opportunities, journey, mentors, ecosystem, impact, CTA | M | T-21,T-31 | LCP <2.5s |

## Milestone 7 — Hardening (Prototype Ready)

| ID | Task | Desc | Size | Depends | Acceptance |
|----|------|------|------|---------|------------|
| T-70 | Demo seed & labeling | 20–25 talent (Inaz WID-2026-0001), 5–8 sanggar, 5 mentor, 5–10 sekolah, 8–12 opportunity, 30–50 portfolio, 20–30 performance — ribbon DEMO DATA | M | All | PRD §52 flag jelas |
| T-71 | NFR & safety | Image opt, lazy, pagination, caching, contrast AA, keyboard, file validation, rate limit, XSS/CSRF, PII minimization (usia sekolah) | M | All | Lighthouse ≥90, security checklist §58 |
| T-72 | E2E demo script | Jalankan loop PRD §61 end-to-end (register→…→achievement) untuk demo | S | T-70 | Loop hijau, video demo |

---

## Dependency Graph (ringkas)

```
T-00 → T-01, T-02 → T-03 → T-10 → T-11 → T-21
              T-12 → T-13 → T-41
              T-20 → T-22
              T-30 → T-31, T-32
              T-40
              T-50 → T-51 → T-52 → T-53 → T-54
              T-60, T-61, T-62, T-63, T-64 → T-70 → T-71 → T-72
```

## Backlog Phase 2 (PRD §55) — tidak di MVP
AI recommendation, advanced analytics, WhatsApp, richer mentoring, event management, notification automation, public API, advanced portfolio, collaboration management.

## Backlog Future (PRD §56)
Booking, marketplace, ticketing, payment, monetization, contract, multi-city.

---

## Definition of Ready / Done
- **Ready:** PRD ref jelas, Figma (bila UI), acceptance tertulis, dependency done
- **Done:** code reviewed, migrasi, RLS, responsive, a11y, demo data bila perlu, QA Golden Journey (Talent/Partner/Mentor/Admin §34–37) pass
