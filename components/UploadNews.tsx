"use client"; // Penanda bahwa ini adalah Client Component

import { useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";

interface NewsFormData {
  title: string;
  content: string;
  author: string;
  image: File | null;
}

export default function UploadNews() {
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    content: "",
    author: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = "";

      // Upload image if it exists
      if (formData.image) {
        // Buat nama unik dengan menambahkan timestamp ke nama file
        const fileName = `${Date.now()}_${formData.image.name}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("news-images")
          .upload(`public/${fileName}`, formData.image);

        if (imageError) throw new Error(imageError.message);

        // Ambil URL publik dari gambar yang sudah di-upload
        if (imageData) {
          const { data } = supabase.storage
            .from("news-images")
            .getPublicUrl(imageData.path);

          imageUrl = data.publicUrl || "";
        }
      }

      // Insert news into the database
      const { data, error } = await supabase.from("news").insert([
        {
          title: formData.title,
          content: formData.content,
          author: formData.author,
          image_url: imageUrl, // URL gambar yang di-upload
        },
      ]);

      if (error) throw new Error(error.message);

      // Reset form fields
      setFormData({ title: "", content: "", author: "", image: null });
    } catch (error) {
      setError("Error uploading news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto  bg-white shadow-md rounded-lg p-7">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 p-11 ">
        Upload Berita
      </h1>
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Judul:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Konten:
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Penulis:
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Gambar:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-bold rounded-lg transition duration-300 ease-in-out ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}>
          {loading ? "Uploading..." : "Upload Berita"}
        </button>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
      </form>
    </div>
  );
}
