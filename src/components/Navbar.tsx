import React, { useState } from 'react';
import { NavTab } from '../types';
import {
  Home,
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Video,
  UserCheck,
  BookOpen,
  HelpCircle,
  Gamepad2,
  Sparkles,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'rpp', label: 'RPP Mendalam', icon: <FileText className="w-4 h-4" />, badge: 'Tabel' },
    { id: 'diagnostik', label: 'Asesmen Diagnostik', icon: <ClipboardCheck className="w-4 h-4" />, badge: 'Awal' },
    { id: 'video', label: 'Video Interaktif', icon: <Video className="w-4 h-4" /> },
    { id: 'presensi', label: 'Presensi 8 Rombel', icon: <UserCheck className="w-4 h-4" />, badge: 'Siswa' },
    { id: 'materi', label: 'Materi BK', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'soal', label: '30 Contoh Soal', icon: <HelpCircle className="w-4 h-4" />, badge: '5 Tipe' },
    { id: 'kuis', label: 'Ular Tangga & TTS', icon: <Gamepad2 className="w-4 h-4" />, badge: 'HOTS' },
    { id: 'permainan', label: 'Permainan BK', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const handleSelect = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 text-slate-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <div 
            onClick={() => handleSelect('beranda')}
            className="flex items-center gap-3 cursor-pointer group py-2"
          >
            <div className="relative w-12 h-12 bg-white/10 rounded-xl p-1 border border-emerald-400/30 flex items-center justify-center shadow-inner group-hover:border-emerald-400 transition-colors">
              <img 
                src="https://iili.io/KDFk4fI.png" 
                alt="Logo SMPN 7 Pasuruan" 
                className="w-10 h-10 object-contain drop-shadow"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback icon if network image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
              <GraduationCap className="w-6 h-6 text-emerald-400 hidden group-hover:block" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                  SMP NEGERI 7 PASURUAN
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                Media Pembelajaran Interaktif BK Kelas 7
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Ibu Wiwik Ismiati, S.Pd. • Guru Bimbingan dan Konseling
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-emerald-900/40 border border-emerald-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-emerald-200' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase ${
                      isActive ? 'bg-emerald-950 text-emerald-200' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none border border-slate-700"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900/98 border-b border-emerald-500/30 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white border border-emerald-400 shadow'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-emerald-400'}>{item.icon}</span>
                  <div className="flex-1 truncate">
                    <div>{item.label}</div>
                    {item.badge && (
                      <span className="text-[9px] text-emerald-300 font-mono block">
                        [{item.badge}]
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
