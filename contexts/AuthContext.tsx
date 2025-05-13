// project/contexts/AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseApp } from '../firebaseConfig';

type UserRole = 'guest' | 'user' | 'admin'; // 3 rol tanımı

type AuthContextType = {
  user: User | null;         // Firebase’ten gelen kullanıcı nesnesi
  role: UserRole;            // guest/user/admin bilgisi
  loading: boolean;          // Firebase bağlantısı tamamlandı mı?
};

// Başlangıç değerleri — kimse giriş yapmamış (guest)
const AuthContext = createContext<AuthContextType>({
  user: null,
  role: 'guest',
  loading: true,
});

// useAuth() → diğer dosyalarda bu fonksiyonla kullanıcıya erişeceğiz
export const useAuth = () => useContext(AuthContext);

// Uygulamanın etrafını saran ve kullanıcıyı yakalayan yapı
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);   // kullanıcı objesi
  const [role, setRole] = useState<UserRole>('guest');   // başlangıçta guest kabul ediyoruz
  const [loading, setLoading] = useState(true);          // yükleme bitti mi?

  useEffect(() => {
    const auth = getAuth(firebaseApp); // firebase bağlantısı

    // Firebase'e kullanıcı oturumu açık mı diye sor
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // İLERİDE: burada Firestore’dan role bilgisi çekilecek
        setRole('user');
      } else {
        setRole('guest');
      }

      setLoading(false);
    });

    return unsubscribe; // bileşen kapandığında dinleyiciyi temizle
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};