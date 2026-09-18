# Database Schema — WAYANG ID (Appwrite Cloud)

**Source:** PRD §38–43 (Core Entities, Talent/Skill/Portfolio/Opportunity models, Verification) + §24,25,44
**Stack:** Appwrite Cloud — Databases, Collections, Attributes, Indexes, Relationships, Permissions, Storage, Functions, Teams
**Database ID:** `wayangdb` | **Naming:** `snake_case` collection/attribute; Appwrite `$id` sebagai document ID (string, auto-generated atau custom)

> Tidak ada SQL/RLS/Postgres di dokumen ini. Semua constraint ditegakkan via Appwrite Attributes (required/size/enum/unique) + Indexes + Functions + Permissions.

---

## 1. ER Overview (logical)

```
users 1—1 talents ─┬─* talent_skills *—1 skills
                   ├─* portfolios ─* portfolio_media
                   ├─* performances
                   ├─* talent_achievements *—1 achievements
                   ├─* learning_progress *—1 learnings
                   └─* opportunity_applications *—1 opportunities *—1 organizations

mentors 1—* mentor_reviews (via mentorings)
       └─* mentorings (mentor ↔ talent)

schools / sanggars / venues / events — reference + lat/lng (filter app-level)
verifications — polymorphic (targetType + targetId)
notifications — per user (Realtime subscribe)
counters — wayang_id sequence via Function
```

---

## 2. Enum Reference (Appwrite `string` + allowed values)

Appwrite tidak punya native enum type — gunakan attribute `string` (atau `string[]`) dengan validasi allowed-values di Application/Function layer + dokumentasikan di sini sebagai kontrak.

| Enum | Values |
|------|--------|
| `user_role` | `talent`, `mentor`, `partner`, `admin` (disimpan sebagai Team/Label + `users.role` string) |
| `verification_status` | `pending`, `approved`, `rejected`, `needs_revision` |
| `skill_verification_status` | `self_declared`, `under_review`, `mentor_verified` |
| `visibility` | `public`, `ecosystem`, `private` |
| `portfolio_type` | `performance`, `achievement`, `training`, `project`, `gallery` |
| `opportunity_category` | `performance`, `education`, `collaboration`, `tourism`, `creative_project` |
| `opportunity_status` | `draft`, `open`, `closed`, `completed`, `cancelled` |
| `application_status` | `applied`, `reviewed`, `shortlisted`, `selected`, `completed`, `rejected`, `withdrawn` |
| `media_type` | `image`, `video`, `document` |
| `pedalangan_style` | `surakarta`, `yogyakarta`, `pesisiran`, `other` |
| `mentoring_status` | `requested`, `accepted`, `active`, `completed`, `rejected` |
| `notification_type` | `profile_verification`, `skill_verification`, `mentoring_request`, `mentoring_update`, `opportunity_new`, `application_status`, `selection`, `performance_reminder`, `achievement`, `portfolio_feedback` |
| `learning_stage` | `talent`, `performer`, `creator`, `professional` |
| `learning_progress_status` | `not_started`, `in_progress`, `completed` |

Atruran umum: attribute bertipe enum di bawah ditulis `string(size, required, enum:…)`.

---

## 3. Collections Spec

Format per collection: **Attributes** (`key: type(size/options)`) → **Indexes** → **Relationships** → **Permissions**.

### 3.1 users
Profil aplikasi, 1–1 dengan Appwrite Account (`accountId` = Auth user ID). Role ganda: `role` string + membership Team.

| Attribute | Type | Notes |
|---|---|---|
| `accountId` | string(64), required, unique | Appwrite Auth user `$id` |
| `email` | string(255), required, unique | |
| `role` | string(16), required, default `talent`, enum `user_role` | mirror dari Team/Label |
| `displayName` | string(128), required | |
| `avatarFileId` | string(64), optional | ref Storage `talent-photos` |
| `isActive` | boolean, required, default `true` | block/suspend via `false` |

Indexes: `unique(accountId)`, `unique(email)`, `key(role)`.
Permissions: read `users` (authenticated), write owner `user:{accountId}` + `team:admin`.

### 3.2 schools
| Attribute | Type | Notes |
|---|---|---|
| `name` | string(255), required | |
| `address` | string(512) | |
| `kecamatan` | string(128) | filter |
| `lat` / `lng` | double | map marker |

Indexes: `fulltext(name)`, `key(kecamatan)`.

