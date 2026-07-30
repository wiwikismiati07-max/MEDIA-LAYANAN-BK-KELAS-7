import React, { useState, useRef, useEffect } from 'react';
import { PresensiItem, RombelClass } from '../types';
import { masterSiswaList, SiswaMaster } from '../data/siswaData';
import { 
  UserCheck, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Calendar, 
  User, 
  FileText, 
  HeartHandshake, 
  ListFilter,
  Download,
  Upload,
  FileSpreadsheet,
  FileUp,
  Info,
  Check,
  Users,
  Trash2,
  Plus,
  RefreshCw,
  UserPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import * as XLSX from 'xlsx';

interface PresensiViewProps {
  presensiList: PresensiItem[];
  setPresensiList: React.Dispatch<React.SetStateAction<PresensiItem[]>>;
}

export const PresensiView: React.FC<PresensiViewProps> = ({ presensiList, setPresensiList }) => {
  // Master Student dataset state per Rombel (initialized from localStorage or default masterSiswaList)
  const [siswaMaster, setSiswaMaster] = useState<Record<RombelClass, SiswaMaster[]>>(() => {
    // Clear legacy cache keys containing dummy data
    localStorage.removeItem('smpn7_siswa_master_v2');
    const saved = localStorage.getItem('smpn7_siswa_master_v3');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return masterSiswaList;
  });

  const [rombel, setRombel] = useState<RombelClass>('7A');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const [nama, setNama] = useState<string>('');
  const [nisn, setNisn] = useState<string>('');
  const [keterangan, setKeterangan] = useState<PresensiItem['keterangan']>('Hadir');
  const [catatan, setCatatan] = useState('');
  const [filterRombel, setFilterRombel] = useState<string>('semua');
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  // Add student form state
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [newNama, setNewNama] = useState('');
  const [newNisn, setNewNisn] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const rombels: RombelClass[] = ['7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H'];

  // Save to localStorage when siswaMaster changes
  useEffect(() => {
    localStorage.setItem('smpn7_siswa_master_v3', JSON.stringify(siswaMaster));
  }, [siswaMaster]);

  // Sync selected student when rombel or siswaMaster changes
  useEffect(() => {
    const classStudents = siswaMaster[rombel] || [];
    if (classStudents.length > 0) {
      const currentExists = classStudents.find(s => s.id === selectedStudentId);
      if (currentExists) {
        setNama(currentExists.nama);
        setNisn(currentExists.nisn);
      } else {
        setSelectedStudentId(classStudents[0].id);
        setNama(classStudents[0].nama);
        setNisn(classStudents[0].nisn);
      }
    } else {
      setSelectedStudentId('');
      setNama('');
      setNisn('');
    }
  }, [rombel, siswaMaster]);

  const activeClassStudents = siswaMaster[rombel] || [];

  // Handler when clicking a Rombel Class button (7A - 7H)
  const handleSelectRombel = (r: RombelClass) => {
    setRombel(r);
    setFilterRombel(r); // Automatically filter table on the right to match chosen class!
  };

  // Handler to delete a student from active class roster
  const handleDeleteStudentFromRoster = (e: React.MouseEvent, studentId: string, studentNama: string) => {
    e.preventDefault();
    e.stopPropagation();

    setSiswaMaster(prev => ({
      ...prev,
      [rombel]: (prev[rombel] || []).filter(s => s.id !== studentId)
    }));

    if (selectedStudentId === studentId || nama === studentNama) {
      const remaining = (siswaMaster[rombel] || []).filter(s => s.id !== studentId);
      if (remaining.length > 0) {
        setSelectedStudentId(remaining[0].id);
        setNama(remaining[0].nama);
        setNisn(remaining[0].nisn);
      } else {
        setSelectedStudentId('');
        setNama('');
        setNisn('');
      }
    }

    setUploadMessage(`Siswa "${studentNama}" berhasil dihapus dari daftar Kelas ${rombel}.`);
    setTimeout(() => setUploadMessage(null), 4000);
  };

  // Handler to delete a presensi record from table
  const handleDeletePresensi = (e: React.MouseEvent, id: string, namaSiswa: string) => {
    e.preventDefault();
    e.stopPropagation();
    setPresensiList(prev => prev.filter(p => p.id !== id));
    setUploadMessage(`Data presensi "${namaSiswa}" telah dihapus dari tabel.`);
    setTimeout(() => setUploadMessage(null), 3000);
  };

  // Handler to add a new student to active class roster
  const handleAddStudentToRoster = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNama.trim()) return;

    const newS: SiswaMaster = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      nama: newNama.trim(),
      nisn: newNisn.trim() || `008${Date.now().toString().slice(-6)}`,
      rombel: rombel
    };

    setSiswaMaster(prev => ({
      ...prev,
      [rombel]: [...(prev[rombel] || []), newS]
    }));

    setNama(newS.nama);
    setNisn(newS.nisn);
    setSelectedStudentId(newS.id);
    setNewNama('');
    setNewNisn('');
    setIsAddingStudent(false);

    setUploadMessage(`Siswa "${newS.nama}" berhasil ditambahkan ke Kelas ${rombel}.`);
    setTimeout(() => setUploadMessage(null), 4000);
  };

  // Reset master student list to original default
  const handleResetToDefault = () => {
    setSiswaMaster(masterSiswaList);
    localStorage.removeItem('smpn7_siswa_master_v3');
    setUploadMessage('Daftar siswa seluruh kelas telah dibersihkan.');
    setTimeout(() => setUploadMessage(null), 4000);
  };

  // --- UNDUH TEMPLAT EXCEL (.xlsx) ---
  const handleDownloadTemplate = () => {
    const templateData = [
      {
        "Nama Lengkap": "Muhammad Bayu Pratama",
        "Kelas (Rombel)": "7A",
        "NISN / No Absen": "0081234561",
        "Tanggal": "26/07/2026",
        "Waktu": "07:15",
        "Keterangan": "Hadir",
        "Catatan": "Siap mengikuti kegiatan BK"
      },
      {
        "Nama Lengkap": "Siti Nur Aini",
        "Kelas (Rombel)": "7B",
        "NISN / No Absen": "0081234562",
        "Tanggal": "26/07/2026",
        "Waktu": "07:18",
        "Keterangan": "Hadir",
        "Catatan": ""
      },
      {
        "Nama Lengkap": "Ahmad Rian Hidayat",
        "Kelas (Rombel)": "7C",
        "NISN / No Absen": "0081234563",
        "Tanggal": "26/07/2026",
        "Waktu": "07:20",
        "Keterangan": "Perlu Konseling BK",
        "Catatan": "Ingin diskusi strategi membagi waktu main HP"
      },
      {
        "Nama Lengkap": "Dina Kusuma Putri",
        "Kelas (Rombel)": "7D",
        "NISN / No Absen": "0081234564",
        "Tanggal": "26/07/2026",
        "Waktu": "07:22",
        "Keterangan": "Izin",
        "Catatan": "Izin acara keluarga"
      }
    ];

    const worksheet = XLSX.utils.json_to_sheet(templateData);
    worksheet['!cols'] = [
      { wch: 25 },
      { wch: 15 },
      { wch: 18 },
      { wch: 15 },
      { wch: 10 },
      { wch: 22 },
      { wch: 35 }
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Templat Presensi");

    XLSX.writeFile(workbook, "Templat_Presensi_Siswa_Kelas7_SMPN7.xlsx");
  };

  // --- UNDUH REKAP PRESENSI EXCEL (.xlsx) ---
  const handleExportExcel = () => {
    if (filteredPresensi.length === 0) {
      alert('Belum ada data presensi untuk diunduh.');
      return;
    }

    const exportData = filteredPresensi.map((p, idx) => ({
      "No": idx + 1,
      "Nama Lengkap": p.nama,
      "Kelas (Rombel)": p.rombel,
      "NISN / No Absen": p.nisn,
      "Tanggal": p.tanggal,
      "Waktu": p.waktu,
      "Keterangan": p.keterangan,
      "Catatan": p.catatan || "-"
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    worksheet['!cols'] = [
      { wch: 5 },
      { wch: 25 },
      { wch: 15 },
      { wch: 18 },
      { wch: 15 },
      { wch: 10 },
      { wch: 22 },
      { wch: 35 }
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Presensi");

    const filename = filterRombel === 'semua' 
      ? "Rekap_Presensi_BK_Kelas7_SMPN7_Semua.xlsx" 
      : `Rekap_Presensi_BK_Kelas7_${filterRombel}.xlsx`;

    XLSX.writeFile(workbook, filename);
  };

  // --- UPLOAD EXCEL FILE (.xlsx) & SINKRONKAN DAFTAR KELAS ---
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const rawData = XLSX.utils.sheet_to_json<any>(worksheet);

        if (!rawData || rawData.length === 0) {
          alert('File Excel kosong atau format tidak sesuai.');
          return;
        }

        const now = new Date();
        const defaultDateStr = now.toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const defaultTimeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

        // Group students from uploaded excel by Rombel class
        const excelRosters: Partial<Record<RombelClass, SiswaMaster[]>> = {};
        const newPresensiItems: PresensiItem[] = [];

        rawData.forEach((row, i) => {
          const namaVal = row["Nama Lengkap"] || row["Nama"] || row["nama"] || row["NAMA"] || "";
          const rombelRaw = row["Kelas (Rombel)"] || row["Kelas"] || row["Rombel"] || row["rombel"] || rombel;
          const nisnVal = String(row["NISN / No Absen"] || row["NISN"] || row["No Absen"] || row["nisn"] || `008${Date.now() + i}`);
          const tanggalVal = String(row["Tanggal"] || row["tanggal"] || defaultDateStr);
          const waktuVal = String(row["Waktu"] || row["waktu"] || defaultTimeStr);
          const keteranganRaw = String(row["Keterangan"] || row["keterangan"] || "Hadir").trim();
          const catatanVal = String(row["Catatan"] || row["catatan"] || "");

          if (!namaVal || String(namaVal).trim() === "") return;

          let cleanRombel: RombelClass = '7A';
          const formattedRombel = String(rombelRaw).toUpperCase().trim();
          if (formattedRombel.includes('7B') || formattedRombel === 'B') cleanRombel = '7B';
          else if (formattedRombel.includes('7C') || formattedRombel === 'C') cleanRombel = '7C';
          else if (formattedRombel.includes('7D') || formattedRombel === 'D') cleanRombel = '7D';
          else if (formattedRombel.includes('7E') || formattedRombel === 'E') cleanRombel = '7E';
          else if (formattedRombel.includes('7F') || formattedRombel === 'F') cleanRombel = '7F';
          else if (formattedRombel.includes('7G') || formattedRombel === 'G') cleanRombel = '7G';
          else if (formattedRombel.includes('7H') || formattedRombel === 'H') cleanRombel = '7H';
          else cleanRombel = '7A';

          if (!excelRosters[cleanRombel]) {
            excelRosters[cleanRombel] = [];
          }

          const existingInList = excelRosters[cleanRombel]!.find(s => s.nama.toLowerCase() === String(namaVal).trim().toLowerCase());
          if (!existingInList) {
            excelRosters[cleanRombel]!.push({
              id: `xl-${cleanRombel}-${i}-${Math.random().toString(36).substring(2, 6)}`,
              nama: String(namaVal).trim(),
              nisn: nisnVal,
              rombel: cleanRombel
            });
          }

          let cleanKet: PresensiItem['keterangan'] = 'Hadir';
          const ketLower = keteranganRaw.toLowerCase();
          if (ketLower.includes('sakit')) cleanKet = 'Sakit';
          else if (ketLower.includes('izin')) cleanKet = 'Izin';
          else if (ketLower.includes('alpa') || ketLower.includes('alpha')) cleanKet = 'Alpa';
          else if (ketLower.includes('konseling') || ketLower.includes('perlu')) cleanKet = 'Perlu Konseling BK';
          else cleanKet = 'Hadir';

          newPresensiItems.push({
            id: `${Date.now()}-${i}-${Math.random()}`,
            nama: String(namaVal).trim(),
            rombel: cleanRombel,
            nisn: nisnVal,
            tanggal: tanggalVal,
            waktu: waktuVal,
            keterangan: cleanKet,
            catatan: catatanVal
          });
        });

        // Update master student roster with uploaded Excel roster
        setSiswaMaster(prev => {
          const next = { ...prev };
          Object.keys(excelRosters).forEach((rKey) => {
            const r = rKey as RombelClass;
            if (excelRosters[r] && excelRosters[r]!.length > 0) {
              next[r] = excelRosters[r]!;
            }
          });
          return next;
        });

        // Also append to live presensi list
        if (newPresensiItems.length > 0) {
          setPresensiList(prev => [...newPresensiItems, ...prev]);
          const updatedClasses = Object.keys(excelRosters).join(', ');
          setUploadMessage(`Berhasil menyinkronkan daftar siswa & presensi untuk Kelas ${updatedClasses} (${newPresensiItems.length} data)!`);
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
          setTimeout(() => setUploadMessage(null), 5000);
        } else {
          alert('Tidak ditemukan data siswa yang valid pada file Excel. Pastikan terdapat kolom "Nama Lengkap".');
        }

      } catch (err) {
        console.error(err);
        alert('Gagal membaca file Excel. Pastikan file berformat .xlsx atau .xls!');
      }
    };

    reader.readAsBinaryString(file);
    e.target.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !nisn.trim()) {
      alert('Mohon isi Nama Lengkap dan NISN/No Absen dengan benar!');
      return;
    }

    const trimmedNama = nama.trim();
    const trimmedNisn = nisn.trim();

    // Auto-save student name to permanent class roster in siswaMaster if not present yet
    setSiswaMaster(prev => {
      const currentList = prev[rombel] || [];
      const exists = currentList.some(s => s.nama.toLowerCase() === trimmedNama.toLowerCase());
      if (!exists) {
        const newStudent: SiswaMaster = {
          id: `perm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          nama: trimmedNama,
          nisn: trimmedNisn,
          rombel: rombel
        };
        return {
          ...prev,
          [rombel]: [...currentList, newStudent]
        };
      }
      return prev;
    });

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const newItem: PresensiItem = {
      id: Date.now().toString(),
      nama: trimmedNama,
      rombel,
      nisn: trimmedNisn,
      tanggal: dateStr,
      waktu: timeStr,
      keterangan,
      catatan
    };

    setPresensiList(prev => [newItem, ...prev]);
    setIsSuccess(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    // Reset form after short delay
    setTimeout(() => {
      setNama('');
      setNisn('');
      setCatatan('');
      setIsSuccess(false);
    }, 4000);
  };

  const filteredPresensi = presensiList.filter(p => {
    if (filterRombel === 'semua') return true;
    return p.rombel === filterRombel;
  });

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
          <UserCheck className="w-4 h-4 text-emerald-400" />
          <span>Pengisian Mandiri Siswa 8 Rombel</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Form Presensi Kehadiran Siswa Kelas 7
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Silakan isi kehadiranmu secara mandiri sebelum memulai kegiatan bimbingan konseling. Data otomatis terekap secara real-time untuk Bu Wiwik Ismiati.
        </p>
      </div>

      {/* EXCEL IMPORT & EXPORT TEMPLATE TOOLBAR */}
      <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Kelola Presensi via Microsoft Excel (.xlsx)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Unduh templat standar, upload file rekap sekaligus, atau unduh laporan presensi terkini.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Download Template Button */}
            <button
              onClick={handleDownloadTemplate}
              id="btn-unduh-templat-excel"
              className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <Download className="w-4 h-4 text-emerald-500" />
              <span>Unduh Templat Excel (.xlsx)</span>
            </button>

            {/* Hidden File Input & Upload Button */}
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".xlsx, .xls"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              id="btn-upload-excel"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <FileUp className="w-4 h-4" />
              <span>Upload File Excel (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* Upload Success Alert */}
        {uploadMessage && (
          <div className="bg-emerald-950/60 border border-emerald-500/60 p-4 rounded-xl text-emerald-200 text-xs flex items-center justify-between gap-2 animate-in fade-in-50">
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{uploadMessage}</span>
            </div>
            <button onClick={() => setUploadMessage(null)} className="text-emerald-400 hover:text-white font-bold text-xs">✕</button>
          </div>
        )}

        <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
          <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Petunjuk Penggunaan Excel:</span> Gunakan button <span className="font-semibold text-emerald-600 dark:text-emerald-400">&ldquo;Unduh Templat Excel&rdquo;</span> untuk mendapatkan format file resmi (kolom: Nama Lengkap, Kelas, NISN, Tanggal, Waktu, Keterangan, Catatan). Setelah diisi oleh wali kelas/siswa, unggah kembali melalui button <span className="font-semibold text-emerald-600 dark:text-emerald-400">&ldquo;Upload File Excel&rdquo;</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-lg space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-500" />
              <span>Isi Kehadiran Diri</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Pilih kelas dari 8 Rombel (7A - 7H)</p>
          </div>

          {isSuccess && (
            <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-emerald-300 text-xs space-y-1 animate-in fade-in-50">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Presensi Berhasil Terkirim!</span>
              </div>
              <p>Terima kasih {nama}, data kehadiranmu kelas {rombel} sudah tersimpan.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Rombel Selection (7A - 7H) */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 dark:text-slate-300 block">
                Pilih Kelas (8 Rombel):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {rombels.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => handleSelectRombel(r)}
                    className={`py-2 rounded-xl font-bold border transition-all ${
                      rombel === r
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* List Siswa Kelas Selected */}
            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 p-3.5 rounded-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 text-xs">
                  <Users className="w-4 h-4 text-emerald-500" />
                  <span>Daftar Siswa Kelas {rombel}:</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-extrabold">
                    {activeClassStudents.length} Siswa
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsAddingStudent(!isAddingStudent)}
                    className="text-[10px] bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-emerald-400 px-2 py-0.5 rounded-lg font-bold flex items-center gap-1 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                  >
                    <UserPlus className="w-3 h-3" />
                    <span>+ Tambah</span>
                  </button>
                </div>
              </div>

              {/* Form Tambah Siswa Baru Manual */}
              {isAddingStudent && (
                <div className="bg-white dark:bg-slate-900 border border-emerald-400 p-3 rounded-xl space-y-2 animate-in fade-in-50">
                  <p className="font-extrabold text-[11px] text-emerald-700 dark:text-emerald-300">
                    Tambah Siswa Baru ke Kelas {rombel}:
                  </p>
                  <input
                    type="text"
                    placeholder="Nama Lengkap Siswa"
                    value={newNama}
                    onChange={(e) => setNewNama(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="NISN / No Absen (Opsional)"
                    value={newNisn}
                    onChange={(e) => setNewNisn(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white"
                  />
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsAddingStudent(false)}
                      className="px-2.5 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[10px] font-bold"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      onClick={handleAddStudentToRoster}
                      className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-extrabold hover:bg-emerald-500"
                    >
                      Simpan Siswa
                    </button>
                  </div>
                </div>
              )}

              {/* Dropdown Select Siswa */}
              <select
                value={selectedStudentId}
                onChange={(e) => {
                  const selId = e.target.value;
                  setSelectedStudentId(selId);
                  const st = activeClassStudents.find(s => s.id === selId);
                  if (st) {
                    setNama(st.nama);
                    setNisn(st.nisn);
                  }
                }}
                className="w-full bg-white dark:bg-slate-800 border border-emerald-400 dark:border-emerald-700 text-slate-900 dark:text-white rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              >
                {activeClassStudents.length === 0 ? (
                  <option value="">-- Belum ada siswa di Kelas {rombel} --</option>
                ) : (
                  <>
                    <option value="">-- Klik untuk Pilih Nama Siswa Kelas {rombel} --</option>
                    {activeClassStudents.map((s, idx) => (
                      <option key={s.id} value={s.id}>
                        {idx + 1}. {s.nama} (NISN: {s.nisn})
                      </option>
                    ))}
                  </>
                )}
              </select>

              {/* Quick Select Student Name Chips with Delete Option */}
              {activeClassStudents.length > 0 ? (
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                      Klik nama untuk memilih, atau tekan icon <span className="text-rose-500 font-bold">🗑️</span> untuk menghapus:
                    </p>
                    <button
                      type="button"
                      onClick={handleResetToDefault}
                      className="text-[10px] text-slate-500 hover:text-emerald-600 underline flex items-center gap-1"
                      title="Kembalikan daftar nama kelas ke awal"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset Kelas</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1 scrollbar-thin">
                    {activeClassStudents.map((s) => (
                      <div
                        key={s.id}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
                          nama === s.nama
                            ? 'bg-emerald-600 text-white border-emerald-500 font-bold shadow'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-emerald-500'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedStudentId(s.id);
                            setNama(s.nama);
                            setNisn(s.nisn);
                          }}
                          className="text-left"
                        >
                          {s.nama}
                        </button>
                        <button
                          type="button"
                          title={`Hapus ${s.nama} dari Kelas ${rombel}`}
                          onClick={(e) => handleDeleteStudentFromRoster(e, s.id, s.nama)}
                          className="text-rose-500 hover:text-rose-700 dark:hover:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-950/60 rounded p-1 transition-all ml-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl text-center text-xs text-slate-500">
                  Belum ada siswa terdaftar di Kelas {rombel}. Silakan tambah manual atau upload file Excel (.xlsx).
                </div>
              )}
            </div>

            {/* Nama Lengkap Input Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-700 dark:text-slate-300 block">
                  Nama Lengkap Siswa:
                </label>
                {nama.trim() && (
                  <button
                    type="button"
                    onClick={() => {
                      const trimmedNama = nama.trim();
                      const trimmedNisn = nisn.trim() || `008${Date.now().toString().slice(-6)}`;
                      setSiswaMaster(prev => {
                        const currentList = prev[rombel] || [];
                        const exists = currentList.some(s => s.nama.toLowerCase() === trimmedNama.toLowerCase());
                        if (exists) return prev;
                        const newStudent: SiswaMaster = {
                          id: `perm-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                          nama: trimmedNama,
                          nisn: trimmedNisn,
                          rombel: rombel
                        };
                        return {
                          ...prev,
                          [rombel]: [...currentList, newStudent]
                        };
                      });
                      setUploadMessage(`Nama "${trimmedNama}" berhasil disimpan permanen di daftar Kelas ${rombel}.`);
                      setTimeout(() => setUploadMessage(null), 3000);
                    }}
                    className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-lg font-bold border border-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>Simpan Nama Permanen</span>
                  </button>
                )}
              </div>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Ketik Nama Lengkap Siswa"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* NISN or No Absen */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 dark:text-slate-300 block">
                NISN / No Absen:
              </label>
              <input
                type="text"
                required
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                placeholder="Ketik NISN atau No Absen"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Keterangan Kehadiran Lengkap */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 dark:text-slate-300 block">
                Keterangan Kehadiran:
              </label>
              <div className="space-y-2">
                {[
                  { value: 'Hadir', label: 'Hadir (Siap Mengikuti Layanan BK)', color: 'text-emerald-600 dark:text-emerald-400' },
                  { value: 'Sakit', label: 'Sakit (Ada Surat/Pemberitahuan)', color: 'text-amber-600 dark:text-amber-400' },
                  { value: 'Izin', label: 'Izin (Ada Keperluan Keluarga/Sekolah)', color: 'text-cyan-600 dark:text-cyan-400' },
                  { value: 'Alpa', label: 'Alpa (Tanpa Keterangan)', color: 'text-rose-600 dark:text-rose-400' },
                  { value: 'Perlu Konseling BK', label: 'Perlu Konseling BK (Ingin Curhat ke Bu Wiwik)', color: 'text-purple-600 dark:text-purple-400 font-bold' },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      keterangan === opt.value
                        ? 'bg-emerald-950/20 border-emerald-500/60 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="keterangan"
                      value={opt.value}
                      checked={keterangan === opt.value}
                      onChange={() => setKeterangan(opt.value as any)}
                      className="accent-emerald-500"
                    />
                    <span className={`text-xs ${opt.color}`}>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Catatan untuk Guru BK */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 dark:text-slate-300 block">
                Catatan / Pesan untuk Bu Wiwik Ismiati (Opsional):
              </label>
              <textarea
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Tuliskan topik yang ingin kamu curhatkan atau alasan izin..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows={2}
              ></textarea>
            </div>

            <button
              type="submit"
              id="btn-simpan-presensi"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Simpan Presensi Saya</span>
            </button>
          </form>
        </div>

        {/* Live Attendance List Table Column */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ListFilter className="w-5 h-5 text-emerald-500" />
                <span>Daftar Presensi Hari Ini</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">SMPN 7 Pasuruan • Total {filteredPresensi.length} Terdata</p>
            </div>

            <div className="flex items-center gap-2">
              {/* Export Rekap Button */}
              <button
                onClick={handleExportExcel}
                id="btn-unduh-rekap-excel"
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                title="Unduh Rekap Presensi Terkini ke Excel"
              >
                <Download className="w-3.5 h-3.5 text-emerald-500" />
                <span>Export Excel</span>
              </button>

              {/* Filter class */}
              <select
                value={filterRombel}
                onChange={(e) => setFilterRombel(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs rounded-xl px-3 py-1.5 font-bold focus:outline-none"
              >
                <option value="semua">Semua (7A-7H)</option>
                {rombels.map(r => (
                  <option key={r} value={r}>Kelas {r}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredPresensi.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{item.nama}</span>
                    <span className="bg-emerald-950 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-800">
                      {item.rombel}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">NISN: {item.nisn} • {item.waktu} WIB</p>
                  {item.catatan && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 italic bg-slate-200/50 dark:bg-slate-900/50 p-1.5 rounded">
                      &ldquo;{item.catatan}&rdquo;
                    </p>
                  )}
                </div>

                <div className="text-right flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold inline-block ${
                    item.keterangan === 'Hadir' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' :
                    item.keterangan === 'Perlu Konseling BK' ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-500/30' :
                    'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {item.keterangan}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleDeletePresensi(e, item.id, item.nama)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-100 dark:hover:bg-rose-950/60 rounded-lg transition-colors cursor-pointer"
                    title={`Hapus presensi ${item.nama}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

