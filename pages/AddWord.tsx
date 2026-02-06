import React from 'react';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const AddWord: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom duration-500 overflow-hidden">
      {/* Header - Slightly taller for better breathing room */}
      <header className="sticky top-0 z-30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-5 h-16 flex items-center justify-between border-b border-gray-100 dark:border-white/5 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h1 className="font-black text-lg">Yeni Kelime</h1>
        <button 
          onClick={onSave}
          className="text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider hover:bg-primary/5 transition-all"
        >
          Kaydet
        </button>
      </header>

      <div className="flex-1 p-5 space-y-6 overflow-y-auto no-scrollbar">
        {/* Info Box - Slightly more padded */}
        <div className="bg-secondary/10 p-4 rounded-2xl flex items-center gap-4 border border-secondary/20">
          <span className="material-symbols-outlined text-secondary text-2xl shrink-0">info</span>
          <p className="text-[11px] font-medium text-secondary-700 leading-tight">
            Eklediğiniz kelimeler moderatör onayından sonra toplulukla paylaşılır.
          </p>
        </div>

        {/* Main Inputs - More comfortable spacing */}
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Kelime / Deyim</label>
            <input 
              type="text" 
              placeholder="Örn: Gancelli" 
              className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-3.5 px-5 text-lg font-bold shadow-sm focus:ring-2 focus:ring-primary/50 placeholder-text-muted/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Okunuş</label>
              <input 
                type="text" 
                placeholder="/gan-cel-li/" 
                className="w-full bg-white dark:bg-surface-dark border-none rounded-xl py-3.5 px-5 text-sm font-medium shadow-sm focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Türkçe Karşılığı</label>
              <input 
                type="text" 
                placeholder="Bahçe Kapısı" 
                className="w-full bg-white dark:bg-surface-dark border-none rounded-xl py-3.5 px-5 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Anlamı</label>
            <textarea 
              rows={3}
              placeholder="Kelimenin kökeni veya tam olarak ne anlama geldiğini açıklayın..." 
              className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-4 px-5 text-sm leading-relaxed shadow-sm focus:ring-2 focus:ring-primary/50 placeholder-text-muted/40 resize-none"
            />
          </div>

          {/* Image Upload - Slightly taller and more rounded */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted ml-1">Görsel (Opsiyonel)</label>
            <button className="w-full h-20 rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center gap-3 hover:bg-white dark:hover:bg-surface-dark transition-colors group">
              <div className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-text-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">add_a_photo</span>
              </div>
              <p className="text-[11px] font-bold text-text-muted">Fotoğraf yükle</p>
            </button>
          </div>
        </div>

        {/* Action Button - Strong and visible */}
        <div className="pt-2 pb-6">
          <button 
            onClick={onSave}
            className="w-full py-5 bg-primary text-white rounded-2xl font-black text-base shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined text-2xl">send</span>
            TOPLULUĞA GÖNDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWord;