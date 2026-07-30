import React, { useState } from 'react';
import { materiBkLengkap } from '../data/materiData';
import pptxgen from 'pptxgenjs';
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
  UserCheck,
  FileDown,
  Presentation
} from 'lucide-react';

export const MateriView: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const slides = materiBkLengkap;
  const slide = slides[currentSlideIndex];

  const handleDownloadWord = () => {
    setNotification('Mempersiapkan dokumen Word (.doc) Materi BK...');

    setTimeout(() => {
      const slidesHtml = slides.map((s, idx) => `
        <div style="margin-bottom: 20pt; padding: 14pt; border: 1px solid #cbd5e1; background-color: #f8fafc; border-radius: 6pt;">
          <h3 style="color: #047857; margin-top: 0; font-size: 14pt; font-weight: bold;">Slide ${idx + 1}: ${s.title}</h3>
          <p style="font-style: italic; color: #475569; margin-top: -4pt; font-size: 11pt;">"${s.subtitle}"</p>
          
          <div style="background-color: #ffffff; padding: 10pt; border-left: 4px solid #059669; margin: 10pt 0;">
            <strong style="color: #0f172a;">Ringkasan Materi:</strong><br/>
            ${s.summary}
          </div>

          <h4 style="color: #0f172a; margin-bottom: 6pt; font-size: 11pt;">Poin-Poin Utama:</h4>
          <ul style="margin-top: 0; padding-left: 18pt;">
            ${s.points.map(pt => `
              <li style="margin-bottom: 6pt;">
                <strong>${pt.title}:</strong> ${pt.desc}
              </li>
            `).join('')}
          </ul>

          ${s.interactiveQuiz ? `
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 10pt; margin-top: 12pt; border-radius: 4pt;">
              <strong style="color: #92400e;">Kuis Refleksi:</strong> ${s.interactiveQuiz.question}<br/>
              <span style="color: #047857; font-weight: bold;">Kunci Jawaban Tepat:</span> ${s.interactiveQuiz.options[s.interactiveQuiz.correctIndex]}<br/>
              <span style="color: #475569; font-size: 9.5pt; font-style: italic;">${s.interactiveQuiz.explanation}</span>
            </div>
          ` : ''}
        </div>
      `).join('');

      const wordDoc = `
        <html xmlns:o='urn:schemas-microsoft-microsoft-com:office:office'
              xmlns:w='urn:schemas-microsoft-microsoft-com:office:word'
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset="utf-8">
          <title>Materi_BK_Kelas7_SMPN7_Pasuruan</title>
          <style>
            @page { size: A4 portrait; margin: 2cm; }
            body { font-family: Arial, sans-serif; font-size: 11pt; color: #0f172a; line-height: 1.5; }
            h1 { color: #065f46; text-align: center; font-size: 18pt; margin-bottom: 2pt; text-transform: uppercase; }
            h2 { color: #047857; text-align: center; font-size: 12pt; margin-top: 0; font-weight: normal; }
            .header-box { text-align: center; border-bottom: 3px double #0f172a; padding-bottom: 12pt; margin-bottom: 18pt; }
          </style>
        </head>
        <body>
          <div class="header-box">
            <h2 style="margin: 0; font-size: 11pt; font-weight: bold; color: #0f172a;">PEMERINTAH KOTA PASURUAN - UPT SMP NEGERI 7</h2>
            <h1>MATERI BIMBINGAN DAN KONSELING (BK) KELAS VII</h1>
            <h2>Mengenal Bimbingan dan Konseling di SMPN 7 Pasuruan</h2>
            <p style="font-size: 10pt; color: #64748b; margin-top: 4pt;">
              Guru Bimbingan dan Konseling: Ibu Wiwik Ismiati, S.Pd. • Tahun Ajaran 2025/2026
            </p>
          </div>

          ${slidesHtml}
        </body>
        </html>
      `;

      const blob = new Blob(['\ufeff' + wordDoc], { type: 'application/msword;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Materi_BK_Kelas7_SMPN7_Pasuruan.doc';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setNotification(null);
    }, 250);
  };

  const handleDownloadPPT = async () => {
    setNotification('Mempersiapkan slide PowerPoint (.pptx) sesuai desain interaktif...');

    try {
      const pptx = new pptxgen();
      pptx.layout = 'LAYOUT_16x9';

      // Theme colors for each slide to match web app gradient themes
      const slideThemes = [
        { bg: '004D40', cardBg: '00332C', border: '10B981', accent: 'FACC15', textLight: 'A7F3D0' }, // Slide 1 Emerald
        { bg: '1E1B4B', cardBg: '121033', border: '6366F1', accent: 'FDE047', textLight: 'C7D2FE' }, // Slide 2 Indigo
        { bg: '0F172A', cardBg: '080E1A', border: '38BDF8', accent: 'FACC15', textLight: 'BAE6FD' }, // Slide 3 Slate
        { bg: '064E3B', cardBg: '033326', border: '34D399', accent: 'FDE047', textLight: 'A7F3D0' }, // Slide 4 Forest
        { bg: '2E1065', cardBg: '1C0942', border: 'A855F7', accent: 'FACC15', textLight: 'E9D5FF' }  // Slide 5 Purple
      ];

      // 1. Cover Slide (Title Banner)
      const cover = pptx.addSlide();
      cover.background = { color: '004D40' };

      // Cover Header Badge
      cover.addShape(pptx.ShapeType.rect, {
        x: 0.6,
        y: 0.6,
        w: 4.0,
        h: 0.4,
        fill: { color: '00332C' },
        line: { color: '10B981', width: 1 }
      });
      cover.addText('PEMERINTAH KOTA PASURUAN • UPT SMPN 7', {
        x: 0.7,
        y: 0.65,
        w: 3.8,
        h: 0.3,
        fontSize: 10,
        bold: true,
        color: '34D399',
        fontFace: 'Arial'
      });

      // Cover Main Title & Subtitle
      cover.addText('Mengenal Bimbingan & Konseling (BK)', {
        x: 0.6,
        y: 1.3,
        w: 8.8,
        h: 1.0,
        fontSize: 26,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial'
      });

      cover.addText('"BK di SMP Negeri 7 Pasuruan adalah Sahabat Siswa Berprestasi!"', {
        x: 0.6,
        y: 2.2,
        w: 8.8,
        h: 0.5,
        fontSize: 14,
        italic: true,
        color: 'FDE047',
        fontFace: 'Arial'
      });

      cover.addShape(pptx.ShapeType.line, {
        x: 0.6,
        y: 2.9,
        w: 8.8,
        h: 0,
        line: { color: '10B981', width: 2 }
      });

      // Cover Metadata Box
      cover.addShape(pptx.ShapeType.rect, {
        x: 0.6,
        y: 3.2,
        w: 8.8,
        h: 1.8,
        fill: { color: '00332C' },
        line: { color: '10B981', width: 1 }
      });

      cover.addText([
        { text: 'MODUL MATERI BK KELAS VII INTERAKTIF\n\n', options: { bold: true, fontSize: 13, color: '34D399' } },
        { text: 'Pengampu BK: ', options: { bold: true, fontSize: 11, color: 'E2E8F0' } },
        { text: 'Ibu Wiwik Ismiati, S.Pd. (Guru BK SMPN 7 Pasuruan)\n', options: { fontSize: 11, color: 'FFFFFF' } },
        { text: 'Sasaran Siswa: ', options: { bold: true, fontSize: 11, color: 'E2E8F0' } },
        { text: 'Siswa-Siswi Kelas 7A, 7B, 7C, 7D, 7E, 7F, 7G, 7H\n', options: { fontSize: 11, color: 'FFFFFF' } },
        { text: 'Tahun Ajaran: ', options: { bold: true, fontSize: 11, color: 'E2E8F0' } },
        { text: '2025 / 2026', options: { fontSize: 11, color: 'FDE047' } }
      ], {
        x: 0.8,
        y: 3.3,
        w: 8.4,
        h: 1.6,
        fontFace: 'Arial'
      });

      // 2. Content Slides (Matched to Interactive Web App UI)
      slides.forEach((s, idx) => {
        const theme = slideThemes[idx % slideThemes.length];
        const slideItem = pptx.addSlide();
        slideItem.background = { color: theme.bg };

        // Header Tag
        slideItem.addText('SMP NEGERI 7 PASURUAN • LAYANAN BK', {
          x: 0.5,
          y: 0.3,
          w: 5.0,
          h: 0.3,
          fontSize: 9,
          bold: true,
          color: theme.textLight,
          fontFace: 'Arial'
        });

        slideItem.addText(`SLIDE ${idx + 1} DARI ${slides.length}`, {
          x: 6.5,
          y: 0.3,
          w: 3.0,
          h: 0.3,
          fontSize: 9,
          bold: true,
          color: theme.accent,
          align: 'right',
          fontFace: 'Arial'
        });

        // Slide Title
        slideItem.addText(s.title, {
          x: 0.5,
          y: 0.6,
          w: 9.0,
          h: 0.5,
          fontSize: 20,
          bold: true,
          color: 'FFFFFF',
          fontFace: 'Arial'
        });

        // Slide Subtitle
        slideItem.addText(`"${s.subtitle}"`, {
          x: 0.5,
          y: 1.1,
          w: 9.0,
          h: 0.3,
          fontSize: 10.5,
          italic: true,
          color: theme.accent,
          fontFace: 'Arial'
        });

        // Summary Container Card (Top Section)
        slideItem.addShape(pptx.ShapeType.rect, {
          x: 0.5,
          y: 1.45,
          w: 9.0,
          h: 0.8,
          fill: { color: theme.cardBg },
          line: { color: theme.border, width: 1.5 }
        });

        slideItem.addText(s.summary, {
          x: 0.65,
          y: 1.5,
          w: 8.7,
          h: 0.7,
          fontSize: 9.5,
          color: 'F8FAFC',
          fontFace: 'Arial'
        });

        // 3 Point Cards Grid (Side-by-side Columns matching Web App Layout)
        s.points.forEach((pt, pIdx) => {
          const cardX = 0.5 + pIdx * 3.05; // 3 columns: 0.5, 3.55, 6.6
          
          // Card Box
          slideItem.addShape(pptx.ShapeType.rect, {
            x: cardX,
            y: 2.35,
            w: 2.9,
            h: 1.6,
            fill: { color: theme.cardBg },
            line: { color: theme.border, width: 1.2 }
          });

          // Card Header / Title
          slideItem.addText(pt.title, {
            x: cardX + 0.1,
            y: 2.45,
            w: 2.7,
            h: 0.35,
            fontSize: 10.5,
            bold: true,
            color: theme.accent,
            fontFace: 'Arial'
          });

          // Card Divider
          slideItem.addShape(pptx.ShapeType.line, {
            x: cardX + 0.1,
            y: 2.8,
            w: 2.7,
            h: 0,
            line: { color: theme.border, width: 0.8 }
          });

          // Card Description Body
          slideItem.addText(pt.desc, {
            x: cardX + 0.1,
            y: 2.9,
            w: 2.7,
            h: 0.95,
            fontSize: 8.5,
            color: 'E2E8F0',
            fontFace: 'Arial'
          });
        });

        // Interactive Quiz Section at Bottom (Matching Web App Quiz Box)
        if (s.interactiveQuiz) {
          slideItem.addShape(pptx.ShapeType.rect, {
            x: 0.5,
            y: 4.05,
            w: 9.0,
            h: 1.2,
            fill: { color: theme.cardBg },
            line: { color: 'F59E0B', width: 1.5 }
          });

          slideItem.addText([
            { text: '❓ Kuis Refleksi Cepat Slide Ini:\n', options: { bold: true, fontSize: 10, color: 'FACC15' } },
            { text: `${s.interactiveQuiz.question}\n`, options: { bold: true, fontSize: 9.5, color: 'FFFFFF' } },
            { text: 'Kunci Jawaban Tepat: ', options: { bold: true, fontSize: 8.5, color: '34D399' } },
            { text: `${s.interactiveQuiz.options[s.interactiveQuiz.correctIndex]}   |   `, options: { fontSize: 8.5, color: '34D399' } },
            { text: `Penjelasan: ${s.interactiveQuiz.explanation}`, options: { italic: true, fontSize: 8, color: '94A3B8' } }
          ], {
            x: 0.65,
            y: 4.1,
            w: 8.7,
            h: 1.1,
            fontFace: 'Arial'
          });
        }
      });

      // Save file as native .pptx
      await pptx.writeFile({ fileName: 'Materi_BK_Kelas7_SMPN7_Pasuruan.pptx' });
      setNotification(null);
    } catch (err) {
      console.error(err);
      setNotification('Terjadi kesalahan saat mengunduh PPT. Silakan coba lagi.');
      setTimeout(() => setNotification(null), 3000);
    }
  };

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
      {/* Download Notification Banner */}
      {notification && (
        <div className="p-3 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-400 text-emerald-900 dark:text-emerald-200 text-xs font-semibold rounded-xl flex items-center gap-2 animate-pulse">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
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

        <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
          <button
            onClick={handleDownloadWord}
            id="btn-download-word-materi"
            className="px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
            title="Download Materi BK dalam format Word (.doc)"
          >
            <FileDown className="w-4 h-4" />
            <span>Word (.doc)</span>
          </button>

          <button
            onClick={handleDownloadPPT}
            id="btn-download-ppt-materi"
            className="px-3.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
            title="Download Materi BK dalam format PowerPoint (.pptx)"
          >
            <Presentation className="w-4 h-4" />
            <span>PPT (.pptx)</span>
          </button>

          <button
            onClick={speakNarration}
            id="btn-suara-narasi"
            className={`px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow cursor-pointer ${
              isSpeaking 
                ? 'bg-rose-600 text-white animate-pulse' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            <span>{isSpeaking ? 'Hentikan' : 'Voice-Over'}</span>
          </button>
        </div>
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
