import React, { useState } from 'react';
import { daftarDiagnostik } from '../data/diagnostikData';
import { 
  ClipboardCheck, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Award, 
  Heart, 
  Smile, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DiagnostikView: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = daftarDiagnostik;

  const handleSelectOption = (qId: number, optIndex: number) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIndex }));
  };

  const calculateResult = () => {
    let visualCount = 0;
    let auditoriCount = 0;
    let kinestetikCount = 0;

    questions.forEach(q => {
      const selectedIndex = userAnswers[q.id];
      if (selectedIndex !== undefined) {
        const option = q.options[selectedIndex];
        if (option.gayaScore === 'visual') visualCount++;
        if (option.gayaScore === 'auditori') auditoriCount++;
        if (option.gayaScore === 'kinestetik') kinestetikCount++;
      }
    });

    let gayaDominan = 'Visual (Gambar & Infografis)';
    if (auditoriCount > visualCount && auditoriCount >= kinestetikCount) {
      gayaDominan = 'Auditori (Mendengarkan & Diskusi Narasi)';
    } else if (kinestetikCount > visualCount && kinestetikCount > auditoriCount) {
      gayaDominan = 'Kinestetik (Praktek Game & Simulasi)';
    }

    return {
      visualCount,
      auditoriCount,
      kinestetikCount,
      gayaDominan
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(userAnswers).length < questions.length) {
      alert('Mohon jawab seluruh pertanyaan kuisioner sebelum melihat hasil!');
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const result = isSubmitted ? calculateResult() : null;

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
          <ClipboardCheck className="w-4 h-4 text-emerald-400" />
          <span>Asesmen Diagnostik Awal BK Kelas 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Kuisioner Mengenal BK & Pemetaan Gaya Belajar
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Pilihlah jawaban yang paling mencerminkan perasaan dan kebiasaan dirimu! Isian ini membantu Ibu Wiwik Ismiati memahami potensi dan kebutuhan layanan BK terbaik untukmu.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Questions List */}
          {questions.map((q, idx) => {
            const selectedOptIndex = userAnswers[q.id];
            return (
              <div 
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {q.text}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = selectedOptIndex === oIdx;
                    return (
                      <button
                        type="button"
                        key={oIdx}
                        onClick={() => handleSelectOption(q.id, oIdx)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2 group ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg scale-[1.02]'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-emerald-400/60 text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-2xl group-hover:scale-125 transition-transform">{opt.emoji}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-white border-white text-emerald-600' : 'border-slate-400'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                        <p className="text-xs font-semibold leading-relaxed">
                          {opt.text}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              id="btn-submit-diagnostik"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-900/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5" />
              <span>Kirim & Lihat Hasil Diagnostik Saya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        /* RESULT CARD */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-8 animate-in fade-in-50 duration-300">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center text-3xl shadow-inner">
              🎉
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Hasil Asesmen Diagnostik Awal Kamu!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              SMP Negeri 7 Pasuruan • Bimbingan dan Konseling
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-6 rounded-2xl border border-emerald-500/30 text-white space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-emerald-400" />
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Gaya Belajar Dominan Kamu</span>
                <h4 className="text-xl font-extrabold text-white">{result?.gayaDominan}</h4>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Visual</span>
                <span className="text-lg font-bold text-emerald-400">{result?.visualCount} / 5</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Auditori</span>
                <span className="text-lg font-bold text-cyan-400">{result?.auditoriCount} / 5</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Kinestetik</span>
                <span className="text-lg font-bold text-indigo-400">{result?.kinestetikCount} / 5</span>
              </div>
            </div>
          </div>

          {/* Teacher Special Feedback */}
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center text-xl font-bold">
                👩‍🏫
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Pesan Khusus dari Ibu Wiwik Ismiati, S.Pd.
                </h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">Guru BK Kelas 7</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed pt-2">
              &ldquo;Hebat! Kamu telah menyelesaikan tes diagnostik awal. Berdasarkan hasil ini, gaya belajar dominanmu adalah <span className="font-bold underline">{result?.gayaDominan}</span>. Cobalah manfaatkan media slide interaktif, kuis ular tangga, dan video cerita BK pada website ini. Jika kamu butuh teman cerita atau bimbingan, pintu Ruang BK SMPN 7 Pasuruan selalu terbuka lebar!&rdquo;
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Isi Ulang Kuisioner</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
