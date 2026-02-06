
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_WORDS } from '../constants';

interface ExploreProps {
  onAddClick?: () => void;
}

const Explore: React.FC<ExploreProps> = ({ onAddClick }) => {
  const navigate = useNavigate();
  const [isRolling, setIsRolling] = useState(false);

  const handleRandomDiscovery = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MOCK_WORDS.length);
      const randomWord = MOCK_WORDS[randomIndex];
      navigate(`/word/${randomWord.id}`);
      setIsRolling(false);
    }, 800);
  };

  return (
    <div className="pb-32 lg:pb-20 animate-in fade-in duration-700 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-[1600px] mx-auto lg:px-12 pt-6 lg:pt-10">
        
        {/* Header Section */}
        <div className="px-6 lg:px-0 mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl lg:text-7xl font-black tracking-tighter mb-2 lg:mb-4">Keşfet</h1>
            <p className="text-text-secondary text-sm lg:text-xl font-medium opacity-80 leading-relaxed italic">
              Kıbrıs ağzının saklı hazinelerini keşfetmeye başla.
            </p>
          </div>
          
          <div className="relative group w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 lg:pl-5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
              <span className="material-symbols-outlined text-xl lg:text-2xl">search</span>
            </div>
            <input 
              type="text"
              placeholder="Kelime veya deyim ara..."
              className="w-full h-12 lg:h-16 pl-12 lg:pl-14 pr-6 rounded-2xl lg:rounded-[1.5rem] border-none bg-white dark:bg-white/5 shadow-lg lg:shadow-xl shadow-black/[0.03] text-sm lg:text-lg font-semibold focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-stone-300"
            />
          </div>
        </div>

        {/* Hero Section - "Beni Şaşırt" */}
        <div className="px-6 lg:px-0 mb-10 lg:mb-20">
          <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] bg-stone-900 dark:bg-surface-dark p-8 lg:p-24 text-white shadow-2xl border border-white/5">
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
              <div className={`size-16 lg:size-32 rounded-full bg-primary/20 flex items-center justify-center mb-4 lg:mb-8 transition-transform duration-1000 ${isRolling ? 'rotate-180 scale-90' : 'hover:rotate-12 hover:scale-110'}`}>
                <span className="material-symbols-outlined text-3xl lg:text-6xl text-primary font-black">casino</span>
              </div>
              <h2 className="text-xl lg:text-5xl font-black mb-3 lg:mb-6 italic tracking-tight uppercase tracking-[0.1em] lg:tracking-[0.2em]">"Beni Şaşırt!"</h2>
              <p className="text-white/60 text-xs lg:text-xl font-medium leading-relaxed mb-6 lg:mb-10 px-4">
                Rastgele bir kelime ile Kıbrıs kültürünü tanı. Zar at ve öğren!
              </p>
              <button 
                onClick={handleRandomDiscovery}
                disabled={isRolling}
                className="w-full max-w-md h-12 lg:h-16 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white rounded-xl lg:rounded-[1.5rem] font-black text-xs lg:text-base uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 lg:gap-4 shadow-xl lg:shadow-2xl shadow-primary/40"
              >
                {isRolling ? (
                  <span className="animate-pulse tracking-tighter">SEÇİLİYOR...</span>
                ) : (
                  <>ZAR AT <span className="material-symbols-outlined text-lg lg:text-2xl">arrow_forward</span></>
                )}
              </button>
            </div>
            
            <span className="absolute -right-8 -bottom-8 lg:-right-16 lg:-bottom-16 material-symbols-outlined text-white/[0.02] text-[10rem] lg:text-[25rem] rotate-12 pointer-events-none select-none">
              history_edu
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-6 lg:px-0 space-y-8 lg:space-y-12 mb-10 lg:mb-20">
          <div className="flex items-center gap-3">
            <div className="size-8 lg:size-10 bg-primary/10 rounded-lg lg:rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl lg:text-2xl font-black">auto_stories</span>
            </div>
            <h3 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-text-muted">Popüler Keşifler</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {MOCK_WORDS.concat(MOCK_WORDS).map((word, idx) => (
              <div 
                key={`${word.id}-${idx}`} 
                onClick={() => navigate(`/word/${word.id}`)}
                className="bg-white dark:bg-surface-dark rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-sm border border-black/5 hover:border-primary/40 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[200px] lg:min-h-[420px]"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-4">
                    <h4 className="font-black text-xl lg:text-3xl tracking-tighter text-stone-900 dark:text-white group-hover:text-primary transition-colors truncate">
                      {word.term}
                    </h4>
                    <span className="px-2 py-0.5 lg:px-3 lg:py-1 rounded-md lg:rounded-lg bg-stone-100 dark:bg-white/5 text-[8px] lg:text-[10px] font-black text-text-muted uppercase tracking-widest shrink-0">
                      {word.dialect.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-8">
                    <span className="w-4 lg:w-8 h-[2px] bg-primary/30 rounded-full"></span>
                    <p className="text-[9px] lg:text-[11px] text-primary font-black uppercase tracking-widest truncate">
                      {word.turkishEquivalent}
                    </p>
                  </div>
                  <p className="text-sm lg:text-lg text-text-secondary line-clamp-2 lg:line-clamp-4 leading-relaxed italic opacity-80 font-medium">
                    "{word.definition}"
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="mt-4 lg:mt-8 pt-4 lg:pt-6 border-t border-black/[0.04] flex items-center justify-between">
                     <span className="text-[9px] lg:text-[11px] font-bold text-text-muted uppercase tracking-widest">@{word.author}</span>
                     <div className="flex items-center gap-1 lg:gap-2 text-primary text-[9px] lg:text-[11px] font-black uppercase tracking-widest">
                       OKU <span className="material-symbols-outlined text-base lg:text-lg">arrow_forward</span>
                     </div>
                  </div>
                </div>

                <span className="absolute -right-4 -top-8 lg:-right-8 lg:-top-12 text-[7rem] lg:text-[14rem] font-black text-black/[0.015] dark:text-white/[0.01] pointer-events-none select-none group-hover:scale-125 transition-transform duration-1000">
                  {word.term.charAt(0)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
