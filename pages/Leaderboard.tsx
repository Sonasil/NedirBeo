
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('Tüm Kıbrıs');
  const [timePeriod, setTimePeriod] = useState<'thisWeek' | 'allTime'>('thisWeek');

  const regions = ['Tüm Kıbrıs', 'Lefkoşa', 'Gazimağusa', 'Girne', 'Güzelyurt', 'İskele', 'Lefke'];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32 animate-in fade-in duration-700">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-black/5 h-16">
        <div className="text-center">
          <h1 className="text-xs font-black uppercase tracking-widest text-text-main dark:text-white leading-tight">Liderlik Tablosu</h1>
          <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">{selectedRegion}</p>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 lg:px-12 py-4 lg:py-6">
        
        {/* Compact Desktop Header */}
        <div className="hidden lg:flex items-center justify-between mb-6">
           <div className="flex items-center gap-6">
              <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl font-black">emoji_events</span>
              </div>
              <h1 className="text-4xl font-black tracking-tighter text-stone-900 dark:text-white">Şampiyonlar Ligi</h1>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="flex bg-stone-100 dark:bg-stone-900/50 p-1 rounded-xl border border-black/[0.03] shadow-inner">
                {['thisWeek', 'allTime'].map((p) => (
                  <button 
                    key={p}
                    onClick={() => setTimePeriod(p as any)}
                    className={`px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${timePeriod === p ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-stone-400 hover:text-stone-600'}`}
                  >
                    {p === 'thisWeek' ? 'Bu Hafta' : 'Hepsi'}
                  </button>
                ))}
              </div>
              
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-white dark:bg-surface-dark border border-black/5 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-stone-600 outline-none shadow-sm cursor-pointer"
              >
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
           </div>
        </div>

        {/* Podium Area - Height Optimized for Fold */}
        <div className="flex items-end justify-center gap-2 lg:gap-8 mb-8 pt-8 lg:pt-12 px-2 max-w-4xl mx-auto">
          
          {/* #2nd Place */}
          <div className="flex flex-1 flex-col items-center">
            <div className="relative mb-3 lg:mb-4">
              <div className="size-16 lg:size-36 rounded-3xl border-4 border-stone-200 p-1 bg-white dark:bg-surface-dark overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/user2/400" alt="2nd" className="w-full h-full rounded-2xl object-cover" />
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-400 text-white size-7 lg:size-10 rounded-full flex items-center justify-center text-[10px] lg:text-lg font-black border-4 border-background-light dark:border-background-dark shadow-lg">2</div>
            </div>
            <div className="text-center mb-2">
              <p className="text-[10px] lg:text-lg font-black text-text-main dark:text-white truncate w-full">@deniz_k</p>
              <p className="text-[8px] lg:text-[10px] font-black text-stone-500 uppercase tracking-tighter">215 KELİME</p>
            </div>
            <div className="h-12 lg:h-32 w-full rounded-t-2xl bg-gradient-to-t from-stone-100 dark:from-white/5 to-transparent border-t border-stone-200 dark:border-white/10" />
          </div>

          {/* #1st Place */}
          <div className="flex flex-1 flex-col items-center -mt-8 lg:-mt-16 relative z-10">
            <div className="relative mb-4 lg:mb-6">
              <div className="size-24 lg:size-48 rounded-[2rem] lg:rounded-[2.5rem] border-4 lg:border-[8px] border-primary p-1.5 lg:p-2.5 bg-white dark:bg-surface-dark overflow-hidden shadow-2xl shadow-primary/20">
                <img src="https://picsum.photos/seed/winner/400" alt="1st" className="w-full h-full rounded-[1.5rem] lg:rounded-[2rem] object-cover" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 lg:px-8 lg:py-2 rounded-xl text-[10px] lg:text-sm font-black shadow-lg border-4 border-background-light dark:border-background-dark whitespace-nowrap tracking-widest uppercase">Şampiyon</div>
            </div>
            <div className="text-center mb-2">
              <p className="text-xs lg:text-2xl font-black text-text-main dark:text-white truncate w-full">@mert_y</p>
              <p className="text-[10px] lg:text-sm font-black text-primary uppercase mt-1 tracking-tighter">250 KELİME</p>
            </div>
            <div className="h-20 lg:h-48 w-full rounded-t-[2.5rem] bg-gradient-to-t from-primary/10 to-transparent border-t-2 border-primary/20" />
          </div>

          {/* #3rd Place */}
          <div className="flex flex-1 flex-col items-center">
            <div className="relative mb-3 lg:mb-4">
              <div className="size-16 lg:size-36 rounded-3xl border-4 border-secondary/30 p-1 bg-white dark:bg-surface-dark overflow-hidden shadow-lg">
                <img src="https://picsum.photos/seed/user3/400" alt="3rd" className="w-full h-full rounded-2xl object-cover" />
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white size-7 lg:size-10 rounded-full flex items-center justify-center text-[10px] lg:text-lg font-black border-4 border-background-light dark:border-background-dark shadow-lg">3</div>
            </div>
            <div className="text-center mb-2">
              <p className="text-[10px] lg:text-lg font-black text-text-main dark:text-white truncate w-full">@ayse_t</p>
              <p className="text-[8px] lg:text-[10px] font-black text-secondary uppercase tracking-tighter">198 KELİME</p>
            </div>
            <div className="h-8 lg:h-24 w-full rounded-t-2xl bg-gradient-to-t from-secondary/10 to-transparent border-t border-secondary/20" />
          </div>
        </div>

        {/* Integrated User Rank Card - Replaces floating bar */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-stone-900 dark:bg-surface-dark p-4 lg:p-6 rounded-[2rem] border border-white/10 shadow-2xl flex items-center gap-4 lg:gap-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="material-symbols-outlined text-white text-6xl">person</span>
            </div>
            
            <div className="flex flex-col items-center justify-center px-4 border-r border-white/10">
              <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">SIRAN</span>
              <span className="text-white font-black text-2xl lg:text-4xl italic">42</span>
            </div>

            <div className="flex items-center gap-4 flex-1">
              <div className="relative">
                <img src={MOCK_USER.avatar} alt="Me" className="size-10 lg:size-14 rounded-full object-cover border-2 border-primary shadow-lg" />
                <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-stone-900" />
              </div>
              <div>
                <p className="text-white font-black text-sm lg:text-xl">Sen</p>
                <div className="flex items-center gap-2">
                  <p className="text-[9px] lg:text-xs font-bold text-stone-500 uppercase">@{MOCK_USER.username}</p>
                  <span className="text-[9px] text-green-400 font-black">+2 SIRA</span>
                </div>
              </div>
            </div>

            <div className="text-right px-4">
               <p className="text-primary font-black text-xl lg:text-3xl leading-none">{MOCK_USER.stats.wordsCount}</p>
               <p className="text-[8px] lg:text-[10px] font-bold text-stone-500 uppercase mt-1">KELİME</p>
            </div>
          </div>
        </div>

        {/* User List Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-[1400px] mx-auto">
          {[
            { rank: 4, name: 'Canan Demir', handle: '@canan_d', count: '185' },
            { rank: 5, name: 'Burak Yılmaz', handle: '@burak_y', count: '172' },
            { rank: 6, name: 'Elif Kaya', handle: '@elif_k', count: '165' },
            { rank: 7, name: 'Hüseyin Akın', handle: '@huso_ak', count: '158' },
            { rank: 8, name: 'Zeynep Gür', handle: '@zey_gur', count: '142' },
            { rank: 9, name: 'Kemal Sunal', handle: '@k_sunal', count: '139' },
          ].map((u) => (
            <div key={u.rank} className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 lg:p-6 rounded-2xl border border-black/5 shadow-sm hover:border-primary/20 hover:-translate-y-1 transition-all cursor-pointer group">
              <span className="w-8 text-center text-stone-300 group-hover:text-primary transition-colors font-black text-sm lg:text-xl italic">#{u.rank}</span>
              <img src={`https://picsum.photos/seed/${u.rank}/200`} alt={u.name} className="size-10 lg:size-12 rounded-xl object-cover border-2 border-stone-50 dark:border-white/10" />
              <div className="flex-1 min-w-0">
                <p className="text-xs lg:text-base font-black text-text-main dark:text-white truncate">{u.name}</p>
                <p className="text-[9px] lg:text-[10px] font-bold text-text-muted uppercase tracking-tight opacity-60">@{u.handle}</p>
              </div>
              <div className="text-right">
                <span className="text-xs lg:text-lg font-black text-primary leading-none">{u.count}</span>
                <p className="text-[8px] font-bold text-stone-300 uppercase mt-1">KATKI</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
