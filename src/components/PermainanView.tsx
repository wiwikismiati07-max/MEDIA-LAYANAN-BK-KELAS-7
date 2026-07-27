import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Smile, 
  Flame,
  Search,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PermainanView: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'sort' | 'detective' | 'wheel'>('sort');

  // --- GAME 1: SPEED SORT STATE ---
  const [sortIndex, setSortIndex] = useState(0);
  const [sortScore, setSortScore] = useState(0);
  const [sortFeedback, setSortFeedback] = useState<string>('');

  const sortStatements = [
    { text: "Guru BK adalah tempat menghukum anak nakal yang poinnya banyak.", isFakta: false, exp: "MITOS! BK adalah tempat tumbuh dan berkembang secara sehat." },
    { text: "Masuk Ruang BK terjamin kerahasiaannya oleh Azas Kerahasiaan.", isFakta: true, exp: "FAKTA! Rahasia pribadi siswa dilindungi secara ketat oleh Guru BK." },
    { text: "Siswa yang ingin konseling bebas berkonsultasi mengenai cita-cita dan cara belajar.", isFakta: true, exp: "FAKTA! Layanan BK mencakup Bimbingan Belajar dan Karir." },
    { text: "Berbicara dengan Guru BK berarti punya masalah kejiwaan yang parah.", isFakta: false, exp: "MITOS! Setiap orang butuh teman diskusi yang objektif dan suportif." },
    { text: "Bu Wiwik Ismiati ramah dan siap membantu siswa kelas 7A - 7H SMPN 7 Pasuruan.", isFakta: true, exp: "FAKTA! Bu Wiwik adalah sahabat peserta didik kelas 7." }
  ];

  const handleSortAnswer = (userSaysFakta: boolean) => {
    const current = sortStatements[sortIndex];
    if (userSaysFakta === current.isFakta) {
      setSortScore(s => s + 20);
      setSortFeedback(`✓ BENAR! ${current.exp}`);
      confetti({ particleCount: 30, spread: 40 });
    } else {
      setSortFeedback(`✕ KURANG TEPAT! ${current.exp}`);
    }

    setTimeout(() => {
      if (sortIndex < sortStatements.length - 1) {
        setSortIndex(i => i + 1);
        setSortFeedback('');
      } else {
        setSortFeedback(`🎉 SELESAI! Skor Akhir Kamu: ${sortScore + (userSaysFakta === current.isFakta ? 20 : 0)} Poin!`);
      }
    }, 2500);
  };

  const handleResetSort = () => {
    setSortIndex(0);
    setSortScore(0);
    setSortFeedback('');
  };

  // --- GAME 2: DETEKTIF KONSELING STATE ---
  const [caseStep, setCaseStep] = useState(1);
  const [detectiveScore, setDetectiveScore] = useState(0);

  const detectiveScenarios = [
    {
      id: 1,
      title: "Kasus 1: Stiker Ejekan di WA Kelas 7",
      scen: "Kamu melihat temanmu (Dina) diejek dalam grup WA kelas hingga dia menangis dan enggan masuk sekolah.",
      options: [
        { text: "Ikut menertawakan stiker di grup WA", points: 0, feedback: "Tindakan kurang bijak! Melanggar Etika Bermedia Digital." },
        { text: "Menegur pembuat stiker dengan santun dan melaporkan ke Bu Wiwik Ismiati", points: 50, feedback: "Hebat! Kamu menunjukkan Dimensi Berkeadaban & Gotong Royong!" }
      ]
    },
    {
      id: 2,
      title: "Kasus 2: Cemas Saat Menghadapi Ujian BK",
      scen: "Teman sebelahmu (Rian) gemetar dan tidak konsentrasi saat mau maju ujian presentasi.",
      options: [
        { text: "Mengajaknya melakukan Mindful Breathing (hening napas) & memberinya semangat", points: 50, feedback: "Luar biasa! Kamu menerapkan Prinsip Mindful Deep Learning!" },
        { text: "Membiarkannya sendirian tanpa peduli", points: 0, feedback: "Kurang peka empati." }
      ]
    }
  ];

  const currentCase = detectiveScenarios[caseStep - 1];

  const handleDetectiveOption = (pts: number, fb: string) => {
    setDetectiveScore(s => s + pts);
    alert(fb);

    if (caseStep < detectiveScenarios.length) {
      setCaseStep(c => c + 1);
    } else {
      confetti({ particleCount: 100, spread: 80 });
    }
  };

  // --- GAME 3: SPINNING WHEEL STATE ---
  const [wheelAngle, setWheelAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelQuote, setWheelQuote] = useState<string>('Putar roda untuk mendapatkan motivasi harian BK!');

  const quotes = [
    "🌟 'BK adalah Sahabat Siswa: Pintu Ruang BK Selalu Terbuka!'",
    "💪 'Jadilah Pembelajar Berkesadaran (Mindful), Bermakna, dan Menggembirakan!'",
    "❤️ 'Karakter Mulia dan Empati Adalah Kunci Utama Pertemanan Sehat.'",
    "🚀 'Kenali Potensimu, Raih Cita-Citamu Bersama Bu Wiwik Ismiati!'",
    "🤝 'Stop Bullying! Ciptakan Kelas 7 SMPN 7 Pasuruan yang Inklusif dan Ramah.'"
  ];

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomDeg = Math.floor(Math.random() * 360) + 1440; // at least 4 spins
    setWheelAngle(prev => prev + randomDeg);

    setTimeout(() => {
      setIsSpinning(false);
      const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setWheelQuote(chosenQuote);
      confetti({ particleCount: 50, spread: 60 });
    }, 3000);
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Sahabat BK Quest • Mini Games Interaktif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Permainan Interaktif Bimbingan dan Konseling
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            SMP Negeri 7 Pasuruan • Pilih permainan yang seru untuk melatih pemahamanmu!
          </p>
        </div>

        {/* Game Switcher Tabs */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveGame('sort')}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              activeGame === 'sort' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            ⚡ Sortir Mitos vs Fakta
          </button>
          <button
            onClick={() => setActiveGame('detective')}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              activeGame === 'detective' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            🕵️ Detektif Konseling
          </button>
          <button
            onClick={() => setActiveGame('wheel')}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              activeGame === 'wheel' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            🎡 Roda Hikmah BK
          </button>
        </div>
      </div>

      {/* --- GAME 1: MITOS VS FAKTA SPEED SORT --- */}
      {activeGame === 'sort' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">Pernyataan {sortIndex + 1} / {sortStatements.length}</span>
            <span className="font-extrabold text-amber-500">Skor: {sortScore} Poin</span>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 p-8 rounded-3xl text-white space-y-4 shadow-inner">
            <span className="text-4xl block">🤔</span>
            <p className="text-base sm:text-lg font-bold leading-relaxed">
              &ldquo;{sortStatements[sortIndex]?.text}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSortAnswer(false)}
              className="p-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <XCircle className="w-5 h-5" />
              <span>Ini MITOS!</span>
            </button>

            <button
              onClick={() => handleSortAnswer(true)}
              className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Ini FAKTA!</span>
            </button>
          </div>

          {sortFeedback && (
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 animate-in fade-in-50">
              {sortFeedback}
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleResetSort}
              className="text-xs text-slate-500 hover:underline flex items-center gap-1 mx-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Main Ulang Sortir</span>
            </button>
          </div>
        </div>
      )}

      {/* --- GAME 2: DETEKTIF KONSELING --- */}
      {activeGame === 'detective' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-cyan-600 dark:text-cyan-400">Detektif Kasus #{currentCase?.id}</span>
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">Skor Detektif: {detectiveScore} Poin</span>
          </div>

          <div className="bg-slate-900 text-white border border-slate-800 p-6 rounded-2xl space-y-3">
            <h3 className="text-base font-bold text-emerald-400">{currentCase?.title}</h3>
            <p className="text-xs text-slate-200 leading-relaxed italic">&ldquo;{currentCase?.scen}&rdquo;</p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 block uppercase">Pilih Keputusan Detektif BK:</span>
            {currentCase?.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleDetectiveOption(opt.points, opt.feedback)}
                className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-600 hover:text-white border border-slate-200 dark:border-slate-700 text-left text-xs font-semibold transition-all shadow"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- GAME 3: RODA KEBERUNTUNGAN HIKMAH BK --- */}
      {activeGame === 'wheel' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-8 text-center max-w-xl mx-auto">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Roda Hikmah Motivasi BK</h3>
            <p className="text-xs text-slate-500">Putar roda untuk mendapatkan quote harian positif dari Bu Wiwik Ismiati!</p>
          </div>

          {/* Wheel Visual */}
          <div className="relative w-56 h-56 mx-auto">
            <div 
              style={{ transform: `rotate(${wheelAngle}deg)` }}
              className="w-full h-full rounded-full border-8 border-emerald-500 bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 shadow-2xl flex items-center justify-center transition-all duration-3000 ease-out"
            >
              <div className="w-16 h-16 rounded-full bg-slate-950 border-4 border-white flex items-center justify-center text-white font-extrabold text-xs">
                BK
              </div>
            </div>
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 text-2xl z-20 pointer-events-none">
              ▼
            </div>
          </div>

          <button
            onClick={spinWheel}
            disabled={isSpinning}
            id="btn-putar-roda"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white font-extrabold text-xs shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSpinning ? 'Roda Berputar...' : 'Putar Roda Sekarang!'}</span>
          </button>

          {/* Result Quote Card */}
          <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 p-5 rounded-2xl text-white text-xs sm:text-sm font-semibold italic shadow-inner">
            {wheelQuote}
          </div>
        </div>
      )}
    </div>
  );
};
