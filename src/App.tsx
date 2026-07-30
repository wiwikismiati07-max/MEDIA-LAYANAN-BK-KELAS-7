import React, { useState, useEffect } from 'react';
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

  // Real live attendance list (starts clean & empty, persists to localStorage)
  const [presensiList, setPresensiList] = useState<PresensiItem[]>(() => {
    const saved = localStorage.getItem('smpn7_presensi_list_clean');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('smpn7_presensi_list_clean', JSON.stringify(presensiList));
  }, [presensiList]);

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
