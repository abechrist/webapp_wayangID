import { Talent } from "@/data/demo";

export interface OpportunityItem {
  id: string;
  title: string;
  category: string;
  org: string;
  date: string;
  location: string;
  capacity: string;
  honor: string;
  deadline: string;
  required: string[];
  applicants: number;
  match?: number;
  status: string;
}

export interface MatchResult {
  score: number;
  breakdown: {
    skillScore: number;       // weight 40%
    locationScore: number;    // weight 20%
    experienceScore: number;  // weight 20%
    styleScore: number;       // weight 10%
    availabilityScore: number;// weight 10%
  };
  reasons: string[];
}

/**
 * Algoritma Pencocokan Aturan PRD §53 & Technical Spec §4.3:
 * Skor = (Skill 40%) + (Lokasi 20%) + (Pengalaman 20%) + (Gaya 10%) + (Ketersediaan 10%)
 */
export function calculateMatchScore(talent: Talent, opportunity: OpportunityItem): MatchResult {
  // 1. Skill Score (40%)
  // Rata-rata skill terverifikasi talenta
  const avgSkill =
    talent.skills.length > 0
      ? talent.skills.reduce((acc, s) => acc + s.level, 0) / talent.skills.length
      : 70;
  const skillScore = Math.min(100, avgSkill);

  // 2. Location Score (20%)
  // Sesama Salatiga mendapat 100, luar kota proporsional
  const isSameKecamatan = opportunity.location.toLowerCase().includes(talent.kecamatan.toLowerCase());
  const isSalatiga = opportunity.location.toLowerCase().includes("salatiga") || isSameKecamatan;
  const locationScore = isSameKecamatan ? 100 : isSalatiga ? 92 : 75;

  // 3. Experience Score (20%)
  // Berdasarkan jumlah pagelaran mandiri (10+ pentas = 100, 5-9 = 85, <5 = 70)
  const experienceScore = talent.performances >= 10 ? 100 : talent.performances >= 5 ? 85 : 70;

  // 4. Style Score (10%)
  // Apakah gaya sesuai yang dibutuhkan peluang
  const reqLower = opportunity.required.map((r) => r.toLowerCase()).join(" ");
  const matchStyle = reqLower.includes(talent.style.toLowerCase());
  const styleScore = matchStyle ? 100 : 80;

  // 5. Availability Score (10%)
  // Default talenta aktif tersedia
  const availabilityScore = 95;

  // Bobot
  const finalScore = Math.round(
    skillScore * 0.4 +
    locationScore * 0.2 +
    experienceScore * 0.2 +
    styleScore * 0.1 +
    availabilityScore * 0.1
  );

  const reasons: string[] = [];
  if (skillScore >= 85) {
    reasons.push(`Indeks keahlian ${talent.skills.map((s) => `${s.name} ${s.level}%`).join(", ")} melampaui ambang batas`);
  }
  if (isSalatiga) {
    reasons.push(`Domisili ${talent.kecamatan}, Salatiga memudahkan koordinasi gladi bersih & pentas`);
  }
  if (experienceScore >= 85) {
    reasons.push(`Jam terbang terbukti dengan ${talent.performances} pagelaran bersertifikat`);
  }
  if (matchStyle) {
    reasons.push(`Spesialisasi Gaya ${talent.style} sesuai format repertoar yang diminta`);
  }

  return {
    score: finalScore,
    breakdown: {
      skillScore: Math.round(skillScore),
      locationScore: Math.round(locationScore),
      experienceScore: Math.round(experienceScore),
      styleScore: Math.round(styleScore),
      availabilityScore: Math.round(availabilityScore),
    },
    reasons,
  };
}
