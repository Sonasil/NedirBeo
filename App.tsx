
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import WordDetail from './pages/WordDetail';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import AddWord from './pages/AddWord';
import Settings from './pages/Settings';
import EditProfile from './pages/EditProfile';
import Security from './pages/Security';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';

const TopNav = ({ onAddClick }: { onAddClick: () => void }) => {
  const navigate = useNavigate();
  return (
    <nav className="hidden lg:flex fixed top-0 left-0 w-full h-20 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md z-[100] border-b border-black/5 items-center px-12 justify-between">
      <div className="flex items-center gap-12">
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
            <span className="material-symbols-outlined text-white text-2xl font-black">menu_book</span>
          </div>
          <h1 className="text-xl font-black tracking-tight text-text-main dark:text-white uppercase">KKTC <span className="text-primary">SÖZLÜK</span></h1>
        </div>

        <div className="flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-600'}`}>Ana Sayfa</NavLink>
          <NavLink to="/explore" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-600'}`}>Keşfet</NavLink>
          <NavLink to="/leaderboard" className={({ isActive }) => `text-sm font-black uppercase tracking-widest transition-colors ${isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-600'}`}>Sıralama</NavLink>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={onAddClick}
          className="h-11 px-6 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          KELİME EKLE
        </button>
        <div className="h-8 w-[1px] bg-stone-200 dark:bg-white/10" />
        <NavLink 
          to="/profile" 
          className={({ isActive }) => `flex items-center gap-3 transition-colors ${isActive ? 'text-primary' : 'text-stone-500 hover:text-stone-700'}`}
        >
          <div className="size-10 rounded-full bg-stone-100 dark:bg-white/5 border border-black/5 overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbS1Rh8ZGR-8LknOXjyt-v5LhoKj__cNBQ5NPnLhWBMvNMNfX32Jin2GUDPBg1mMLCtWO9GD3FkFnKlwc_RjSFwKBx5XAiIImqa2HTDD3vfptS3DFmmT8wSgrKyOm_GdrI-YAnE_u82xdr3eFDCRtyP73-KGnOHytvaOCfZE-1vKdROYxhWupFzzwth8uOqAjiSEzsh2ZtBF6cfo1oHDUCIcmIfCwq4TR8vRJ3YiWed3Lb4I1Kuqjf-QHEH21oIvXDvRtKNxrl6vZG" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-black uppercase tracking-widest">Hesabım</span>
        </NavLink>
      </div>
    </nav>
  );
};

const BottomNav = ({ onAddClick }: { onAddClick: () => void }) => {
  const location = useLocation();
  const isDetail = location.pathname.startsWith('/word/');
  const isSettings = location.pathname === '/settings';
  const isEditProfile = location.pathname === '/edit-profile';
  const isSecurity = location.pathname === '/security';
  const isAbout = location.pathname === '/about';
  const isHelpCenter = location.pathname === '/help-center';
  
  if (isDetail || isSettings || isEditProfile || isSecurity || isAbout || isHelpCenter) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pointer-events-none flex justify-center">
      <nav className="relative h-20 bg-white dark:bg-surface-dark shadow-[0_-5px_25px_-10px_rgba(0,0,0,0.1)] rounded-[2.5rem] flex items-center justify-between px-2 w-full max-w-[500px] border border-black/5 pointer-events-auto">
        
        {/* Left Side */}
        <div className="flex items-center justify-around flex-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-primary' : 'text-stone-400'}`}
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>home</span>
                <span className="text-[9px] font-black mt-0.5 tracking-tighter uppercase">ANA SAYFA</span>
              </>
            )}
          </NavLink>
          <NavLink 
            to="/explore" 
            className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-primary' : 'text-stone-400'}`}
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>explore</span>
                <span className="text-[9px] font-black mt-0.5 tracking-tighter uppercase">KEŞFET</span>
              </>
            )}
          </NavLink>
        </div>

        {/* Center Floating Button */}
        <div className="relative -top-5 px-1">
          <button 
            onClick={onAddClick}
            className="size-16 rounded-full bg-primary text-white shadow-xl shadow-primary/40 flex items-center justify-center border-[5px] border-background-light dark:border-background-dark active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-around flex-1">
          <NavLink 
            to="/leaderboard" 
            className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-primary' : 'text-stone-400'}`}
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>leaderboard</span>
                <span className="text-[9px] font-black mt-0.5 tracking-tighter uppercase">SIRALAMA</span>
              </>
            )}
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => `flex flex-col items-center justify-center transition-colors ${isActive ? 'text-primary' : 'text-stone-400'}`}
          >
            {({ isActive }) => (
              <>
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}>person</span>
                <span className="text-[9px] font-black mt-0.5 tracking-tighter uppercase">PROFİL</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  const [isAddViewOpen, setIsAddViewOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-x-hidden transition-all duration-300">
        <TopNav onAddClick={() => setIsAddViewOpen(true)} />
        
        <main className="lg:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore onAddClick={() => setIsAddViewOpen(true)} />} />
            <Route path="/word/:id" element={<WordDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </main>
        
        {/* Full screen Add Word View Overlay */}
        {isAddViewOpen && (
          <div className="fixed inset-0 z-[110] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-background-light dark:bg-background-dark h-[90vh] md:h-auto md:max-h-[80vh] rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-black/5">
              <AddWord 
                onBack={() => setIsAddViewOpen(false)} 
                onSave={() => {
                  alert('Kelime başarıyla kaydedildi!');
                  setIsAddViewOpen(false);
                }} 
              />
            </div>
          </div>
        )}

        <BottomNav onAddClick={() => setIsAddViewOpen(true)} />
      </div>
    </Router>
  );
};

export default App;
