# Technical Specification — WAYANG ID

**Product:** WAYANG ID — Ekosistem Talenta Dalang Muda Kota Salatiga
**Version:** 1.0 | **Status:** Prototype / MVP | **Source:** PRD.md v1.0
**Date:** 2026-09-18

---

## 1. Product Summary

WAYANG ID bukan direktori — melainkan talent ecosystem yang membentuk loop: `Data → Identity → Portfolio → Exposure → Opportunity → Experience → Growth`. North Star: **Verified Young Talent Connected to Real Opportunities**.

Principles: Talent First, Evidence Based, Discoverable, Development Oriented, Opportunity Driven, Inclusive (perhatian khusus dalang muda perempuan), Cultural Identity, Fun & Engaging.

Pentahelix: Pemerintah, Sanggar, Sekolah, Dalang senior/vokasi, Dalang muda, Komunitas/industri kreatif, Perguruan tinggi.

---

## 2. Core Product Loop

```
DISCOVER → Talent Mapping → IDENTIFY (WAYANG ID / Digital Identity) → DEVELOP (Academy + Mentor) → BUILD (Digital Portfolio) → EXPOSE (Showcase) → OPPORTUNITY (Performance/Collaboration) → EXPERIENCE (Achievement + Portfolio Update) → DISCOVER AGAIN
```

### 2.1 Five Core Pillars (PRD §11)

| Pilar | Deskripsi | Key Capability |
|-------|-----------|----------------|
| Talent Mapping | Pendataan talenta (identitas, usia, sekolah, sanggar, lokasi, gaya Surakarta/Yogyakarta/pesisiran, skill sabet/sanggit/suluk) | Geospatial mapping, filter |
| Digital Portfolio | Foto/video/pencapaian/pelatihan/proyek + feedback mentor | Media management |
| Talent Exposure | Virtual showcase, festival, channel pemerintah, pariwisata | Public showcase feed |
| Talent Development | Technical (sabet/sanggit/suluk/pedalangan) + supporting (public speaking, branding, content, production, entrepreneurship, bahasa asing) | Academy + Mentoring |
| Talent Opportunity | Pertemuan talenta ↔ kebutuhan (EO, hotel, sekolah, pemerintah, pariwisata) | Marketplace + matching |

---

## 3. Roles & Access Control

### 3.1 Roles

- **Public** — tanpa login: view talent/portfolio/showcase/event/QR
- **Talent (Dalang Muda)** — profile, portfolio, journey, apply opportunity
- **Mentor** — feedback, skill verification, endorsement
- **Partner / Opportunity Provider** — create opportunity, discovery, applicant management
- **Admin / Curator** — verification, moderation, taxonomy, analytics

### 3.2 Permission Matrix (PRD §59)

| Capability | Public | Talent | Mentor | Partner | Admin |
|---|:---:|:---:|:---:|:---:|:---:|
| View public talent | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage own profile | - | ✓ | ✓ | ✓ | ✓ |
| Upload portfolio | - | ✓ | - | - | ✓ |
| Apply opportunity | - | ✓ | - | - | ✓ |
| Create opportunity | - | - | - | ✓ | ✓ |
| Mentor talent | - | - | ✓ | - | ✓ |
| Verify skill | - | - | ✓ | - | ✓ |
| Moderate content | - | - | - | - | ✓ |
| View analytics | limited | own | own | own | all |

### 3.3 Auth Requirements

- Appwrite Cloud Accounts (email/password, OAuth bila perlu) + session via Appwrite SDK
- Role via Teams/Labels (`talent`/`mentor`/`partner`/`admin`) + document/collection Permissions
- RBAC di API (Appwrite Functions + Next.js middleware) & UI
- Verification workflow untuk talent/mentor/organization/skill/portfolio
- Audit log, rate limiting, XSS/CSRF/validation

---

## 4. Architecture Overview

### 4.1 Platform Type

Responsive Web Application, **mobile-first**, PWA-ready. REST/JSON API, scalable data model untuk ekspansi multi-kota.

### 4.2 High-Level Components

```
[ Client (Next.js/React) ]  ←→  [ API Layer (Next.js API Routes + Appwrite Functions) ]  ←→  [ Appwrite Cloud: Databases | Auth | Storage | Functions | Realtime ]
        |                             |                                                       |
   PWA, Map SDK (Mapbox/            RBAC (Teams/Labels + Permissions),                    Media (Storage buckets),
   Leaflet/OSM), QR,                Verification, Matching (Function rule-based),         Geospatial (app-level),
   Media Player, i18n               Notification (Realtime + email)                       Analytics (Function aggregation)
```

### 4.3 Mandatory Integrations (Prototype)

- Map — Mapbox/Leaflet/OSM (Talent Map Salatiga, filter talent/sanggar/sekolah/mentor/partner/venue + skill/gaya/usia/experience)
- Media — Appwrite Cloud Storage (buckets `talent-photos`, `portfolio-media`, `qr`), image + video upload, thumbnail via `getFilePreview`, lazy loading, pagination, caching
- QR generation — `wayang.id/talent/{WAYANG_ID}` → public profile tanpa login; generate via Appwrite Function atau Next.js route (SVG/PNG), cache di bucket `qr`
- Notification — Appwrite Realtime (in-app) + email via Function (WhatsApp = Phase 2)
- Functions — WayangID counter, matching, analytics aggregation, email triggers

