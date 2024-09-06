// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

export { db };
