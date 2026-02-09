
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ_DATA = [
  {
    category: "Genel",
    questions: [
      { q: "KKTC Sözlük nedir?", a: "Kıbrıs ağzı, kültürü ve yerel değerlerini korumak için tasarlanmış bir platformdur." },
      { q: "Üyelik ücretli mi?", a: "Hayır, platformumuz tamamen ücretsizdir ve topluluk odaklıdır." }
    ]
  },
  {
    category: "İçerik & Katkı",
    questions: [
      { q: "Nasıl yeni kelime eklerim?", a: "Ana ekrandaki '+' butonuna basarak bildiğiniz kelimeleri ekleyebilirsiniz." },
      { q: "Kelimelerim neden hemen görünmüyor?", a: "Tüm içerikler moderatör onayından geçtikten sonra yayına alınmaktadır." }
    ]
  },
  {
    category: "Hesap & Güvenlik",
    questions: [
      { q: "Şifremi unuttum, ne yapmalıyım?", a: "Ayarlar > Güvenlik bölümünden şifre sıfırlama talebinde bulunabilirsiniz." },
      { q: "Hesabımı silebilir miyim?", a: "Evet, gizlilik ayarları altından hesabınızı kalıcı olarak kapatabilirsiniz." }
    ]
  }
];

const HelpCenter: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/settings');
    }
  };

  const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-surface-dark rounded-2xl border border-black/5 overflow-hidden transition-all duration-300 cursor-pointer"
      >
        <div className="p-4 flex items-center justify-between">
          <h4 className="text-sm font-bold text-text-main dark:text-white pr-4">{question}</h4>
          <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </div>
        {isOpen && (
          <div className="px-4 pb-4 animate-in fade-in duration-300">
            <p className="text-[13px] text-text-secondary dark:text-stone-400 leading-relaxed italic border-t border-black/5 pt-3">
              {answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20 animate-in fade-in duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 p-4 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:scale-90 transition-all text-text-main dark:text-white"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xs font-black uppercase tracking-widest text-text-muted dark:text-stone-400">Yardım Merkezi</h1>
          <div className="size-10" />
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">search</span>
          <input
            type="text"
            placeholder="Size nasıl yardımcı olabiliriz?"
            className="w-full h-12 pl-12 pr-4 rounded-xl border-none bg-stone-100 dark:bg-white/5 text-sm font-semibold focus:ring-2 focus:ring-primary/30 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="p-6 space-y-8 lg:short:space-y-6">
        {/* Support Channels */}
        <div className="grid grid-cols-2 gap-4">
          <button className="p-6 bg-primary/5 dark:bg-primary/10 rounded-[2rem] border border-primary/20 text-center flex flex-col items-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl text-primary">mail</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">E-POSTA GÖNDER</p>
          </button>
          <button className="p-6 bg-stone-900 dark:bg-surface-dark rounded-[2rem] border border-black/5 text-center flex flex-col items-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl text-white">chat</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-white">CANLI DESTEK</p>
          </button>
        </div>

        {/* FAQ Sections */}
        {FAQ_DATA.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted px-1">
              {section.category}
            </h3>
            <div className="space-y-3">
              {section.questions
                .filter(q => q.q.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((faq, fIdx) => (
                  <FAQItem key={fIdx} question={faq.q} answer={faq.a} />
                ))}
            </div>
          </section>
        ))}

        {/* Still Need Help? */}
        <div className="bg-white dark:bg-surface-dark p-8 rounded-[2.5rem] border border-black/5 text-center shadow-sm">
          <div className="size-14 rounded-full bg-stone-50 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-text-muted">contact_support</span>
          </div>
          <h3 className="text-lg font-black mb-2 text-text-main dark:text-white">Aradığınızı bulamadınız mı?</h3>
          <p className="text-xs text-text-secondary dark:text-stone-400 mb-6 font-medium italic">
            Ekibimiz Kıbrıs'ın her yerinden size destek olmaya hazır. Hemen bir bilet oluşturun.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
            YENİ DESTEK TALEBİ
          </button>
        </div>

        <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-text-muted opacity-40 py-10">
          DESTEK MERKEZİ • KKTC SÖZLÜK
        </p>
      </main>
    </div>
  );
};

export default HelpCenter;
