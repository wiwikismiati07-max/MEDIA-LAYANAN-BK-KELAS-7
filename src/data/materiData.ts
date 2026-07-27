export interface MateriSlide {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  themeColor: string;
  summary: string;
  points: { title: string; desc: string; icon: string }[];
  interactiveQuiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  audioScript: string;
}

export const materiBkLengkap: MateriSlide[] = [
  {
    id: 1,
    title: "Pengertian & Hakikat Bimbingan Konseling",
    subtitle: "BK di SMP Negeri 7 Pasuruan adalah Sahabat Siswa!",
    iconName: "HeartHandshake",
    themeColor: "from-teal-500 to-emerald-700",
    summary: "Bimbingan dan Konseling (BK) merupakan proses bantuan sistematis dan berkelanjutan dari Guru BK (Bu Wiwik Ismiati) kepada peserta didik agar mampu berkembang secara optimal, mandiri, dan bahagia di lingkungan sekolah.",
    points: [
      {
        title: "Bukan Polisi Sekolah",
        desc: "BK bukan tempat menghukum anak nakal, melainkan tempat berdiskusi dan mencari solusi terbaik.",
        icon: "ShieldCheck"
      },
      {
        title: "Sahabat Pengembangan Diri",
        desc: "Membantu mengenali potensi, minat, bakat, serta mengatasi kesulitan belajar.",
        icon: "UserCheck"
      },
      {
        title: "Layanan untuk Semua Siswa",
        desc: "Terbuka bagi seluruh siswa Kelas 7A hingga 7H tanpa terkecuali.",
        icon: "Users"
      }
    ],
    interactiveQuiz: {
      question: "Siapa sajakah siswa yang boleh memanfaatkan layanan BK di SMPN 7 Pasuruan?",
      options: [
        "Hanya siswa yang berbuat salah",
        "Seluruh siswa kelas 7A - 7H",
        "Hanya siswa berprestasi",
        "Siswa yang dipanggil saja"
      ],
      correctIndex: 1,
      explanation: "Layanan BK diperuntukkan bagi SELURUH peserta didik untuk bimbingan pribadi, sosial, belajar, dan karir."
    },
    audioScript: "Halo anak-anak kelas 7 SMP Negeri 7 Pasuruan! Selamat datang di Bimbingan dan Konseling. Bersama Ibu Wiwik Ismiati, mari jadikan BK sebagai sahabat terbaikmu untuk berkembang dan berprestasi!"
  },
  {
    id: 2,
    title: "4 Bidang Layanan Utama BK",
    subtitle: "Pribadi, Sosial, Belajar, dan Karir",
    iconName: "Compass",
    themeColor: "from-cyan-600 to-blue-800",
    summary: "Layanan Bimbingan dan Konseling dirancang mencakup empat area kehidupan penting peserta didik remaja.",
    points: [
      {
        title: "1. Bimbingan Pribadi",
        desc: "Pengelolaan emosi, pemahaman potensi diri, peningkatan rasa percaya diri, dan pembentukan karakter mulia.",
        icon: "User"
      },
      {
        title: "2. Bimbingan Sosial",
        desc: "Adaptasi teman baru di SMPN 7 Pasuruan, komunikasi santun, pencegahan bullying, dan toleransi.",
        icon: "MessageSquare"
      },
      {
        title: "3. Bimbingan Belajar",
        desc: "Teknik konsentrasi, strategi membagi waktu, mengatasi rasa malas, dan gaya belajar efektif.",
        icon: "BookOpen"
      },
      {
        title: "4. Bimbingan Karir",
        desc: "Pengenalan cita-cita, minat bakat, ekstrakurikuler pendukung, dan perencanaan studi masa depan.",
        icon: "Award"
      }
    ],
    interactiveQuiz: {
      question: "Bila kalian bingung cara membagi waktu antara main HP dan mengerjakan PR, bidang bimbingan mana yang paling tepat?",
      options: ["Bimbingan Keuangan", "Bimbingan Belajar", "Bimbingan Olahraga", "Bimbingan Seni"],
      correctIndex: 1,
      explanation: "Bimbingan Belajar membantu siswa memanajamen waktu dan melatih konsentrasi belajar."
    },
    audioScript: "BK memiliki empat bidang layanan utama: Bimbingan Pribadi untuk emosi diri, Bimbingan Sosial untuk pertemanan, Bimbingan Belajar untuk prestasi, dan Bimbingan Karir untuk cita-citamu!"
  },
  {
    id: 3,
    title: "10 Fungsi Utama Layanan BK",
    subtitle: "Pendamping Lengkap Perkembangan Siswa",
    iconName: "Sparkles",
    themeColor: "from-indigo-600 to-violet-800",
    summary: "Layanan Bimbingan dan Konseling di SMPN 7 Pasuruan menjalankan 10 fungsi utama untuk mendukung perkembangan peserta didik secara optimal, menyeluruh, dan berkelanjutan.",
    points: [
      {
        title: "1. Fungsi Pemahaman",
        desc: "Membantu siswa memahami kekuatan diri, potensi, minat, serta kondisi lingkungan sekolah dan sosial.",
        icon: "Brain"
      },
      {
        title: "2. Fungsi Pencegahan (Preventif)",
        desc: "Mencegah timbulnya berbagai masalah emosional, sosial, maupun hambatan belajar sebelum terjadi.",
        icon: "ShieldAlert"
      },
      {
        title: "3. Fungsi Pengentasan (Kuratif)",
        desc: "Membantu mengentaskan dan menyelesaikan masalah pribadi, sosial, atau belajar yang dialami siswa.",
        icon: "LifeBuoy"
      },
      {
        title: "4. Fungsi Pemeliharaan",
        desc: "Memelihara kebiasaan positif dan potensi baik yang sudah dimiliki siswa agar tidak mengalami penurunan.",
        icon: "CheckCircle2"
      },
      {
        title: "5. Fungsi Pengembangan",
        desc: "Mengembangkan potensi, bakat, minat, serta bakat kepemimpinan dan kreativitas secara optimal.",
        icon: "TrendingUp"
      },
      {
        title: "6. Fungsi Perbaikan (Rehabilitatif)",
        desc: "Memperbaiki persepsi kekeliruan, emosi tidak stabil, atau perilaku kurang efektif agar kembali positif.",
        icon: "RefreshCw"
      },
      {
        title: "7. Fungsi Penyaluran",
        desc: "Membantu siswa memilih ekstrakurikuler, minat belajar, serta perencanaan karier dan studi masa depan.",
        icon: "Compass"
      },
      {
        title: "8. Fungsi Adaptasi",
        desc: "Membantu sekolah dan guru mengadaptasikan program pembelajaran sesuai karakteristik unik siswa.",
        icon: "Sliders"
      },
      {
        title: "9. Fungsi Penyesuaian",
        desc: "Membantu siswa menyesuaikan diri secara harmonis dan percaya diri dengan lingkungan baru di SMP.",
        icon: "Users"
      },
      {
        title: "10. Fungsi Advokasi",
        desc: "Membela dan melindungi hak-hak serta kepentingan peserta didik jika mengalami ketidakadilan.",
        icon: "ShieldCheck"
      }
    ],
    interactiveQuiz: {
      question: "Fungsi BK yang bertugas membela dan melindungi hak-hak peserta didik dari tindakan tidak adil disebut...",
      options: ["Fungsi Advokasi", "Fungsi Penyaluran", "Fungsi Penyesuaian", "Fungsi Hukuman"],
      correctIndex: 0,
      explanation: "Fungsi Advokasi bertugas mendampingi serta menjaga hak dan keadilan bagi peserta didik."
    },
    audioScript: "Layanan BK menjalankan 10 fungsi utama mulai dari Pemahaman, Pencegahan, Pengentasan, Pemeliharaan, Pengembangan, Perbaikan, Penyaluran, Adaptasi, Penyesuaian, hingga Advokasi hak-hak siswa."
  },
  {
    id: 4,
    title: "Azas-Azas Utama Layanan BK",
    subtitle: "Fondasi Kepercayaan dan Kerahasiaan",
    iconName: "Shield",
    themeColor: "from-amber-600 to-orange-800",
    summary: "Siswa tidak perlu takut bercerita karena Guru BK terikat oleh kode etik dan azas-azas resmi.",
    points: [
      {
        title: "Azas Kerahasiaan",
        desc: "Semua curhat dan rahasia pribadi terjamin aman tidak dibocorkan kepada siapapun.",
        icon: "Lock"
      },
      {
        title: "Azas Kesukarelaan",
        desc: "Siswa hadir konseling atas kesadaran dan kehendak sendiri tanpa paksaan.",
        icon: "Smile"
      },
      {
        title: "Azas Keterbukaan",
        desc: "Siswa dan konselor bersikap jujur dan terbuka saling bertukar informasi.",
        icon: "Eye"
      },
      {
        title: "Azas Kekinian",
        desc: "Fokus pada penyelesaian masalah yang dihadapi siswa saat ini di sekolah.",
        icon: "Clock"
      }
    ],
    interactiveQuiz: {
      question: "Azas apa yang paling menjamin bahwa isi curhatanmu tidak akan disebarkan ke teman sekelas?",
      options: ["Azas Keterbukaan", "Azas Kerahasiaan", "Azas Kemandirian", "Azas Keahlian"],
      correctIndex: 1,
      explanation: "Azas Kerahasiaan adalah jaminan utama keamanan informasi pribadi siswa."
    },
    audioScript: "Jangan ragu bercerita kepada Bu Wiwik Ismiati. Azas Kerahasiaan menjamin bahwa rahasiamu aman sepenuhnya!"
  },
  {
    id: 5,
    title: "Mitos vs Fakta Seputar BK",
    subtitle: "Ubah Cara Pandangmu tentang Ruang BK",
    iconName: "CheckCircle2",
    themeColor: "from-rose-600 to-pink-800",
    summary: "Mari meluruskan salah kaprah yang sering beredar tentang Ruang BK di sekolah.",
    points: [
      {
        title: "Mitos: Ke BK pasti karena nakal",
        desc: "FAKTA: Ke BK bisa untuk konsultasi minat, prestasi, atau minta saran gaya belajar.",
        icon: "XCircle"
      },
      {
        title: "Mitos: Guru BK itu menyeramkan",
        desc: "FAKTA: Bu Wiwik Ismiati ramah, hangat, dan siap mendengarkan cerita kalian.",
        icon: "Heart"
      },
      {
        title: "Mitos: Masuk BK kena poin",
        desc: "FAKTA: Masuk BK justru mendapat bimbingan, ketenangan, dan solusi terbaik.",
        icon: "Check"
      }
    ],
    interactiveQuiz: {
      question: "Manakah di bawah ini yang merupakan FAKTA seputar Ruang BK?",
      options: [
        "Tempat eksekusi hukuman",
        "Tempat nyaman berdiskusi dan berkonsultasi",
        "Tempat yang harus dijauhi",
        "Tempat pengumpulan benda sitaan"
      ],
      correctIndex: 1,
      explanation: "Ruang BK SMPN 7 Pasuruan adalah tempat nyaman dan hangat untuk berkonsultasi."
    },
    audioScript: "Hilangkan mitos bahwa BK itu seram! Ruang BK SMP Negeri 7 Pasuruan adalah tempat yang nyaman, hangat, dan estetik untukmu berkonsultasi."
  }
];
