export interface QuestionOption {
  text: string;
  emoji: string;
  gayaScore: 'visual' | 'auditori' | 'kinestetik';
  persepsiScore: 'sangat_positif' | 'cukup_positif' | 'ragu_ragu';
}

export interface DiagnostikQuestion {
  id: number;
  text: string;
  category: 'gaya_belajar' | 'persepsi_bk' | 'kebutuhan_layanan' | 'kemandirian';
  options: QuestionOption[];
}

export const daftarDiagnostik: DiagnostikQuestion[] = [
  {
    id: 1,
    text: "Bagaimana cara belajar yang paling membuat kamu cepat paham materi baru di kelas 7?",
    category: 'gaya_belajar',
    options: [
      { text: "Melihat gambar, bagan, infografis, dan diagram warna-warni", emoji: "👁️", gayaScore: "visual", persepsiScore: "sangat_positif" },
      { text: "Mendengarkan penjelasan Guru BK dan diskusi tanya jawab", emoji: "🎧", gayaScore: "auditori", persepsiScore: "sangat_positif" },
      { text: "Mencoba langsung lewat permainan kuis, role-play, dan simulasi", emoji: "🏃", gayaScore: "kinestetik", persepsiScore: "sangat_positif" }
    ]
  },
  {
    id: 2,
    text: "Bagaimana perasaan dan bayanganmu ketika mendengar kata 'Ruang BK' di SMPN 7 Pasuruan?",
    category: 'persepsi_bk',
    options: [
      { text: "Senang dan merasa ada tempat aman untuk cerita dan berkonsultasi", emoji: "😊", gayaScore: "visual", persepsiScore: "sangat_positif" },
      { text: "Penasaran dan ingin tahu layanan apa saja yang bisa dicoba", emoji: "🤔", gayaScore: "auditori", persepsiScore: "cukup_positif" },
      { text: "Masih sedikit ragu atau cemas karena belum kenal dekat", emoji: "😟", gayaScore: "kinestetik", persepsiScore: "ragu_ragu" }
    ]
  },
  {
    id: 3,
    text: "Ketika menghadapi masalah pertemanan atau rasa cemas belajar, apa yang biasanya kamu lakukan?",
    category: 'kemandirian',
    options: [
      { text: "Mencari saran dari Guru BK (Bu Wiwik Ismiati) atau wali kelas", emoji: "💬", gayaScore: "auditori", persepsiScore: "sangat_positif" },
      { text: "Mencurahkan isi hati kepada sahabat dekat atau orang tua", emoji: "🫂", gayaScore: "visual", persepsiScore: "cukup_positif" },
      { text: "Memendamnya sendiri sampai bingung harus bagaimana", emoji: "😔", gayaScore: "kinestetik", persepsiScore: "ragu_ragu" }
    ]
  },
  {
    id: 4,
    text: "Layanan bantuan BK apa yang paling kamu harapkan dari Bu Wiwik Ismiati semester ini?",
    category: 'kebutuhan_layanan',
    options: [
      { text: "Bimbingan Belajar & Strategi Membagi Waktu Main vs Belajar", emoji: "📚", gayaScore: "visual", persepsiScore: "sangat_positif" },
      { text: "Bimbingan Pertemanan, Komunikasi, dan Menghindari Bullying", emoji: "🤝", gayaScore: "auditori", persepsiScore: "sangat_positif" },
      { text: "Pengenalan Minat Bakat, Ekstrakurikuler, dan Cita-Cita Karir", emoji: "🚀", gayaScore: "kinestetik", persepsiScore: "sangat_positif" }
    ]
  },
  {
    id: 5,
    text: "Pilih emoji yang menggambarkan perasaanmu hari ini saat mengikuti kegiatan BK!",
    category: 'persepsi_bk',
    options: [
      { text: "Sangat Semangat, Bahagia, dan Ceria!", emoji: "😃", gayaScore: "kinestetik", persepsiScore: "sangat_positif" },
      { text: "Tenang, Nyaman, dan Siap Mengikuti", emoji: "😌", gayaScore: "visual", persepsiScore: "sangat_positif" },
      { text: "Butuh Teman Curhat & Bimbingan Khusus", emoji: "🥺", gayaScore: "auditori", persepsiScore: "cukup_positif" }
    ]
  }
];
