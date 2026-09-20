#!/usr/bin/env bash
set -e

DATABASE_ID="wayangdb"

echo "=== WAYANG ID: Inisialisasi Appwrite via CLI ==="

collections=(
  "talents:Talents"
  "skills:Skills"
  "talent_skills:Talent Skills"
  "portfolios:Portfolios"
  "performances:Performances"
  "achievements:Achievements"
  "mentors:Mentors"
  "opportunities:Opportunities"
  "sanggars:Sanggars"
  "verifications:Verifications"
  "notifications:Notifications"
)

for item in "${collections[@]}"; do
  col_id="${item%%:*}"
  col_name="${item##*:}"
  
  echo "+ Membuat / memeriksa koleksi: $col_id ($col_name)..."
  appwrite databases create-collection \
    --database-id "$DATABASE_ID" \
    --collection-id "$col_id" \
    --name "$col_name" \
    --permissions 'read("any")' \
    --permissions 'create("users")' \
    --permissions 'update("users")' \
    --permissions 'delete("users")' \
    --enabled 2>/dev/null || echo "✓ Koleksi $col_id sudah ada / siap."
done

buckets=(
  "talent-photos:Talent Photos"
  "portfolio-media:Portfolio Media"
  "qr:QR Codes"
)

for item in "${buckets[@]}"; do
  b_id="${item%%:*}"
  b_name="${item##*:}"

  echo "+ Membuat / memeriksa storage bucket: $b_id ($b_name)..."
  appwrite storage create-bucket \
    --bucket-id "$b_id" \
    --name "$b_name" \
    --permissions 'read("any")' \
    --permissions 'create("users")' \
    --permissions 'update("users")' \
    --permissions 'delete("users")' \
    --maximum-file-size 30000000 \
    --enabled 2>/dev/null || echo "✓ Bucket $b_id sudah ada / siap."
done

echo ""
echo "=== Inisialisasi Database & Storage selesai! ==="
