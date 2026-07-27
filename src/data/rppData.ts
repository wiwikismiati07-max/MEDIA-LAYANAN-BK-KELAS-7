export interface RppIdentitas {
  satuanPendidikan: string;
  mataPelajaran: string;
  kelasSemester: string;
  alokasiWaktu: string;
  materiPokok: string;
  bidangBimbingan: string;
  modelPembelajaran: string;
  penyusun: string;
}

export interface RppIdentifikasi {
  kesiapanMurid: {
    visual: string;
    auditori: string;
    kinestetik: string;
  };
  karakteristikMateri: string;
  profilPancasila: {
    dimensi: string;
    keterangan: string;
  }[];
}

export interface RppDesain {
  skkpd: string;
  topikKontekstual: string;
  lintasDisiplin: string;
  tujuanLayanan: {
    umum: string;
    khusus: string[];
  };
  kerangkaPembelajaran: {
    praktikPedagogis: string;
    kemitraanPembelajaran: string;
    lingkunganPembelajaran: string;
    pemanfaatanDigital: string;
  };
}

export interface RppPelaksanaan {
  prinsipDeepLearning: {
    berkesadaran: string;
    bermakna: string;
    menggembirakan: string;
  };
  pengalamanBelajar: {
    memahami: string;
    mengaplikasi: string;
    merefleksi: string;
  };
  pjblDetail: {
    namaProyek: string;
    deskripsi: string;
    output: string;
  };
  langkahLangkah: {
    kegiatanAwal: { alokasi: string; aktivitas: string[] };
    kegiatanInti: { alokasi: string; aktivitas: string[] };
    kegiatanPenutup: { alokasi: string; aktivitas: string[] };
  };
  asesmen: {
    formatif: string;
    sumatif: string;
    nondiagnostik: string;
  };
  indikatorKeberhasilan: string[];
  rencanaTindakLanjut: {
    layananLanjutan: string;
    konselingIndividu: string;
    bimbinganKelompok: string;
    kolaborasiOrangTua: string;
  };
}

export interface RppData {
  identitas: RppIdentitas;
  identifikasi: RppIdentifikasi;
  desain: RppDesain;
  pelaksanaan: RppPelaksanaan;
}

