import React, { useState } from 'react';
import { generateUlarTanggaSquares, ttsWords } from '../data/kuisData';
import { UlarTanggaSquare, TTSWord } from '../types';
import { 
  Gamepad2, 
  RotateCcw, 
  Sparkles, 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  Dices, 
  Grid, 
  Lightbulb, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const KuisView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ular_tangga' | 'tts'>('ular_tangga');

  // --- STATE FOR ULAR TANGGA ---
  const [playerPos, setPlayerPos] = useState<number>(1);
  const [diceValue, setDiceValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [gameScore, setGameScore] = useState<number>(0);
  const [activeHotsSoal, setActiveHotsSoal] = useState<UlarTanggaSquare['soal'] | null>(null);
  const [hotsAnswerIndex, setHotsAnswerIndex] = useState<number | null>(null);
  const [hotsFeedback, setHotsFeedback] = useState<string>('');
  const [logMessages, setLogMessages] = useState<string[]>(['Permainan Ular Tangga BK dimulai di Kotak 1.']);

  const squares = generateUlarTanggaSquares();

  const handleRollDice = () => {
    if (isRolling || activeHotsSoal) return;

    setIsRolling(true);
    setHotsFeedback('');

    // Roll animation
    let rollCount = 0;
    const interval = setInterval(() => {
      const tempRoll = Math.floor(Math.random() * 6) + 1;
      setDiceValue(tempRoll);
      rollCount++;

      if (rollCount > 8) {
        clearInterval(interval);
        const finalRoll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalRoll);
        setIsRolling(false);

        // Move player
        movePlayer(finalRoll);
      }
    }, 100);
  };

  const movePlayer = (roll: number) => {
    setPlayerPos(prev => {
      let nextPos = prev + roll;
      if (nextPos > 100) {
        nextPos = 100 - (nextPos - 100); // bounce back
      }

      const sq = squares.find(s => s.number === nextPos);
      let newLog = `Dadu dikocok: ${roll}. Bidak maju ke Kotak ${nextPos}.`;

      if (sq) {
        if (sq.type === 'tangga' && sq.targetSquare) {
          const ladderTarget = sq.targetSquare;
          newLog += ` 🚀 WOW! NAIK TANGGA ke Kotak ${ladderTarget}!`;
          nextPos = ladderTarget;
          setGameScore(s => s + 50);
        } else if (sq.type === 'ular' && sq.targetSquare) {
          const snakeTarget = sq.targetSquare;
          newLog += ` 🐍 OOPS! TURUN ULAR ke Kotak ${snakeTarget}!`;
          nextPos = snakeTarget;
        } else if (sq.type === 'soal_hots' && sq.soal) {
          setActiveHotsSoal(sq.soal);
          newLog += ` 💡 TANTANGAN SOAL HOTS BK! Jawab untuk bonus poin!`;
        }
      }

      setLogMessages(l => [newLog, ...l.slice(0, 4)]);

      if (nextPos === 100) {
        confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
      }

      return nextPos;
    });
  };

  const handleAnswerHots = (pIdx: number) => {
    if (!activeHotsSoal) return;
    setHotsAnswerIndex(pIdx);

    if (pIdx === activeHotsSoal.jawabanIndex) {
      setHotsFeedback('✓ JAWABAN BENAR! Bonus +100 Poin BK!');
      setGameScore(s => s + 100);
      confetti({ particleCount: 40, spread: 50 });
    } else {
      setHotsFeedback(`✕ Kurang Tepat. Pembahasan: ${activeHotsSoal.pembahasan}`);
    }

    setTimeout(() => {
      setActiveHotsSoal(null);
      setHotsAnswerIndex(null);
    }, 3500);
  };

  const handleResetGame = () => {
    setPlayerPos(1);
    setGameScore(0);
    setLogMessages(['Permainan direset ke Kotak 1.']);
    setActiveHotsSoal(null);
  };

  // --- STATE FOR TTS ---
  const [userTtsInput, setUserTtsInput] = useState<{ [key: string]: string }>({});
  const [selectedWordId, setSelectedWordId] = useState<number>(1);
  const [ttsChecked, setTtsChecked] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const words = ttsWords;
  const activeWord = words.find(w => w.id === selectedWordId) || words[0];

  const handleCellChange = (row: number, col: number, char: string) => {
    const key = `${row}-${col}`;
    setUserTtsInput(prev => ({
      ...prev,
      [key]: char.toUpperCase()
    }));
  };

  const checkTts = () => {
    setTtsChecked(true);
    confetti({ particleCount: 60, spread: 70 });
  };

  const resetTts = () => {
    setUserTtsInput({});
    setTtsChecked(false);
    setShowHint(false);
  };

  return (
    <div className="space-y-8 pb-16 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <span>Gamifikasi Layanan BK Kelas 7</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Kuis Ular Tangga Digital & Teka Teki Silang HOTS
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            SMP Negeri 7 Pasuruan • Bermain sambil mengasah pengetahuan Bimbingan dan Konseling!
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <button
            onClick={() => setActiveSubTab('ular_tangga')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'ular_tangga'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🎲 Ular Tangga BK
          </button>
          <button
            onClick={() => setActiveSubTab('tts')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'tts'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🧩 Teka Teki Silang
          </button>
        </div>
      </div>

      {/* --- SUBTAB 1: ULAR TANGGA BK --- */}
      {activeSubTab === 'ular_tangga' && (
        <div className="space-y-6">
          {/* Controls & Log Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Dice Control Box */}
            <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm text-center space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-500 dark:text-slate-400">Pion Siswa: Kotak #{playerPos}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Skor: {gameScore} Poin</span>
              </div>

              {/* Dice Display */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-1 shadow-2xl flex items-center justify-center">
                <div className={`w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-4xl font-extrabold text-white font-mono ${
                  isRolling ? 'animate-bounce' : ''
                }`}>
                  {diceValue}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleRollDice}
                  disabled={isRolling || !!activeHotsSoal}
                  id="btn-kocok-dadu"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white font-extrabold text-xs shadow-lg flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Dices className="w-5 h-5" />
                  <span>Kocok Dadu!</span>
                </button>

                <button
                  onClick={handleResetGame}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-colors"
                  title="Reset Game"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Game Logs Box */}
            <div className="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Log Aktivitas Permainan:</h4>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs font-mono max-h-36 overflow-y-auto">
                {logMessages.map((msg, i) => (
                  <p key={i} className={i === 0 ? 'text-emerald-600 dark:text-emerald-300 font-bold' : 'text-slate-500'}>
                    {msg}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* HOTS Question Modal Overlay if triggered */}
          {activeHotsSoal && (
            <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border-2 border-amber-500 p-6 sm:p-8 rounded-3xl text-white space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 animate-pulse" />
                <span>Tantangan HOTS BK Ular Tangga</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold leading-snug">{activeHotsSoal.pertanyaan}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeHotsSoal.pilihan.map((p, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleAnswerHots(pIdx)}
                    disabled={hotsAnswerIndex !== null}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      hotsAnswerIndex === pIdx
                        ? pIdx === activeHotsSoal.jawabanIndex
                          ? 'bg-emerald-600 border-emerald-300 text-white'
                          : 'bg-rose-600 border-rose-300 text-white'
                        : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700 text-slate-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {hotsFeedback && (
                <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-xs font-semibold text-emerald-300">
                  {hotsFeedback}
                </div>
              )}
            </div>
          )}

          {/* 100 SQUARES BOARD GRID */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Papan 100 Kotak Ular Tangga BK</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-emerald-500">🚀 Tangga</span>
                <span className="flex items-center gap-1 text-rose-500">🐍 Ular</span>
                <span className="flex items-center gap-1 text-amber-500">💡 Soal HOTS</span>
              </div>
            </div>

            {/* Board 10x10 Grid */}
            <div className="grid grid-cols-10 gap-1 sm:gap-1.5 aspect-square max-w-3xl mx-auto">
              {Array.from({ length: 10 }).map((_, rowIndex) => {
                const rowNum = 10 - rowIndex; // Top row is 10 (91-100)
                const isEvenRow = rowNum % 2 === 0;

                return Array.from({ length: 10 }).map((_, colIndex) => {
                  const actualCol = isEvenRow ? 10 - colIndex : colIndex + 1;
                  const sqNum = (rowNum - 1) * 10 + actualCol;
                  const sq = squares.find(s => s.number === sqNum);
                  const isPlayerHere = playerPos === sqNum;

                  return (
                    <div
                      key={sqNum}
                      className={`relative rounded-lg p-1 sm:p-2 border flex flex-col justify-between items-center transition-all ${
                        isPlayerHere
                          ? 'bg-emerald-500 text-slate-950 font-black border-2 border-white shadow-xl z-20 scale-105'
                          : sq?.type === 'tangga'
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400'
                          : sq?.type === 'ular'
                          ? 'bg-rose-950/30 border-rose-500/40 text-rose-400'
                          : sq?.type === 'soal_hots'
                          ? 'bg-amber-950/30 border-amber-500/40 text-amber-400'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="text-[9px] sm:text-[11px] font-bold font-mono self-start opacity-70">
                        {sqNum}
                      </span>

                      {/* Icons for special tiles */}
                      {sq?.type === 'tangga' && <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />}
                      {sq?.type === 'ular' && <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />}
                      {sq?.type === 'soal_hots' && <Lightbulb className="w-3.5 h-3.5 text-amber-400" />}

                      {/* Player Pawn Icon */}
                      {isPlayerHere && (
                        <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/90 rounded-lg text-lg animate-bounce">
                          ♟️
                        </div>
                      )}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 2: TEKA TEKI SILANG (TTS) --- */}
      {activeSubTab === 'tts' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Clues Box Column */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Grid className="w-5 h-5 text-emerald-500" />
                  <span>Petunjuk TTS HOTS BK</span>
                </h3>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs font-bold text-amber-500 hover:underline flex items-center gap-1"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>{showHint ? 'Sembunyikan Hint' : 'Buka Hint'}</span>
                </button>
              </div>

              {/* Across Clues */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                  MENDAFTAR:
                </span>
                <div className="space-y-2">
                  {words.filter(w => w.direction === 'mendaftar').map(w => (
                    <div
                      key={w.id}
                      onClick={() => setSelectedWordId(w.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        selectedWordId === w.id
                          ? 'bg-emerald-600 text-white border-emerald-400 font-semibold shadow'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                      }`}
                    >
                      <span className="font-bold mr-1">#{w.number}.</span> {w.clue}
                      {showHint && <p className="text-[10px] text-amber-300 font-mono mt-1">Hint: {w.answer}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Down Clues */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                  MENURUN:
                </span>
                <div className="space-y-2">
                  {words.filter(w => w.direction === 'menurun').map(w => (
                    <div
                      key={w.id}
                      onClick={() => setSelectedWordId(w.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        selectedWordId === w.id
                          ? 'bg-cyan-600 text-white border-cyan-400 font-semibold shadow'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
                      }`}
                    >
                      <span className="font-bold mr-1">#{w.number}.</span> {w.clue}
                      {showHint && <p className="text-[10px] text-amber-300 font-mono mt-1">Hint: {w.answer}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={checkTts}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cek Jawaban TTS</span>
                </button>

                <button
                  onClick={resetTts}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                  title="Reset Grid TTS"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid Interactive Input Column */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 text-xs">
                <span className="font-bold text-slate-900 dark:text-white">Kotak Teka Teki Silang BK</span>
                <span className="text-slate-500">Klik kotak untuk mengetik huruf</span>
              </div>

              {/* Crossword 12x12 Matrix */}
              <div className="grid grid-cols-12 gap-1 max-w-md mx-auto aspect-square bg-slate-950 p-3 rounded-2xl border border-slate-800">
                {Array.from({ length: 12 }).map((_, rIdx) => {
                  const r = rIdx + 1;
                  return Array.from({ length: 12 }).map((_, cIdx) => {
                    const c = cIdx + 1;
                    const cellKey = `${r}-${c}`;

                    // Check if this cell belongs to any word
                    const wordMatches = words.filter(w => {
                      if (w.direction === 'mendaftar') {
                        return w.row === r && c >= w.col && c < w.col + w.answer.length;
                      } else {
                        return w.col === c && r >= w.row && r < w.row + w.answer.length;
                      }
                    });

                    const isEditable = wordMatches.length > 0;

                    // Get word number label if this cell is starting square
                    const startWord = words.find(w => w.row === r && w.col === c);

                    // Check correct letter for validation
                    let correctChar = '';
                    if (wordMatches.length > 0) {
                      const w = wordMatches[0];
                      const charIndex = w.direction === 'mendaftar' ? (c - w.col) : (r - w.row);
                      correctChar = w.answer[charIndex];
                    }

                    const userVal = userTtsInput[cellKey] || '';
                    const isCorrect = ttsChecked && userVal === correctChar;
                    const isWrong = ttsChecked && userVal !== '' && userVal !== correctChar;

                    if (!isEditable) {
                      return <div key={cellKey} className="bg-slate-900 rounded opacity-40"></div>;
                    }

                    return (
                      <div key={cellKey} className="relative aspect-square">
                        {startWord && (
                          <span className="absolute top-0.5 left-1 text-[8px] font-bold text-emerald-400 pointer-events-none z-10">
                            {startWord.number}
                          </span>
                        )}
                        <input
                          type="text"
                          maxLength={1}
                          value={userVal}
                          onChange={(e) => handleCellChange(r, c, e.target.value)}
                          className={`w-full h-full text-center font-black uppercase text-xs sm:text-sm rounded transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                            isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-400'
                              : isWrong
                              ? 'bg-rose-600 text-white border-rose-400'
                              : 'bg-slate-800 text-white border border-slate-700'
                          }`}
                        />
                      </div>
                    );
                  });
                })}
              </div>

              {/* Active Word Explanation Box */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                  Penjelasan Kunci #{activeWord.number} ({activeWord.direction.toUpperCase()}):
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activeWord.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
