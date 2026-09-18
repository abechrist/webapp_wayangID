import { stitchImages } from "@/data/stitchImages";

export type Talent = {
  id: string;
  wayangId: string;
  name: string;
  age: number;
  style: "Surakarta" | "Yogyakarta" | "Pesisiran";
  photo: string;
  school: string;
  sanggar: string;
  sanggarId: string;
  kecamatan: "Sidorejo" | "Tingkir" | "Argomulyo" | "Sidomukti";
  bio: string;
  skills: { name: string; level: number; verified: boolean }[];
  verified: boolean;
  performances: number;
  views: number;
  lat: number;
  lng: number;
};

export const talents: Talent[] = [
  {
    id: "1",
    wayangId: "WID-2026-0001",
    name: "Inaz Fairoza Rizqillah",
    age: 17,
    style: "Surakarta",
    photo: stitchImages.inazPortrait,
    school: "MAN Salatiga",
    sanggar: "Bima Suci",
    sanggarId: "SGR-001",
    kecamatan: "Tingkir",
    bio: "Pelopor dalang putri muda — pewaris gaya Mangkunegaran dengan spesialisasi sabet perang kembang dan suluk Slendro.",
    skills: [
      { name: "Sabet", level: 88, verified: true },
      { name: "Sanggit", level: 85, verified: true },
      { name: "Suluk", level: 82, verified: true },
    ],
    verified: true,
    performances: 12,
    views: 38400,
    lat: -7.335,
    lng: 110.491,
  },
  {
    id: "2",
    wayangId: "WID-2026-0004",
    name: "Bagas Wicaksono",
    age: 17,
    style: "Pesisiran",
    photo: stitchImages.bagasAvatar,
    school: "SMKN 1 Salatiga",
    sanggar: "Giri Siswo",
    sanggarId: "SGR-003",
    kecamatan: "Sidorejo",
    bio: "Dalang muda Pesisiran — spesialis Gebug Bagoncong dan kendang karawitan.",
    skills: [
      { name: "Sabet", level: 92, verified: true },
      { name: "Suluk", level: 75, verified: false },
      { name: "Sanggit", level: 78, verified: false },
    ],
    verified: true,
    performances: 16,
    views: 21200,
    lat: -7.325,
    lng: 110.508,
  },
  {
    id: "3",
    wayangId: "WID-2026-0007",
    name: "Sekar Ayu Kinanti",
    age: 21,
    style: "Yogyakarta",
    photo: stitchImages.sekarProfile,
    school: "ISI Surakarta",
    sanggar: "Madukara",
    sanggarId: "SGR-007",
    kecamatan: "Argomulyo",
    bio: "Dalang putri Yogyakarta — lakon Wanodya dan tembang Pelog.",
    skills: [
      { name: "Suluk", level: 95, verified: true },
      { name: "Sanggit", level: 89, verified: true },
      { name: "Sabet", level: 80, verified: true },
    ],
    verified: true,
    performances: 29,
    views: 45200,
    lat: -7.352,
    lng: 110.485,
  },
  {
    id: "4",
    wayangId: "WID-2026-0012",
    name: "Anom Danang",
    age: 19,
    style: "Surakarta",
    photo: stitchImages.anomMale,
    school: "SMA 2 Salatiga",
    sanggar: "Bima Suci",
    sanggarId: "SGR-001",
    kecamatan: "Sidorejo",
    bio: "Dalang muda Surakarta — lakon Bima Suci dan Karna Tanding.",
    skills: [
      { name: "Sabet", level: 78, verified: true },
      { name: "Suluk", level: 82, verified: false },
    ],
    verified: true,
    performances: 9,
    views: 14200,
    lat: -7.328,
    lng: 110.502,
  },
  {
    id: "5",
    wayangId: "WID-2026-0015",
    name: "Bayu Aji Pramono",
    age: 20,
    style: "Surakarta",
    photo: stitchImages.bayuMale,
    school: "Universitas Sebelas Maret",
    sanggar: "Giri Siswo",
    sanggarId: "SGR-003",
    kecamatan: "Sidorejo",
    bio: "Mahasiswa pedalangan — fokus sanggit carangan dan pengembangan lakon kontemporer.",
    skills: [
      { name: "Sanggit", level: 88, verified: true },
      { name: "Sabet", level: 81, verified: true },
    ],
    verified: true,
    performances: 14,
    views: 18900,
    lat: -7.33,
    lng: 110.505,
  },
];

