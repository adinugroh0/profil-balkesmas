"use client"; // Penanda bahwa ini adalah Client Component

import { useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";
import Image from "next/image";

interface NewsFormData {
  title: string;
  content: string;
  author: string;
  image: File | null;
}

interface UploadNewsProps {
  onNewsAdded: (count: number) => void; // Menambahkan prop untuk callback
}

export default function UploadNews({ onNewsAdded }: UploadNewsProps) {
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    content: "",
    author: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage(null);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let imageUrl = "";

      // Upload image if it exists
      if (formData.image) {
        const fileName = `${Date.now()}_${formData.image.name}`;
        const { data: imageData, error: imageError } = await supabase.storage
          .from("news-images")
          .upload(`public/${fileName}`, formData.image);

        if (imageError) throw new Error(imageError.message);

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
          image_url: imageUrl,
        },
      ]);

      if (error) throw new Error(error.message);

      // Memanggil onNewsAdded untuk memperbarui jumlah berita
      onNewsAdded(1); // Menganggap satu berita telah ditambahkan

      // Reset form fields
      setFormData({ title: "", content: "", author: "", image: null });
      setPreviewImage(null);
    } catch (error) {
      setError("Error uploading news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 p-11">
        Upload Berita
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Preview */}
        <div>
          <div className="flex flex-col md:flex-row  gap-4">
            {/* Input untuk mengunggah gambar, disembunyikan */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden" // Sembunyikan input file
              id="imageInput"
            />

            {/* Preview gambar yang bisa di-klik untuk memicu input gambar */}
            <div
              className="w-full  flex items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 cursor-pointer transition duration-300 hover:border-blue-500"
              onClick={() => document.getElementById("imageInput")?.click()} // Trigger klik pada input file
            >
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Preview"
                  className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                  width={150}
                  height={150}
                />
              ) : (
                <div className="w-36 h-36 flex items-center justify-center">
                  <span className="text-gray-500">
                    Klik untuk mengunggah gambar
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3">
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Masukkan judul berita"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Masukkan konten berita"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                placeholder="Masukkan nama penulis"
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
          </form>
        </div>
      </div>
    </div>
  );
}
