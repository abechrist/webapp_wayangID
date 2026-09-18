// Registry aset gambar wayang otentik — diekstrak dari export Stitch (code.html)
// dan di-vendor ke /public/stitch-images/ (nama file = hash URL, diunduh 18 Sep 2026).
//
// Catatan: 7 URL aida-public telah expired (HTTP 400) sehingga tidak masuk daftar;
// semua file di bawah ini tervalidasi sebagai JPEG ≥30KB.

export const stitchImages = {
  // Emblem & avatar generik (dipakai Stitch sebagai "Profile" di header)
  gununganEmblem: "/stitch-images/42-801802d3c697.jpg",
  emblemModern: "/stitch-images/01-81636d241aad.jpg",
  profileAvatar: "/stitch-images/01-81636d241aad.jpg",

  // Persona utama
  inazPortrait: "/stitch-images/02-6ba15292b118.jpg", // Close-up Inaz (beranda hero)
  inazHeadshot: "/stitch-images/44-564e1a4b08c6.jpg", // kebaya + blangkon (showcase)
  inazBlangkon: "/stitch-images/31-f7bb03d23a73.jpg", // blangkon (peluang)
  inazSanggit: "/stitch-images/27-755f0591ba0c.jpg", // sanggit (beranda)
  inazStudio: "/stitch-images/43-cb84aa8039ab.jpg", // portrait studio (portfolio)
  bagasPortrait: "/stitch-images/35-4290eaeddc92.jpg", // Gatotkaca practice (beranda)
  bagasAvatar: "/stitch-images/13-e3e0d55b19d7.jpg", // beskap + blangkon (mentor)
  bagasMale: "/stitch-images/17-fb9728c6fa76.jpg",
  sekarPortrait: "/stitch-images/38-0b4a6cd3f4e2.jpg", // Srikandi putri (beranda)
  sekarProfile: "/stitch-images/50-6e0eba26f3b7.jpg", // Sekar Ayu Danastri (mentor)
  sekarAvatar: "/stitch-images/25-ccb3d91f03d8.jpg", // danastri rim (showcase)
  anomMale: "/stitch-images/05-c43507acab06.jpg", // blangkon + beskap (peta)
  bayuMale: "/stitch-images/10-fdfd0ed7009a.jpg", // male dalang (peta)
  sutrisnoPortrait: "/stitch-images/03-e871d0c65ee7.jpg", // Ki Dalang Sutrisno (mentor)
  mentorSilhouette: "/stitch-images/33-22ce2af9e6ad.jpg", // Gatotkaca close-up (akademi)
  pelawak: "/stitch-images/34-e32b2e9c09a0.jpg", // remaja pelawak (showcase)

  // Adegan pagelaran & kelir
  pagelaranWide: "/stitch-images/23-86143f716992.jpg", // gamelan + kelir wide
  pagelaranNight: "/stitch-images/11-77de5a47ed65.jpg", // malam hari (Hari Wayang)
  sabetanBima: "/stitch-images/48-31d38332019b.jpg", // Bima vs, frame beku
  pagelaranMagis: "/stitch-images/18-5fce0babbc74.jpg", // frame kinerja dramatik
  pagelaranJejer: "/stitch-images/26-ce48213070e0.jpg", // dalang duduk + gamelan
  performBocah: "/stitch-images/22-3d999149c3aa.jpg", // dalang remaja di balik kelir
  performSrikandi: "/stitch-images/09-00b157833c2a.jpg", // close-up Srikandi clip
  cctvSs: "/stitch-images/08-628a94dec7d6.jpg", // budaya & gamelan (peta)

  // Wayang & instrumen
  gununganKayon: "/stitch-images/20-6d5df8300ef0.jpg", // gunungan emas di panggung
  genderGamelan: "/stitch-images/19-27588453e0fb.jpg", // tuning gender
  blencong: "/stitch-images/40-1d0082f231ba.jpg", // api blencong + kelir
  simpingan: "/stitch-images/46-5373df74fa0f.jpg", // koleksi wayang gedebog
  edukasiSiswa: "/stitch-images/16-4ed3955abf37.jpg", // Inaz sedekah kelas
  pagelaranDewaRuci: "/stitch-images/30-8b7f828eac6b.jpg", // Lakon Dewa Ruci

  // Sanggar (5 sloth direktori)
  sanggarBimaSuci: "/stitch-images/47-759bca80051d.jpg", // Aula latihan Bima Suci
  sanggarGiriSiswo: "/stitch-images/14-64b601b463e9.jpg", // latihan pemuda
  padepokanMadukara: "/stitch-images/06-bd564c6817a8.jpg", // ruang vokal sindhen
  smaLabDigital: "/stitch-images/49-d239b78e0786.jpg", // lab SMAN 1
  smknKarawitan: "/stitch-images/04-627a30051443.jpg", // bengkel SMKN 1

  // Dinamis portofolio / galeri (urutan sloth card index)
  portfolioThumbs: [
    "/stitch-images/30-8b7f828eac6b.jpg",
    "/stitch-images/48-31d38332019b.jpg",
    "/stitch-images/08-628a94dec7d6.jpg",
    "/stitch-images/09-00b157833c2a.jpg",
    "/stitch-images/18-5fce0babbc74.jpg",
    "/stitch-images/26-ce48213070e0.jpg",
  ],
  galleryThumbs: [
    "/stitch-images/46-5373df74fa0f.jpg", // Simpingan
    "/stitch-images/19-27588453e0fb.jpg", // Latihan Gender
    "/stitch-images/40-1d0082f231ba.jpg", // Blencong
    "/stitch-images/16-4ed3955abf37.jpg", // Edukasi Siswa
  ],
} as const;

export type StitchImageKey = keyof typeof stitchImages;