"use client";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/src/lib/firebaseConfig"; // Pastikan import db sudah benar
import Image from "next/image";

const TampilkanBerita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "berita"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const beritaList = [];
      querySnapshot.forEach((doc) => {
        beritaList.push({ id: doc.id, ...doc.data() });
      });
      setBerita(beritaList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      {berita.map((item) => (
        <div key={item.id} className="mb-8">
          <h3 className="text-lg font-bold mb-2">{item.judul}</h3>
          <p className="mb-2">{item.konten}</p>
          {item.gambarURL && (
            <Image
              src={item.gambarURL}
              alt={item.judul}
              className="mb-2 w-full max-w-sm"
              width={458}
              height={636}
            />
          )}
          {item.videoURL && (
            <video controls className="mb-2 w-full max-w-md">
              <source src={item.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <small className="text-gray-500">
            {new Date(item.timestamp?.toDate()).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default TampilkanBerita;
