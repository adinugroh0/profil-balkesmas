"use client";

import { useEffect, useState } from "react";
import {
  getNews,
  addNewsWithImage,
  uploadFileToGCS,
} from "@/src/lib/newsService";
import Image from "next/image";

const NewsInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [newsList, setNewsList] = useState<any[]>([]);

  // Fungsi untuk menambah berita
  const handleAddNews = async () => {
    if (title.trim() && content.trim() && image) {
      try {
        // Upload image ke GCS dan dapatkan URL-nya
        const imageUrl = await uploadFileToGCS(image);

        // Kirim data berita dan URL gambar ke backend
        const response = await addNewsWithImage({ title, content, imageUrl });
        console.log("Response dari addNewsWithImage:", response);

        // Refresh data berita
        fetchNews();

        // Reset input
        setTitle("");
        setContent("");
        setImage(null);
      } catch (error) {
        console.error("Error menambahkan berita:", error);
      }
    } else {
      alert("Pastikan semua bidang diisi!");
    }
  };

  // Mengambil data berita dari API
  const fetchNews = async () => {
    try {
      const news = await getNews();
      console.log("Data berita:", news);
      setNewsList(news);
    } catch (error) {
      console.error("Error mengambil berita:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-col items-center p-40">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul"
        className="border p-2 m-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Isi berita"
        className="border p-2 m-2"
      />
      <input
        type="file"
        onChange={(e) => e.target.files && setImage(e.target.files[0])}
        className="border p-2 m-2"
      />
      <button
        onClick={handleAddNews}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
        Tambah Berita
      </button>

      <div className="news-list mt-10">
        {newsList.length > 0 ? (
          newsList.map((news) => (
            <div key={news.id} className="p-4 border mb-4">
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={150}
                height={150}
              />
              <h2 className="font-bold">{news.title}</h2>
              <p>{news.content}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada berita untuk ditampilkan.</p>
        )}
      </div>
    </div>
  );
};

export default NewsInput;
