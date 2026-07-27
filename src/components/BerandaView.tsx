import React from 'react';
import { NavTab } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  FileSpreadsheet, 
  Video, 
  UserCheck, 
  HelpCircle, 
  Gamepad2, 
  Heart, 
  GraduationCap,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

interface BerandaViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section id="hero-section" className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 p-8 sm:p-12 shadow-2xl text-white">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Media Pembelajaran Interaktif BK Kelas 7 • SMPN 7 Pasuruan</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-teal-200">
              Selamat Datang di Ruang Bimbingan & Konseling
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Media pembelajaran interaktif berbasis website yang dirancang khusus untuk peserta didik Kelas 7 SMP Negeri 7 Pasuruan. Mari kenali potensi dirimu, kembangkan karakter, dan jadikan BK sebagai sahabat terbaikmu!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setActiveTab('video')}
                id="btn-mulai-video"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Video className="w-5 h-5" />
                <span>Tonton Video Interaktif</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('rpp')}
                id="btn-lihat-rpp"
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-emerald-500/30 hover:border-emerald-400 text-sm font-semibold flex items-center gap-2 transition-all"
              >
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                <span>Lihat RPP Mendalam</span>
              </button>
            </div>
          </div>

          {/* Teacher Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-800/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-6 shadow-2xl relative group hover:border-emerald-400/60 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-1 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-3xl">
                      👩‍🏫
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full border-2 border-slate-900" title="Guru BK Aktif">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">WIWIK ISMIATI, S.Pd.</h3>
                  <p className="text-xs text-emerald-400 font-medium">Guru Bimbingan dan Konseling</p>
                  <p className="text-xs text-slate-400">Kelas 7 SMP Negeri 7 Pasuruan</p>
                </div>
              </div>

              <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-700/60 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <Heart className="w-4 h-4 fill-emerald-500/20 text-emerald-400" />
                  <span>Visi Layanan BK:</span>
                </div>
                <p className="italic text-slate-300">
                  &ldquo;Mewujudkan layanan BK yang mindful, meaningful, dan joyful sebagai sahabat pengembang karakter dan potensi peserta didik.&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>SMPN 7 Pasuruan</span>
                </div>
                <img 
                  src="https://iili.io/KDFk4fI.png" 
                  alt="Logo Sekolah" 
                  className="w-7 h-7 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Features Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-500" />
              <span>Menu Pembelajaran Interaktif</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pilih menu layanan BK sesuai kebutuhan belajar dan refleksi dirimu:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* RPP Card */}
          <div 
            onClick={() => setActiveTab('rpp')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">Perencanaan Layanan</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              RPP Mendalam BK
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tabel RPP Deep Learning terperinci mencakup 8 Dimensi Pancasila, 3 Prinsip, 4 Kerangka Pembelajaran, dan RTL.
            </p>
          </div>

          {/* Diagnostik Card */}
          <div 
            onClick={() => setActiveTab('diagnostik')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Tes Diri Awal</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Asesmen Diagnostik
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Kuisioner awal ekspresi emoji untuk mengetahui gaya belajar (visual/auditori/kinestetik) & rekomendasi BK.
            </p>
          </div>

          {/* Video Interaktif Card */}
          <div 
            onClick={() => setActiveTab('video')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1">Cerita Realistis</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Video Story Mengenal BK
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Kisah animasi interaktif Bayu di SMPN 7 Pasuruan meluruskan mitos BK menjadi BK Sahabat Siswa.
            </p>
          </div>

          {/* Presensi 8 Rombel Card */}
          <div 
            onClick={() => setActiveTab('presensi')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">Mandiri Siswa</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Presensi 8 Rombel
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pengisian kehadiran mandiri siswa kelas 7A - 7H lengkap dengan opsi khusus permohonan konseling.
            </p>
          </div>

          {/* Materi Card */}
          <div 
            onClick={() => setActiveTab('materi')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Slide Animated</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Materi Mengenal BK
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Slide animasi & narasi audio lengkap membahas 4 bidang, 10 fungsi, dan azas-azas utama BK.
            </p>
          </div>

          {/* 30 Contoh Soal Card */}
          <div 
            onClick={() => setActiveTab('soal')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-1">Latihan Bank Soal</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              30 Contoh Soal Variatif
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pilihan Ganda Tunggal, Kompleks, Benar/Salah, Menjodohkan, dan Analisis Studi Kasus HOTS.
            </p>
          </div>

          {/* Kuis Ular Tangga & TTS Card */}
          <div 
            onClick={() => setActiveTab('kuis')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">Gamifikasi HOTS</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Ular Tangga & TTS BK
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Permainan ular tangga digital interaktif & Teka Teki Silang BK HOTS dengan kunci pembahasan.
            </p>
          </div>

          {/* Permainan BK Card */}
          <div 
            onClick={() => setActiveTab('permainan')}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Game Interaktif</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Sahabat BK Quest
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mini game sortir Mitos vs Fakta cepat, Detektif Konseling Kasus, & Roda Keberuntungan Hikmah BK.
            </p>
          </div>
        </div>
      </section>

      {/* Rombel Overview Info */}
      <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-2xl border border-emerald-500/30 p-6 sm:p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Cakupan Layanan 8 Rombel Kelas 7</span>
            </div>
            <h3 className="text-xl font-bold">SMP NEGERI 7 PASURUAN</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Seluruh peserta didik dari kelas 7A, 7B, 7C, 7D, 7E, 7F, 7G, dan 7H aktif terintegrasi dalam presensi online dan layanan bimbingan konseling.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H'].map((rombel) => (
              <span 
                key={rombel} 
                onClick={() => setActiveTab('presensi')}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-200 text-xs font-bold cursor-pointer transition-colors shadow"
              >
                Kelas {rombel}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
