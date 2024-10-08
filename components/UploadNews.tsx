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
    <div>
      <h1>Upload Berita</h1>
      <form onSubmit={handleUpload}>
        <div>
          <label>Judul:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Konten:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Penulis:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gambar:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Berita"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
