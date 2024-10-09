// components/NewsList.tsx
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
        // Pastikan nama tabel sesuai dengan yang ada di Supabase
        const { data, error, status } = await supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        if (error && status !== 406) {
          // 406 Not Acceptable bisa diabaikan
          console.error("Error fetching data:", error, "Status:", status);
          throw new Error(error.message);
        }

        setNews(data || []);
      } catch (error) {
        console.error("Caught error:", error);
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
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Daftar Berita
      </h1>
      {news.length === 0 ? (
        <p className="text-center text-gray-500">Tidak ada berita.</p>
      ) : (
        <ul className="space-y-8">
          {news.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start transition transform hover:scale-105 hover:shadow-lg">
              {item.image_url && (
                <div className="flex-shrink-0 w-full lg:w-1/3">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center m-7">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <p className="text-gray-500 mb-4">
                  <strong>Penulis:</strong> {item.author}
                </p>
                <p className="text-gray-400 text-sm">
                  <em>
                    Dibuat pada:{" "}
                    {new Date(item.created_at).toLocaleDateString()}
                  </em>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
