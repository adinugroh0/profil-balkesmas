"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient"; // Pastikan path ini sesuai dengan struktur folder Anda
import Image from "next/image";

const Berita = () => {
  const [berita, setBerita] = useState<any[]>([]);

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("*")
        .order("timestamp", { ascending: false });

      if (error) {
        console.error("Error fetching news:", error);
        return;
      }

      setBerita(data);
    };

    fetchBerita();
  }, []);

  return (
    <div className="p-4 ">
      <h1 className="text-xl lg:text-3xl leading-tight mb-4 placeholder p-7">
        Berita Terbaru
      </h1>
      {berita.length === 0 ? (
        <p>Tidak ada berita.</p>
      ) : (
        berita.map((item) => (
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
        ))
      )}
    </div>
  );
};

export default Berita;
