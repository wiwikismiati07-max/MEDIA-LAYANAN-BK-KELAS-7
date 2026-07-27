import { TTSWord, UlarTanggaSquare } from '../types';

export const ttsWords: TTSWord[] = [
  {
    id: 1,
    number: 1,
    direction: 'mendaftar',
    clue: 'Proses pemberian bantuan oleh Guru BK kepada siswa untuk menyelesaikan masalah atau mengembangkan potensi (9 Huruf)',
    answer: 'KONSELING',
    row: 2,
    col: 2,
    explanation: 'Konseling adalah hubungan tatap muka atau interaksi antara konselor (Bu Wiwik Ismiati) dan konseli untuk memecahkan masalah.'
  },
  {
    id: 2,
    number: 1,
    direction: 'menurun',
    clue: 'Azas utama BK yang menjamin isi curhatan siswa tidak akan dibocorkan ke siapapun (11 Huruf)',
    answer: 'KERAHASIAAN',
    row: 2,
    col: 2,
    explanation: 'Azas Kerahasiaan melindungi privasi dan rahasia pribadi peserta didik secara ketat.'
  },
  {
    id: 3,
    number: 2,
    direction: 'mendaftar',
    clue: 'Singkatan dari High Order Thinking Skills, tingkat berpikir tingkat tinggi dalam Deep Learning BK (4 Huruf)',
    answer: 'HOTS',
    row: 6,
    col: 2,
    explanation: 'HOTS melatih siswa menganalisis, mengevaluasi, dan merancang solusi atas masalah sehari-hari.'
  },
  {
    id: 4,
    number: 3,
    direction: 'menurun',
    clue: 'Bidang bimbingan BK yang menangani hubungan pertemanan dan pencegahan bullying di sekolah (6 Huruf)',
    answer: 'SOSIAL',
    row: 6,
    col: 5,
    explanation: 'Bimbingan Sosial membantu siswa beradaptasi dan berkomunikasi sehat dengan lingkungan sekitar.'
  },
  {
    id: 5,
    number: 4,
    direction: 'mendaftar',
    clue: 'Prinsip Deep Learning yang berarti penuh kesadaran dan kehadiran emosi secara utuh (7 Huruf)',
    answer: 'MINDFUL',
    row: 9,
    col: 2,
    explanation: 'Mindful (berkesadaran) melatih siswa fokus dan mengenali perasaan tanpa penghakiman.'
  },
  {
    id: 6,
    number: 5,
    direction: 'menurun',
    clue: 'Bidang bimbingan yang membantu siswa menemukan teknik dan strategi belajar efektif (7 Huruf)',
    answer: 'BELAJAR',
    row: 3,
    col: 8,
    explanation: 'Bimbingan Belajar mengoptimalkan prestasi dan kemampuan manajemen waktu siswa.'
  },
  {
    id: 7,
    number: 6,
    direction: 'mendaftar',
    clue: 'Mitos salah yang menganggap Ruang BK sebagai tempat memberi hukuman... (5 Huruf)',
    answer: 'POLISI',
    row: 11,
    col: 3,
    explanation: 'Anggapan BK sebagai Polisi Sekolah adalah mitos yang keliru; BK adalah Sahabat Siswa.'
  }
];

