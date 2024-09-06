// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Jika menggunakan Firestore
import { getDatabase } from "firebase/database"; // Jika menggunakan Realtime Database
import { getStorage } from "firebase/storage"; // Untuk mengunggah gambar

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // untuk Realtime Database
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
export const db = getFirestore(app); // Jika menggunakan Firestore

// Inisialisasi Realtime Database
export const database = getDatabase(app); // Jika menggunakan Realtime Database

// Inisialisasi Firebase Storage
export const storage = getStorage(app);
