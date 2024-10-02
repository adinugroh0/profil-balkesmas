"use client";

import { useEffect, useState } from "react";
import { addNewsWithImage, uploadFileToGCS } from "@/src/lib/newsService"; // Pastikan ini sesuai dengan path yang benar
import Image from "next/image";

const NewsPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [newsList, setNewsList] = useState<any[]>([]);

  // Function to add news with image
  const handleAddNews = async () => {
    if (title.trim() && content.trim() && image) {
      try {
        // Upload image to GCS and get the image URL
        const imageUrl = await uploadFileToGCS(image);

        // Send news data to the backend
        const response = await addNewsWithImage({ title, content, imageUrl });
        console.log("Response from addNewsWithImage:", response);

        // Refresh the news list after adding
        fetchNews();

        // Reset the form fields
        setTitle("");
        setContent("");
        setImage(null);
      } catch (error) {
        console.error("Error adding news:", error);
      }
    } else {
      alert("Pastikan semua bidang diisi!");
    }
  };

  // Function to fetch news from the API
  const fetchNews = async () => {
    try {
      const response = await fetch("/api/get-news");
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const news = await response.json();
      console.log("Fetched news:", news);
      setNewsList(news);
    } catch (error) {
      console.error("Error fetching news:", error);
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

export default NewsPage;
