
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_WORDS, MOCK_COMMENTS, MOCK_USER } from '../constants';

const WordDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const word = MOCK_WORDS.find(w => w.id === id) || MOCK_WORDS[0];

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCommentsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCommentsOpen]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32 lg:pb-20">
      {/* Mobile Header - Extra Compact */}
      <header className="lg:hidden sticky top-0 z-[60] flex items-center justify-between bg-white/80 dark:bg-background-dark/80 px-4 backdrop-blur-md border-b border-black/5 dark:border-white/5 h-14">
        <button
          onClick={handleBack}
          className="size-9 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 active:scale-90 transition-all cursor-pointer text-text-main dark:text-white"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
        </button>
        <h1 className="text-[9px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-400">Detaylar</h1>
        <button className="size-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white">
          <span className="material-symbols-outlined text-xl">share</span>
        </button>
      </header>

      <main className="max-w-[1600px] mx-auto lg:px-12 lg:py-8 lg:short:py-5">
        <div className="lg:flex lg:gap-12 items-start">

          {/* Media Column - Balanced Height for Desktop Fold Visibility */}
          <div className="w-full lg:w-[38%] xl:w-[32%] lg:sticky lg:top-24 shrink-0">
            <div className="relative h-[220px] lg:h-[400px] lg:short:h-[320px] overflow-hidden bg-stone-100 dark:bg-stone-900 rounded-b-[1.5rem] lg:rounded-[3rem] shadow-lg lg:shadow-2xl">
              <img
                src={word.imageUrl}
                alt={word.term}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 lg:top-6 lg:left-6 flex gap-2">
                <span className="px-2 py-0.5 bg-black/50 backdrop-blur-md text-white text-[8px] lg:text-xs font-black uppercase tracking-widest rounded-md border border-white/10">
                  {word.dialect.split(' ')[0]}
                </span>
              </div>
            </div>

            {/* Desktop Quick Actions - Directly Under Image */}
            <div className="hidden lg:grid grid-cols-2 gap-3 mt-5">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center justify-center gap-2 h-14 rounded-2xl border transition-all font-black text-sm shadow-sm hover:shadow-md ${isLiked ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white dark:bg-surface-dark border-black/5 text-text-main dark:text-white'}`}
              >
                <span className={`material-symbols-outlined text-2xl ${isLiked ? 'fill-1' : ''}`}>favorite</span>
                <span>{isLiked ? word.likes + 1 : word.likes}</span>
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center justify-center gap-2 h-14 rounded-2xl border transition-all font-black text-sm shadow-sm hover:shadow-md ${isSaved ? 'bg-secondary/10 border-secondary/30 text-secondary' : 'bg-white dark:bg-surface-dark border-black/5 text-text-main dark:text-white'}`}
              >
                <span className={`material-symbols-outlined text-2xl ${isSaved ? 'fill-1' : ''}`}>bookmark</span>
                <span>{isSaved ? 'Kaydedildi' : 'Kaydet'}</span>
              </button>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex-1 px-5 -mt-4 lg:mt-0 relative z-10 lg:px-0">
            <div className="bg-white dark:bg-surface-dark rounded-[2rem] lg:rounded-none lg:bg-transparent lg:dark:bg-transparent p-5 md:p-8 lg:p-0 shadow-xl lg:shadow-none border lg:border-none border-black/5">

              {/* Title & Pronunciation - Tightened for better fold visibility */}
              <div className="flex flex-col gap-1 mb-6 lg:mb-6 lg:short:mb-4">
                <h2 className="text-3xl lg:text-7xl lg:short:text-5xl font-black tracking-tighter text-stone-900 dark:text-white leading-none">
                  {word.term}
                </h2>
                <p className="text-sm lg:text-2xl lg:short:text-xl font-bold text-primary/60 italic">
                  {word.pronunciation}
                </p>
              </div>

              {/* Mobile Quick Actions Bar */}
              <div className="lg:hidden flex items-center gap-2 mb-6">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex-1 flex items-center justify-center gap-2 h-11 rounded-xl border transition-all font-black text-[10px] ${isLiked ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-stone-50 dark:bg-white/5 border-black/5 text-text-main dark:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-lg ${isLiked ? 'fill-1' : ''}`}>favorite</span>
                  BEĞEN ({isLiked ? word.likes + 1 : word.likes})
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex-1 flex items-center justify-center gap-2 h-11 rounded-xl border transition-all font-black text-[10px] ${isSaved ? 'bg-stone-900 text-white border-stone-900 shadow-lg' : 'bg-stone-50 dark:bg-white/5 border-black/5 text-text-main dark:text-white'}`}
                >
                  <span className={`material-symbols-outlined text-lg ${isSaved ? 'fill-1' : ''}`}>bookmark</span>
                  {isSaved ? 'KAYDEDİLDİ' : 'KAYDET'}
                </button>
              </div>

              {/* Meanings & Definitions - Spacing optimized */}
              <div className="space-y-6 lg:space-y-6 lg:short:space-y-4">
                <div className="animate-in fade-in duration-1000">
                  <div className="flex items-center gap-2 mb-3 lg:mb-4 lg:short:mb-3">
                    <span className="w-6 lg:w-12 h-[2px] lg:h-[4px] bg-primary rounded-full"></span>
                    <p className="text-[10px] lg:text-xl lg:short:text-base text-primary font-black uppercase tracking-widest">
                      {word.turkishEquivalent}
                    </p>
                  </div>

                  <p className="text-base lg:text-2xl lg:short:text-xl text-text-main dark:text-gray-200 leading-relaxed font-bold">
                    {word.definition}
                  </p>
                </div>

                {/* Example Card - Padding adjusted to save vertical space */}
                <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-stone-50 dark:bg-white/5 p-5 lg:p-6 lg:short:p-4 border border-black/[0.03] lg:bg-white lg:shadow-lg group">
                  <div className="flex gap-3 lg:gap-6 relative z-10">
                    <span className="material-symbols-outlined text-primary text-3xl lg:text-6xl lg:short:text-5xl opacity-30 shrink-0">format_quote</span>
                    <div className="space-y-1.5 lg:space-y-3 lg:short:space-y-2">
                      <p className="text-lg lg:text-3xl lg:short:text-2xl font-black italic leading-tight text-stone-800 dark:text-white">
                        "{word.exampleSentence}"
                      </p>
                      <p className="text-[10px] lg:text-base lg:short:text-sm text-text-muted font-bold opacity-60">
                        {word.exampleTranslation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Preview Section - Lifted more to ensure "above the fold" visibility */}
            <div className="mt-8 lg:mt-6 lg:short:mt-4">
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg lg:text-3xl lg:short:text-2xl font-black tracking-tighter text-text-main dark:text-white">Tartışmalar</h3>
                  <span className="text-[9px] lg:text-xs font-black text-text-muted bg-stone-100 dark:bg-white/5 px-2 py-0.5 rounded-md">
                    {word.commentsCount}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Preview Comments */}
                {MOCK_COMMENTS.slice(0, 2).map((comment) => (
                  <div key={comment.id} className="flex gap-4 p-4 lg:p-5 rounded-2xl bg-white dark:bg-surface-dark border border-black/[0.03]">
                    <img src={comment.authorAvatar} alt={comment.authorName} className="size-8 lg:size-10 rounded-lg object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] lg:text-sm font-black text-stone-800 dark:text-white mb-0.5">{comment.authorName}</p>
                      <p className="text-[11px] lg:text-base text-text-secondary line-clamp-1 opacity-80">"{comment.content}"</p>
                    </div>
                  </div>
                ))}

                {/* View All Button */}
                <button
                  onClick={() => setIsCommentsOpen(true)}
                  className="w-full py-4 rounded-xl border border-stone-200 dark:border-white/10 text-[9px] lg:text-sm font-black text-primary uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                >
                  TÜM TARTIŞMAYI GÖR
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Comments Drawer (Bottom Sheet) */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCommentsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCommentsOpen(false)} />
        <div className={`absolute bottom-0 left-0 right-0 h-[85vh] lg:h-[90vh] lg:max-w-3xl lg:mx-auto bg-white dark:bg-background-dark rounded-t-[2.5rem] shadow-2xl transition-transform duration-500 flex flex-col ${isCommentsOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-10 h-1.5 bg-stone-200 dark:bg-white/10 rounded-full mx-auto my-3 shrink-0" />
          <div className="px-6 pb-3 border-b border-black/[0.03] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-black tracking-tight">Topluluk</h3>
              <span className="bg-stone-100 dark:bg-white/5 px-2 py-0.5 rounded-md text-[9px] font-bold text-text-muted">{word.commentsCount}</span>
            </div>
            <button onClick={() => setIsCommentsOpen(false)} className="size-9 rounded-full bg-stone-50 dark:bg-white/5 flex items-center justify-center text-text-muted">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 no-scrollbar">
            {MOCK_COMMENTS.concat(MOCK_COMMENTS).map((comment, idx) => (
              <div key={`${comment.id}-${idx}`} className="flex gap-3">
                <img src={comment.authorAvatar} alt={comment.authorName} className="size-9 rounded-lg object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-black text-stone-800 dark:text-stone-200">{comment.authorName}</span>
                    <span className="text-[8px] font-bold text-text-muted uppercase">{comment.timeAgo}</span>
                  </div>
                  <p className="text-xs lg:text-sm text-text-secondary leading-relaxed mb-1.5">"{comment.content}"</p>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-[9px] font-black text-text-muted hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-base">thumb_up</span> {comment.likes}
                    </button>
                    <button className="text-[9px] font-black text-text-muted hover:text-primary uppercase">YANITLA</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 bg-white dark:bg-surface-dark border-t border-black/[0.03] shrink-0">
            <div className="flex items-center gap-3">
              <img src={MOCK_USER.avatar} alt="Me" className="size-9 rounded-full shrink-0 border border-primary/20" />
              <div className="relative flex-1">
                <input type="text" placeholder="Bir fikir paylaş..." className="w-full h-11 rounded-xl border-none bg-stone-50 dark:bg-white/5 px-4 text-xs font-semibold focus:ring-4 focus:ring-primary/10" />
                <button className="absolute right-1.5 top-1.5 h-8 px-3 rounded-lg bg-primary text-white text-[9px] font-black uppercase">GÖNDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