### 4.4 Scalability & Extensibility

Data model harus support: kabupaten/kota lain, provinsi lain, jaringan talenta budaya lain. Taxonomy terpusat (skill, style, category).

---

## 5. Information Architecture (PRD §32)

```
Home | Discover (Talent, Talent Map, Sanggar, Mentor, Ecosystem) | Showcase (Performances, Stories)
| Develop (Academy, Learning Journey, Mentors) | Opportunity (Events, Open Calls, Collaborations)
| About | Dashboard (Talent/Mentor/Partner/Admin)
```

Talent Dashboard: My Profile, My Portfolio, My Journey, My Opportunities, My Performances, My Achievements.

---

## 6. Feature Specifications

### 6.1 Talent Identity & Passport

- Format WAYANG ID: `WID-YYYY-NNNN` (contoh `WID-2026-0001`) — unique, indexed
- Passport fields: foto, nama, WAYANG ID, QR, status verification, style, skills, achievement, portfolio, performance history
- QR → public page ` /talent/{wayang_id}`

### 6.2 Talent Profile (PRD §15)

WHO: foto, nama, bio, usia, sekolah, sanggar, lokasi (lat/lng + kecamatan), gaya, skill, pengalaman, preferensi kolaborasi, verification_status

### 6.3 Digital Portfolio (PRD §16)

Item types: Performance, Achievement, Training, Project, Gallery. Fields: judul, tanggal, lokasi, deskripsi, dokumentasi, partner, mentor, skill_used, visibility (public/ecosystem/private).

### 6.4 Mentor System & Skill Verification (PRD §17-18)

- Mentor profile: nama, foto, bio, expertise, pengalaman, verified_status
- Skill verification flow: `Self Declared → Under Review → Mentor Verified` (verified_by, verified_at)
- Reputasi via proof: mentor verification, performance count, portfolio count, achievement, training, partner feedback — bukan star rating

### 6.5 Academy / Learning Journey (PRD §19)

Journey stages: `TALENT → PERFORMER → CREATOR → PROFESSIONAL`. Per stage: skill, material, challenge, quiz, mentoring, achievement. Progress tracked via `LearningProgress`.

### 6.6 Showcase (PRD §20)

Social layer untuk portfolio & exposure — bukan full social media. Content: performance video, short clip, BTS, cerita talenta, achievement, collaboration.

### 6.7 Opportunity Marketplace (PRD §21-23)

- Categories: Performance, Education, Collaboration, Tourism, Creative Project
- Fields: title, organization_id, category, description, location, date, deadline, required_skills, experience_requirement, capacity, status (`Draft | Open | Closed | Completed | Cancelled`)
- Application workflow: `Applied → Reviewed → Shortlisted → Selected → Completed` → auto `Performance Record → Portfolio Item → Achievement`
- Smart Recommendation (MVP = **rule-based**): score berdasar skill, experience, location, style, availability, category. AI/ML = Phase 2.

### 6.8 Geospatial Mapping (PRD §24)

Visualisasi: talent, sanggar, sekolah, venue, partner. Filter lokasi + skill/style/usia/experience. Tujuan: persebaran, konsentrasi ekosistem, planning kegiatan.

### 6.9 Performance Record (PRD §25)

Fields: talent, opportunity/event, date, venue, role, documentation, partner, mentor, feedback. Auto-portfolio.

### 6.10 Achievement & Growth Journey (PRD §26-27)

Examples: Profile Complete, First Performance, Mentor Verified, School Performer, First Collaboration, Creator, Rising Talent. Dashboard progress: checklist perjalanan personal (tanpa leaderboard utama).

### 6.11 Public Discovery & Search (PRD §28,47)

Public (tanpa login): talent, map, portfolio, showcase, mentor, opportunity, ecosystem. Search: nama, skill, sanggar, sekolah, lokasi, style, mentor, opportunity. Filter: skill, location, style, age category, experience, verification, availability.

### 6.12 Partner & Admin Dashboards (PRD §29-30)

- Partner: org profile, create opportunity, search talent, recommendation, applicants (shortlist/select), performance record. Widgets: Active Opportunities, Applications, Recommended Talents, Upcoming Events, Completed Collaborations.
- Admin: Ecosystem Overview (total talent/verified/mentor/sanggar/partner/opportunity/performance), Verification queue, Activity feed, Taxonomy management, Content moderation.

### 6.13 Verification (PRD §43)

Objects: talent, mentor, organization, skill, portfolio, achievement. Statuses: `Pending | Approved | Rejected | Needs Revision`.

### 6.14 Privacy & Safety (PRD §44-45)

Visibility: Public / Ecosystem / Private. Sensor data sensitif. Karena talent usia sekolah: minimalkan PII di public, moderasi konten, report, block/suspend, audit log, admin review.

### 6.15 Notification (PRD §46)

