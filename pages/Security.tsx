
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Security: React.FC = () => {
  const navigate = useNavigate();
  const [isEmailVerified, setIsEmailVerified] = useState(true);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/settings');
    }
  };

  const handleUpdatePassword = () => {
    alert('Şifreniz başarıyla güncellendi!');
    handleBack();
  };

  const InputField = ({ label, placeholder, type = "password" }: any) => (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-stone-500 ml-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-3.5 px-5 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/50 dark:text-white placeholder:text-stone-300"
      />
    </div>
  );

  const VerificationItem = ({ icon, title, subtitle, isVerified, onClick }: any) => (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl border border-black/[0.03] active:scale-[0.98] transition-all cursor-pointer"
    >
      <div className="size-10 rounded-xl bg-stone-50 dark:bg-white/5 flex items-center justify-center">
        <span className="material-symbols-outlined text-xl text-text-main dark:text-white">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold tracking-tight text-text-main dark:text-white">{title}</h3>
          {isVerified && (
            <span className="material-symbols-outlined text-green-500 text-base">verified</span>
          )}
        </div>
        <p className="text-[11px] text-text-muted dark:text-stone-400 font-medium">{subtitle}</p>
      </div>
      <div className="flex items-center">
        {isVerified ? (
          <span className="text-[10px] font-black text-green-500 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded-lg">DOĞRULANDI</span>
        ) : (
          <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-lg">DOĞRULA</span>
        )}
      </div>
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
        <h1 className="text-xs font-black uppercase tracking-widest text-text-muted dark:text-stone-400">Güvenlik ve Şifre</h1>
        <div className="size-10" /> {/* Spacer */}
      </header>

      <main className="p-6 space-y-10">
        {/* Change Password Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary text-xl">lock_reset</span>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-500">Şifre Değiştir</h2>
          </div>
          <div className="space-y-4">
            <InputField label="Mevcut Şifre" placeholder="••••••••" />
            <InputField label="Yeni Şifre" placeholder="En az 8 karakter" />
            <InputField label="Yeni Şifre Tekrar" placeholder="Şifrenizi onaylayın" />
            <button 
              onClick={handleUpdatePassword}
              className="w-full h-12 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Şifreyi Güncelle
            </button>
          </div>
        </section>

        {/* Verification Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary text-xl">how_to_reg</span>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted dark:text-stone-500">Hesap Doğrulama</h2>
          </div>
          <div className="space-y-3">
            <VerificationItem 
              icon="mail" 
              title="E-posta Doğrulama" 
              subtitle="ayse***@gmail.com"
              isVerified={isEmailVerified}
              onClick={() => {
                if(!isEmailVerified) alert('Doğrulama e-postası gönderildi.');
              }}
            />
            <VerificationItem 
              icon="phone_iphone" 
              title="Telefon Doğrulama" 
              subtitle="Güvenlik için telefon numaranızı ekleyin"
              isVerified={isPhoneVerified}
              onClick={() => {
                if(!isPhoneVerified) alert('Telefon doğrulama ekranına yönlendiriliyorsunuz.');
              }}
            />
          </div>
        </section>

        <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-text-muted dark:text-stone-600 opacity-40">
          KKTC SÖZLÜK GÜVENLİK ALTYAPISI
        </p>
      </main>
    </div>
  );
};

export default Security;
