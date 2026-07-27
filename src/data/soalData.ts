import { SoalItem } from '../types';

export const daftarSoalBk: SoalItem[] = [
  // --- PILIHAN GANDA TUNGGAL (1 - 10) ---
  {
    id: 1,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Apa kepanjangan dari singkatan BK di sekolah menengah?',
    pilihan: [
      'Bimbingan dan Konseling',
      'Bantuan dan Keamanan',
      'Bina Karakter',
      'Bimbingan Kepribadian'
    ],
    jawabanTunggalIndex: 0,
    pembahasan: 'BK merupakan singkatan dari Bimbingan dan Konseling, yaitu pelayanan bantuan untuk peserta didik baik secara perorangan maupun kelompok agar mandiri dan berkembang secara optimal.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 2,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Siapakah nama Guru Bimbingan dan Konseling Kelas 7 di SMP Negeri 7 Pasuruan?',
    pilihan: [
      'Ibu Wiwik Ismiati, S.Pd.',
      'Ibu Sri Rahayu, M.Pd.',
      'Ibu Dewi Lestari, S.Pd.',
      'Ibu Retno Astuti, S.Pd.'
    ],
    jawabanTunggalIndex: 0,
    pembahasan: 'Guru Bimbingan dan Konseling Kelas 7 di SMP Negeri 7 Pasuruan adalah Ibu Wiwik Ismiati, S.Pd.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 3,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Di bawah ini yang BUKAN merupakan mitos salah tentang BK adalah...',
    pilihan: [
      'BK adalah tempat polisi sekolah untuk menghukum anak nakal',
      'BK hanya untuk siswa yang sering melanggar aturan',
      'Guru BK adalah sahabat siswa yang siap mendengarkan dan menjaga rahasia',
      'Masuk ruang BK berarti pasti mendapat poin pelanggaran'
    ],
    jawabanTunggalIndex: 2,
    pembahasan: 'Pernyataan "Guru BK adalah sahabat siswa yang siap mendengarkan dan menjaga rahasia" adalah FAKTA kebenaran tentang BK, bukan mitos.',
    kategori: 'Sosial',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 4,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Azas BK yang menjamin bahwa semua cerita dan masalah pribadi siswa tidak akan dibocorkan kepada pihak lain yang tidak berkepentingan disebut azas...',
    pilihan: [
      'Azas Keterbukaan',
      'Azas Kerahasiaan',
      'Azas Kesukarelaan',
      'Azas Kemandirian'
    ],
    jawabanTunggalIndex: 1,
    pembahasan: 'Azas Kerahasiaan adalah kode etik utama Guru BK di mana seluruh informasi atau kerahasiaan masalah konseli (siswa) dijamin dilindungi.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 5,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Ketika seorang siswa bingung memilih ekskul yang sesuai dengan bakat dan hobinya, bidang bimbingan yang paling tepat menangani masalah ini adalah...',
    pilihan: [
      'Bimbingan Sosial',
      'Bimbingan Pribadi',
      'Bimbingan Belajar & Pengembangan Karir',
      'Bimbingan Keuangan'
    ],
    jawabanTunggalIndex: 2,
    pembahasan: 'Pemilihan ekstrakurikuler, mengenali minat bakat, dan perencanaan cita-cita masa depan masuk ke dalam Bimbingan Belajar dan Pengembangan Karir.',
    kategori: 'Karir',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 6,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Di SMP Negeri 7 Pasuruan, terdapat berapa jumlah rombel (rombongan belajar) untuk kelas 7?',
    pilihan: [
      '6 Rombel (7A - 7F)',
      '7 Rombel (7A - 7G)',
      '8 Rombel (7A - 7H)',
      '9 Rombel (7A - 7I)'
    ],
    jawabanTunggalIndex: 2,
    pembahasan: 'Kelas 7 di SMP Negeri 7 Pasuruan terdiri dari 8 rombel, yaitu kelas 7A hingga 7H.',
    kategori: 'Sosial',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 7,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Tujuan utama diterapkannya Prinsip Pembelajaran Mendalam (Deep Learning) dalam layanan BK adalah...',
    pilihan: [
      'Menambah jumlah hafalan materi teori BK',
      'Mewujudkan pengalaman belajar yang Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful)',
      'Meningkatkan jumlah soal ujian harian',
      'Mengurangi jam istirahat siswa'
    ],
    jawabanTunggalIndex: 1,
    pembahasan: 'Deep learning dalam BK menekankan 3 prinsip: Berkesadaran (mindful), Bermakna (meaningful), dan Menggembirakan (joyful) agar terjadi perubahan pemahaman dan perilaku nyata.',
    kategori: 'Belajar',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 8,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Jika Rian merasa cemas saat dipanggil maju ke depan kelas untuk presentasi, bentuk layanan BK yang tepat diberikan Bu Wiwik Ismiati adalah...',
    pilihan: [
      'Memberikan hukuman lari di lapangan',
      'Layanan Konseling Individu untuk teknik pengelolaan kecemasan dan kepercayaan diri',
      'Memindahkan Rian ke sekolah lain',
      'Abaikan saja karena nanti sembuh sendiri'
    ],
    jawabanTunggalIndex: 1,
    pembahasan: 'Kecemasan percaya diri dihadapi melalui konseling individu dengan melatih teknik pernapasan dan mindset positif.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 9,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Sikap siswa yang diharapkan dalam azas Keterbukaan saat menjalani konseling adalah...',
    pilihan: [
      'Menyembunyikan fakta sebenarnya karena takut',
      'Jujur menyampaikan apa yang dirasakan dan dialami tanpa menutupi masalah',
      'Menyalahkan teman sekelas atas semua masalah',
      'Hanya diam tidak merespon pertanyaan konselor'
    ],
    jawabanTunggalIndex: 1,
    pembahasan: 'Azas keterbukaan menghendaki siswa (konseli) secara jujur dan terbuka menyampaikan masalahnya agar solusinya tepat sasaran.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 10,
    tipe: 'pilihan_ganda',
    pertanyaan: 'Fungsi BK yang bertujuan membantu siswa mencegah timbulnya masalah baru yang dapat mengganggu perkembangannya disebut fungsi...',
    pilihan: [
      'Fungsi Pemahaman',
      'Fungsi Pencegahan (Preventif)',
      'Fungsi Pengentasan (Kuratif)',
      'Fungsi Pemeliharaan'
    ],
    jawabanTunggalIndex: 1,
    pembahasan: 'Fungsi Pencegahan (Preventif) adalah upaya BK mengantisipasi berbagai masalah yang mungkin timbul dan berupaya mencegahnya.',
    kategori: 'Belajar',
    tingkatKesulitan: 'Sedang'
  },

  // --- PILIHAN GANDA KOMPLEKS (11 - 15) ---
  {
    id: 11,
    tipe: 'pilihan_ganda_kompleks',
    pertanyaan: 'Manakah di antara pernyataan berikut yang termasuk FAKTA SEBENARNYA tentang layanan BK di SMP Negeri 7 Pasuruan? (Pilih semua jawaban yang benar)',
    opsiKompleks: [
      { text: 'Guru BK siap membantu siswa yang sedang sedih, cemas, atau bingung', correct: true },
      { text: 'Ruang BK adalah tempat khusus untuk memberi hukuman bagi anak nakal', correct: false },
      { text: 'Layanan BK terbuka untuk seluruh siswa kelas 7A - 7H tanpa terkecuali', correct: true },
      { text: 'Kerhasiaan rahasia curhat siswa terjamin aman di tangan Guru BK', correct: true }
    ],
    pembahasan: 'Layanan BK terbuka untuk seluruh siswa, membantu masalah pribadi/belajar/sosial, dan terjamin kerahasiaannya. BK bukan tempat menghukum anak.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 12,
    tipe: 'pilihan_ganda_kompleks',
    pertanyaan: 'Pilihlah yang termasuk dalam 4 Bidang Layanan Bimbingan dan Konseling di sekolah! (Pilih jawaban yang benar)',
    opsiKompleks: [
      { text: 'Bimbingan Pribadi', correct: true },
      { text: 'Bimbingan Sosial', correct: true },
      { text: 'Bimbingan Keuangan Bisnis', correct: false },
      { text: 'Bimbingan Belajar dan Karir', correct: true }
    ],
    pembahasan: '4 Bidang utama layanan BK adalah Bimbingan Pribadi, Sosial, Belajar, dan Karir.',
    kategori: 'Sosial',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 13,
    tipe: 'pilihan_ganda_kompleks',
    pertanyaan: 'Manakah dari berikut ini yang merupakan contoh penerapan Prinsip Pembelajaran Mendalam (Deep Learning)? (Pilih jawaban yang benar)',
    opsiKompleks: [
      { text: 'Berkesadaran (Mindful): Menyadari emosi saat hening pernapasan', correct: true },
      { text: 'Bermakna (Meaningful): Menghubungkan teori BK dengan kehidupan nyata', correct: true },
      { text: 'Menekan (Stressful): Menghukum siswa yang tidak hafal materi', correct: false },
      { text: 'Menggembirakan (Joyful): Belajar melalui game ular tangga & TTS interaktif', correct: true }
    ],
    pembahasan: 'Deep learning terdiri dari 3 prinsip utama: Mindful, Meaningful, dan Joyful.',
    kategori: 'Belajar',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 14,
    tipe: 'pilihan_ganda_kompleks',
    pertanyaan: 'Berikut ini adalah bentuk-bentuk Keterangan Kehadiran pada Presensi Mandiri Siswa BK SMPN 7 Pasuruan. Mana yang BENAR? (Pilih jawaban yang benar)',
    opsiKompleks: [
      { text: 'Hadir (Sangat Siap Belajar)', correct: true },
      { text: 'Sakit (Disertai Surat/Keterangan)', correct: true },
      { text: 'Perlu Konseling BK (Ingin Curhat dengan Bu Wiwik)', correct: true },
      { text: 'Bolos Tanpa Izin', correct: false }
    ],
    pembahasan: 'Form presensi mandiri menyediakan pilihan estetik: Hadir, Sakit, Izin, Alpa, dan opsi spesial "Perlu Konseling BK".',
    kategori: 'Sosial',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 15,
    tipe: 'pilihan_ganda_kompleks',
    pertanyaan: 'Berikut yang termasuk dalam 8 Dimensi Profil Pelajar Pancasila dalam RPP Mendalam BK adalah... (Pilih jawaban yang benar)',
    opsiKompleks: [
      { text: 'Bernalar Kritis dan Kreatif', correct: true },
      { text: 'Gotong Royong dan Mandiri', correct: true },
      { text: 'Berkeadaban (Taadub) dan Keteladanan (Qudwah)', correct: true },
      { text: 'Individualis dan Mementingkan Diri Sendiri', correct: false }
    ],
    pembahasan: 'Profil Pelajar Pancasila mendorong karakter beriman, berkebinekaan, gotong royong, mandiri, bernalar kritis, kreatif, berkeadaban, serta keteladanan.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },

  // --- SOAL BENAR / SALAH (16 - 20) ---
  {
    id: 16,
    tipe: 'benar_salah',
    pertanyaan: 'Siswa yang datang berkonsultasi ke Ruang BK pasti merupakan siswa nakal yang mendapat hukuman.',
    jawabanBenarSalah: false,
    pembahasan: 'SALAH. Guru BK siap melayani SELURUH siswa untuk konseling pribadi, konsultasi prestasi, curhat pertemanan, maupun perencanaan karir.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 17,
    tipe: 'benar_salah',
    pertanyaan: 'Azas Kesukarelaan dalam BK berarti siswa hadir ke konseling atas kesadaran dan kemauan sendiri tanpa paksaan.',
    jawabanBenarSalah: true,
    pembahasan: 'BENAR. Kesukarelaan merupakan azas penting di mana siswa secara sukarela bersedia membagikan masalahnya untuk dicari jalan keluar bersama.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 18,
    tipe: 'benar_salah',
    pertanyaan: 'Asesmen Diagnostik Awal dilakukan untuk memetakan kesiapan belajar, gaya belajar, dan emosi siswa agar materi BK tepat sasaran.',
    jawabanBenarSalah: true,
    pembahasan: 'BENAR. Asesmen diagnostik membantu Bu Wiwik Ismiati memahami profil tiap siswa (visual, auditori, kinestetik).',
    kategori: 'Belajar',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 19,
    tipe: 'benar_salah',
    pertanyaan: 'Guru BK berhak menceritakan isi rahasia curhat siswa kepada seluruh teman sekelas di depan umum.',
    jawabanBenarSalah: false,
    pembahasan: 'SALAH. Guru BK memegang teguh Kode Etik dan Azas Kerahasiaan tinggi.',
    kategori: 'Sosial',
    tingkatKesulitan: 'Mudah'
  },
  {
    id: 20,
    tipe: 'benar_salah',
    pertanyaan: 'Bimbingan Sosial membantu siswa menyesuaikan diri dengan lingkungan pertemanan baru di SMPN 7 Pasuruan.',
    jawabanBenarSalah: true,
    pembahasan: 'BENAR. Bimbingan sosial memfasilitasi komunikasi sehat, adaptasi lingkungan baru, dan pencegahan bullying.',
    kategori: 'Sosial',
    tingkatKesulitan: 'Mudah'
  },

  // --- SOAL MENJODOHKAN (21 - 25) ---
  {
    id: 21,
    tipe: 'menjodohkan',
    pertanyaan: 'Jodohkanlah Azas Layanan BK di kolom kiri dengan pengertiannya yang tepat di kolom kanan!',
    pasanganMenjodohkan: [
      { item: 'Azas Kerahasiaan', pasangan: 'Menjaga rahasia pribadi siswa agar tidak bocor' },
      { item: 'Azas Keterbukaan', pasangan: 'Jujur dan tidak berpura-pura saat konseling' },
      { item: 'Azas Kesukarelaan', pasangan: 'Datang konseling tanpa rasa terpaksa' },
      { item: 'Azas Kekinian', pasangan: 'Fokus pada masalah yang dihadapi saat ini' }
    ],
    pembahasan: 'Keempat azas ini merupakan fondasi utama kepercayaan dalam hubungan antara Guru BK (Bu Wiwik Ismiati) dan siswa.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 22,
    tipe: 'menjodohkan',
    pertanyaan: 'Jodohkanlah Bidang Bimbingan BK dengan contoh topik bahasannya!',
    pasanganMenjodohkan: [
      { item: 'Bimbingan Pribadi', pasangan: 'Mengelola emosi & rasa percaya diri' },
      { item: 'Bimbingan Sosial', pasangan: 'Menjalin pertemanan tanpa bullying' },
      { item: 'Bimbingan Belajar', pasangan: 'Teknik mengatur waktu dan cara belajar efektif' },
      { item: 'Bimbingan Karir', pasangan: 'Mengenali cita-cita dan minat bakat masa depan' }
    ],
    pembahasan: 'Layanan BK mencakup 4 bidang utama yang saling melengkapi dalam perkembangan remaja.',
    kategori: 'Karir',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 23,
    tipe: 'menjodohkan',
    pertanyaan: 'Jodohkanlah Prinsip Pembelajaran Mendalam (Deep Learning) dengan penerapannya!',
    pasanganMenjodohkan: [
      { item: 'Berkesadaran (Mindful)', pasangan: 'Latihan hening napas untuk fokus belajar' },
      { item: 'Bermakna (Meaningful)', pasangan: 'Menghubungkan materi dengan kehidupan sehari-hari' },
      { item: 'Menggembirakan (Joyful)', pasangan: 'Permainan ular tangga & Teka Teki Silang BK' }
    ],
    pembahasan: 'Ketiga prinsip pembelajaran mendalam menjadikan proses belajar di kelas BK lebih hidup dan membekal siswa.',
    kategori: 'Belajar',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 24,
    tipe: 'menjodohkan',
    pertanyaan: 'Jodohkanlah Gaya Belajar siswa dengan media pembelajaran yang cocok!',
    pasanganMenjodohkan: [
      { item: 'Gaya Belajar Visual', pasangan: 'Infografis warna-warni & Slide Gambar' },
      { item: 'Gaya Belajar Auditori', pasangan: 'Mendengarkan penjelasan & Narasi Cerita' },
      { item: 'Gaya Belajar Kinestetik', pasangan: 'Praktek Simulasi & Game Ular Tangga' }
    ],
    pembahasan: 'Setiap siswa memiliki kombinasi gaya belajar unik yang perlu difasilitasi oleh media interaktif.',
    kategori: 'Belajar',
    tingkatKesulitan: 'Sedang'
  },
  {
    id: 25,
    tipe: 'menjodohkan',
    pertanyaan: 'Jodohkanlah Fungsi Layanan BK berikut dengan deskripsi fungsinya!',
    pasanganMenjodohkan: [
      { item: 'Fungsi Pemahaman', pasangan: 'Membantu siswa memahami potensi dan kelemahan diri' },
      { item: 'Fungsi Pencegahan', pasangan: 'Mencegah timbulnya hambatan atau masalah belajar' },
      { item: 'Fungsi Pengentasan', pasangan: 'Membantu mengatasi/menyelesaikan masalah yang terjadi' }
    ],
    pembahasan: 'Fungsi pemahaman, pencegahan, dan pengentasan bekerja secara berkesinambungan.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'Sedang'
  },

  // --- STUDI KASUS (26 - 30) ---
  {
    id: 26,
    tipe: 'studi_kasus',
    pertanyaan: 'Studi Kasus 1: Penyesuaian Diri di Kelas 7 SMPN 7 Pasuruan',
    studiKasusDetail: {
      skenario: 'Andi baru saja menjadi siswa kelas 7B di SMP Negeri 7 Pasuruan. Dia berasal dari SD luar kota sehingga belum memiliki teman dekat. Di minggu pertama, Andi merasa sangat canggung, sering diam saat istirahat, dan cemas tidak diterima di kelompok belajar.',
      pertanyaanAnalisis: 'Langkah apa yang sebaiknya dilakukan Andi, dan bagaimana peran Bu Wiwik Ismiati selaku Guru BK untuk membantu Andi?',
      kunciJawabanContoh: '1. Andi dapat mendatangi Ruang BK atau memilih opsi konseling pada Form Presensi Online untuk bercerita.\n2. Bu Wiwik Ismiati dapat memberikan Layanan Bimbingan Kelompok / Konseling Individu serta mengajak teman sekelas merangkul Andi dalam kelompok belajar.',
      tipsPenangananBK: 'Bimbingan Sosial difokuskan pada keterampilan komunikasi interpersonal dan permainan ice breaking kelompok.'
    },
    pembahasan: 'Kasus transisi sekolah SD ke SMP sangat umum. BK hadir memfasilitasi pertemanan inklusif dan ramah anak.',
    kategori: 'Sosial',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 27,
    tipe: 'studi_kasus',
    pertanyaan: 'Studi Kasus 2: Menghadapi Mitos dan Stigma Ruang BK',
    studiKasusDetail: {
      skenario: 'Siti ingin bertanya kepada Guru BK mengenai strategi membagi waktu belajar dan hobi bernyanyi. Namun, temannya menakut-nakuti Siti dengan berkata: "Jangan ke Ruang BK nanti kamu dikira anak bermasalah sama guru lain!"',
      pertanyaanAnalisis: 'Apakah perkataan teman Siti benar? Apa yang seharusnya dilakukan Siti?',
      kunciJawabanContoh: '1. Perkataan teman Siti SALAH (mitos BK).\n2. Siti harus tetap percaya diri menemui Bu Wiwik Ismiati karena Ruang BK terbuka untuk konsultasi minat bakat dan prestasi.\n3. Siti dapat meluruskan mitos tersebut kepada temannya.',
      tipsPenangananBK: 'Edukasi masif mengenai fungsi perkembangan BK membongkar anggapan negatif bahwa BK adalah polisi sekolah.'
    },
    pembahasan: 'Penghilangan stigma BK membantu siswa tidak ragu memanfaatkan fasilitas konsultasi sekolah.',
    kategori: 'Pribadi',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 28,
    tipe: 'studi_kasus',
    pertanyaan: 'Studi Kasus 3: Kecanduan HP dan Penurunan Semangat Belajar',
    studiKasusDetail: {
      skenario: 'Budi sering tidur larut malam hingga jam 1 pagi karena bermain game online di HP. Akibatnya, saat pelajaran kelas 7 berlangsung, Budi sering mengantuk, kurang konsentrasi, dan tugas-tugasnya terbengkalai.',
      pertanyaanAnalisis: 'Bagaimana pendekatan Bimbingan Belajar dan Pembelajaran Mendalam (Deep Learning) dapat membantu Budi?',
      kunciJawabanContoh: '1. Mengajak Budi menyadari dampak game (Mindful awareness).\n2. Menyusun jadwal harian belajar vs main game yang disepakati bersama (Meaningful).\n3. Mengganti reward game dengan aktivitas positif yang menggembirakan di sekolah.',
      tipsPenangananBK: 'Konseling Individu dengan teknik self-management (pengelolaan diri) dan kontrak perilaku.'
    },
    pembahasan: 'Self-management membantu siswa meregulasi waktu layar (screen time) secara bijak.',
    kategori: 'Belajar',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 29,
    tipe: 'studi_kasus',
    pertanyaan: 'Studi Kasus 4: Sikap Hadapi Perundungan (Cyberbullying) di Grup WA Kelas',
    studiKasusDetail: {
      skenario: 'Di grup WhatsApp kelas 7D, ada siswa yang mengirimkan stiker wajah teman yang disunting mengejek hingga teman tersebut merasa malu dan tidak mau masuk sekolah.',
      pertanyaanAnalisis: 'Sebutkan 3 tindakan berkesadaran dan berkeadaban yang harus diambil oleh anggota grup kelas dan Guru BK!',
      kunciJawabanContoh: '1. Anggota grup tidak ikut menyebarkan dan menegur pembuat stiker dengan santun.\n2. Melaporkan kejadian tersebut kepada Guru BK (Bu Wiwik Ismiati).\n3. Guru BK mengadakan Bimbingan Klasikal tentang Etika Ber media Digital dan Stop Bullying.',
      tipsPenangananBK: 'Penerapan Dimensi Profil Pelajar Pancasila: Berkeadaban (Taadub) dan Gotong Royong menciptakan iklim digital yang sehat.'
    },
    pembahasan: 'Etika bermedia digital merupakan bagian dari bimbingan pribadi dan sosial di era teknologi.',
    kategori: 'Sosial',
    tingkatKesulitan: 'HOTS'
  },
  {
    id: 30,
    tipe: 'studi_kasus',
    pertanyaan: 'Studi Kasus 5: Mengenali Cita-Cita Karir Sejak Dini di Kelas 7',
    studiKasusDetail: {
      skenario: 'Lani memiliki hobi menggambar komik digital dan bercita-cita menjadi Desainer Grafis. Namun, Lani belum tahu jalur ekstrakurikuler dan mata pelajaran pendukung apa yang harus ia tekuni di SMPN 7 Pasuruan.',
      pertanyaanAnalisis: 'Bagaimana Bimbingan Karir dapat memfasilitasi Lani?',
      kunciJawabanContoh: '1. Bu Wiwik Ismiati memberikan pemetaan bakat dan rekomendasi ekskul seni/TIK.\n2. Memberikan motivasi serta informasi portofolio karya sejak kelas 7.\n3. Mengikutsertakan Lani dalam proyek pembuatan media visual BK.',
      tipsPenangananBK: 'Eksplorasi Karir sejak dini meningkatkan motivasi intrinsik dan rasa percaya diri peserta didik.'
    },
    pembahasan: 'Bimbingan Karir di kelas 7 memicu kesadaran minat dan langkah konkret pengembangannya.',
    kategori: 'Karir',
    tingkatKesulitan: 'HOTS'
  }
];
