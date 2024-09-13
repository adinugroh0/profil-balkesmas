"use client";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";

const Berita = () => {
  const [berita, setBerita] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "berita"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const beritaList: any[] = [];
      querySnapshot.forEach((doc) => {
        beritaList.push({ id: doc.id, ...doc.data() });
      });
      setBerita(beritaList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl lg:text-3xl leading-tight mb-4 placeholder p-7">
        Berita Terbaru
      </h1>
      {berita.map((item) => (
        <div key={item.id} className="mb-4">
          <h3 className="text-lg font-semibold">{item.judul}</h3>
          <p>{item.konten}</p>

          {item.gambarURL && (
            <Image
              src={item.gambarURL}
              alt={item.judul}
              className="my-2 w-full max-w-lg"
              width={458}
              height={636}
            />
          )}

          {item.videoURL && (
            <video controls className="my-2 w-full max-w-lg">
              <source src={item.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default Berita;
