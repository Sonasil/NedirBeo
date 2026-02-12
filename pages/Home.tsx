
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_WORDS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const featuredWord = MOCK_WORDS[1]; // Hellim

  const filteredWords = MOCK_WORDS.filter(w =>
    w.term.toLowerCase().includes(search.toLowerCase()) ||
    w.turkishEquivalent.toLowerCase().includes(search.toLowerCase())
  );

  const displayedWords = filteredWords.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="pb-32 lg:pb-20">
      {/* Mobile Header - Hidden on Desktop */}
      <header className="lg:hidden sticky top-0 z-40 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-black/5">
        <button className="p-2 rounded-full hover:bg-orange-50 dark:hover:bg-white/5">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="text-xl font-extrabold tracking-tight">KKTC <span className="text-primary">Sözlük</span></h1>
        <button onClick={() => navigate('/profile')} className="p-2 rounded-full hover:bg-orange-50 dark:hover:bg-white/5">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </header>

      <div className="max-w-[1440px] mx-auto md:px-6 lg:px-12 md:py-4 lg:py-8 lg:short:py-5">
        <div className="lg:flex lg:gap-12">

          {/* Desktop Sidebar - Left */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8 sticky top-28 h-fit">
            <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-8 border border-black/5 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-text-muted mb-6 px-1">KATEGORİLER</h3>
              <div className="space-y-4">
                {['Popüler', 'Yeni Eklenenler', 'Mutfak Kültürü', 'Tarihi Deyimler', 'Yerel Ağızlar', 'Günün Kelimesi'].map((cat, i) => (
                  <button key={cat} className={`flex items-center gap-4 w-full text-left p-2 rounded-xl transition-all ${i === 0 ? 'text-primary font-black' : 'text-stone-500 font-bold hover:bg-stone-50 dark:hover:bg-white/5 hover:translate-x-1'}`}>
                    <span className="material-symbols-outlined text-xl">{['stars', 'new_releases', 'restaurant', 'history_edu', 'translate', 'today'][i]}</span>
                    <span className="text-sm tracking-tight">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10">
              <h3 className="text-primary font-black text-sm mb-3">Kıbrıs Sözlük'te Bugün</h3>
              <p className="text-xs text-secondary-700 font-medium leading-relaxed">
                Topluluğumuz bugün 12 yeni kelime ve 45 yorum ekledi. Kültürümüzü birlikte yaşatıyoruz!
              </p>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="px-6 py-6 md:px-0 md:pt-0 md:pb-8 lg:pb-10">
              <div className="relative max-w-2xl">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
                <input
                  type="text"
                  placeholder="Kıbrıs'a dair bir şeyler ara..."
                  className="w-full h-14 md:h-16 pl-12 md:pl-14 pr-6 rounded-[1.5rem] border-none bg-orange-50 dark:bg-white/5 text-text-main dark:text-white placeholder-text-secondary focus:ring-4 focus:ring-primary/10 transition-all text-base md:text-lg font-semibold shadow-inner"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Featured Word - Optimized for Mobile Fit */}
            {!search && (
              <div className="px-6 pb-8 md:px-0">
                <div
                  onClick={() => navigate(`/word/${featuredWord.id}`)}
                  className="group relative h-[380px] md:h-[420px] lg:h-[450px] lg:short:h-[380px] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-stone-900 cursor-pointer shadow-2xl border border-black/5"
                >
                  <img
                    src={featuredWord.imageUrl}
                    alt={featuredWord.term}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute inset-0 p-6 md:p-10 lg:p-16 lg:short:p-12 flex flex-col justify-end">
                    <div className="flex items-end justify-between gap-4 lg:gap-12">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3 lg:mb-4">
                          <span className="px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary text-white text-[9px] lg:text-[10px] font-black uppercase tracking-wider lg:tracking-[0.3em] shadow-xl shadow-primary/20">GÜNÜN KELİMESİ</span>
                          <span className="text-white/40 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">• 24 ARALIK</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-2 md:mb-3 lg:mb-4 truncate">{featuredWord.term}</h2>
                        <p className="text-white/90 text-sm md:text-base lg:text-xl font-medium italic line-clamp-2 md:line-clamp-3 max-w-3xl leading-relaxed">
                          "{featuredWord.definition}"
                        </p>
                      </div>
                      <button className="size-14 lg:size-20 rounded-full bg-white text-primary shadow-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-2xl lg:text-4xl font-black">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section Title */}
            <div className="px-6 md:px-0 mt-8 mb-6 flex items-center justify-between">
              <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-text-muted flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary/20"></span>
                SON EKLEMLER VE AKIŞ
              </h3>
              <div className="hidden lg:flex items-center gap-2">
                <button className="size-8 rounded-lg bg-stone-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">grid_view</span>
                </button>
                <button className="size-8 rounded-lg bg-white dark:bg-surface-dark border border-black/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">list</span>
                </button>
              </div>
            </div>

            {/* Feed List */}
            <div className="px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:short:gap-6">
              {displayedWords.map((word) => (
                <article
                  key={word.id}
                  onClick={() => navigate(`/word/${word.id}`)}
                  className="group p-8 lg:short:p-6 bg-white dark:bg-surface-dark rounded-[3rem] border border-black/[0.04] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors">{word.term}</h3>
                          <span className="text-[10px] md:text-[11px] font-black text-text-muted uppercase tracking-widest bg-stone-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">{word.dialect.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-[2px] bg-primary/40 rounded-full"></span>
                          <p className="text-xs md:text-sm text-primary font-black uppercase tracking-widest">{word.turkishEquivalent}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed italic line-clamp-4 mb-8 opacity-80 font-medium">
                      "{word.definition}"
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-black/[0.03] flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-[11px] md:text-xs font-black text-stone-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                        {word.likes}
                      </button>
                      <button className="flex items-center gap-2 text-[11px] md:text-xs font-black text-stone-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">forum</span>
                        {word.commentsCount}
                      </button>
                    </div>
                    <span className="text-[11px] md:text-xs font-bold text-stone-400 uppercase tracking-widest bg-stone-50 dark:bg-white/5 px-3 py-1 rounded-full">@{word.author}</span>
                  </div>

                  {/* Large Stylized Background Initial */}
                  <span className="absolute -right-6 -top-6 text-[11rem] font-black text-black/[0.012] dark:text-white/[0.008] pointer-events-none select-none group-hover:scale-125 group-hover:text-primary/[0.02] transition-all duration-1000">
                    {word.term.charAt(0)}
                  </span>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredWords.length && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  className="h-14 px-12 rounded-2xl bg-white dark:bg-surface-dark border-2 border-primary/20 text-primary font-black text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl shadow-primary/5 active:scale-95 flex flex-col items-center justify-center gap-1"
                >
                  <span>DAHA FAZLA KEŞFET</span>
                  <span className="text-[9px] opacity-70 normal-case tracking-normal">({filteredWords.length - visibleCount} kelime daha)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
