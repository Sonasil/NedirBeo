
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleBack = () => {
    const from = location.state?.from;
    if (from) {
      navigate(from);
    } else {
      navigate('/profile');
    }
  };

  const SettingItem = ({
    icon,
    title,
    subtitle,
    onClick,
    toggle,
    destructive
  }: {
    icon: string;
    title: string;
    subtitle?: string;
    onClick?: () => void;
    toggle?: boolean;
    destructive?: boolean;
  }) => (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl border border-black/[0.03] active:scale-[0.98] transition-all cursor-pointer ${destructive ? 'text-red-500' : ''}`}
    >
      <div className={`size-10 rounded-xl flex items-center justify-center ${destructive ? 'bg-red-50 dark:bg-red-500/10' : 'bg-stone-50 dark:bg-white/5'}`}>
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold tracking-tight text-text-main dark:text-white">{title}</h3>
        {subtitle && <p className="text-[11px] text-text-muted dark:text-stone-400 font-medium">{subtitle}</p>}
      </div>
      {toggle !== undefined ? (
        <div
          onClick={(e) => { e.stopPropagation(); onClick?.(); }}
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${toggle ? 'bg-primary' : 'bg-stone-200 dark:bg-stone-800'}`}
        >
          <div className={`size-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${toggle ? 'translate-x-6' : 'translate-x-0'}`} />
        </div>
      ) : (
        <span className="material-symbols-outlined text-stone-300 text-lg">chevron_right</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-10 animate-in fade-in duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 p-4 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <button
          onClick={handleBack}
          className="size-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 active:scale-90 transition-all text-text-main dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xs font-black uppercase tracking-widest text-text-muted dark:text-stone-400">Uygulama Ayarları</h1>
        <div className="size-10" /> {/* Spacer */}
      </header>

      <main className="p-6 space-y-8 lg:short:space-y-6">
        {/* Section: Account */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-500 px-1">Hesap</h2>
          <div className="space-y-3">
            <SettingItem
              icon="person_edit"
              title="Profili Düzenle"
              subtitle="Kişisel bilgilerinizi güncelleyin"
              onClick={() => navigate('/edit-profile')}
            />
            <SettingItem
              icon="shield_lock"
              title="Güvenlik ve Şifre"
              subtitle="Hesap güvenliğinizi yönetin"
              onClick={() => navigate('/security')}
            />
            <SettingItem icon="notifications_active" title="Bildirimler" toggle={notifications} onClick={() => setNotifications(!notifications)} />
          </div>
        </section>

        {/* Section: Appearance */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-500 px-1">Görünüm</h2>
          <div className="space-y-3">
            <SettingItem icon="dark_mode" title="Koyu Tema" toggle={isDarkMode} onClick={toggleDarkMode} />
            <SettingItem icon="language" title="Uygulama Dili" subtitle="Türkçe (Kıbrıs)" />
          </div>
        </section>

        {/* Section: Support */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-500 px-1">Destek & Bilgi</h2>
          <div className="space-y-3">
            <SettingItem
              icon="help"
              title="Yardım Merkezi"
              onClick={() => navigate('/help-center')}
            />
            <SettingItem icon="description" title="Kullanım Koşulları" />
            <SettingItem icon="policy" title="Gizlilik Politikası" />
            <SettingItem
              icon="info"
              title="Hakkımızda"
              subtitle="Versiyon 1.0.4 (Beta)"
              onClick={() => navigate('/about')}
            />
          </div>
        </section>

        {/* Section: Actions */}
        <section className="pt-4">
          <SettingItem
            icon="logout"
            title="Hesaptan Çıkış Yap"
            destructive
            onClick={() => {
              if (window.confirm('Çıkış yapmak istediğinize emin misiniz?')) {
                alert('Başarıyla çıkış yapıldı.');
                navigate('/');
              }
            }}
          />
          <p className="mt-8 text-center text-[9px] font-black uppercase tracking-[0.3em] text-text-muted dark:text-stone-600 opacity-40">
            KKTC SÖZLÜK • CYPRUS HERITAGE
          </p>
        </section>
      </main>
    </div>
  );
};

export default Settings;
