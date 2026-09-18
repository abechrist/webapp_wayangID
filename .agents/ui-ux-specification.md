# UI/UX Specification — WAYANG ID

**Source:** PRD §7.8, §32–33, §49–51, §66–67 (FUN, Visual Direction, IA, Screens, Magic Moments, Philosophy)
**Tone:** Modern + Cultural + Young + Creative + Proud | **Approach:** Mobile-first, PWA-ready

---

## 1. UX Principles

1. **Talent First** — talent sebagai hero; setiap screen menjawab WHO / WHAT / PROOF / GROW / OPPORTUNITY (PRD §67)
2. **Evidence > Rating** — proof via mentor verification, portfolio, performance count — bukan bintang
3. **Discoverable** — search & map selalu ≤1 tap dari home
4. **Fun & Engaging** — bukan portal pemerintahan (PRD §49): animasi ringan, progress, achievement, storytelling, micro-interaction
5. **Inclusive & Safe** — talent usia sekolah: minimalkan PII publik, visibility control, moderasi

**Anti-pattern:** jangan tiru website museum lama / sistem administrasi sekolah.

---

## 2. Visual Direction (PRD §50)

### 2.1 Cultural (modernized)
Inspirasi gunungan, ornamen Jawa, batik, panggung wayang — diterjemahkan sebagai motif geometris halus, bukan ornamen berat. Gunakan sebagai aksen (header divider, card pattern, empty state).

### 2.2 Palette (proposal)
- **Primary:** Sogan Brown `#6B3A2A` / Deep Sogan `#4A2518` — wayang kulit
- **Secondary:** Gold `#C8A84E` — aksen premium
- **Accent:** Teal Jawa `#0E7C6B` — CTA sekunder, verified badge
- **Neutral:** Warm stone `50 #FAF6F1` → `900 #1C1917`
- **Semantic:** Success `#16A34A`, Warning `#D97706`, Danger `#DC2626`

Kontras minimal AA. Gold hanya aksen (badge, progress, QR frame).

### 2.3 Typography
- **Display/Heading:** Serif cultural (mis. Cormorant Garamond / Plus Jakarta Sans) — headline hero
- **Body/UI:** Sans humanist (Inter / Plus Jakarta Sans) — readability
- Scale: 12/14/16/20/24/32/48, line-height 1.5 body, 1.1 display

### 2.4 Elevation & Shape
Card radius 16–20px, soft shadow, border warm. Gunungan silhouette sebagai hero mask / section divider (SVG). Motion 150–250ms ease-out.

---

## 3. Information Architecture (PRD §32)

```
Home → Discover (Talent, Talent Map, Sanggar, Mentor, Ecosystem) → Showcase (Performances, Stories)
     → Develop (Academy, Learning Journey, Mentors) → Opportunity (Events, Open Calls, Collaborations)
     → About → Dashboard (Talent/Mentor/Partner/Admin)
```

**Nav:**
- Desktop: top bar (logo WAYANG ID + Discover/Showcase/Develop/Opportunity) + CTA Jelajahi / Daftar + avatar/dashboard
- Mobile: bottom tab (Home, Discover, Map, Opportunity, Profile) + hamburger untuk sekunder
- Breadcrumb pada detail (Talent > WID-2026-0001, Opportunity > Detail)

---

## 4. Landing Page (PRD §51)

**Hero:**
Headline: *Talenta Muda. Identitas Budaya. Masa Depan Wayang.*
Sub: Temukan, kenali, kembangkan, dan hubungkan talenta dalang muda Salatiga.
CTA primer: **Jelajahi Talenta** → /discover, sekunder: **Daftar sebagai Dalang Muda** → /register

