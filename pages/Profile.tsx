
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER, MOCK_WORDS } from '../constants';

const Profile: React.FC = () => {
  const navigate = useNavigate();

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

      <main className="max-w-[1440px] mx-auto md:px-6 lg:px-12 md:py-8 lg:py-16 lg:short:py-8">
        <div className="lg:flex lg:gap-16">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-96 shrink-0 sticky top-28 h-fit space-y-8">
            <div className="bg-white dark:bg-surface-dark rounded-[3.5rem] p-12 border border-black/5 shadow-2xl">
              <div className="relative mb-10">
                <div className="size-56 rounded-[2.5rem] overflow-hidden border-8 border-background-light shadow-2xl rotate-2">
                  <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => navigate('/edit-profile')}
                  className="absolute -bottom-4 -right-4 size-16 rounded-[1.5rem] bg-primary text-white border-8 border-white dark:border-surface-dark flex items-center justify-center shadow-2xl"
                >
                  <span className="material-symbols-outlined text-2xl font-black">edit</span>
                </button>
              </div>
              <h1 className="text-4xl font-black tracking-tighter mb-2">{MOCK_USER.name}</h1>
              <p className="text-lg font-bold text-text-secondary mb-6">@{MOCK_USER.username}</p>
              <p className="text-lg leading-relaxed opacity-90 italic mb-8">"{MOCK_USER.bio}"</p>
              <button onClick={() => navigate('/settings')} className="w-full h-14 bg-stone-100 dark:bg-white/5 text-stone-600 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">settings_suggest</span>
                AYARLAR
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Profile Header (Stacked) */}
            <div className="lg:hidden flex flex-col items-center px-6 pt-6 pb-10">
              <div className="relative mb-6">
                <div className="size-32 rounded-full border-4 border-white shadow-xl overflow-hidden ring-1 ring-black/5">
                  <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => navigate('/edit-profile')}
                  className="absolute bottom-1 right-1 size-10 rounded-full bg-primary text-white border-4 border-white flex items-center justify-center shadow-lg"
                >
                  <span className="material-symbols-outlined text-xl">edit</span>
                </button>
              </div>
              <h1 className="text-2xl font-black tracking-tighter mb-1 text-center">{MOCK_USER.name}</h1>
              <p className="text-sm font-bold text-text-secondary mb-4">@{MOCK_USER.username}</p>
              <p className="text-sm leading-relaxed opacity-90 max-w-xs text-center italic">"{MOCK_USER.bio}"</p>
            </div>

            {/* Stats Grid */}
            <div className="px-6 md:px-0 py-6 md:py-6 lg:pb-8 lg:short:pb-4">
              <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5 lg:short:gap-4">
                <div className="bg-white dark:bg-surface-dark rounded-2xl md:rounded-3xl p-3 md:p-5 lg:p-6 lg:short:p-4 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl lg:short:text-2xl mb-1 md:mb-2 lg:mb-2 lg:short:mb-1">library_books</span>
                  <p className="text-lg md:text-2xl lg:text-3xl lg:short:text-2xl font-black tracking-tighter">{MOCK_USER.stats.wordsCount}</p>
                  <p className="text-[8px] md:text-[9px] lg:text-[10px] lg:short:text-[9px] font-black text-text-secondary uppercase tracking-widest mt-1 lg:mt-1.5 lg:short:mt-1">SÖZLÜK</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-2xl md:rounded-3xl p-3 md:p-5 lg:p-6 lg:short:p-4 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl lg:short:text-2xl mb-1 md:mb-2 lg:mb-2 lg:short:mb-1">thumb_up</span>
                  <p className="text-lg md:text-2xl lg:text-3xl lg:short:text-2xl font-black tracking-tighter">{MOCK_USER.stats.votesCount}</p>
                  <p className="text-[8px] md:text-[9px] lg:text-[10px] lg:short:text-[9px] font-black text-text-secondary uppercase tracking-widest mt-1 lg:mt-1.5 lg:short:mt-1">Beğeni</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-2xl md:rounded-3xl p-3 md:p-5 lg:p-6 lg:short:p-4 text-center shadow-sm border border-black/5">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl lg:text-3xl lg:short:text-2xl mb-1 md:mb-2 lg:mb-2 lg:short:mb-1">groups</span>
                  <p className="text-lg md:text-2xl lg:text-3xl lg:short:text-2xl font-black tracking-tighter">{MOCK_USER.stats.followersCount}</p>
                  <p className="text-[8px] md:text-[9px] lg:text-[10px] lg:short:text-[9px] font-black text-text-secondary uppercase tracking-widest mt-1 lg:mt-1.5 lg:short:mt-1">TAKİPÇİ</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="sticky lg:relative top-20 lg:top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 py-3 md:py-4 lg:pt-0 lg:pb-6 lg:short:pb-4 px-6 md:px-0">
              <div className="flex p-1 rounded-xl bg-white dark:bg-surface-dark border border-black/5 max-w-sm shadow-sm mx-auto lg:mx-0">
                <button className="flex-1 py-2 rounded-lg bg-primary text-white text-[9px] lg:text-xs font-black uppercase tracking-widest">Sözlerim</button>
                <button className="flex-1 py-2 rounded-lg text-text-secondary text-[9px] lg:text-xs font-black uppercase tracking-widest">Kaydedilenler</button>
              </div>
            </div>

            {/* Content Feed */}
            <div className="px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 lg:short:gap-4 pb-20 lg:short:pb-10">
              {MOCK_WORDS.map((word, idx) => (
                <div
                  key={`${word.id}-${idx}`}
                  onClick={() => navigate(`/word/${word.id}`)}
                  className="bg-white dark:bg-surface-dark rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] p-5 md:p-6 lg:p-8 shadow-sm border border-black/5 flex justify-between items-start cursor-pointer hover:border-primary/40 hover:shadow-xl transition-all group relative overflow-hidden"
                >
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-black text-xl md:text-3xl lg:text-4xl tracking-tighter group-hover:text-primary transition-colors leading-none">{word.term}</h3>
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[8px] md:text-[10px] font-black uppercase tracking-widest">POPÜLER</span>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-text-secondary leading-relaxed line-clamp-2 lg:line-clamp-3 italic opacity-80 mb-6 font-medium">"{word.definition}"</p>
                    <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-[9px] md:text-[10px] lg:text-[11px] text-text-muted font-black uppercase tracking-widest opacity-60">
                      <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_today</span> {word.createdAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
