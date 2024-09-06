"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface BeritaItem {
  id: string;
  judul: string;
  konten: string;
  timestamp: { seconds: number; nanoseconds: number };
}

const Berita = () => {
  const [berita, setBerita] = useState<BeritaItem[]>([]);

  useEffect(() => {
    const q = query(collection(db, "berita"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const beritaList: BeritaItem[] = [];
      querySnapshot.forEach((doc) => {
        beritaList.push({ id: doc.id, ...doc.data() } as BeritaItem);
      });
      setBerita(beritaList);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      try {
        await deleteDoc(doc(db, "berita", id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-xl lg:text-3xl leading-tight">Berita Terbaru</h1>
        <Link
          href="/"
          className="text-blue-500 py-2 px-4 md:py-0 hover:text-black">
          Beranda
        </Link>
        {berita.map((item) => (
          <div key={item.id} className="mb-4 border p-4 rounded">
            <h3 className="font-bold">{item.judul}</h3>
            <p>{item.konten}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white py-1 px-2 rounded mt-2">
              Delete
            </button>
            <Link
              href={`/edit-berita/${item.id}`}
              className="text-blue-500 py-1 px-2 rounded mt-2 block">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Berita;
