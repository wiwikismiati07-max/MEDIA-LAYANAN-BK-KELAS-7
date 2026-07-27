import React, { useState } from 'react';
import { daftarSoalBk } from '../data/soalData';
import { SoalItem, SoalType } from '../types';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Filter, 
  Search, 
  BookOpen, 
  Sparkles,
  Award,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContohSoalView: React.FC = () => {
  const [soalTypeFilter, setSoalTypeFilter] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Track user submissions per question ID
  const [userSingleAnswers, setUserSingleAnswers] = useState<{ [qId: number]: number }>({});
  const [userComplexAnswers, setUserComplexAnswers] = useState<{ [qId: number]: number[] }>({});
  const [userTrueFalseAnswers, setUserTrueFalseAnswers] = useState<{ [qId: number]: boolean }>({});
  const [userMatchingAnswers, setUserMatchingAnswers] = useState<{ [qId: number]: { [item: string]: string } }>({});
  const [userCaseAnswers, setUserCaseAnswers] = useState<{ [qId: number]: string }>({});
  
  const [checkedQuestions, setCheckedQuestions] = useState<{ [qId: number]: boolean }>({});
  const [expandedSolutions, setExpandedSolutions] = useState<{ [qId: number]: boolean }>({});

  const soalList = daftarSoalBk;

  // Filtered List
  const filteredSoal = soalList.filter(s => {
    const matchType = soalTypeFilter === 'semua' || s.tipe === soalTypeFilter;
    const matchQuery = s.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase()) || s.pembahasan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchQuery;
  });

  const handleCheckQuestion = (qId: number) => {
    setCheckedQuestions(prev => ({ ...prev, [qId]: true }));
    setExpandedSolutions(prev => ({ ...prev, [qId]: true }));

    // Confetti effect if single choice is correct
    const item = soalList.find(s => s.id === qId);
    if (item && item.tipe === 'pilihan_ganda' && userSingleAnswers[qId] === item.jawabanTunggalIndex) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    }
  };

  const handleResetAll = () => {
    setUserSingleAnswers({});
    setUserComplexAnswers({});
    setUserTrueFalseAnswers({});
    setUserMatchingAnswers({});
    setUserCaseAnswers({});
    setCheckedQuestions({});
    setExpandedSolutions({});
  };

  const toggleSolution = (qId: number) => {
    setExpandedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Bank 30 Contoh Soal Variatif BK Kelas 7</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Latihan Soal Bimbingan dan Konseling
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            SMP Negeri 7 Pasuruan • Pilihan Ganda Tunggal, Kompleks, Benar/Salah, Menjodohkan, & Studi Kasus.
          </p>
        </div>

        <button
          onClick={handleResetAll}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2 shadow self-start sm:self-auto"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Semua Jawaban</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-4 h-4 text-emerald-500" />
            <span>Tipe Soal:</span>
          </span>

          {[
            { id: 'semua', label: 'Semua (30 Soal)' },
            { id: 'pilihan_ganda', label: 'Pilihan Ganda Tunggal' },
            { id: 'pilihan_ganda_kompleks', label: 'Pilihan Ganda Kompleks' },
            { id: 'benar_salah', label: 'Benar / Salah' },
            { id: 'menjodohkan', label: 'Menjodohkan' },
            { id: 'studi_kasus', label: 'Studi Kasus' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setSoalTypeFilter(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                soalTypeFilter === t.id
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-60">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari kata dalam soal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* SOAL LIST */}
      <div className="space-y-6">
        {filteredSoal.map((soal, index) => {
          const isChecked = checkedQuestions[soal.id];
          const isShowSolution = expandedSolutions[soal.id];

          return (
            <div 
              key={soal.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4 hover:border-emerald-500/30 transition-colors"
            >
              {/* Soal Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                    {soal.id}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-950/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {soal.tipe.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    • Kategori: {soal.kategori}
                  </span>
                </div>

                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                  soal.tingkatKesulitan === 'HOTS' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-500/30' :
                  'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {soal.tingkatKesulitan}
                </span>
              </div>

              {/* Soal Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                {soal.pertanyaan}
              </h3>

              {/* TIPE 1: PILIHAN GANDA TUNGGAL */}
              {soal.tipe === 'pilihan_ganda' && soal.pilihan && (
                <div className="space-y-2 pt-1">
                  {soal.pilihan.map((pilihanText, pIdx) => {
                    const isSelected = userSingleAnswers[soal.id] === pIdx;
                    const isCorrect = isChecked && pIdx === soal.jawabanTunggalIndex;
                    const isWrongSelected = isChecked && isSelected && pIdx !== soal.jawabanTunggalIndex;

                    return (
                      <button
                        key={pIdx}
                        onClick={() => {
                          if (!isChecked) {
                            setUserSingleAnswers(prev => ({ ...prev, [soal.id]: pIdx }));
                          }
                        }}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                          isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-400 shadow'
                            : isWrongSelected
                            ? 'bg-rose-600 text-white border-rose-400'
                            : isSelected
                            ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">
                            {String.fromCharCode(65 + pIdx)}
                          </span>
                          <span>{pilihanText}</span>
                        </div>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                        {isWrongSelected && <XCircle className="w-4 h-4 text-white" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TIPE 2: PILIHAN GANDA KOMPLEKS */}
              {soal.tipe === 'pilihan_ganda_kompleks' && soal.opsiKompleks && (
                <div className="space-y-2 pt-1">
                  {soal.opsiKompleks.map((opsi, oIdx) => {
                    const selectedList = userComplexAnswers[soal.id] || [];
                    const isCheckedBox = selectedList.includes(oIdx);

                    const toggleCheck = () => {
                      if (isChecked) return;
                      if (isCheckedBox) {
                        setUserComplexAnswers(prev => ({ ...prev, [soal.id]: selectedList.filter(i => i !== oIdx) }));
                      } else {
                        setUserComplexAnswers(prev => ({ ...prev, [soal.id]: [...selectedList, oIdx] }));
                      }
                    };

                    return (
                      <div
                        key={oIdx}
                        onClick={toggleCheck}
                        className={`p-3.5 rounded-xl border cursor-pointer text-xs font-medium flex items-center justify-between transition-all ${
                          isChecked && opsi.correct
                            ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200'
                            : isCheckedBox
                            ? 'bg-emerald-950/30 border-emerald-500 text-emerald-300'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isCheckedBox}
                            onChange={() => {}}
                            className="accent-emerald-500 w-4 h-4"
                          />
                          <span>{opsi.text}</span>
                        </div>
                        {isChecked && (
                          <span className="font-bold text-[10px] uppercase">
                            {opsi.correct ? '✓ Benar' : '✕ Salah'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TIPE 3: BENAR / SALAH */}
              {soal.tipe === 'benar_salah' && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[true, false].map((val) => {
                    const isSelected = userTrueFalseAnswers[soal.id] === val;
                    const isCorrect = isChecked && val === soal.jawabanBenarSalah;

                    return (
                      <button
                        key={String(val)}
                        onClick={() => {
                          if (!isChecked) {
                            setUserTrueFalseAnswers(prev => ({ ...prev, [soal.id]: val }));
                          }
                        }}
                        className={`p-4 rounded-xl border text-center text-xs font-bold transition-all ${
                          isCorrect
                            ? 'bg-emerald-600 text-white border-emerald-400 shadow'
                            : isSelected
                            ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                        }`}
                      >
                        {val ? 'BENAR (TRUE)' : 'SALAH (FALSE)'}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TIPE 4: MENJODOHKAN */}
              {soal.tipe === 'menjodohkan' && soal.pasanganMenjodohkan && (
                <div className="space-y-3 pt-1">
                  <p className="text-xs text-slate-500 italic">Pasangan yang tepat di bawah ini:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {soal.pasanganMenjodohkan.map((pair, pIdx) => (
                      <div 
                        key={pIdx}
                        className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-3.5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
                      >
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 sm:w-1/3">{pair.item}</span>
                        <span className="text-slate-400 hidden sm:inline">➔</span>
                        <span className="text-slate-700 dark:text-slate-200 font-medium sm:w-2/3">{pair.pasangan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIPE 5: STUDI KASUS */}
              {soal.tipe === 'studi_kasus' && soal.studiKasusDetail && (
                <div className="space-y-4 pt-1">
                  <div className="bg-slate-900/90 border border-slate-700 p-4 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-amber-400 uppercase tracking-wider block">Skenario Kasus Remaja BK:</span>
                    <p className="text-slate-200 leading-relaxed italic">{soal.studiKasusDetail.skenario}</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 dark:text-white block">
                      {soal.studiKasusDetail.pertanyaanAnalisis}
                    </label>
                    <textarea
                      value={userCaseAnswers[soal.id] || ''}
                      onChange={(e) => setUserCaseAnswers(prev => ({ ...prev, [soal.id]: e.target.value }))}
                      placeholder="Tuliskan analisis dan usulan solusimu di sini..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      rows={3}
                    ></textarea>
                  </div>

                  {isChecked && (
                    <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-xs space-y-2 text-emerald-200">
                      <span className="font-bold text-emerald-400 block">Kunci Solusi Konstruktif Bu Wiwik Ismiati:</span>
                      <p className="whitespace-pre-line leading-relaxed">{soal.studiKasusDetail.kunciJawabanContoh}</p>
                      <p className="text-[11px] text-emerald-400 italic">Tips BK: {soal.studiKasusDetail.tipsPenangananBK}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons for Checking & Solution */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => handleCheckQuestion(soal.id)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cek Kunci Jawaban</span>
                </button>

                <button
                  onClick={() => toggleSolution(soal.id)}
                  className="text-xs font-bold text-slate-500 hover:text-emerald-500 flex items-center gap-1"
                >
                  <span>{isShowSolution ? 'Sembunyikan Pembahasan' : 'Lihat Pembahasan Lengkap'}</span>
                  {isShowSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Expanded Solution Text */}
              {isShowSolution && (
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl text-xs text-slate-700 dark:text-slate-300 space-y-1 animate-in fade-in-50">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block">Pembahasan Mendalam:</span>
                  <p className="leading-relaxed">{soal.pembahasan}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