export const rppMendalamBK: RppData = {
  identitas: {
    satuanPendidikan: "SMP NEGERI 7 PASURUAN",
    mataPelajaran: "Bimbingan dan Konseling (BK)",
    kelasSemester: "Kelas VII / Ganjil",
    alokasiWaktu: "2 JP x 40 Menit (80 Menit)",
    materiPokok: "Mengenal Bimbingan dan Konseling di SMP",
    bidangBimbingan: "Pribadi dan Sosial",
    modelPembelajaran: "Project Based Learning (PjBL) berbasis Deep Learning",
    penyusun: "WIWIK ISMIATI, S.Pd. (Guru BK Kelas 7 SMPN 7 Pasuruan)"
  },
  identifikasi: {
    kesiapanMurid: {
      visual: "Peserta didik menyukai infografis, video simulasi cerita, slide presentasi interaktif, dan peta konsep visual layanan BK.",
      auditori: "Peserta didik lebih cepat memahami melalui narasi penjelasan langsung Bu Wiwik Ismiati, diskusi kelompok, serta rekaman narasi audio.",
      kinestetik: "Peserta didik belajar optimal melalui permainan interaktif Ular Tangga BK, Teka Teki Silang (TTS), serta role-play simulasi konseling."
    },
    karakteristikMateri: "Materi bersifat pembentukan persepsi positif (de-stigmatisasi BK) dan pengenalan fungsi, azas, bidang, serta mekanisme konseling di sekolah menengah.",
    profilPancasila: [
      {
        dimensi: "1. Beriman, Bertakwaku kepada Tuhan YME, & Berakhlak Mulia",
        keterangan: "Menumbuhkan sikap empati, kejujuran, saling menghargai privasi teman, dan berdoa sebelum/sesudah kegiatan bimbingan."
      },
      {
        dimensi: "2. Berkebinekaan Global",
        keterangan: "Menghargai keberagaman suku, latar belakang, dan karakter antar siswa kelas 7 di SMP Negeri 7 Pasuruan."
      },
      {
        dimensi: "3. Gotong Royong",
        keterangan: "Bekerja sama dalam menyelesaikan kuis permainan ular tangga, diskusi kelompok, dan proyek pembuatan infographic BK."
      },
      {
        dimensi: "4. Mandiri",
        keterangan: "Secara mandiri mampu mengenali potensi diri, mengisi presensi online, dan menyelesaikan tes diagnostik diri."
      },
      {
        dimensi: "5. Bernalar Kritis",
        keterangan: "Mampu membedakan mitos vs fakta seputar BK di sekolah serta menganalisis studi kasus permasalahan remaja."
      },
      {
        dimensi: "6. Kreatif",
        keterangan: "Menghasilkan karya berupa media ajak positif 'Sahabat BK' dan strategi penyelesaian masalah sehari-hari."
      },
      {
        dimensi: "7. Berkeadaban (Ta'adub)",
        keterangan: "Bersikap sopan dan penuh kesantunan saat berkonsultasi dengan Guru BK maupun berinteraksi dengan sesama teman."
      },
      {
        dimensi: "8. Keteladanan (Qudwah)",
        keterangan: "Menjadi contoh teladan dalam menjaga kerahasiaan curhat teman dan saling mendukung iklim belajar positif."
      }
    ]
  },
  desain: {
    skkpd: "Landasan Perilaku Etis dan Kematangan Emosi (Mampu mengenal diri, mengekspresikan emosi secara wajar, serta menghormati aturan sosial).",
    topikKontekstual: "BK Sahabat Siswa: Mengenal Layanan Bimbingan & Konseling untuk Transisi Sukses di SMP Negeri 7 Pasuruan.",
    lintasDisiplin: "Bahasa Indonesia (Literasi & Narasi), Pendidikan Pancasila (Karakter & Nilai), Seni Budaya (Kreativitas Visual), dan Informatika (Pemanfaatan Web Media Pembelajaran).",
    tujuanLayanan: {
      umum: "Peserta didik kelas 7 mampu memahami fungsi, bidang, azas, dan peran BK secara utuh sehingga merasa nyaman dan antusias memanfaatkan layanan BK.",
      khusus: [
        "1. Peserta didik dapat menganalisis perbedaan mitos dan fakta peran BK di sekolah (C4 - Bernalar Kritis).",
        "2. Peserta didik dapat mengklasifikasikan 4 bidang bimbingan BK (Pribadi, Sosial, Belajar, Karir) secara tepat (C4).",
        "3. Peserta didik dapat mengevaluasi manfaat layanan BK bagi pengembangan potensi dan penanganan masalah pribadi (C5).",
        "4. Peserta didik dapat merancang komitmen memanfaatkan layanan BK tanpa rasa takut/stigma negatif (C6 - Kreatif)."
      ]
    },
    kerangkaPembelajaran: {
      praktikPedagogis: "Pendekatan Deep Learning berbasis Inquiry, Interactive Storytelling, dan Gamification (Ular Tangga & TTS HOTS).",
      kemitraanPembelajaran: "Kolaborasi antarsiswa kelas 7, kemitraan akrab antara siswa dan Bu Wiwik Ismiati S.Pd, serta dukungan wali kelas dan orang tua.",
      lingkunganPembelajaran: "Suasana kelas dan Ruang BK yang inklusif, kondusif, estetik, menyenangkan, ramah anak, dan terjamin kerahasiaannya.",
      pemanfaatanDigital: "Aplikasi Media Pembelajaran Web Interaktif BK SMPN 7 Pasuruan (Presensi Online, Video Interactive Story, TTS Digital, Ular Tangga, & Diagnostik)."
    }
  },
  pelaksanaan: {
    prinsipDeepLearning: {
      berkesadaran: "Mindful - Peserta didik diajak melakukan pembiasaan hening sejenak (mindful breathing) untuk menyadari perasaan dan pikiran saat ini.",
      bermakna: "Meaningful - Menghubungkan peran Guru BK dengan masalah nyata siswa SMP (seperti kecemasan belajar, bully, penyesuaian teman baru).",
      menggembirakan: "Joyful - Mengintegrasikan game ular tangga digital, kuis teka teki silang, dan cerita animasi interaktif yang seru dan estetik."
    },
    pengalamanBelajar: {
      memahami: "Siswa menyaksikan video cerita 'Masalah Bayu di Kelas 7' dan membaca slide interaktif fungsi serta azas BK.",
      mengaplikasi: "Siswa memainkan Game Ular Tangga HOTS BK & TTS, serta memecahkan studi kasus dalam kelompok kecil.",
      merefleksi: "Siswa mengisi jurnal refleksi diri dan kuisioner diagnostik untuk menentukan target pribadi bersama Bu Wiwik Ismiati."
    },
    pjblDetail: {
      namaProyek: "Proyek Media Kreasi 'BK Sahabat Teman Seperjuangan'",
      deskripsi: "Setiap kelompok merancang poster/peta konsep digital atau jargon positif yang mempromosikan manfaat Ruang BK SMPN 7 Pasuruan.",
      output: "Karya Poster Digital / Mindmap Kategori Layanan BK yang dipajang di Mading Kelas dan Web Aplikasi."
    },
    langkahLangkah: {
      kegiatanAwal: {
        alokasi: "10 Menit",
        aktivitas: [
          "• Guru BK (Bu Wiwik Ismiati) membuka kelas dengan salam hangat, doa bersama, dan presensi mandiri lewat Web App.",
          "• Apersepsi dan Pembiasaan Mindful Breathing (Teknik STOP: Stop, Take a breath, Observe, Proceed).",
          "• Penyampaian tujuan layanan dan penjelasan penggunaan Web Media Pembelajaran Interaktif BK."
        ]
      },
      kegiatanInti: {
        alokasi: "60 Menit",
        aktivitas: [
          "• (Memahami - 20 Menit): Siswa mengakses menu 'Video Interaktif' & 'Materi', menyimak alur cerita Bayu dan 4 bidang BK.",
          "• (Mengaplikasi - 25 Menit): Siswa secara berpasangan/kelompok memainkan Kuis Ular Tangga Digital HOTS & Teka Teki Silang BK.",
          "• (Diskusi & PjBL - 15 Menit): Siswa mengerjakan 30 Contoh Soal Variatif dan merancang karya poster mini 'BK Sahabatku'."
        ]
      },
      kegiatanPenutup: {
        alokasi: "10 Menit",
        aktivitas: [
          "• (Merefleksi): Siswa mengisi Asesmen Diagnostik / Refleksi Diri singkat di Web App.",
          "• Bu Wiwik Ismiati memberikan apresiasi, penguatan materi, dan kesimpulan iklim positif BK SMPN 7 Pasuruan.",
          "• Penutupan dengan doa bersama dan foto bersama slogan BK."
        ]
      }
    },
    asesmen: {
      formatif: "Observasi partisipasi aktif, keaktifan diskusi, dan presensi mandiri online di Web App.",
      sumatif: "Skor Kuis Ular Tangga HOTS, nilai TTS, serta hasil pengerjaan 30 Soal Variatif (Pilihan Ganda, Kompleks, Benar/Salah, Menjodohkan, Studi Kasus).",
      nondiagnostik: "Kuisioner Perasaan & Diagnostik Gaya Belajar awal siswa."
    },
    indikatorKeberhasilan: [
      "✓ Minimal 90% siswa kelas 7 mengisi presensi online mandiri dengan tepat.",
      "✓ Minimal 85% siswa mencapai skor di atas KKM (75) pada Latihan Soal & Kuis HOTS.",
      "✓ 100% siswa memahami bahwa BK BUKAN tempat menghukum anak nakal, melainkan tempat berkonsultasi dan mengembangkan potensi.",
      "✓ Terwujudnya penurunan tingkat kecemasan siswa dalam berinteraksi di lingkungan sekolah baru SMPN 7 Pasuruan."
    ],
    rencanaTindakLanjut: {
      layananLanjutan: "Layanan Orientasi dan Informasi Lanjutan mengenai strategi belajar efektif di SMP.",
      konselingIndividu: "Jadwal temu tatap muka di Ruang BK bagi siswa yang memilih keterangan 'Perlu Konseling BK' pada presensi.",
      bimbinganKelompok: "Pembentukan kelompok bimbingan untuk topik manajemen waktu belajar dan adaptasi pertemanan.",
      kolaborasiOrangTua: "Penyampaian resume perkembangan karakter dan gaya belajar siswa kepada orang tua/wali murid."
    }
  }
};