export const sanggars = [
  {
    id: "SGR-001",
    name: "Sanggar Bima Suci",
    kecamatan: "Sidorejo",
    leader: "Ki Dalang Sutrisno, S.Sn",
    style: "Surakarta",
    members: 8,
    schedule: "Selasa & Sabtu",
    contact: "Bima Suci, Sidorejo",
    image: stitchImages.sanggarBimaSuci,
  },
  {
    id: "SGR-003",
    name: "Sanggar Giri Siswo",
    kecamatan: "Tingkir",
    leader: "Ki Warsito",
    style: "Pesisiran / Bocah",
    members: 6,
    schedule: "Rabu & Minggu",
    contact: "Tingkir, Salatiga",
    image: stitchImages.sanggarGiriSiswo,
  },
  {
    id: "SGR-007",
    name: "Padepokan Madukara",
    kecamatan: "Argomulyo",
    leader: "Nyi Cendaniraras",
    style: "Vokal Keprak",
    members: 5,
    schedule: "Kamis & Sabtu",
    contact: "Argomulyo — Studio Akustik",
    image: stitchImages.padepokanMadukara,
  },
  {
    id: "SGR-002",
    name: "SMAN 1 Lab Seni",
    kecamatan: "Sidomukti",
    leader: "Dra. Suryani",
    style: "Digitalisasi",
    members: 42,
    schedule: "Senin–Jumat",
    contact: "Sidomukti — Lab Digital",
    image: stitchImages.smaLabDigital,
  },
];

export const opportunities = [
  {
    id: "OPP-001",
    title: "Festival Wayang Bocah Hati Beriman",
    category: "Festival",
    org: "Disbudpar Kota Salatiga",
    date: "18 Mei 2026",
    location: "Alun-Alun Pancasila",
    capacity: "1200 penonton",
    honor: "Honor Pemkot",
    deadline: "10 Apr 2026",
    required: ["Sabet ≥80", "Gaya Surakarta"],
    applicants: 14,
    match: 96,
    status: "open",
  },
  {
    id: "OPP-002",
    title: "Workshop Edukasi — 12 SMP Negeri",
    category: "Edukasi",
    org: "SMAN 2 Salatiga",
    date: "15 Mar 2026",
    location: "12 SMP se-Salatiga",
    capacity: "2 sesi / weekend",
    honor: "Insentif + Sertifikat",
    deadline: "1 Mar 2026",
    required: ["Punakawan", "Public Speaking"],
    applicants: 9,
    match: 92,
    status: "open",
  },
  {
    id: "OPP-003",
    title: "Pentas Rutin — Grand Wahid Hotel",
    category: "Hospitality",
    org: "Grand Wahid Salatiga",
    date: "Setiap Sabtu malam",
    location: "Grand Wahid Ballroom",
    capacity: "60 menit bilingual",
    honor: "Honor Grade A",
    deadline: "Rolling",
    required: ["Bilingual", "Grade A"],
    applicants: 6,
    match: 84,
    status: "open",
  },
  {
    id: "OPP-004",
    title: "Wayang Animasi & Synthesizer",
    category: "Digital",
    org: "Studio Animasi Salatiga",
    date: "21 hari produksi",
    location: "Creative Hub Salatiga",
    capacity: "Co-Creation",
    honor: "Royalti + Motion Ref",
    deadline: "30 Apr 2026",
    required: ["Sanggit Carangan", "Motion Ref"],
    applicants: 11,
    match: 78,
    status: "open",
  },
];

export const showcaseItems = [
  {
    id: "1",
    title: "Dewa Ruci: Samudra Makrifat",
    artist: "Inaz Fairoza",
    duration: "01:38:12",
    views: 8421,
    score: 98,
    image: stitchImages.pagelaranDewaRuci,
  },
  {
    id: "2",
    title: "Karna Madeg Senapati",
    artist: "Inaz Fairoza",
    duration: "03:12:40",
    views: 12400,
    image: stitchImages.sabetanBima,
  },
  {
    id: "3",
    title: "Gatotkaca Winisuda",
    artist: "Bagas Wicaksono",
    duration: "01:45:15",
    views: 9800,
    image: stitchImages.pagelaranMagis,
  },
  {
    id: "4",
    title: "Srikandi Mbarang Amuk",
    artist: "Sekar Ayu Kinanti",
    duration: "02:10:04",
    views: 7100,
    image: stitchImages.performSrikandi,
  },
  {
    id: "5",
    title: "Bima Suci — Lakon Klasik",
    artist: "Anom Danang",
    duration: "02:40:00",
    views: 14200,
    image: stitchImages.pagelaranJejer,
  },
];

export const portfolioItems = [
  { title: "Dewa Ruci", duration: "4 jam", views: 4200, date: "2024-12-12", venue: "Lap. Pancasila", grade: "A+" },
  { title: "Karna Madeg Senapati", duration: "Semalam suntuk", views: 6800, date: "2024-09-28", venue: "Pendopo Kota", grade: "A" },
  { title: "Gatotkaca Winisuda", duration: "2.5 jam", views: 1800, date: "2024-06-15", venue: "Graha SMAN 1", grade: "A" },
  { title: "Bima Suci — Jejer", duration: "1 jam", views: 1200, date: "2024-03-10", venue: "Gedung Kesenian", grade: "A" },
];

export const navItems = [
  { label: "Beranda", href: "/", active: true },
  { label: "Peta & Talenta", href: "/peta" },
  { label: "Showcase Karya", href: "/showcase" },
  { label: "Peluang & Kolaborasi", href: "/peluang" },
  { label: "Akademi", href: "/akademi" },
];
