import { Client, Databases, Account, Storage, Functions } from "appwrite";
import { talents, sanggars, opportunities, portfolioItems, Talent } from "@/data/demo";

// 1. Appwrite Client Initialization
const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://sgp.cloud.appwrite.io/v1";
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "6aad4f19003a342d8e87";

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);

// 2. Constants & Collection IDs (sesuai database-schema.md)
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "wayangdb";

export const COLLECTIONS = {
  USERS: "users",
  SCHOOLS: "schools",
  SANGGARS: "sanggars",
  TALENTS: "talents",
  SKILLS: "skills",
  TALENT_SKILLS: "talent_skills",
  PORTFOLIOS: "portfolios",
  PORTFOLIO_MEDIA: "portfolio_media",
  PERFORMANCES: "performances",
  ACHIEVEMENTS: "achievements",
  TALENT_ACHIEVEMENTS: "talent_achievements",
  MENTORS: "mentors",
  MENTORINGS: "mentorings",
  MENTOR_REVIEWS: "mentor_reviews",
  ORGANIZATIONS: "organizations",
  OPPORTUNITIES: "opportunities",
  OPPORTUNITY_APPLICATIONS: "opportunity_applications",
  VERIFICATIONS: "verifications",
  NOTIFICATIONS: "notifications",
  COUNTERS: "counters",
} as const;

export const BUCKETS = {
  TALENT_PHOTOS: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_TALENT_PHOTOS || "talent-photos",
  PORTFOLIO_MEDIA: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_PORTFOLIO_MEDIA || "portfolio-media",
  QR: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_QR || "qr",
} as const;

// 3. Hybrid Data Service (Auto fallback ke data otentik Salatiga jika Appwrite offline)
export const dataService = {
  async getTalents(): Promise<Talent[]> {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.TALENTS);
      if (response.documents.length > 0) {
        return response.documents as unknown as Talent[];
      }
    } catch {
      // Fallback ke data otentik lokal
    }
    return talents;
  },

  async getTalentByWayangId(wayangId: string): Promise<Talent | undefined> {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.TALENTS);
      const found = response.documents.find((d: { [key: string]: unknown }) => d.wayangId === wayangId);
      if (found) return found as unknown as Talent;
    } catch {
      // Fallback
    }
    return talents.find((t) => t.wayangId === wayangId) || talents[0];
  },

  async getOpportunities() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.OPPORTUNITIES);
      if (response.documents.length > 0) {
        return response.documents;
      }
    } catch {
      // Fallback
    }
    return opportunities;
  },

  async getSanggars() {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTIONS.SANGGARS);
      if (response.documents.length > 0) {
        return response.documents;
      }
    } catch {
      // Fallback
    }
    return sanggars;
  },

  async getPortfolios() {
    return portfolioItems;
  },
};