Events: profile/skill verification, mentoring request/update, opportunity baru, application status, selection, performance reminder, achievement, portfolio feedback. Prototype: in-app + email; WhatsApp next.

---

## 7. Screen Inventory (PRD §33 — 32 screens)

| Area | Screens |
|------|---------|
| Public | Landing, Talent Discovery, Talent Map, Talent Detail, Portfolio Detail, Showcase, Opportunity List/Detail, Mentor Directory/Detail, Ecosystem, Academy, QR Talent Profile |
| Talent | Login/Register, Dashboard, Edit Profile, Portfolio Management, Learning Journey, Opportunity/Application, Achievement |
| Mentor | Dashboard, Mentoring Management, Skill Verification |
| Partner | Dashboard, Create Opportunity, Talent Matching, Applicant Management |
| Admin | Dashboard, Talent Verification, Content Moderation, Taxonomy Management, Analytics |

---

## 8. Non-Functional Requirements (PRD §58)

- **Performance:** LCP cepat, image optimization, lazy loading, pagination, caching
- **Responsive:** mobile, tablet, desktop (mobile-first)
- **Accessibility:** readable typography, contrast, keyboard nav, alt text, semantic HTML
- **Security:** auth, authorization, validation, file validation, XSS/CSRF, rate limit, audit log
- **Scalability:** model siap multi-region/multi-domain budaya

---

## 9. MVP Scope

### 9.1 Must Have (PRD §54)

- Talent: registration, profile, skill, portfolio, WAYANG ID, QR, verification
- Discovery: search, filter, talent map
- Development: academy, learning journey, mentor, mentoring, skill verification
- Exposure: showcase, portfolio feed
- Opportunity: opportunity, application, talent matching, performance record
- Engagement: achievement, progress
- Admin: verification, moderation, taxonomy, dashboard, basic analytics

### 9.2 Phase 2 (PRD §55)

AI recommendation, advanced analytics, WhatsApp, richer mentoring, event management, notification automation, public API, advanced portfolio, collaboration management.

### 9.3 Future (PRD §56)

Commercial booking, marketplace, ticketing, payment, monetization, professional contract, multi-city, regional cultural network.

---

## 10. Prototype Data & Success Criteria

### 10.1 Demo Data (PRD §52-53)

Demo/simulated (bukan data resmi Salatiga), label jelas demo. Volume: 20–25 talent, 5–8 sanggar, 5 mentor, 5–10 sekolah, 8–12 opportunity, 30–50 portfolio items, 20–30 performance records. Persona: **Inaz Fairoza Rizqillah**.

### 10.2 End-to-End Success Loop (PRD §61)

`Registration → Profile → Skill → Portfolio → Verification → WAYANG ID → Talent Map → Learning → Opportunity → Matching → Application → Selection → Performance → Portfolio Growth → Achievement` — bila loop jalan, prototype berhasil.

### 10.3 Product KPI (PRD §60,62)

North Star: **Verified Young Talent Connected to Real Opportunities**. Funnel: Registered → Verified → Portfolio-ready → Discovered → Matched → Selected → Completed Performances → New Portfolio. Supporting: views (portfolio/showcase/QR), applications, collaborations, active mentor/partner/sanggar.

### 10.4 Timeline Alignment (PRD §63)

Phase I (1–4): platform/DB/stakeholder/prototype. Phase II (5–9): ≥25 profil lengkap terverifikasi. Phase III (10–18): 20 kolaborasi + coverage +300%. Phase IV (19–24): trade center, impact assessment, replication.

---

## 11. Technical Decisions & Open Items

- Stack: **Next.js + Appwrite Cloud (Databases + Auth + Storage + Functions + Realtime) + Map (Mapbox/Leaflet/OSM)** — final di ADR terpisah.
- WayangID generator: Appwrite Function atomik increment pada counter collection `counters/wayang_id` (`year`, `seq`) + format `WID-YYYY-NNNN`, unique index pada `talents.wayangId`.
- Media: Appwrite Storage buckets (`talent-photos`, `portfolio-media`, `docs`, `qr`) + Permissions per file (`read("any")` jika `visibility=public`, else `read("users"/"team:*")`); thumbnail via `getFilePreview`.
- QR: generate SVG/PNG via Appwrite Function atau Next.js route, cache di bucket `qr`, invalidation on profile update.
- Matching MVP: rule-based scoring via Appwrite Function (skill 40%, location 20%, experience 20%, style 10%, availability 10%) — tunable; query Collections tanpa JOIN.
- Analytics: aggregation via Function + cache doc `analytics_cache` (Appwrite tidak ada VIEW).
- Auth/RBAC: Appwrite Accounts + Teams/Labels (`talent`/`mentor`/`partner`/`admin`) + Permissions di collection/document level; session via Appwrite SDK, guard di Next.js middleware + Functions.
- Detail teknologi lengkap di luar PRD; dokumen ini menjadi referensi implementasi.

---

## 12. Traceability

Setiap section merujuk PRD § — perubahan PRD harus dipropagasi ke `database-schema.md`, `ui-ux-specification.md`, dan `task.md`.
