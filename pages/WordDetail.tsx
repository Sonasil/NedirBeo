
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_WORDS, MOCK_COMMENTS, MOCK_USER } from '../constants';

const WordDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const word = MOCK_WORDS.find(w => w.id === id) || MOCK_WORDS[0];

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32 lg:pb-0">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-[60] flex items-center justify-between bg-white/80 dark:bg-background-dark/80 p-4 backdrop-blur-md border-b border-black/5 dark:border-white/5 h-16">
        <button 
          onClick={handleBack} 
          className="size-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 active:scale-90 transition-all cursor-pointer text-text-main dark:text-white"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-400">Detaylar</h1>
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white">
          <span className="material-symbols-outlined text-2xl">share</span>
        </button>
      </header>

      <main className="max-w-[1600px] mx-auto lg:px-12 lg:py-16">
        <div className="lg:flex lg:gap-20 items-start">
          
          {/* Media Column (Image) - Video kaldırıldı */}
          <div className="w-full lg:w-[45%] xl:w-[40%] lg:sticky lg:top-32 shrink-0">
            <div className="relative h-[300px] lg:h-[600px] overflow-hidden bg-stone-100 dark:bg-stone-900 rounded-b-[2.5rem] lg:rounded-[3.5rem] shadow-xl lg:shadow-2xl">
              <img 
                src={word.imageUrl} 
                alt={word.term} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex gap-6 mt-10">
              <button className="flex-1 flex items-center justify-center gap-3 h-20 rounded-[2rem] bg-white dark:bg-surface-dark border border-black/5 shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all text-lg font-black group">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">favorite</span>
                <span>{word.likes} Beğeni</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 h-20 rounded-[2rem] bg-white dark:bg-surface-dark border border-black/5 shadow-xl hover:-translate-y-1 transition-all text-lg font-black text-text-main dark:text-white group">
                <span className="material-symbols-outlined text-stone-400 dark:text-stone-500 text-3xl group-hover:scale-110 transition-transform">bookmark</span>
                <span>Kaydet</span>
              </button>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex-1 px-5 -mt-8 lg:mt-0 relative z-10 lg:px-0">
            <div className="bg-white dark:bg-surface-dark rounded-[2.5rem] lg:rounded-none lg:bg-transparent lg:dark:bg-transparent p-6 md:p-10 lg:p-0 shadow-xl lg:shadow-none border lg:border-none border-black/5">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 lg:mb-10">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl lg:text-8xl font-black tracking-tighter text-stone-900 dark:text-white leading-none">
                    {word.term}
                  </h2>
                  <span className="px-2 py-0.5 rounded-lg bg-primary/10 text-primary text-[10px] lg:text-xs font-black uppercase tracking-widest h-fit">
                    {word.dialect.split(' ')[0]}
                  </span>
                </div>
                
                {/* Mobile Stats Row */}
                <div className="lg:hidden flex items-center gap-4 py-3 border-y border-black/[0.03]">
                   <div className="text-center flex-1">
                      <p className="text-base font-black">{word.likes}</p>
                      <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest">BEĞENİ</p>
                   </div>
                   <div className="h-6 w-[1px] bg-stone-100 dark:bg-white/10" />
                   <div className="text-center flex-1">
                      <p className="text-base font-black">1.2k</p>
                      <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest">İZLENME</p>
                   </div>
                </div>
              </div>

              <div className="space-y-8 lg:space-y-12">
                <div>
                  <p className="text-base lg:text-3xl font-bold text-primary/60 italic mb-6 lg:mb-10">
                    {word.pronunciation}
                  </p>

                  <div className="flex items-center gap-3 mb-6 lg:mb-8">
                    <span className="w-8 lg:w-16 h-[2px] lg:h-[4px] bg-primary rounded-full"></span>
                    <p className="text-sm lg:text-2xl text-primary font-black uppercase tracking-[0.2em] lg:tracking-[0.25em]">
                      {word.turkishEquivalent}
                    </p>
                  </div>

                  <p className="text-lg lg:text-3xl text-text-main dark:text-gray-200 leading-relaxed font-semibold">
                    {word.definition}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-stone-50 dark:bg-white/5 p-6 lg:p-16 border border-black/[0.03] lg:bg-white lg:shadow-2xl group">
                  <div className="flex gap-4 lg:gap-8 relative z-10">
                    <span className="material-symbols-outlined text-primary text-4xl lg:text-8xl opacity-30 shrink-0">format_quote</span>
                    <div className="space-y-3 lg:space-y-6">
                      <p className="text-xl lg:text-4xl font-black italic leading-tight text-stone-800 dark:text-white">
                        "{word.exampleSentence}"
                      </p>
                      <p className="text-xs lg:text-lg text-text-muted font-bold opacity-70">
                        {word.exampleTranslation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div className="mt-12 lg:mt-20 mb-32 lg:mb-20">
              <div className="flex items-center justify-between mb-8 px-2">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="size-8 lg:size-12 bg-primary/10 rounded-xl lg:rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl lg:text-3xl font-black">forum</span>
                  </div>
                  <h3 className="text-xl lg:text-4xl font-black tracking-tighter text-text-main dark:text-white">Tartışmalar</h3>
                </div>
                <span className="text-[9px] lg:text-xs font-black uppercase tracking-widest text-text-muted bg-stone-100 dark:bg-white/5 px-4 py-1.5 rounded-full">12 YORUM</span>
              </div>
              
              <div className="space-y-4 lg:space-y-10 lg:grid lg:grid-cols-1">
                {MOCK_COMMENTS.concat(MOCK_COMMENTS).map((comment, idx) => (
                  <div key={`${comment.id}-${idx}`} className="flex gap-4 lg:gap-8 p-5 lg:p-10 rounded-[2rem] lg:rounded-[3rem] bg-white dark:bg-surface-dark border border-black/[0.03] shadow-sm hover:shadow-xl transition-all group">
                    <img src={comment.authorAvatar} alt={comment.authorName} className="size-12 lg:size-20 rounded-xl lg:rounded-[1.5rem] object-cover shrink-0 ring-4 ring-stone-50 dark:ring-white/5 shadow-md" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2 lg:mb-4">
                        <span className="text-sm lg:text-lg font-black text-stone-800 dark:text-white">{comment.authorName}</span>
                        <span className="text-[9px] lg:text-[11px] font-bold text-text-muted dark:text-stone-500 uppercase tracking-widest">{comment.timeAgo}</span>
                      </div>
                      <p className="text-sm lg:text-lg leading-relaxed text-text-secondary dark:text-stone-300 italic mb-4 lg:mb-6">"{comment.content}"</p>
                      <div className="flex items-center gap-6 lg:gap-10">
                        <button className="flex items-center gap-1.5 text-[10px] lg:text-xs font-black text-text-muted hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg lg:text-2xl">thumb_up</span> {comment.likes}
                        </button>
                        <button className="text-[10px] lg:text-xs font-black text-text-muted hover:text-primary transition-colors uppercase tracking-widest">YANITLA</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Comment Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-8 lg:p-6 lg:pb-6 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-black/5 z-[80] flex items-center justify-center">
        <div className="w-full max-w-[1200px] flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-4 shrink-0">
             <img src={MOCK_USER.avatar} alt="Me" className="size-14 rounded-full object-cover border-4 border-white dark:border-surface-dark shadow-xl" />
          </div>
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Bir yorum veya anektod ekle..."
              className="w-full h-12 lg:h-16 rounded-[1.25rem] lg:rounded-[1.5rem] border-none bg-stone-50 dark:bg-white/5 px-6 lg:px-8 text-sm lg:text-lg font-semibold focus:ring-4 focus:ring-primary/10 placeholder:text-stone-300"
            />
            <button className="absolute right-2 top-1.5 lg:top-2.5 h-9 lg:h-11 px-6 lg:px-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 active:scale-95 transition-all text-[10px] lg:text-xs font-black uppercase tracking-widest">
              GÖNDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