**Sections (berurutan):**
1. Featured Talents (carousel 3–6 cards, verified badge)
2. Talent Map teaser (mini map Salatiga + counter talent)
3. Latest Showcase (video grid 3 cols)
4. Opportunities (open calls cards)
5. Learning Journey (stage TALENT→PERFORMER→CREATOR→PROFESSIONAL, progress viz)
6. Mentors (avatar row)
7. Ecosystem (Pentahelix icon row + stats)
8. Cultural Impact (angka: talent, performance, sanggar, sekolah)
9. CTA closing (daftar)

Tiap section: heading + sub + CTA "Lihat semua".

---

## 5. Magic Moments (PRD §66) — Prioritas Prototype

| # | Moment | Screen | Interaction | Success Signal |
|---|--------|--------|-------------|----------------|
| 1 | Talent Map | /map | Buka peta Salatiga, cluster talenta; filter skill/style/usia muncul real-time | User menemukan ≥3 talent dalam 10 detik |
| 2 | QR Passport | /talent/[wayang_id] | Scan QR (frame gold) → profil publik instan tanpa login | Scan → profil <2s, shareable |
| 3 | Portfolio | /talent/[id] → Portfolio | Video/foto grid, lightbox, bukti mentor | View duration, play rate |
| 4 | Smart Matching | /opportunities/[id]/matching (Partner) | Input kebutuhan → rekomendasi ranked dengan match reason | Shortlist dalam 1 menit |
| 5 | Career Loop | /dashboard/performances | Performance Completed → auto banner "Portfolio Updated + Achievement Unlocked" | Portfolio +1, achievement toast |

---

## 6. Screen Specifications (PRD §33 — 32 screens)

### 6.1 Public (12)

**Talent Discovery (/discover):** search bar "Cari talenta, skill, sanggar…", chips filter (skill, lokasi kecamatan, style, verification, availability), grid cards (foto, nama, WAYANG ID, style, 2 skill tags, verified badge), sort Terbaru/Experience, pagination.

**Talent Map (/map):** full-bleed map Salatiga, marker cluster (talenta=wayang icon, sanggar=gapura, sekolah=book), filter drawer (Dalang Muda/Sanggar/Sekolah/Mentor/Partner/Venue + skill/gaya/usia), click marker → mini card → CTA Lihat Profil.

**Talent Detail (/talent/[wayang_id]):** hero passport (foto, nama, WID, QR, Verified Talent, style, skills sabet/sanggit/suluk dengan progress + "Verified by Mentor XYZ"), tabs: Tentang (bio, sekolah, sanggar, lokasi), Portfolio (grid), Performances (timeline), Achievements, Mentor feedback. Share & Cetak Passport.

**Portfolio Detail:** media viewer (video dominant), meta (judul, tanggal, lokasi, partner, mentor, skill_used), navigasi prev/next portfolio talent.

**Showcase (/showcase):** feed social-layer (video auto-muted preview, short clip, BTS, cerita), filter Performance/Story/Collaboration, bukan infinite social — curated.

**Opportunity List (/opportunities):** cards (title, organizer, kategori chip, lokasi, tanggal, deadline countdown, required_skills, capacity), filter kategori + lokasi + deadline.

**Opportunity Detail:** header (title, organizer verified, status Open/Closed), deskripsi, kebutuhan skill, CTA Apply (talent) / Lihat Rekomendasi (partner), applicants count, share.

**Mentor Directory/Detail:** grid mentor (foto, expertise, verified), detail (bio, expertise, experience, talents mentored, skill verifications given), CTA Minta Mentoring.

**Ecosystem (/ecosystem):** Pentahelix diagram, stats (total talent, sanggar, sekolah, mentor, opportunity), map mini, CTA jadi Partner/Mentor.

**Academy (/academy):** journey stages visual (Talent→Performer→Creator→Professional), cards per stage (skill, material, challenge, quiz), progress ring.

**QR Talent Profile:** sama dengan Talent Detail tapi optimized untuk scan (large QR, print-friendly, tanpa login gate).

### 6.2 Talent (7)

**Login/Register:** role selector (Talent/Mentor/Partner), form minimal, WAYANG ID preview.

