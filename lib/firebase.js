import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyCa4JgkFX-58UjNHgkbK2CDGOgkq5ryWLI",
  authDomain: "balkesmas-news-2d40e.firebaseapp.com",
  projectId: "balkesmas-news-2d40e",
  storageBucket: "balkesmas-news-2d40e.appspot.com",
  messagingSenderId: "916445793942",
  appId: "1:916445793942:web:82087b8d1a80ea088fbcb7",
  measurementId: "G-6B1BGG0M1Y",
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
