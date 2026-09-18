/**
 * Auth & Role-Based Access Control (RBAC) Module
 * Berdasarkan PRD §59 & Technical Specification §3
 */

export type UserRole = "public" | "talent" | "mentor" | "partner" | "admin";

export interface UserSession {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatarUrl?: string;
  wayangId?: string;
  orgName?: string;
}

export const DEMO_PERSONAS: Record<UserRole, UserSession> = {
  talent: {
    id: "user-inaz",
    name: "Inaz Fairoza Rizqillah",
    role: "talent",
    email: "inaz@wayang.id",
    avatarUrl: "/stitch-images/44-564e1a4b08c6.jpg",
    wayangId: "WID-2026-0001",
    orgName: "Sanggar Bima Suci / MAN Salatiga",
  },
  mentor: {
    id: "user-sutrisno",
    name: "Ki Dalang Sutrisno, S.Sn",
    role: "mentor",
    email: "sutrisno@pepadi.salatiga.id",
    avatarUrl: "/stitch-images/03-e871d0c65ee7.jpg",
    orgName: "Ketua PEPADI Komda Salatiga",
  },
  partner: {
    id: "user-disbudpar",
    name: "Dinas Kebudayaan & Pariwisata",
    role: "partner",
    email: "disbudpar@salatiga.go.id",
    avatarUrl: "/stitch-images/42-801802d3c697.jpg",
    orgName: "Pemerintah Kota Salatiga",
  },
  admin: {
    id: "user-admin",
    name: "Administrator Kurasi Salatiga",
    role: "admin",
    email: "admin@wayang.id",
    avatarUrl: "/stitch-images/01-81636d241aad.jpg",
    orgName: "Sekretariat Bersama Pentahelix",
  },
  public: {
    id: "user-guest",
    name: "Tamu Penikmat Budaya",
    role: "public",
    email: "tamu@salatiga.id",
  },
};

// Matriks Hak Akses (PRD §59)
export const PERMISSIONS = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canViewPublicTalent: (_role?: UserRole) => true,
  canManageOwnProfile: (role: UserRole) => role !== "public",
  canUploadPortfolio: (role: UserRole) => role === "talent" || role === "admin",
  canApplyOpportunity: (role: UserRole) => role === "talent" || role === "admin",
  canCreateOpportunity: (role: UserRole) => role === "partner" || role === "admin",
  canVerifySkill: (role: UserRole) => role === "mentor" || role === "admin",
  canModerateContent: (role: UserRole) => role === "admin",
  canViewAnalytics: (role: UserRole) => ({
    all: role === "admin",
    own: role !== "public",
  }),
};
