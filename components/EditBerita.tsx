"use client";
import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface EditBeritaProps {
  id: string;
}

const EditBerita = ({ id }: EditBeritaProps) => {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBerita = async () => {
      const docRef = doc(db, "berita", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setJudul(data.judul);
        setKonten(data.konten);
      } else {
        console.error("No such document!");
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
      router.push("/berita");
    } catch (error) {
      console.error("Error updating document: ", error);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Edit Berita</h2>
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
          {loading ? "Updating..." : "Update Berita"}
        </button>
      </form>
    </div>
  );
};

export default EditBerita;
