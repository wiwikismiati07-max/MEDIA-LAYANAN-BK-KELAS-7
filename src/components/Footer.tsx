import React from 'react';
import { Heart, GraduationCap, ShieldCheck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-emerald-500/20 text-slate-400 text-xs py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-slate-800 pb-6">
          {/* Col 1: Identity */}
          <div className="flex items-center gap-3">
            <img 
              src="https://iili.io/KDFk4fI.png" 
              alt="Logo SMPN 7 Pasuruan" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="text-sm font-bold text-white">SMP NEGERI 7 PASURUAN</h4>
              <p className="text-[11px] text-emerald-400 font-medium">Bimbingan dan Konseling Kelas 7</p>
              <p className="text-[10px] text-slate-500">Ibu Wiwik Ismiati, S.Pd.</p>
            </div>
          </div>

          {/* Col 2: Tagline */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>BK Sahabat Siswa • Deep Learning</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mewujudkan pengalaman belajar Bimbingan Konseling yang Berkesadaran (Mindful), Bermakna (Meaningful), dan Menggembirakan (Joyful).
            </p>
          </div>

          {/* Col 3: Address & School Info */}
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-1 text-slate-300 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kota Pasuruan, Jawa Timur</span>
            </div>
            <p className="text-[10px] text-slate-500">
              Mencakup 8 Rombel: Kelas 7A, 7B, 7C, 7D, 7E, 7F, 7G, dan 7H
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} WIWIK ISMIATI, S.Pd. - Media Pembelajaran Interaktif BK SMPN 7 Pasuruan.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>untuk Peserta Didik Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
