# Verification Protocol — WAYANG ID

**Tujuan:** Memastikan Prototype MVP memenuhi PRD, Spec, dan fungsi end-to-end tanpa error/bug.

---

## 1. Golden User Journey Verification (Must Pass)

Verifikasi end-to-end setiap persona. Wajib lulus untuk tiap Milestone/Task.

### 1.1 Talent Journey (PRD §34)
- [ ] Registration (Account Appwrite + `talents` doc)
- [ ] Profile Completion (Upload photo, set style, skill)
- [ ] WayangID Generated (Check Function output)
- [ ] Portfolio Upload (Media storage, link ke profile)
- [ ] Skill Verification (Self → Review → Mentor Verify badge)
- [ ] Talent Map Appearance (Marker muncul)
- [ ] Academy Participation (Progress tracking)
- [ ] Opportunity Application & Performance (Loop §61)
- [ ] Achievement Unlocked (Trigger)

### 1.2 Partner Journey (PRD §35)
- [ ] Org Profile Setup
- [ ] Opportunity Creation (Title/Category/Deadline/SkillReq)
- [ ] Talent Matching (Check scoring Function)
- [ ] Applicant Shortlist & Selection
- [ ] Performance Feedback

### 1.3 Mentor Journey (PRD §36)
- [ ] Expertise Profile
- [ ] Mentoring Request Accept
- [ ] Skill Verification (Approve/Reject)
- [ ] Talent Progress Review

### 1.4 Admin Journey (PRD §37)
- [ ] Verification Queue (Talent/Mentor/Portfolio)
- [ ] Content Moderation
- [ ] System Metrics (Analytics cache update)

---

## 2. Technical Verification (Appwrite Cloud)

### 2.1 API & Performance
- [ ] PWA Lighthouse score ≥90 (LCP < 2.5s)
- [ ] RBAC (Team membership + Collection Permissions) — check unauthorized access
- [ ] Appwrite Cloud Function execution logs (generateWayangId, matchTalents, completePerformance, aggregateAnalytics)
- [ ] Notification Realtime (Bell update tanpa refresh)

### 2.2 Data Integrity
- [ ] WAYANG ID Uniqueness (`WID-YYYY-NNNN` sequence)
- [ ] Denormalization checks (`talent_skills` join simulation)
- [ ] Storage Permissions (`public` vs `private` buckets)

---

## 3. Deployment Checklist

- [ ] Environment variables (Appwrite Endpoint, Project ID, API Key, Map key)
- [ ] Demo Data Labeling ("DEMO DATA" ribbon visible pada setiap demo doc)
- [ ] Responsive UI (Mobile-first, iPad, Laptop check)
- [ ] Accessibility (Contrast AA, Keyboard nav, Alt text)

---

## 4. Issue Reporting (Developer)

Bila test gagal:
1. Catat: `ID Task` | `Step Gagal` | `Expected` | `Actual` | `Log`
2. Perbaiki, lalu re-verify Golden Journey dari awal.
3. Commit jika `verify.md` checklist sudah semua hijau.
