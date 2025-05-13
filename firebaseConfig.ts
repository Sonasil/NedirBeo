// project/firebaseConfig.ts
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCuHcwG3HqvnaH8JqQuqPuKrvAjG_7306w",
  authDomain: "kktc-sozluk.firebaseapp.com",
  projectId: "kktc-sozluk",
  storageBucket: "kktc-sozluk.firebasestorage.app",
  messagingSenderId: "686614716316",
  appId: "1:686614716316:web:1761b5026c1a6a6ad47259",
  measurementId: "G-YWS37Z9HDD"
};

export const firebaseApp = initializeApp(firebaseConfig);