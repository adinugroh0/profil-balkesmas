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
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold">Dashboard Berita</h1>
      <p className="mb-4">Jumlah Berita: {newsCount}</p>
      <NewsDashboard onNewsCountChange={handleNewsCountChange} />
    </div>
  );
}
