"use client"; // Penanda bahwa ini adalah Client Component

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url: string; // URL gambar yang di-upload
  created_at: string; // Tanggal berita di-upload
}

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        // Ambil data berita dari tabel "news"
        const { data, error } = await supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw new Error(error.message);

        setNews(data || []);
      } catch (error) {
        setError("Error fetching news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h1>Daftar Berita</h1>
      {news.length === 0 ? (
        <p>Tidak ada berita.</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>
                <strong>Penulis:</strong> {item.author}
              </p>
              {item.image_url && (
                <Image
                  src={item.image_url}
                  alt={item.title}
                  style={{ width: "300px", height: "auto" }}
                />
              )}
              <p>
                <em>
                  Dibuat pada: {new Date(item.created_at).toLocaleDateString()}
                </em>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}