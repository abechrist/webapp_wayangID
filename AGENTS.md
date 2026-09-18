# AGENTS.md — WAYANG ID

## What This Is
Greenfield prototype — Ekosistem Talenta Dalang Muda Kota Salatiga. Built with Next.js (App Router), TypeScript, and Tailwind CSS.
Product loop: DISCOVER → IDENTIFY (WAYANG ID+QR) → DEVELOP → BUILD (Portfolio) → EXPOSE → OPPORTUNITY → EXPERIENCE → DISCOVER AGAIN.

## Source of Truth (read in order)
- `.agents/PRD.md` — product requirements (69 sections, MVP §54)
- `.agents/technical_specification.md` — architecture, roles, integrations
- `.agents/database-schema.md` — Appwrite collections, indexes, buckets
- `.agents/ui-ux-specification.md` — IA, screens, tokens
- `.agents/task.md` — vertical slices T-00→T-72, dependency graph
- `.agents/agent-prompt.md` — system prompt for execution agents
- `stitch_full_webapp_ui_design/nusantara_contemporary/DESIGN.md` — design tokens (Nusantara Contemporary)
- `stitch_full_webapp_ui_design/*/code.html` — 10 Stitch screens + `screen.png` refs (Tailwind CDN, dark mode)

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Lucide / Material Symbols Icons. Mobile-first, PWA-ready.

## Structure
```
stitch_full_webapp_ui_design/  # 10x code.html (Stitch exports) + DESIGN.md + screen.png
  beranda_wayang_id_ekosistem_dalang_muda/
  peta_eksplorasi_talenta_dalang_salatiga/
  profil_talenta_qr_passport_inaz_fairoza/
  manajemen_portofolio_rekam_pentas_talenta/
  showcase_video_arsip_pagelaran_digital/
  peluang_kolaborasi_dalang_muda/
  dashboard_{akademi,mentor,mitra}/
  direktori_sanggar_ekosistem_pentahelix/
  nusantara_contemporary/        # DESIGN.md only
.agents/                       # PRD + specs + tasks
src/                           # App router code
```

## Design System — Nusantara Contemporary
- **Palette:** dark base `#0f131d`/`#0a0e18` (kelir), primary gold `#ffd56d`/`#e5b842`, secondary `#ffb4a4`/`#891e07`, tertiary `#65f2b5`, outline `#9a907c`. See `DESIGN.md` for full Material-3 token set.
- **Type:** Playfair Display (display/headline), Plus Jakarta Sans (body/label/interface).
- **Radii:** sm 0.25rem / DEFAULT 0.5rem / md 0.75rem / lg 1rem / xl 1.5rem / full.
- **Elevation:** glassmorphism `backdrop-filter: blur(12-20px)` + gold hairline borders.

## Conventions & Constraints
- **WAYANG ID:** `WID-YYYY-NNNN` (e.g. `WID-2026-0001`), unique indexed, QR → `/talent/{wayang_id}` public without login.
- **Roles:** Public | Talent | Mentor | Partner | Admin — matrix PRD §59.
- **Statuses:** verification `pending/approved/rejected/needs_revision`; skill `self_declared/under_review/mentor_verified`; opportunity `draft/open/closed/completed/cancelled`.
- **Matching MVP:** rule-based only (skill 40, location 20, experience 20, style 10, availability 10).
- **Reputation:** mentor verification + portfolio/performance counts — never star ratings.
- **Demo data:** always label "DEMO DATA — bukan data resmi Kota Salatiga"; persona `Inaz Fairoza Rizqillah (WID-2026-0001, Surakarta, sabet/sanggit/suluk)`.

## Commands
- `npm run dev` — dev server
- `npm run lint` / `npm run typecheck` / `npm test` — verify before claiming done

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