**Talent Dashboard (/dashboard):** greeting, Journey progress (checklist My Journey §27), stats (portfolio, verification, applications), upcoming opportunities, achievement recent.

**Edit Profile:** form sections (identitas, sekolah/sanggar, lokasi map picker, style, bio, collaboration_preferences, visibility), WAYANG ID read-only.

**Portfolio Management:** table/grid + CTA Tambah Portfolio (type, title, date, location, partner, mentor, visibility, upload media drag-drop, skill_used).

**Learning Journey:** vertical stepper stages, per learning: material (video/doc), challenge, quiz, status, CTA Mulai/Lanjutkan, mentoring link.

**Opportunity/Application:** tabs Applied/Reviewed/Shortlisted/Selected/Completed, card status timeline, CTA batalkan.

**Achievement:** grid badges (locked/unlocked), progress to next.

### 6.3 Mentor (3)
Dashboard (talents bimbingan, request queue), Mentoring Management (requested/accepted/active/completed, chat/feedback thread), Skill Verification (list talent_skills under_review + verify/reject + evidence viewer).

### 6.4 Partner (4)
Dashboard (Active Opportunities, Applications, Recommended Talents, Upcoming Events, Completed Collaborations), Create Opportunity (form §6.7 spec), Talent Matching (ranked list + match reason chips Skill+Location+Experience), Applicant Management (kanban Applied→Reviewed→Shortlisted→Selected, bulk action, feedback).

### 6.5 Admin (5)
Dashboard (Ecosystem Overview counters, Verification queue, Activity feed), Talent Verification (table pending + approve/reject/needs_revision), Content Moderation (portfolio flag/report, block/suspend), Taxonomy Management (CRUD skills, styles, categories), Analytics (charts: talent distribution, skill/style, performance, opportunity funnel — PRD §31).

---

## 7. Component Library

**Primitives:** Button (primary sogan, secondary teal, ghost), Input/Search, Select, Chip/Tag, Badge (Verified gold, Pending amber), Card (talent, opportunity, portfolio), Avatar, Progress (skill bar, journey ring), Timeline, Map Marker, QR Frame, Empty State (gunungan illustration), Toast, Modal, Drawer, Tabs.

**Patterns:**
- Talent Card: 4:5 photo, name, WID mono, style label, 2 skill chips + verified icon, hover lift
- Skill Bar: label + 0–100 + "Verified by …" kecil
- Passport: gold frame, QR bottom-right, wayang_id mono, print @300dpi
- Application Timeline: stepper horizontal 5 step, active teal

---

## 8. Interaction & States

- Loading: skeleton cards, map shimmer
- Empty: illustration + CTA ("Belum ada portfolio — tambah pertama")
- Error: inline validation, toast untuk server
- Visibility: icon eye/eye-off + tooltip Public/Ecosystem/Private
- Demo badge: "DEMO DATA" ribbon pada semua demo talent/portfolio

---

## 9. Responsive Rules (PRD §58)

- Breakpoints: 360 (mobile), 768 (tablet), 1024 (desktop), 1440 (wide)
- Mobile-first: bottom nav, single column, map 60vh, card 1 col; tablet 2 col; desktop 3–4 col + sidebar filter
- Touch target ≥44px, typography scale down 1 step di mobile

---

## 10. Accessibility (PRD §58)

Semantic HTML, heading hierarchy, alt text media, keyboard nav (tab order, focus ring gold), contrast AA, skip-to-content, ARIA untuk map markers & tabs.

---

## 11. Content & Copy

Bahasa: Indonesia primary, Jawa aksen halus (tidak berlebihan). Empty/error copy ramah talenta muda. Demo data label konsisten: "Data demo — bukan data resmi Kota Salatiga."

---

## 12. Handoff Notes

Figma: pages per IA section, components sebagai variants, tokens untuk palette/typography. Prototype flow prioritas: Golden Journey Talent (PRD §34) end-to-end.
