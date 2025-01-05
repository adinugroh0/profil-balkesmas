"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient"; // Pastikan Anda mengimpor supabase dengan benar
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url: string;
  created_at: string;
  category: string; // Menambahkan properti category
}

const categories = [
  "all",
  "Kesehatan",
  "Pendidikan",
  "Teknologi",
  "Olahraga",
  "Lainnya",
]; // Menambahkan opsi "all"

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Default kategori "all"

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        // Menambahkan kondisi untuk filter berdasarkan kategori, jika bukan "all"
        if (selectedCategory !== "all") {
          query = query.eq("category", selectedCategory);
        }

        const { data, error, status } = await query;

        if (error && status !== 406) {
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
  }, [selectedCategory]); // Reload data saat kategori berubah

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="bg-[#2A8EE4]">
      <div className="max-w-5xl mx-auto py-10 flex flex-col justify-center items-center gap-3">
        <div className="rounded-lg bg-[#7FBBEF] flex justify-center text-center w-64 items-center p-2">
          <h1 className="font-bold text-center text-[#0014CA]">
            Berita Dan Kegiatan
          </h1>
        </div>
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Informasi Dan Dokumentasi Kegiatan
        </h1>

        {/* Dropdown untuk memilih kategori */}
        <div className="mb-6">
          <label htmlFor="category" className="text-white text-lg mr-2">
            Pilih Kategori:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border-none focus:outline-none">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {news.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada berita untuk kategori ini.
          </p>
        ) : (
          <ul className="space-y-8">
            {news.map((item) => (
              <li
                key={item.id}
                className="bg-[#2A8EE4] shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start transition transform hover:scale-105 hover:shadow-lg">
                <Link
                  href={`/news/${item.id}`} // Link ke halaman detail berita
                  className="flex flex-col lg:flex-row items-start w-full">
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
                    <h2 className="text-3xl font-semibold text-white mb-2">
                      {item.title}
                    </h2>
                    <p className="text-white mt-4">
                      {item.content.substring(0, 150)}...
                    </p>
                    <p className="text-white mt-2 font-semibold">
                      Kategori:{" "}
                      <span className="text-blue-300">{item.category}</span>
                    </p>
                    <p className="text-white italic mb-4">
                      <strong>Penulis:</strong> {item.author}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
