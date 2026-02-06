
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: MOCK_USER.name,
    username: MOCK_USER.username,
    bio: MOCK_USER.bio,
    location: MOCK_USER.location
  });

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/profile');
    }
  };

  const handleSave = () => {
    alert('Profil başarıyla güncellendi!');
    handleBack();
  };

  const InputField = ({ label, value, onChange, placeholder, type = "text", isTextArea = false }: any) => (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-text-muted dark:text-stone-500 ml-1">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-4 px-5 text-sm leading-relaxed shadow-sm focus:ring-2 focus:ring-primary/50 dark:text-white placeholder:text-stone-300 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white dark:bg-surface-dark border-none rounded-2xl py-3.5 px-5 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/50 dark:text-white placeholder:text-stone-300"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-10 animate-in fade-in duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 p-4 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <button 
          onClick={handleBack} 
          className="text-sm font-bold text-text-muted hover:text-text-main dark:hover:text-white px-2"
        >
          İptal
        </button>
        <h1 className="text-xs font-black uppercase tracking-widest text-text-main dark:text-white">Profili Düzenle</h1>
        <button 
          onClick={handleSave}
          className="text-sm font-black text-primary px-2"
        >
          Kaydet
        </button>
      </header>

      <main className="p-6">
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="size-28 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-xl">
              <img 
                src={MOCK_USER.avatar} 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
            </div>
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
              <span className="material-symbols-outlined text-white text-3xl">photo_camera</span>
            </button>
          </div>
          <button className="mt-4 text-xs font-black text-primary uppercase tracking-widest">
            Fotoğrafı Değiştir
          </button>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          <InputField 
            label="Ad Soyad" 
            value={formData.name} 
            onChange={(val: string) => setFormData({...formData, name: val})}
            placeholder="Adınızı girin"
          />
          
          <InputField 
            label="Kullanıcı Adı" 
            value={formData.username} 
            onChange={(val: string) => setFormData({...formData, username: val})}
            placeholder="Kullanıcı adınız"
          />

          <InputField 
            label="Biyografi" 
            value={formData.bio} 
            onChange={(val: string) => setFormData({...formData, bio: val})}
            placeholder="Kendinizden bahsedin..."
            isTextArea={true}
          />

          <InputField 
            label="Konum" 
            value={formData.location} 
            onChange={(val: string) => setFormData({...formData, location: val})}
            placeholder="Şehir, Ülke"
          />
        </div>

        {/* Save Button */}
        <div className="mt-12">
          <button 
            onClick={handleSave}
            className="w-full h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 active:scale-95 transition-all"
          >
            Değişiklikleri Uygula
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
