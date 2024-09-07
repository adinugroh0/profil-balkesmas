"use client";
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

const UploadBerita = () => {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [gambar, setGambar] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload gambar ke Firebase Storage jika ada
      let gambarURL = "";
      if (gambar) {
        const gambarRef = ref(storage, `gambar/${gambar.name}`);
        await uploadBytes(gambarRef, gambar);
        gambarURL = await getDownloadURL(gambarRef);
      }

      // Upload video ke Firebase Storage jika ada
      let videoURL = "";
      if (video) {
        const videoRef = ref(storage, `video/${video.name}`);
        await uploadBytes(videoRef, video);
        videoURL = await getDownloadURL(videoRef);
      }

      // Simpan metadata berita ke Firestore
      await addDoc(collection(db, "berita"), {
        judul,
        konten,
        gambarURL,
        videoURL,
        timestamp: Timestamp.now(),
      });

      // Reset form setelah upload berhasil
      setJudul("");
      setKonten("");
      setGambar(null);
      setVideo(null);
    } catch (error) {
      console.error("Error uploading document: ", error);
    }

    setLoading(false);
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
        <div className="mb-4">
          <label className="block mb-1">Gambar:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setGambar(e.target.files ? e.target.files[0] : null)
            }
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setVideo(e.target.files ? e.target.files[0] : null)
            }
            className="border p-2 w-full"
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
