// src/components/EditBerita.tsx

"use client";
import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebaseConfig";

interface EditBeritaProps {
  id: string;
}

const EditBerita = ({ id }: EditBeritaProps) => {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const docRef = doc(db, "berita", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setJudul(data.judul);
          setKonten(data.konten);
        } else {
          setError("Berita tidak ditemukan");
        }
      } catch (err) {
        setError("Gagal memuat berita");
      }
    };

    fetchBerita();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = doc(db, "berita", id);
      await updateDoc(docRef, {
        judul,
        konten,
      });
      alert("Berita berhasil diperbarui");
    } catch (err) {
      setError("Gagal memperbarui berita");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Berita</h2>
      {error && <p className="text-red-500">{error}</p>}
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
          {loading ? "Memperbarui..." : "Perbarui Berita"}
        </button>
      </form>
    </div>
  );
};

export default EditBerita;