### 3.3 sanggars
Attributes: `name` string(255) required, `address` string(512), `kecamatan` string(128), `lat`/`lng` double, `contactName` string(128), `contactPhone` string(32).
Indexes: `fulltext(name)`, `key(kecamatan)`.

### 3.4 talents (PRD §39)
| Attribute | Type | Notes |
|---|---|---|
| `userId` | string(64), required, unique | FK → `users.$id` (Appwrite `relationship` one-to-one atau string FK; pilih string FK + app check) |
| `wayangId` | string(16), required, unique | format `WID-YYYY-NNNN`, dibuat Function `generateWayangId` |
| `name` | string(255), required | |
| `photoFileId` | string(64) | Storage `talent-photos` |
| `dateOfBirth` | datetime | usia dihitung app-level |
| `bio` | string(2048) | |
| `schoolId` / `sanggarId` | string(64) | FK string → schools/sanggars |
| `kecamatan` | string(128) | |
| `lat` / `lng` | double | |
| `style` | string(16), enum `pedalangan_style` | |
| `experienceYears` | double | |
| `collaborationPreferences` | string(1024) | |
| `verificationStatus` | string(16), required, default `pending` | |
| `visibility` | string(16), required, default `public` | |
| `isDemo` | boolean, default `false` | flag DEMO DATA |

Indexes: `unique(wayangId)`, `unique(userId)`, `key(verificationStatus)`, `key(style)`, `key(sanggarId)`, `key(schoolId)`, `key(kecamatan)`, `key(lat)`, `key(lng)`, `fulltext(name,bio)`.
Permissions: read `any` bila `visibility=public` (enforce app-level: public query filter `visibility=public`; document permission `read("any")` di-set Function saat visibility=public, else `read("users")`), write owner + `team:admin`.

### 3.5 mentors (PRD §17)
Attributes: `userId` string(64) required unique, `name` string(255) required, `photoFileId` string(64), `bio` string(2048), `expertise` string[](128) required default `[]`, `experienceYears` integer, `verificationStatus` string(16) default `pending`.
Indexes: `unique(userId)`, `key(verificationStatus)`, `fulltext(name,bio)`.

### 3.6 organizations
Attributes: `ownerUserId` string(64) required, `name` string(255) required, `type` string(32) required (`school|sanggar|government|eo|hotel|tourism|community|education|festival|other`), `description` string(2048), `logoFileId` string(64), `address` string(512), `kecamatan` string(128), `lat`/`lng` double, `verificationStatus` string(16) default `pending`.
Indexes: `key(type)`, `key(verificationStatus)`, `key(ownerUserId)`, `fulltext(name)`.

### 3.7 skills (PRD §40)
Attributes: `name` string(64) required unique (`sabet`, `sanggit`, …), `category` string(16) required (`technical|supporting`), `description` string(1024).
Indexes: `unique(name)`, `key(category)`.

### 3.8 talent_skills (junction, PRD §40)
Appwrite tidak ada composite PK — `$id` auto + unique index gabungan di-enforce app-level (cek duplikat sebelum create).

| Attribute | Type | Notes |
|---|---|---|
| `talentId` | string(64), required | FK talents |
| `skillId` | string(64), required | FK skills |
| `level` | integer, 0–100 | validasi Function/app |
| `evidenceFileId` | string(64) | Storage |
| `verificationStatus` | string(16), default `self_declared` | |
| `verifiedBy` | string(64) | FK mentors |
| `verifiedAt` | datetime | |

Indexes: `key(talentId)`, `key(skillId)`, `key(verificationStatus)`.

### 3.9 portfolios (PRD §41)
Attributes: `talentId` string(64) required, `type` string(16) required enum `portfolio_type`, `title` string(255) required, `description` string(4096), `date` datetime, `location` string(255), `partnerName` string(255), `mentorId` string(64), `visibility` string(16) default `public`, `verificationStatus` string(16) default `pending`, `isDemo` boolean default `false`.
Indexes: `key(talentId)`, `key(type)`, `key(date)`, `fulltext(title,description)`.

### 3.10 portfolio_media (PRD §41)
Attributes: `portfolioId` string(64) required, `type` string(16) required enum `media_type`, `fileId` string(64) required (Storage `portfolio-media`), `thumbnailFileId` string(64).
Indexes: `key(portfolioId)`.

