
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/settings');
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20 animate-in fade-in duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 p-4 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <button 
          onClick={handleBack} 
          className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:scale-90 transition-all text-text-main dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xs font-black uppercase tracking-widest text-text-muted dark:text-stone-400">Hakkımızda</h1>
        <div className="size-10" />
      </header>

      <main className="p-8">
        {/* App Identity */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="size-24 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl shadow-primary/30 mb-6 rotate-3">
             <span className="material-symbols-outlined text-white text-5xl font-black">menu_book</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-text-main dark:text-white mb-2">
            KKTC <span className="text-primary">Sözlük</span>
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted opacity-60">
            Kültür Mirası Platformu
          </p>
        </div>

        {/* Mission Text */}
        <div className="space-y-6 mb-12">
          <div className="relative">
             <span className="material-symbols-outlined absolute -left-4 -top-4 text-primary/10 text-6xl pointer-events-none">format_quote</span>
             <p className="text-sm font-medium leading-relaxed text-text-secondary dark:text-stone-300 italic">
               "KKTC Sözlük, Kıbrıs'ın kendine has ağzını, deyimlerini ve unutulmaya yüz tutmuş kültürel değerlerini dijital dünyada yaşatmak için kurulmuş topluluk tabanlı bir projedir. Amacımız, yasemin kokulu bu mirası gelecek nesillere en doğru şekilde aktarmaktır."
             </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-surface-dark rounded-3xl border border-black/5 shadow-sm">
             <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Misyonumuz</h3>
             <p className="text-[13px] text-text-main dark:text-stone-300 leading-relaxed">
               Dilin sadece bir iletişim aracı değil, bir kimlik olduğuna inanıyoruz. Kıbrıs'ın her köyünden, her sokağından yükselen o eşsiz tınıyı belgeliyor ve paylaşıyoruz.
             </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
           <div className="p-5 bg-stone-50 dark:bg-white/5 rounded-2xl text-center">
              <p className="text-2xl font-black text-text-main dark:text-white">1,500+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Kelime</p>
           </div>
           <div className="p-5 bg-stone-50 dark:bg-white/5 rounded-2xl text-center">
              <p className="text-2xl font-black text-text-main dark:text-white">800+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Gönüllü</p>
           </div>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted text-center mb-4">Bizi Takip Edin</h3>
           <div className="flex justify-center gap-6">
              <button className="size-12 rounded-2xl bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-black/5 active:scale-90 transition-all">
                 <span className="material-symbols-outlined text-stone-600 dark:text-stone-400">alternate_email</span>
              </button>
              <button className="size-12 rounded-2xl bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-black/5 active:scale-90 transition-all">
                 <span className="material-symbols-outlined text-stone-600 dark:text-stone-400">language</span>
              </button>
              <button className="size-12 rounded-2xl bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-black/5 active:scale-90 transition-all text-primary">
                 <span className="material-symbols-outlined">favorite</span>
              </button>
           </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center space-y-2">
           <p className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-40">
             MADE WITH LOVE IN CYPRUS
           </p>
           <p className="text-[9px] font-bold text-text-muted opacity-30">
             Versiyon 1.0.4 (Beta) • © 2024 KKTC Sözlük
           </p>
        </div>
      </main>
    </div>
  );
};

export default About;
