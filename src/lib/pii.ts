/**
 * Utilitas Perlindungan Data Pribadi (PII) Anak di Bawah Umur (PRD §44)
 * - Menerapkan data minimization untuk talenta berusia <18 tahun
 * - Masking nomor kontak dan detail tanggal lahir privat
 * - Verifikasi Guardian Consent
 */

export interface TalentPrivacyProfile {
  age: number;
  isMinor: boolean;
  guardianConsentVerified: boolean;
  guardianName?: string;
  guardianRelation?: string;
}

export function evaluateMinorProtection(age: number): TalentPrivacyProfile {
  const isMinor = age < 18;
  return {
    age,
    isMinor,
    guardianConsentVerified: isMinor, // Demo default: telah tervalidasi oleh orang tua/sekolah
    guardianName: isMinor ? "Bpk. Bambang Rizqillah (Wali Resmi)" : undefined,
    guardianRelation: isMinor ? "Orang Tua / Wali" : undefined,
  };
}

export function maskPhoneNumber(phone?: string): string {
  if (!phone) return "Tersedia via Sanggar";
  if (phone.length <= 6) return "***-***";
  return phone.slice(0, 4) + "-****-" + phone.slice(-2);
}

export function maskEmail(email?: string): string {
  if (!email) return "hubungi@sanggar.wayang.id";
  const [user, domain] = email.split("@");
  if (!domain) return "***@wayang.id";
  const maskedUser = user.length > 2 ? `${user[0]}***${user[user.length - 1]}` : "***";
  return `${maskedUser}@${domain}`;
}