### 3.11 venues & events
venues: `name` required, `address`, `kecamatan`, `lat`/`lng`.
events: `title` required, `description`, `venueId` string(64), `date` datetime.

### 3.12 opportunities (PRD §42)
| Attribute | Type | Notes |
|---|---|---|
| `organizationId` | string(64), required | FK organizations |
| `title` | string(255), required | |
| `category` | string(32), required | enum `opportunity_category` |
| `description` | string(4096), required | |
| `location` | string(255) | |
| `lat` / `lng` | double | |
| `date` / `deadline` | datetime | |
| `requiredSkills` | string[](64), default `[]` | array skill IDs (Appwrite tidak ada join) |
| `experienceRequirement` | string(1024) | |
| `capacity` | integer | >0 bila set |
| `status` | string(16), required, default `draft` | |

Indexes: `key(organizationId)`, `key(category)`, `key(status)`, `key(deadline)`, `fulltext(title,description)`.

### 3.13 opportunity_applications (PRD §22)
Attributes: `opportunityId` string(64) required, `talentId` string(64) required, `status` string(16) default `applied`, `note` string(1024). Uniqueness `(opportunityId,talentId)` di-enforce app-level/Function.
Indexes: `key(opportunityId)`, `key(talentId)`, `key(status)`.

### 3.14 performances (PRD §25)
Attributes: `talentId` required, `opportunityId`, `eventId`, `date` datetime required, `venueId`, `role` string(255), `documentationFileId` string(64), `partnerName` string(255), `mentorId`, `feedback` string(2048).
Indexes: `key(talentId)`, `key(opportunityId)`, `key(date)`.

### 3.15 learnings & learning_progress (PRD §19)
learnings: `title` required, `stage` string(16) required enum `learning_stage`, `skillId`, `description` string(4096), `materialFileId`/`materialUrl` string(512), `challenge` string(2048), `quiz` string(8192) (JSON string).
learning_progress: `talentId` required, `learningId` required, `status` string(16) default `not_started`, `score` integer, `completedAt` datetime. Uniqueness `(talentId,learningId)` app-level.
Indexes: `key(stage)`, `key(talentId)`, `key(learningId)`.

### 3.16 mentorings & mentor_reviews (PRD §17)
mentorings: `mentorId` required, `talentId` required, `status` string(16) default `requested`, `message` string(2048).
mentor_reviews: `mentoringId` required, `rating` integer 1–5, `feedback` string(2048) required.

### 3.17 achievements & talent_achievements (PRD §26)
achievements: `code` string(64) required unique (`profile_complete`, `first_performance`, …), `name` required, `description`, `iconFileId` string(64).
talent_achievements: `talentId` required, `achievementId` required, `earnedAt` datetime default now. Uniqueness app-level.
Seed codes: `profile_complete`, `first_performance`, `mentor_verified`, `school_performer`, `first_collaboration`, `creator`, `rising_talent`.

### 3.18 verifications (PRD §43)
Attributes: `targetType` string(16) required (`talent|mentor|organization|skill|portfolio|achievement`), `targetId` string(64) required, `status` string(16) default `pending`, `reviewerId` string(64), `note` string(1024).
Indexes: `key(targetType,targetId)`, `key(status)`.

### 3.19 notifications (PRD §46)
Attributes: `userId` string(64) required, `type` string(32) required enum `notification_type`, `title` string(255) required, `body` string(1024), `link` string(512), `isRead` boolean default `false`.
Indexes: `key(userId,isRead,createdAt)`. Client subscribe via **Realtime** channel collection ini.

### 3.20 counters (WayangID generator)
Single doc `$id = "wayang_id"`: `year` string(4), `seq` integer default 0. Hanya Function `generateWayangId` yang boleh update (permission write `team:admin` + Function API key). Format output `WID-YYYY-NNNN` dengan `seq` zero-padded 4 digit; reset `seq` tiap ganti tahun (Function cek `year`).

### 3.21 analytics_cache
Doc `$id = "ecosystem"`: `totalTalents`, `verifiedTalents`, `totalMentors`, `openOpportunities`, `totalPerformances` (integer), `updatedAt` datetime. Di-update terjadwal oleh Function `aggregateAnalytics` (pengganti SQL VIEW).

---

## 4. Storage Buckets

