export type NavTab = 
  | 'beranda'
  | 'dashboard'
  | 'rpp'
  | 'diagnostik'
  | 'video'
  | 'presensi'
  | 'materi'
  | 'soal'
  | 'kuis'
  | 'permainan';

export type RombelClass = '7A' | '7B' | '7C' | '7D' | '7E' | '7F' | '7G' | '7H';

export interface PresensiItem {
  id: string;
  nama: string;
  rombel: RombelClass;
  nisn: string;
  tanggal: string;
  waktu: string;
  keterangan: 'Hadir' | 'Sakit' | 'Izin' | 'Alpa' | 'Perlu Konseling BK';
  catatan?: string;
}

export interface DiagnostikAnswer {
  questionId: number;
  selectedOption: string;
  emoji: string;
  score: number;
  category: 'visual' | 'auditori' | 'kinestetik' | 'pribadi' | 'sosial' | 'belajar';
}

export interface DiagnostikResult {
  gayaBelajarDominan: string;
  pemahamanBK: string;
  rekomendasiBK: string;
  profilKarakter: string;
}

export type SoalType = 'pilihan_ganda' | 'pilihan_ganda_kompleks' | 'benar_salah' | 'menjodohkan' | 'studi_kasus';

export interface SoalItem {
  id: number;
  tipe: SoalType;
  pertanyaan: string;
  pilihan?: string[]; // for single choice
  opsiKompleks?: { text: string; correct: boolean }[]; // for complex choice
  jawabanBenarSalah?: boolean; // for true/false
  pasanganMenjodohkan?: { item: string; pasangan: string }[]; // for matching
  studiKasusDetail?: {
    skenario: string;
    pertanyaanAnalisis: string;
    kunciJawabanContoh: string;
    tipsPenangananBK: string;
  };
  jawabanTunggalIndex?: number;
  pembahasan: string;
  kategori: 'Pribadi' | 'Sosial' | 'Belajar' | 'Karir';
  tingkatKesulitan: 'Mudah' | 'Sedang' | 'HOTS';
}

export interface TTSWord {
  id: number;
  number: number;
  direction: 'mendaftar' | 'menurun';
  clue: string;
  answer: string;
  row: number;
  col: number;
  explanation: string;
}

export interface UlarTanggaSquare {
  number: number;
  type: 'normal' | 'tangga' | 'ular' | 'soal_hots';
  targetSquare?: number;
  soal?: {
    pertanyaan: string;
    pilihan: string[];
    jawabanIndex: number;
    pembahasan: string;
  };
}

export interface StoryScene {
  id: number;
  title: string;
  characterName: string;
  characterAvatar: string;
  dialogue: string;
  narration: string;
  bgGradient: string;
  choices?: {
    text: string;
    nextSceneId: number;
    feedback: string;
    points: number;
  }[];
  reflectionQuestion?: string;
  reflectionAnswerKey?: string;
}
