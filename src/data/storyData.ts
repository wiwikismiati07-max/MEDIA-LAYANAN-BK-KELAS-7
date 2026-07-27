import { StoryScene } from '../types';

export const storyScript: StoryScene[] = [
  {
    id: 1,
    title: "Episode 1: Hari Pertama Bayu di Kelas 7 SMPN 7 Pasuruan",
    characterName: "Bayu (Siswa Kelas 7)",
    characterAvatar: "👦",
    dialogue: "Duh, sekolah di SMP Negeri 7 Pasuruan ini geda banget ya... Aku belum punya banyak teman dari SD. Tadi wali kelas bilang nanti jam ke-3 ada materi BK dengan Bu Wiwik Ismiati.",
    narration: "Bayu berdiri ragu di koridor sekolah. Tiba-tiba salah seorang teman sekelasnya menghampiri Bayu dengan muka panik.",
    bgGradient: "from-blue-900 via-indigo-900 to-slate-900",
    choices: [
      {
        text: "Menanyakan kenapa temannya kelihatan panik",
        nextSceneId: 2,
        feedback: "Bayu mencoba berkomunikasi santun dan peka emosi.",
        points: 10
      },
      {
        text: "Pura-pura tidak melihat dan langsung masuk kelas",
        nextSceneId: 3,
        feedback: "Bayu sedikit canggung dan malu bersosialisasi.",
        points: 5
      }
    ]
  },
  {
    id: 2,
    title: "Episode 2: Bisikan Mitos Tentang BK",
    characterName: "Rino (Teman Sekelas)",
    characterAvatar: "👦🏻",
    dialogue: "Yu! Jangan sampai nama kamu dipanggil ke Ruang BK ya! Katanya kalau masuk Ruang BK itu pasti anak nakal yang mau dihukum poin!",
    narration: "Mendengar ucapan Rino, Bayu mendadak berdebar ketakutan. Dia membayangkan Ruang BK seperti penjara gelap.",
    bgGradient: "from-amber-950 via-slate-900 to-indigo-950",
    choices: [
      {
        text: "Langsung percaya begitu saja dan merasa takut pada Guru BK",
        nextSceneId: 4,
        feedback: "Bayu terjebak oleh Mitos BK yang salah.",
        points: 0
      },
      {
        text: "Bersikap bernalar kritis: 'Masa sih? Ayo kita buktikan dulu saat jam Bu Wiwik Ismiati nanti!'",
        nextSceneId: 5,
        feedback: "Bayu menerapkan bernalar kritis dan tidak mudah terpengaruh stigma!",
        points: 20
      }
    ]
  },
  {
    id: 3,
    title: "Episode 2 Alternative: Bayu Berdiam Diri di Sudut Kelas",
    characterName: "Bayu",
    characterAvatar: "👦",
    dialogue: "Aku takut nggak punya teman... Belajar di SMP pasti lebih susah dari SD.",
    narration: "Bel sekolah berbunyi. Ibu Wiwik Ismiati, S.Pd. masuk ke kelas 7 dengan senyuman hangat dan ramah.",
    bgGradient: "from-teal-950 via-slate-900 to-cyan-950",
    choices: [
      {
        text: "Mendengarkan penjelasan awal Bu Wiwik Ismiati dengan tertib",
        nextSceneId: 5,
        feedback: "Bayu menyimak informasi awal dengan baik.",
        points: 15
      }
    ]
  },
  {
    id: 4,
    title: "Episode 3: Ketakutan yang Tak Beralasan",
    characterName: "Bayu",
    characterAvatar: "👦",
    dialogue: "Waduh, Bu Wiwik memanggil namaku untuk maju berkenalan... Mampus aku, apa salahku ya?",
    narration: "Bayu maju dengan gemetar. Namun begitu tatap mata dengan Bu Wiwik, nada suara Bu Wiwik sangat lembut dan suportif.",
    bgGradient: "from-indigo-900 via-purple-900 to-slate-900",
    choices: [
      {
        text: "Mencoba tenang dan menjawab sapaan Bu Wiwik",
        nextSceneId: 5,
        feedback: "Bayu mulai menyadari ketakutannya hanya persepsi yang keliru.",
        points: 10
      }
    ]
  },
  {
    id: 5,
    title: "Episode 4: Perjumpaan Hangat dengan Bu Wiwik Ismiati",
    characterName: "Ibu Wiwik Ismiati, S.Pd.",
    characterAvatar: "👩‍🏫",
    dialogue: "Selamat pagi anak-anakku Kelas 7 SMP Negeri 7 Pasuruan! Ibu Wiwik adalah Guru Bimbingan dan Konseling kalian. Ruang BK adalah rumah kedua kalian: tempat kalian curhat, diskusi cita-cita, dan minta bantuan cara belajar efektif. Di sini cerita kalian terjamin kerahasiaannya!",
    narration: "Mendengar penjelasan Bu Wiwik yang menenangkan, hati Bayu dan Rino langsung lega. Ternyata mitos bahwa BK seram itu salah besar!",
    bgGradient: "from-emerald-900 via-teal-900 to-slate-900",
    choices: [
      {
        text: "Bayu bertanya: 'Bu, apakah saya boleh konsultasi jika bingung memilih ekstrakurikuler?'",
        nextSceneId: 6,
        feedback: "Pertanyaan hebat! Bimbingan Karir & Bakat memfasilitasi minat siswa.",
        points: 25
      }
    ],
    reflectionQuestion: "Berdasarkan adegan di atas, sebutkan 2 bukti bahwa persepsi 'BK Polisi Sekolah' adalah mitos yang salah!",
    reflectionAnswerKey: "1. Guru BK (Bu Wiwik) menyambut dengan hangat dan ramah.\n2. BK menjamin Azas Kerahasiaan serta siap membantu bimbingan belajar, emosi, dan cita-cita."
  },
  {
    id: 6,
    title: "Episode 5: Penyelesaian Masalah Lewat Bimbingan Belajar",
    characterName: "Ibu Wiwik Ismiati, S.Pd.",
    characterAvatar: "👩‍🏫",
    dialogue: "Tentu sangat boleh, Bayu! Ibu siap mendampingi kalian memetakan minat, bakat, dan cara belajar. Siapapun yang butuh teman bicara, pintu Ruang BK selalu terbuka lebar untuk kalian semua!",
    narration: "Sejak hari itu, Bayu tidak pernah ragu lagi. Ketika ia sempat bingung mengatur jadwal belajar dan kuis, ia berkonsultasi dengan Bu Wiwik dan mendapat strategi belajar yang joyful dan efektif.",
    bgGradient: "from-teal-800 via-emerald-900 to-cyan-900",
    choices: [
      {
        text: "Lihat Kesimpulan Cerita & Peran Nyata BK di SMPN 7 Pasuruan",
        nextSceneId: 7,
        feedback: "Selamat! Kamu telah memahami hakikat peran BK di sekolah.",
        points: 30
      }
    ]
  },
  {
    id: 7,
    title: "Akhir Cerita: BK Sahabat Siswa SMP Negeri 7 Pasuruan",
    characterName: "Bayu & Bu Wiwik Ismiati",
    characterAvatar: "🌟",
    dialogue: "BK BUKAN lagi tempat yang ditakuti, melainkan tempat tumbuh, bercerita, dan menggapai cita-cita bersama Ibu Wiwik Ismiati di SMP Negeri 7 Pasuruan!",
    narration: "Bayu kini menjadi siswa yang percaya diri, aktif berprestasi, dan memiliki banyak teman. Mari manfaatkan layanan BK dengan gembira dan penuh kesadaran!",
    bgGradient: "from-amber-700 via-teal-800 to-emerald-900"
  }
];
