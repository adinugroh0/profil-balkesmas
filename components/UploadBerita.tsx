"use client";
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const UploadBerita = () => {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "berita"), {
        judul,
        konten,
        timestamp: Timestamp.now(),
      });
      setJudul("");
      setKonten("");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Upload Berita Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Judul:</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Konten:</label>
          <textarea
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            className="border p-2 w-full"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded">
          {loading ? "Uploading..." : "Upload Berita"}
        </button>
      </form>
    </div>
  );
};

export default UploadBerita;