| Bucket | Files | Max | Permissions default |
|---|---|---|---|
| `talent-photos` | avatar, foto talent/mentor | 5MB, image/* | read `any` (foto publik), write owner |
| `portfolio-media` | image/video/doc portfolio, evidence skill | 100MB video / 10MB image | read mengikuti `portfolios.visibility` (set per-file oleh Function), write owner |
| `docs` | materi academy, dokumen org | 25MB | read `users`, write owner/admin |
| `qr` | QR passport PNG/SVG cache | 1MB | read `any`, write Function only |

Thumbnail: gunakan `getFilePreview` (width/height/quality) + lazy loading client.

---

## 5. Teams & Permissions Model (pengganti RLS)

Teams: `admin`, `mentor`, `partner` (talent = default authenticated tanpa team khusus; role mirror di `users.role`).

| Collection | Read | Write |
|---|---|---|
| `talents` | `any` difilter app `visibility=public`; dokumen non-public: `users` + owner write | owner (`user:{accountId}` via app check) + `team:admin` |
| `portfolios`, `portfolio_media` | sama seperti talents | owner + admin |
| `opportunities` | `any` bila `status=open` (app filter) | owner org + admin |
| `opportunity_applications` | talent: own; partner: own opportunities (app check); admin all | talent create own; partner update status own opps; admin all |
| `talent_skills` | `any` untuk verified; all untuk owner/mentor/admin (app filter) | owner (self_declared) → mentor/admin verify |
| `counters`, `analytics_cache` | read `users` | Function only (API key) |
| `verifications` | admin + parties terkait (app check) | admin + Function |

Catatan: Appwrite Permissions lebih coarse dari RLS — semua aturan `visibility`/`verificationStatus`/`ownership` harus **di-enforce ganda**: document permissions + server-side check di Functions + query filter di client/Next.js API routes.

---

## 6. Functions (Appwrite Cloud)

| Function | Trigger | Tugas |
|---|---|---|
| `generateWayangId` | create `talents` (event) atau dipanggil API | increment `counters/wayang_id`, set `wayangId` unique |
| `setVisibilityPermissions` | create/update `talents`/`portfolios` | sinkronkan file/collection permissions ↔ `visibility` |
| `matchTalents` | HTTP (GET rekomendasi opportunity) | rule-based scoring skill40/location20/exp20/style10/avail10, return ranked + match reason |
| `completePerformance` | update `opportunity_applications.status=selected→completed` | create `performances` + `portfolios` item + `talent_achievements` (Career Loop §66) |
| `aggregateAnalytics` | schedule (mis. 15 mnt) | hitung counter → `analytics_cache/ecosystem` |
| `sendNotification` | create/update events (verification, mentoring, application) | create `notifications` doc + kirim email (SMTP/Resend) + Realtime push |

---

## 7. Query Patterns (Appwrite Queries)

- Discovery: `Query.equal("visibility","public") + Query.equal("verificationStatus","approved") + Query.equal("style",…) + Query.search("name",…)`; usia dihitung dari `dateOfBirth` client-side; fulltext via Index fulltext (ID/EN, bukan Indonesian stemmer — cukup untuk prototype).
- Map: `Query.isNotNull("lat") + Query.isNotNull("lng")`, select minimal; clustering client-side (Mapbox/Leaflet).
- Matching: Function `matchTalents` query `talents` + `talent_skills` per kandidat (tanpa JOIN), skor di Function.
- Pagination: `Query.limit + Query.offset` atau cursor `Query.cursorAfter`.

---

## 8. Seed Data (Prototype PRD §52)

Via script `node-appwrite` (API key server): skills (10: sabet, sanggit, suluk, pedalangan + 6 supporting), achievements (7 codes), learnings (4 stages), demo 20–25 talents (`isDemo=true`, persona Inaz `WID-2026-0001`), 5–8 sanggar, 5 mentor, 5–10 sekolah, 8–12 opportunities, 30–50 portfolios, 20–30 performances. Semua demo doc `isDemo=true` + UI ribbon "DEMO DATA".

---

## 9. Setup Order (Appwrite Console/CLI, `appwrite.json`)

1. Project + Database `wayangdb` → 2. Collections + Attributes (§3) → 3. Indexes → 4. Buckets (§4) → 5. Teams (`admin`, `mentor`, `partner`) → 6. Functions (§6) + env (SMTP, Map key) → 7. Seed (§8) → 8. Permissions audit → 9. Realtime channels (`notifications`) aktif.
