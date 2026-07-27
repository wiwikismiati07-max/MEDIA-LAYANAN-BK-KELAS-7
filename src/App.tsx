import React, { useState } from 'react';
import { NavTab, PresensiItem } from './types';
import { Navbar } from './components/Navbar';
import { BerandaView } from './components/BerandaView';
import { DashboardView } from './components/DashboardView';
import { RppView } from './components/RppView';
import { DiagnostikView } from './components/DiagnostikView';
import { VideoStoryView } from './components/VideoStoryView';
import { PresensiView } from './components/PresensiView';
import { MateriView } from './components/MateriView';
import { ContohSoalView } from './components/ContohSoalView';
import { KuisView } from './components/KuisView';
import { PermainanView } from './components/PermainanView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('beranda');

  // Sample initial attendance list covering 8 rombels (7A - 7H)
  const [presensiList, setPresensiList] = useState<PresensiItem[]>([
    { id: '1', nama: 'Muhammad Bayu Pratama', rombel: '7A', nisn: '0081234561', tanggal: '26/07/2026', waktu: '07:15', keterangan: 'Hadir', catatan: 'Siap mengikuti layanan BK' },
    { id: '2', nama: 'Siti Nur Aini', rombel: '7B', nisn: '0081234562', tanggal: '26/07/2026', waktu: '07:18', keterangan: 'Hadir' },
    { id: '3', nama: 'Ahmad Rian Hidayat', rombel: '7C', nisn: '0081234563', tanggal: '26/07/2026', waktu: '07:20', keterangan: 'Perlu Konseling BK', catatan: 'Ingin curhat tentang strategi membagi waktu main HP' },
    { id: '4', nama: 'Dina Kusuma Putri', rombel: '7D', nisn: '0081234564', tanggal: '26/07/2026', waktu: '07:22', keterangan: 'Hadir' },
    { id: '5', nama: 'Eko Prasetyo', rombel: '7E', nisn: '0081234565', tanggal: '26/07/2026', waktu: '07:25', keterangan: 'Sakit', catatan: 'Izin sakit flu dengan surat dokter' },
    { id: '6', nama: 'Fani Indah Lestari', rombel: '7F', nisn: '0081234566', tanggal: '26/07/2026', waktu: '07:28', keterangan: 'Hadir' },
    { id: '7', nama: 'Gilang Ramadhan', rombel: '7G', nisn: '0081234567', tanggal: '26/07/2026', waktu: '07:30', keterangan: 'Hadir' },
    { id: '8', nama: 'Hani Sofia', rombel: '7H', nisn: '0081234568', tanggal: '26/07/2026', waktu: '07:32', keterangan: 'Perlu Konseling BK', catatan: 'Konsultasi minat bakat ekstrakurikuler' }
  ]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Sticky Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'beranda' && <BerandaView setActiveTab={setActiveTab} />}
        {activeTab === 'dashboard' && <DashboardView presensiList={presensiList} />}
        {activeTab === 'rpp' && <RppView />}
        {activeTab === 'diagnostik' && <DiagnostikView />}
        {activeTab === 'video' && <VideoStoryView />}
        {activeTab === 'presensi' && <PresensiView presensiList={presensiList} setPresensiList={setPresensiList} />}
        {activeTab === 'materi' && <MateriView />}
        {activeTab === 'soal' && <ContohSoalView />}
        {activeTab === 'kuis' && <KuisView />}
        {activeTab === 'permainan' && <PermainanView />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
