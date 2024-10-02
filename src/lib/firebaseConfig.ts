// /lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
export const db = getFirestore(app);
export const storage = getStorage(app); // Ekspor storage jika diperlukan

const uploadFileToGCS = async (file: File) => {
  const storageRef = ref(storage, `news-images/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  console.log("File uploaded at:", downloadURL);
  return downloadURL;
};
