import React, { useState } from 'react';
import { PresensiItem, RombelClass } from '../types';
import { 
  Users, 
  CheckCircle2, 
  HelpCircle, 
  PieChart, 
  BarChart2, 
  Download, 
  Filter, 
  Search, 
  TrendingUp,
  MessageSquare
} from 'lucide-react';

interface DashboardViewProps {
  presensiList: PresensiItem[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({ presensiList }) => {
  const [selectedRombel, setSelectedRombel] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rombels: RombelClass[] = ['7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H'];

  // Filter list
  const filteredList = presensiList.filter(item => {
    const matchRombel = selectedRombel === 'semua' || item.rombel === selectedRombel;
    const matchQuery = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || item.nisn.includes(searchQuery);
    return matchRombel && matchQuery;
  });

  // Calculate statistics
  const totalHadir = presensiList.filter(i => i.keterangan === 'Hadir').length;
  const totalSakit = presensiList.filter(i => i.keterangan === 'Sakit').length;
  const totalIzin = presensiList.filter(i => i.keterangan === 'Izin').length;
  const totalKonseling = presensiList.filter(i => i.keterangan === 'Perlu Konseling BK').length;

  const getRombelCount = (rombel: RombelClass) => {
    return presensiList.filter(i => i.rombel === rombel).length;
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Nama Lengkap", "Rombel", "NISN/No Absen", "Tanggal", "Waktu", "Keterangan Kehadiran", "Catatan"];
    const rows = presensiList.map(item => [
      item.id,
      `"${item.nama}"`,
      item.rombel,
      item.nisn,
      item.tanggal,
      item.waktu,
      `"${item.keterangan}"`,
      `"${item.catatan || '-'}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Rekap_Presensi_BK_SMPN7_Pasuruan_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Page Title & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <PieChart className="w-4 h-4" />
            <span>Rekapitulasi Layanan BK & Partisipasi Siswa</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dashboard Statistik 8 Rombel Kelas 7
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            SMP Negeri 7 Pasuruan • Pembimbing: Bu Wiwik Ismiati, S.Pd.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          id="btn-export-csv"
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow transition-all self-start md:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Rekap CSV</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Hadir</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{totalHadir}</div>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">Siswa Siap Belajar</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Permohonan Konseling</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">{totalKonseling}</div>
          <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-1">Butuh Temu Bu Wiwik</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Izin / Sakit</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{totalIzin + totalSakit}</div>
          <p className="text-[11px] text-slate-500 font-medium mt-1">Tercatat Keterangan</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Partisipasi Rombel</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">8 / 8</div>
          <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium mt-1">7A sampai 7H Terjangkau</p>
        </div>
      </div>

      {/* Rombel Distribution Grid */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-emerald-500" />
          <span>Partisipasi Presensi Mandiri Per Rombel</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {rombels.map((rombel) => {
            const count = getRombelCount(rombel);
            return (
              <div 
                key={rombel}
                onClick={() => setSelectedRombel(rombel)}
                className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all ${
                  selectedRombel === rombel 
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow' 
                    : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1">Kelas {rombel}</div>
                <div className="text-xl font-extrabold">{count}</div>
                <div className="text-[10px] opacity-80">Siswa Presensi</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Data Table Filter & Search */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-emerald-500" />
            <select
              value={selectedRombel}
              onChange={(e) => setSelectedRombel(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs rounded-xl px-3 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="semua">Semua Rombel (7A - 7H)</option>
              {rombels.map(r => (
                <option key={r} value={r}>Kelas {r}</option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama atau NISN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                <th className="p-3.5">Waktu</th>
                <th className="p-3.5">Nama Siswa</th>
                <th className="p-3.5">Rombel</th>
                <th className="p-3.5">NISN/No Absen</th>
                <th className="p-3.5">Keterangan</th>
                <th className="p-3.5">Catatan/Pesan Bu Wiwik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400 italic">
                    Belum ada data presensi yang sesuai dengan filter.
                  </td>
                </tr>
              ) : (
                filteredList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-3.5 font-mono text-slate-500 dark:text-slate-400">{item.waktu}</td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">{item.nama}</td>
                    <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">Kelas {item.rombel}</td>
                    <td className="p-3.5 font-mono text-slate-500 dark:text-slate-400">{item.nisn}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold ${
                        item.keterangan === 'Hadir' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' :
                        item.keterangan === 'Perlu Konseling BK' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-500/30' :
                        'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.keterangan}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300 italic">{item.catatan || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
