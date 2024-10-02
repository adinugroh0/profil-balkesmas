// src/lib/newsService.ts
import { storage } from "./firebaseConfig"; // Import konfigurasi Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Fungsi untuk mengunggah file ke Google Cloud Storage menggunakan Firebase Storage
export const uploadFileToGCS = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload-image", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Gagal mengupload file");
  }

  const data = await response.json();
  return data.imageUrl; // URL gambar yang diupload
};

// Fungsi untuk menambahkan berita dengan gambar
// src/lib/newsService.ts
export const addNewsWithImage = async (newsData: {
  title: string;
  content: string;
  imageUrl: string;
}) => {
  try {
    const response = await fetch("/api/add-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsData), // Kirim data ke backend
    });

    if (!response.ok) {
      throw new Error("Gagal menambah berita");
    }

    return await response.json();
  } catch (error) {
    console.error("Error menambah berita:", error);
    throw new Error("Gagal menambah berita dengan gambar");
  }
};

// Fungsi untuk mendapatkan berita
export const getNews = async () => {
  try {
    const response = await fetch("/api/get-news");
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};
