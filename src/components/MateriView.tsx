import React, { useState } from 'react';
import { materiBkLengkap } from '../data/materiData';
import { 
  BookOpen, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Award,
  Heart,
  Shield,
  Compass,
  Lock,
  UserCheck
} from 'lucide-react';

export const MateriView: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const slides = materiBkLengkap;
  const slide = slides[currentSlideIndex];

  const handleNextSlide = () => {
    stopSpeech();
    setSelectedQuizOption(null);
    setShowQuizResult(false);
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    stopSpeech();
    setSelectedQuizOption(null);
    setShowQuizResult(false);
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const speakNarration = () => {
    if (!('speechSynthesis' in window)) {
      alert('Fitur suara tidak didukung browser ini, silakan baca teks slide secara mandiri.');
      return;
    }

    if (isSpeaking) {
      stopSpeech();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(slide.audioScript);
    utterance.lang = 'id-ID';
    utterance.rate = 0.9;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Materi Interaktif BK Kelas 7</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Mengenal Bimbingan dan Konseling di SMPN 7 Pasuruan
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Slide presentasi animasi interaktif • Narator: Ibu Wiwik Ismiati, S.Pd.
          </p>
        </div>

        <button
          onClick={speakNarration}
          id="btn-suara-narasi"
          className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow ${
            isSpeaking 
              ? 'bg-rose-600 text-white animate-pulse' 
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span>{isSpeaking ? 'Hentikan Suara' : 'Dengar Narasi Voice-Over'}</span>
        </button>
      </div>

      {/* ANIMATED SLIDE CONTAINER */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 shadow-2xl overflow-hidden text-white relative">
        
        {/* Slide Top Navigation Progress Bar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-3 flex items-center justify-between text-xs text-slate-300">
          <span className="font-bold text-emerald-400 uppercase tracking-wider">Slide {currentSlideIndex + 1} dari {slides.length}</span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <span
                key={idx}
                onClick={() => {
                  stopSpeech();
                  setCurrentSlideIndex(idx);
                }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  currentSlideIndex === idx ? 'bg-emerald-400 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Body */}
        <div className={`p-8 sm:p-12 bg-gradient-to-br ${slide.themeColor} min-h-[420px] flex flex-col justify-between transition-all duration-500`}>
          
          <div className="space-y-6">
            {/* Header Title */}
            <div>
              <span className="text-xs font-mono uppercase text-emerald-200 tracking-widest block mb-1">
                SMP NEGERI 7 PASURUAN • LAYANAN BK
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {slide.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-medium italic mt-1">
                &ldquo;{slide.subtitle}&rdquo;
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-slate-700/80 text-xs sm:text-sm text-slate-200 leading-relaxed shadow-lg">
              {slide.summary}
            </div>

            {/* Infographic Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {slide.points.map((pt, pIdx) => (
                <div 
                  key={pIdx}
                  className="bg-slate-900/90 border border-slate-700/70 p-4 rounded-xl space-y-1.5 hover:border-emerald-400 transition-colors shadow"
                >
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>{pt.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Slide Quiz */}
          {slide.interactiveQuiz && (
            <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <HelpCircle className="w-4 h-4" />
                <span>Kuis Refleksi Cepat Slide Ini:</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold">{slide.interactiveQuiz.question}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slide.interactiveQuiz.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => {
                      setSelectedQuizOption(oIdx);
                      setShowQuizResult(true);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      selectedQuizOption === oIdx
                        ? 'bg-emerald-600 text-white border-white'
                        : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {showQuizResult && (
                <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                  selectedQuizOption === slide.interactiveQuiz.correctIndex
                    ? 'bg-emerald-950/80 border-emerald-400 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-400 text-rose-200'
                }`}>
                  <span className="font-bold block mb-0.5">
                    {selectedQuizOption === slide.interactiveQuiz.correctIndex ? '✓ Jawaban Tepat!' : '✕ Belum Tepat'}
                  </span>
                  {slide.interactiveQuiz.explanation}
                </div>
              )}
            </div>
          )}

          {/* Slide Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlideIndex === 0}
              className="px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 disabled:opacity-40 border border-slate-700 text-xs font-bold flex items-center gap-1 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <span className="text-xs font-mono font-bold text-slate-300">
              {currentSlideIndex + 1} / {slides.length}
            </span>

            <button
              onClick={handleNextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1 transition-all shadow"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
