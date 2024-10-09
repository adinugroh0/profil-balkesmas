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

export default function NewsDashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<number | null>(null); // Menyimpan ID berita yang sedang diedit
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: null as File | null,
  });

  // Mengambil data berita dari database
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
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

  // Menghapus berita
  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      setError("Error deleting news.");
      return;
    }

    setNews(news.filter((item) => item.id !== id)); // Menghapus dari state
  };

  // Mengedit berita
  const handleEdit = (item: NewsItem) => {
    setIsEditing(item.id);
    setFormData({
      title: item.title,
      content: item.content,
      author: item.author,
      image: null, // Tidak memuat ulang gambar di form
    });
  };

  // Menyimpan perubahan berita
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEditing) return;

    const { error } = await supabase
      .from("news")
      .update({
        title: formData.title,
        content: formData.content,
        author: formData.author,
      })
      .eq("id", isEditing);

    if (error) {
      setError("Error updating news.");
      return;
    }

    // Mengupdate state dengan berita yang diedit
    setNews(
      news.map((item) =>
        item.id === isEditing
          ? {
              ...item,
              title: formData.title,
              content: formData.content,
              author: formData.author,
            }
          : item
      )
    );

    setIsEditing(null);
  };

  // Form handling
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard Berita
      </h1>
      {news.length === 0 ? (
        <p className="text-lg text-gray-500">Tidak ada berita.</p>
      ) : (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="bg-white shadow-md rounded-lg p-4">
              {isEditing === item.id ? (
                <form onSubmit={handleSave} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Judul:
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Konten:
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Penulis:
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold">
                      Gambar Baru (opsional):
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Simpan Perubahan
                  </button>
                </form>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.content}</p>
                  <p className="text-gray-600">
                    <strong>Penulis:</strong> {item.author}
                  </p>
                  {item.image_url && (
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      className="mt-2 rounded-lg shadow-lg"
                      style={{ width: "300px", height: "auto" }}
                      width={300}
                      height={300}
                    />
                  )}
                  <p className="text-gray-500 text-sm italic mt-2">
                    <em>
                      Dibuat pada:{" "}
                      {new Date(item.created_at).toLocaleDateString()}
                    </em>
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-200">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white font-semibold py-1 px-3 rounded-md hover:bg-red-700 transition duration-200">
                      Hapus
                    </button>
                  </div>
                </>
              )}
              <hr className="my-4" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
