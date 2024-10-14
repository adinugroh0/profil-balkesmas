"use client"; // Menandakan bahwa ini adalah Client Component

import NewsDashboard from "./NewsDashboard";
import { useState, useCallback } from "react";

export default function Roro() {
  const [newsCount, setNewsCount] = useState(0);

  // Menggunakan useCallback untuk mencegah pembuatan ulang fungsi yang menyebabkan re-render
  const handleNewsCountChange = useCallback((count: number) => {
    setNewsCount(count);
  }, []); // Fungsi hanya akan dibuat sekali

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex flex-col bg-[#3699FF] p-4 w-56 rounded-xl drop-shadow-xl">
        <h1 className="text-2xl font-bold text-white">
          Dashboard <br /> Berita : {newsCount}
        </h1>
      </div>
      <NewsDashboard onNewsCountChange={handleNewsCountChange} />
    </div>
  );
}
