/**
 * WAYANG ID — Appwrite Cloud Setup Script
 * Inisialisasi Database 'wayangdb', Koleksi, dan Storage Buckets
 *
 * Penggunaan:
 *   node scripts/setup-appwrite.mjs <APPWRITE_API_KEY>
 */

import { Client, Databases, Storage, ID, Permission, Role } from "node-appwrite";

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "6aad4f19003a342d8e87";
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "wayangdb";

const apiKey = process.argv[2] || process.env.APPWRITE_API_KEY;

if (!apiKey) {
  console.error("❌ Eror: Appwrite API Key dibutuhkan!");
  console.log("Jalankan dengan: node scripts/setup-appwrite.mjs <YOUR_API_KEY>");
  process.exit(1);
}

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID)
  .setKey(apiKey);

const databases = new Databases(client);
const storage = new Storage(client);

async function setup() {
  console.log(`🚀 Menghubungkan ke Appwrite Project: ${PROJECT_ID}...`);

  // 1. Buat Database
  try {
    await databases.get(DATABASE_ID);
    console.log(`✓ Database '${DATABASE_ID}' sudah ada.`);
  } catch {
    console.log(`+ Membuat Database '${DATABASE_ID}'...`);
    await databases.create(DATABASE_ID, "WAYANG ID Database");
    console.log(`✓ Database '${DATABASE_ID}' berhasil dibuat.`);
  }

  // 2. Koleksi Utama
  const collections = [
    { id: "users", name: "Users" },
    { id: "talents", name: "Talents" },
    { id: "skills", name: "Skills" },
    { id: "talent_skills", name: "Talent Skills" },
    { id: "portfolios", name: "Portfolios" },
    { id: "performances", name: "Performances" },
    { id: "achievements", name: "Achievements" },
    { id: "mentors", name: "Mentors" },
    { id: "opportunities", name: "Opportunities" },
    { id: "sanggars", name: "Sanggars" },
    { id: "verifications", name: "Verifications" },
    { id: "notifications", name: "Notifications" }
  ];

  for (const col of collections) {
    try {
      await databases.getCollection(DATABASE_ID, col.id);
      console.log(`✓ Koleksi '${col.id}' sudah ada.`);
    } catch {
      console.log(`+ Membuat koleksi '${col.id}'...`);
      await databases.createCollection(
        DATABASE_ID,
        col.id,
        col.name,
        [Permission.read(Role.any()), Permission.write(Role.users())]
      );
      console.log(`✓ Koleksi '${col.id}' berhasil dibuat.`);
    }
  }

  // 3. Buat Storage Buckets
  const buckets = [
    { id: "talent-photos", name: "Talent Photos" },
    { id: "portfolio-media", name: "Portfolio Media" },
    { id: "qr", name: "QR Codes" }
  ];

  for (const b of buckets) {
    try {
      await storage.getBucket(b.id);
      console.log(`✓ Storage bucket '${b.id}' sudah ada.`);
    } catch {
      console.log(`+ Membuat bucket '${b.id}'...`);
      await storage.createBucket(
        b.id,
        b.name,
        [Permission.read(Role.any()), Permission.write(Role.users())],
        false, // fileSecurity
        true,  // enabled
        30000000 // 30MB max
      );
      console.log(`✓ Storage bucket '${b.id}' berhasil dibuat.`);
    }
  }

  console.log("\n🎉 Seluruh inisialisasi Appwrite Cloud selesai dengan sukses!");
}

setup().catch((err) => {
  console.error("❌ Terjadi kesalahan saat setup Appwrite:", err.message);
});