// Generate 100 squares for Ular Tangga BK
export const generateUlarTanggaSquares = (): UlarTanggaSquare[] => {
  const squares: UlarTanggaSquare[] = [];

  // Define Tangga (Ladders - Good Habits)
  const tanggaMap: { [key: number]: { target: number; reason: string } } = {
    4: { target: 14, reason: "Rajin Presensi Online Mandiri -> Naik Tangga!" },
    9: { target: 31, reason: "Berani Curhat ke Bu Wiwik Ismiati -> Naik Tangga!" },
    20: { target: 38, reason: "Mindful Breathing Sebelum Belajar -> Naik Tangga!" },
    28: { target: 84, reason: "Membantu Teman Terhindar Bullying -> Tangga Raksasa!" },
    40: { target: 59, reason: "Belajar Efektif Tanpa HP di Jam Belajar -> Naik Tangga!" },
    63: { target: 81, reason: "Mengikuti Asesmen Diagnostik BK -> Naik Tangga!" },
    71: { target: 91, reason: "Membuat Poster Positif 'BK Sahabatku' -> Tangga Juara!" }
  };

  // Define Ular (Snakes - Bad Habits)
  const ularMap: { [key: number]: { target: number; reason: string } } = {
    17: { target: 7, reason: "Percaya Mitos BK Seram -> Turun Ular!" },
    54: { target: 34, reason: "Tidur Larut Malam Karena Game -> Turun Ular!" },
    62: { target: 19, reason: "Mengejek Teman di WA Kelas -> Turun Ular!" },
    64: { target: 36, reason: "Menyimpan Rahasia Masalah Sendiri -> Turun Ular!" },
    87: { target: 24, reason: "Bolos Jam Layanan BK -> Turun Ular Besar!" },
    93: { target: 73, reason: "Tidak Jujur Saat Konseling -> Turun Ular!" },
    98: { target: 79, reason: "Menyebarkan Fitnah Teman -> Turun Ular!" }
  };

  // Define HOTS questions at special squares
  const hotsQuestions = [
    {
      square: 7,
      pertanyaan: "Apa kepanjangan dari 3 prinsip Deep Learning BK?",
      pilihan: ["Mindful, Meaningful, Joyful", "Manual, Mechanical, Jumping", "Materi, Murid, Mengajar", "Minat, Bakat, Karir"],
      jawabanIndex: 0,
      pembahasan: "3 Prinsip Deep Learning adalah Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful)."
    },
    {
      square: 15,
      pertanyaan: "Azas BK manakah yang menjamin bahwa masalah pribadi siswa tidak dibocorkan?",
      pilihan: ["Azas Keterbukaan", "Azas Kerahasiaan", "Azas Keahlian", "Azas Kedinasan"],
      jawabanIndex: 1,
      pembahasan: "Azas Kerahasiaan adalah jaminan utama keamanan informasi dalam Bimbingan dan Konseling."
    },
    {
      square: 25,
      pertanyaan: "Jika kamu merasa cemas menghadapi ujian, bidang bimbingan manakah yang tepat?",
      pilihan: ["Bimbingan Sosial", "Bimbingan Belajar & Pribadi", "Bimbingan Keuangan", "Bimbingan Olahraga"],
      jawabanIndex: 1,
      pembahasan: "Bimbingan Belajar dan Pribadi mengelola emosi kecemasan serta strategi persiapan belajar."
    },
    {
      square: 35,
      pertanyaan: "Siapakah Guru Bimbingan Konseling Kelas 7 di SMP Negeri 7 Pasuruan?",
      pilihan: ["Ibu Wiwik Ismiati, S.Pd.", "Ibu Tri Handayani", "Ibu Rina Setyowati", "Ibu Ani Supriati"],
      jawabanIndex: 0,
      pembahasan: "Guru BK Kelas 7 di SMPN 7 Pasuruan adalah Ibu Wiwik Ismiati, S.Pd."
    },
    {
      square: 50,
      pertanyaan: "Manakah di bawah ini yang MERUPAKAN Mitos BK yang tidak benar?",
      pilihan: ["Guru BK sahabat siswa", "Ruang BK tempat nyaman cerita", "BK tempat menghukum anak nakal", "BK membantu karir"],
      jawabanIndex: 2,
      pembahasan: "Mitos 'BK tempat menghukum anak nakal' adalah salah. BK hadir membantu seluruh siswa."
    },
    {
      square: 75,
      pertanyaan: "Berapa jumlah rombel kelas 7 di SMP Negeri 7 Pasuruan?",
      pilihan: ["6 Rombel", "7 Rombel", "8 Rombel (7A - 7H)", "10 Rombel"],
      jawabanIndex: 2,
      pembahasan: "Terdapat 8 Rombel kelas 7 di SMPN 7 Pasuruan."
    },
    {
      square: 88,
      pertanyaan: "Sikap apakah yang menunjukkan penerapan Dimensi Profil Pelajar Pancasila 'Gotong Royong' di kelas BK?",
      pilihan: ["Mengerjakan kuis sendirian tanpa peduli teman", "Saling bantu dalam kelompok menyelesaikan game ular tangga", "Mengkritik kesalahan teman secara keras", "Diam saja tidak ikut diskusi"],
      jawabanIndex: 1,
      pembahasan: "Bekerja sama dan saling mendukung merupakan wujud Gotong Royong."
    }
  ];

  for (let i = 1; i <= 100; i++) {
    let type: UlarTanggaSquare['type'] = 'normal';
    let targetSquare: number | undefined = undefined;

    if (tanggaMap[i]) {
      type = 'tangga';
      targetSquare = tanggaMap[i].target;
    } else if (ularMap[i]) {
      type = 'ular';
      targetSquare = ularMap[i].target;
    } else {
      const hotsMatch = hotsQuestions.find(q => q.square === i);
      if (hotsMatch) {
        type = 'soal_hots';
      }
    }

    const hotsMatch = hotsQuestions.find(q => q.square === i);

    squares.push({
      number: i,
      type,
      targetSquare,
      soal: hotsMatch ? {
        pertanyaan: hotsMatch.pertanyaan,
        pilihan: hotsMatch.pilihan,
        jawabanIndex: hotsMatch.jawabanIndex,
        pembahasan: hotsMatch.pembahasan
      } : undefined
    });
  }

  return squares;
};
