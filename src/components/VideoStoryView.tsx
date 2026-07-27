import React, { useState } from 'react';
import { storyScript } from '../data/storyData';
import { 
  Video, 
  Play, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Award, 
  ArrowRight,
  HelpCircle,
  BookmarkCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const VideoStoryView: React.FC = () => {
  const [currentSceneId, setCurrentSceneId] = useState<number>(1);
  const [points, setPoints] = useState<number>(0);
  const [selectedChoices, setSelectedChoices] = useState<{ [sceneId: number]: string }>({});
  const [reflectionAnswer, setReflectionAnswer] = useState<string>('');
  const [isReflectionChecked, setIsReflectionChecked] = useState<boolean>(false);

  const scene = storyScript.find(s => s.id === currentSceneId) || storyScript[0];
  const totalScenes = storyScript.length;

  const handleChoice = (nextId: number, feedback: string, choicePoints: number, choiceText: string) => {
    setSelectedChoices(prev => ({ ...prev, [currentSceneId]: choiceText }));
    setPoints(prev => prev + choicePoints);
    setCurrentSceneId(nextId);

    if (nextId === 7) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentSceneId(1);
    setPoints(0);
    setSelectedChoices({});
    setReflectionAnswer('');
    setIsReflectionChecked(false);
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Title & Stats Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-2">
            <Video className="w-4 h-4" />
            <span>Video & Storyboard Interaktif BK</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Kisah Realistis: Mengenal BK di SMPN 7 Pasuruan
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ikuti perjalanan Bayu dan pilih keputusan terbaik untuk memahami peran nyata Guru BK.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-center border border-slate-300 dark:border-slate-700">
            <span className="text-[10px] text-slate-500 block uppercase font-bold">Skor Pemahaman</span>
            <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">{points} Poin</span>
          </div>
          <button
            onClick={handleRestart}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-colors"
            title="Mulai Ulang Cerita"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* VIDEO PLAYER SIMULATOR FRAME */}
      <div className="bg-slate-950 rounded-3xl border-2 border-slate-800 shadow-2xl overflow-hidden relative">
        
        {/* Top Video Overlay Bar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-3 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span className="font-bold text-white uppercase tracking-wider">{scene.title}</span>
          </div>
          <span className="font-mono text-emerald-400 font-semibold">Adegan {scene.id} / {totalScenes}</span>
        </div>

        {/* Video Canvas Backdrop */}
        <div className={`p-8 sm:p-12 bg-gradient-to-br ${scene.bgGradient} transition-all duration-500 min-h-[380px] flex flex-col justify-between relative`}>
          
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-4 right-4 text-8xl opacity-10 pointer-events-none select-none">
            {scene.characterAvatar}
          </div>

          {/* Character & Narration Box */}
          <div className="space-y-6 relative z-10">
            
            {/* Character Dialogue Box */}
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-3">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="text-3xl p-2 rounded-xl bg-slate-800/80 border border-slate-700">{scene.characterAvatar}</span>
                <div>
                  <h3 className="text-base font-bold text-emerald-300">{scene.characterName}</h3>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">SMP Negeri 7 Pasuruan</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-100 italic leading-relaxed font-serif">
                &ldquo;{scene.dialogue}&rdquo;
              </p>
            </div>

            {/* Story Narration Text */}
            <div className="bg-slate-950/70 backdrop-blur-sm p-4 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{scene.narration}</p>
            </div>
          </div>

          {/* Reflection Checkpoint if present */}
          {scene.reflectionQuestion && (
            <div className="mt-6 bg-slate-900/90 border border-amber-500/40 rounded-2xl p-5 space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <HelpCircle className="w-4 h-4" />
                <span>Pertanyaan Refleksi Tengah Cerita</span>
              </div>
              <p className="text-xs text-slate-200 font-semibold">{scene.reflectionQuestion}</p>
              
              <textarea
                value={reflectionAnswer}
                onChange={(e) => setReflectionAnswer(e.target.value)}
                placeholder="Tuliskan refleksi singkatmu di sini..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={2}
              ></textarea>

              <button
                onClick={() => setIsReflectionChecked(true)}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-2 transition-all"
              >
                <BookmarkCheck className="w-4 h-4" />
                <span>Cek Kunci Refleksi Bu Wiwik</span>
              </button>

              {isReflectionChecked && (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800 text-xs text-amber-200 space-y-1">
                  <span className="font-bold block">Kunci Penjelasan Bu Wiwik Ismiati:</span>
                  <p className="whitespace-pre-line text-[11px] leading-relaxed">{scene.reflectionAnswerKey}</p>
                </div>
              )}
            </div>
          )}

          {/* Interactive Choices Area */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3 relative z-10">
            {scene.choices && scene.choices.length > 0 ? (
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-3">
                  Pilih Tindakan Bayu Selanjutnya:
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {scene.choices.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice.nextSceneId, choice.feedback, choice.points, choice.text)}
                      className="p-4 rounded-xl bg-slate-900/90 hover:bg-emerald-950 border border-slate-700 hover:border-emerald-400 text-left text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center justify-between transition-all group shadow"
                    >
                      <span>{choice.text}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Ending Conclusion View */
              <div className="text-center space-y-4 py-4">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Selamat! Kamu Berhasil Memahami Peran BK!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Kini kamu tahu bahwa Guru BK (Bu Wiwik Ismiati) di SMP Negeri 7 Pasuruan adalah sahabat setia yang siap membantumu berkembang.
                </p>
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 mx-auto shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Alur Cerita</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
