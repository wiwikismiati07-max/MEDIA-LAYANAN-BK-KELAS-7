import React, { useState } from 'react';
import { rppMendalamBK } from '../data/rppData';
import { 
  FileText, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Target, 
  Layers, 
  Compass, 
  Clock, 
  Users
} from 'lucide-react';

export const RppView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'semua' | 'identitas' | 'identifikasi' | 'desain' | 'pelaksanaan'>('semua');
  const [printNotification, setPrintNotification] = useState<string | null>(null);

  const handlePrint = () => {
    // 1. Reset filter tab to show all sections
    setActiveSection('semua');
    setPrintNotification('Mempersiapkan dokumen RPP Layanan BK untuk dicetak...');

    setTimeout(() => {
      const printElement = document.getElementById('rpp-printable-document');

      if (printElement) {
        const printWindow = window.open('', '_blank', 'width=950,height=900');
        if (printWindow) {
          printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="id">
              <head>
                <meta charset="utf-8">
                <title>RPP_BK_DeepLearning_SMPN7Pasuruan</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                  @page { size: A4 portrait; margin: 12mm; }
                  body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; background: #ffffff; margin: 0; padding: 20px; }
                  .no-print { display: flex; justify-content: space-between; align-items: center; background: #022c22; color: #ffffff; padding: 12px 20px; border-radius: 12px; margin-bottom: 20px; }
                  @media print {
                    .no-print { display: none !important; }
                    body { padding: 0 !important; background: white !important; }
                  }
                </style>
              </head>
              <body>
                <div class="no-print">
                  <span style="font-size: 13px; font-weight: bold;">📄 RPP Layanan BK Deep Learning - SMP Negeri 7 Pasuruan</span>
                  <button onclick="window.print()" style="background: #059669; color: white; border: none; padding: 8px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 12px;">
                    🖨️ Klik Untuk Cetak / Simpan PDF
                  </button>
                </div>
                <div>
                  ${printElement.outerHTML}
                </div>
                <script>
                  setTimeout(() => {
                    window.print();
                  }, 500);
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
          setPrintNotification(null);
          return;
        }
      }

      // Fallback: direct window.print()
      window.print();
      setPrintNotification(null);
    }, 250);
  };

  const rpp = rppMendalamBK;

  return (
    <div className="space-y-8 pb-16">
      {/* Toast Notification */}
      {printNotification && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-700 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in text-xs font-bold border border-emerald-400">
          <Printer className="w-4 h-4 animate-bounce" />
          <span>{printNotification}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 print:hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <GraduationCap className="w-4 h-4" />
            <span>Dokumen RPP Mendalam (Deep Learning) BK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Rencana Pelaksanaan Pembelajaran (RPP) Layanan BK
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            SMP Negeri 7 Pasuruan • Pengembang: Ibu Wiwik Ismiati, S.Pd. (Guru BK Kelas 7)
          </p>
        </div>

        <button
          onClick={handlePrint}
          id="btn-cetak-rpp"
          className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all self-start md:self-auto cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak / Download PDF</span>
        </button>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 print:hidden">
        {[
          { id: 'semua', label: 'Tampilkan Semua Komponen' },
          { id: 'identitas', label: 'I. Identitas Pembelajaran' },
          { id: 'identifikasi', label: 'II. Identifikasi & 8 Dimensi Pancasila' },
          { id: 'desain', label: 'III. Desain Layanan Klasikal' },
          { id: 'pelaksanaan', label: 'IV. Pelaksanaan & Deep Learning' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSection === tab.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* MAIN RPP TABLE CONTAINER */}
      <div id="rpp-printable-document" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden print:border-none print:shadow-none">
        
        {/* Printable Header */}
        <div className="p-8 border-b border-slate-200 dark:border-slate-800 text-center space-y-2 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center justify-center gap-4 mb-2">
            <img 
              src="https://iili.io/KDFk4fI.png" 
              alt="Logo SMPN 7 Pasuruan" 
              className="w-16 h-16 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                SMP NEGERI 7 PASURUAN
              </h1>
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                PEMBELAJARAN MENDALAM (DEEP LEARNING) BIMBINGAN DAN KONSELING
              </p>
              <p className="text-[11px] text-slate-500">Tahun Ajaran 2025/2026 • Penyusun: Wiwik Ismiati, S.Pd.</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
          
          {/* SECTION 1: IDENTITAS PEMBELAJARAN */}
          {(activeSection === 'semua' || activeSection === 'identitas') && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-base font-extrabold text-emerald-600 dark:text-emerald-400 border-b border-emerald-500/20 pb-2">
                <BookOpen className="w-5 h-5" />
                <span>I. IDENTITAS PEMBELAJARAN</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Satuan Pendidikan:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.satuanPendidikan}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Mata Pelajaran:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.mataPelajaran}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Kelas / Semester:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.kelasSemester}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Alokasi Waktu:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.alokasiWaktu}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Materi Pokok Layanan:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{rpp.identitas.materiPokok}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Bidang Bimbingan:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.bidangBimbingan}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-1">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Model Pembelajaran:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.modelPembelajaran}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Guru Pembimbing:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{rpp.identitas.penyusun}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: IDENTIFIKASI & 8 DIMENSI PANCASILA */}
          {(activeSection === 'semua' || activeSection === 'identifikasi') && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-base font-extrabold text-emerald-600 dark:text-emerald-400 border-b border-emerald-500/20 pb-2">
                <Users className="w-5 h-5" />
                <span>II. IDENTIFIKASI (KESIAPAN MURID & 8 DIMENSI PROFIL PELAJAR PANCASILA)</span>
              </div>

              {/* Kesiapan Murid */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">A. Kesiapan Murid (Gaya Belajar)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">👁️ Visual</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.identifikasi.kesiapanMurid.visual}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-cyan-600 dark:text-cyan-400 mb-1">🎧 Auditori</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.identifikasi.kesiapanMurid.auditori}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-indigo-600 dark:text-indigo-400 mb-1">🏃 Kinestetik</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.identifikasi.kesiapanMurid.kinestetik}</p>
                  </div>
                </div>
              </div>

              {/* Karakteristik Materi */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">B. Karakteristik Materi Layanan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.identifikasi.karakteristikMateri}</p>
              </div>

              {/* 8 Dimensi Profil Pelajar Pancasila */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">C. 8 Dimensi Profil Pelajar Pancasila (Keterangan Lengkap)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {rpp.identifikasi.profilPancasila.map((dim, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="font-bold text-slate-900 dark:text-emerald-300 text-xs">{dim.dimensi}</div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{dim.keterangan}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: DESAIN LAYANAN KLASIKAL */}
          {(activeSection === 'semua' || activeSection === 'desain') && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-base font-extrabold text-emerald-600 dark:text-emerald-400 border-b border-emerald-500/20 pb-2">
                <Target className="w-5 h-5" />
                <span>III. DESAIN LAYANAN KLASIKAL</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">SKKPD (Standar Kemandirian):</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.desain.skkpd}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white text-xs">Topik Layanan Kontekstual:</span>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.desain.topikKontekstual}</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white text-xs">Lintas Disiplin Ilmu:</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.desain.lintasDisiplin}</p>
              </div>

              {/* Tujuan Layanan */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">Tujuan Layanan BK (Umum & Khusus HOTS):</h4>
                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                  <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    <span className="font-bold">Tujuan Umum:</span> {rpp.desain.tujuanLayanan.umum}
                  </p>
                  <div className="space-y-1 pt-1">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">Tujuan Khusus:</span>
                    {rpp.desain.tujuanLayanan.khusus.map((tj, i) => (
                      <p key={i} className="text-xs text-slate-700 dark:text-slate-300 pl-3">{tj}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4 Kerangka Pembelajaran */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">4 Kerangka Pembelajaran (Framework):</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">1. Praktik Pedagogis:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.desain.kerangkaPembelajaran.praktikPedagogis}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 text-xs">2. Kemitraan Pembelajaran:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.desain.kerangkaPembelajaran.kemitraanPembelajaran}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 text-xs">3. Lingkungan Pembelajaran:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.desain.kerangkaPembelajaran.lingkunganPembelajaran}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-xs">4. Pemanfaatan Digital:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.desain.kerangkaPembelajaran.pemanfaatanDigital}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: PELAKSANAAN & IMPLEMENTASI DEEP LEARNING */}
          {(activeSection === 'semua' || activeSection === 'pelaksanaan') && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 text-base font-extrabold text-emerald-600 dark:text-emerald-400 border-b border-emerald-500/20 pb-2">
                <Layers className="w-5 h-5" />
                <span>IV. PELAKSANAAN LAYANAN & IMPLEMENTASI PRINSIP DEEP LEARNING</span>
              </div>

              {/* 3 Prinsip Deep Learning */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">A. 3 Prinsip Pembelajaran Mendalam (Deep Learning):</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">1. Berkesadaran (Mindful)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.prinsipDeepLearning.berkesadaran}</p>
                  </div>
                  <div className="bg-teal-950/20 border border-teal-500/30 p-4 rounded-xl">
                    <span className="font-bold text-teal-600 dark:text-teal-400 text-xs">2. Bermakna (Meaningful)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.prinsipDeepLearning.bermakna}</p>
                  </div>
                  <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl">
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-xs">3. Menggembirakan (Joyful)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.prinsipDeepLearning.menggembirakan}</p>
                  </div>
                </div>
              </div>

              {/* 3 Pengalaman Belajar */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">B. 3 Pengalaman Belajar Siswa:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">1. Memahami (Understanding)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.pengalamanBelajar.memahami}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">2. Mengaplikasi (Applying)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.pengalamanBelajar.mengaplikasi}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">3. Merefleksi (Reflecting)</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.pengalamanBelajar.merefleksi}</p>
                  </div>
                </div>
              </div>

              {/* PjBL Detail */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">C. Project Based Learning (PjBL):</h4>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{rpp.pelaksanaan.pjblDetail.namaProyek}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">{rpp.pelaksanaan.pjblDetail.deskripsi}</p>
                <p className="text-xs text-slate-500 font-mono">Output: {rpp.pelaksanaan.pjblDetail.output}</p>
              </div>

              {/* Langkah Pembelajaran Mendalam */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">D. Langkah-Langkah Pembelajaran Mendalam:</h4>
                <div className="space-y-2">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex justify-between">
                      <span>1. Kegiatan Awal</span>
                      <span>{rpp.pelaksanaan.langkahLangkah.kegiatanAwal.alokasi}</span>
                    </div>
                    {rpp.pelaksanaan.langkahLangkah.kegiatanAwal.aktivitas.map((act, i) => (
                      <p key={i} className="text-xs text-slate-600 dark:text-slate-300 pl-2">{act}</p>
                    ))}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="font-bold text-cyan-600 dark:text-cyan-400 text-xs flex justify-between">
                      <span>2. Kegiatan Inti (PjBL & Game-Based Learning)</span>
                      <span>{rpp.pelaksanaan.langkahLangkah.kegiatanInti.alokasi}</span>
                    </div>
                    {rpp.pelaksanaan.langkahLangkah.kegiatanInti.aktivitas.map((act, i) => (
                      <p key={i} className="text-xs text-slate-600 dark:text-slate-300 pl-2">{act}</p>
                    ))}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                    <div className="font-bold text-indigo-600 dark:text-indigo-400 text-xs flex justify-between">
                      <span>3. Kegiatan Penutup (Refleksi 3-2-1)</span>
                      <span>{rpp.pelaksanaan.langkahLangkah.kegiatanPenutup.alokasi}</span>
                    </div>
                    {rpp.pelaksanaan.langkahLangkah.kegiatanPenutup.aktivitas.map((act, i) => (
                      <p key={i} className="text-xs text-slate-600 dark:text-slate-300 pl-2">{act}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Asesmen Pembelajaran Mendalam */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">E. Asesmen Pembelajaran Mendalam:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">Formatif:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.asesmen.formatif}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">Sumatif:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.asesmen.sumatif}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">Nondiagnostik:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.asesmen.nondiagnostik}</p>
                  </div>
                </div>
              </div>

              {/* Indikator Keberhasilan */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">F. Indikator Keberhasilan Layanan:</h4>
                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-1">
                  {rpp.pelaksanaan.indikatorKeberhasilan.map((ind, i) => (
                    <p key={i} className="text-xs text-emerald-800 dark:text-emerald-300">{ind}</p>
                  ))}
                </div>
              </div>

              {/* Rencana Tindak Lanjut (RTL) Lengkap */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">G. Rencana Tindak Lanjut (RTL) Keterangan Lengkap:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">1. Layanan Lanjutan:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.rencanaTindakLanjut.layananLanjutan}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 text-xs">2. Konseling Individu:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.rencanaTindakLanjut.konselingIndividu}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 text-xs">3. Bimbingan Kelompok:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.rencanaTindakLanjut.bimbinganKelompok}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-xs">4. Kolaborasi Orang Tua:</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{rpp.pelaksanaan.rencanaTindakLanjut.kolaborasiOrangTua}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Signature Box */}
        <div className="p-8 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-8 print:flex-row print:justify-between">
          <div className="text-left space-y-1">
            <p className="text-slate-500 dark:text-slate-400">Mengetahui,</p>
            <p className="font-bold text-slate-900 dark:text-white">Kepala SMP Negeri 7 Pasuruan</p>
            <div className="h-16 sm:h-20"></div>
            <p className="font-extrabold underline text-slate-900 dark:text-white">NUR FADILAH, S.Pd</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">NIP. 19860410 201001 2 030</p>
          </div>

          <div className="text-left space-y-1">
            <p className="text-slate-500 dark:text-slate-400">Pasuruan, {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="font-bold text-slate-900 dark:text-white">Guru Bimbingan dan Konseling</p>
            <div className="h-16 sm:h-20"></div>
            <p className="font-extrabold underline text-slate-900 dark:text-white">WIWIK ISMIATI, S.Pd</p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">NIP. 19831116 200904 2 003</p>
          </div>
        </div>
      </div>
    </div>
  );
};
