
import React from 'react';

interface Props {
  onBack: () => void;
  onSave: () => void;
}

const AddWord: React.FC<Props> = ({ onBack, onSave }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark animate-in slide-in-from-bottom duration-500 overflow-hidden">
      {/* Header - Fixed at top */}
      <header className="sticky top-0 z-30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-5 h-16 flex items-center justify-between border-b border-gray-100 dark:border-white/5 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h1 className="font-black text-lg">Yeni Kelime</h1>
        <div className="w-10" /> {/* Spacer to center title */}
      </header>

      {/* Scrollable Content Area */}
      <div className="flex-1 p-5 lg:p-8 lg:short:p-6 space-y-6 lg:space-y-8 lg:short:space-y-6 overflow-y-auto no-scrollbar">
        {/* Info Box */}
        <div className="bg-secondary/10 p-4 lg:p-6 rounded-2xl flex items-center gap-4 border border-secondary/20">
          <span className="material-symbols-outlined text-secondary text-2xl shrink-0">info</span>
          <p className="text-[11px] lg:text-sm font-medium text-secondary-700 leading-tight">
            Eklediğiniz kelimeler moderatör onayından sonra toplulukla paylaşılır. Lütfen Kıbrıs kültürüne uygun içerikler ekleyin.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-text-muted ml-1">Kelime / Deyim</label>
            <input
              type="text"
              placeholder="Örn: Gancelli"
              className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-4 px-5 text-lg lg:text-xl font-bold shadow-sm focus:ring-4 focus:ring-primary/20 placeholder-text-muted/40 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-text-muted ml-1">Okunuş</label>
              <input
                type="text"
                placeholder="/gan-cel-li/"
                className="w-full bg-white dark:bg-surface-dark border-none rounded-xl py-3.5 lg:py-4 px-5 text-sm font-medium shadow-sm focus:ring-4 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-text-muted ml-1">Türkçe Karşılığı</label>
              <input
                type="text"
                placeholder="Bahçe Kapısı"
                className="w-full bg-white dark:bg-surface-dark border-none rounded-xl py-3.5 lg:py-4 px-5 text-sm font-semibold shadow-sm focus:ring-4 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-text-muted ml-1">Anlamı</label>
            <textarea
              rows={4}
              placeholder="Kelimenin kökeni veya tam olarak ne anlama geldiğini açıklayın..."
              className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-4 px-5 text-sm leading-relaxed shadow-sm focus:ring-4 focus:ring-primary/20 placeholder-text-muted/40 resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-1.5">
            <label className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-text-muted ml-1">Görsel (Opsiyonel)</label>
            <button className="w-full h-24 lg:h-32 rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center gap-4 hover:bg-white dark:hover:bg-surface-dark hover:border-primary/50 transition-all group">
              <div className="size-12 lg:size-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-text-muted group-hover:bg-primary/10 group-hover:text-primary transition-all">
                <span className="material-symbols-outlined text-3xl">add_a_photo</span>
              </div>
              <div className="text-left">
                <p className="text-xs lg:text-sm font-black text-text-main dark:text-white">Fotoğraf Yükle</p>
                <p className="text-[10px] font-bold text-text-muted">PNG, JPG (Max 5MB)</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Action Footer - Fixed at bottom */}
      <footer className="p-5 lg:p-8 bg-white/50 dark:bg-surface-dark/50 backdrop-blur-md border-t border-gray-100 dark:border-white/5 shrink-0">
        <button
          onClick={onSave}
          className="w-full py-4 lg:py-6 bg-primary text-white rounded-2xl font-black text-sm lg:text-base shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
        >
          <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
          TOPLULUĞA GÖNDER
        </button>
      </footer>
    </div>
  );
};

export default AddWord;
