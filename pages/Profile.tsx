
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER, MOCK_WORDS } from '../constants';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const wordsPerPage = 6; // Changed back to 6 as requested
  const totalPages = Math.ceil(MOCK_WORDS.length / wordsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const displayedWords = MOCK_WORDS.slice(
    currentPage * wordsPerPage,
    (currentPage + 1) * wordsPerPage
  );

  return (
    <div className="pb-32 lg:pb-20 min-h-screen animate-in fade-in duration-700 bg-background-light dark:bg-background-dark">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-6 sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-black tracking-tight uppercase tracking-widest">Profil</h2>
        <button onClick={() => navigate('/settings')} className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-8">
        <div className="lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-8">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block sticky top-28 h-fit space-y-6 min-w-0">
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-black/5 shadow-xl">
              <div className="relative mb-6">
                <div className="size-40 rounded-2xl overflow-hidden border-4 border-background-light shadow-2xl rotate-2 mx-auto">
                  <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => navigate('/edit-profile')}
                  className="absolute bottom-0 right-8 size-10 rounded-xl bg-primary text-white border-4 border-white dark:border-surface-dark flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined text-sm font-black">edit</span>
                </button>
              </div>

              <div className="text-center">
                <h1 className="text-2xl font-black tracking-tighter mb-1">{MOCK_USER.name}</h1>
                <p className="text-sm font-bold text-text-secondary mb-4">@{MOCK_USER.username}</p>
                <p className="text-sm leading-relaxed opacity-90 italic mb-6 text-text-muted">"{MOCK_USER.bio}"</p>
              </div>

              {/* Stats Grid - Desktop */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-3 text-center transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-xl block mb-1">library_books</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.wordsCount}</p>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Sözlük</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-3 text-center transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-xl block mb-1">thumb_up</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.votesCount}</p>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Beğeni</p>
                </div>
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-3 text-center transition-colors hover:bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-xl block mb-1">groups</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.followersCount}</p>
                  <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Takipçi</p>
                </div>
              </div>

              <button onClick={() => navigate('/settings')} className="w-full h-12 bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-lg">settings_suggest</span>
                AYARLAR
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="min-w-0">
            {/* Mobile Profile Header (Stacked) - UNCHANGED */}
            <div className="lg:hidden flex flex-col items-center px-6 pt-4 pb-4">
              <div className="relative mb-4">
                <div className="size-28 rounded-full border-4 border-white shadow-xl overflow-hidden ring-1 ring-black/5">
                  <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => navigate('/edit-profile')}
                  className="absolute bottom-1 right-1 size-10 rounded-full bg-primary text-white border-4 border-white flex items-center justify-center shadow-lg"
                >
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
              </div>
              <h1 className="text-xl font-black tracking-tighter mb-0.5 text-center">{MOCK_USER.name}</h1>
              <p className="text-xs font-bold text-text-secondary mb-3">@{MOCK_USER.username}</p>
              <p className="text-xs leading-relaxed opacity-90 max-w-xs text-center italic mb-4">"{MOCK_USER.bio}"</p>

              {/* Mobile Stats - Compact Row */}
              <div className="grid grid-cols-3 gap-1.5 w-full max-w-xs">
                <div className="bg-white dark:bg-surface-dark rounded-xl p-2 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-lg block mb-1">library_books</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.wordsCount}</p>
                  <p className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">Sözlük</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl p-3 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-lg block mb-1">thumb_up</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.votesCount}</p>
                  <p className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">Beğeni</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl p-3 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-lg block mb-1">groups</span>
                  <p className="text-lg font-black tracking-tighter">{MOCK_USER.stats.followersCount}</p>
                  <p className="text-[8px] font-bold text-text-secondary uppercase tracking-wider">Takipçi</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="sticky lg:relative top-20 lg:top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-2 md:py-2 lg:pt-0 lg:pb-6 px-6 md:px-0">
              <div className="flex p-1 rounded-xl bg-white dark:bg-surface-dark border border-black/5 max-w-sm shadow-sm mx-auto lg:mx-0">
                <button className="flex-1 py-1.5 lg:py-2.5 rounded-lg bg-primary text-white text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-sm">Sözlerim</button>
                <button className="flex-1 py-1.5 lg:py-2.5 rounded-lg text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[10px] lg:text-xs font-black uppercase tracking-widest">Kaydedilenler</button>
              </div>
            </div>

            {/* Content Area */}
            <div className="px-6 md:px-0 pb-12">
              {/* Navigation Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-black tracking-tight">Tüm Sözlerim</h3>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-text-secondary font-bold hidden sm:inline-block">
                    Sayfa {currentPage + 1} / {totalPages}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={goToPreviousPage}
                      disabled={currentPage === 0}
                      className="size-9 rounded-full bg-white dark:bg-surface-dark border border-black/5 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages - 1}
                      className="size-9 rounded-full bg-white dark:bg-surface-dark border border-black/5 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-all shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {displayedWords.map((word, idx) => (
                  <div
                    key={`${word.id}-${idx}`}
                    onClick={() => navigate(`/word/${word.id}`)}
                    className="bg-white dark:bg-surface-dark rounded-2xl lg:rounded-3xl p-5 lg:p-6 shadow-sm border border-black/5 cursor-pointer hover:border-primary/40 hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-black text-lg lg:text-xl tracking-tighter group-hover:text-primary transition-colors leading-none">{word.term}</h3>
                        <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">POPÜLER</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 italic opacity-80 mb-5 font-medium">"{word.definition}"</p>
                      <div className="flex items-center justify-between text-[10px] text-text-muted font-black uppercase tracking-widest opacity-60">
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> {word.createdAt}</span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">favorite</span> {word.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
