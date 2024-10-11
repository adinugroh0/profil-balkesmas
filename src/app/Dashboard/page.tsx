"use client";

import { useState } from "react";
import UploadNews from "@/components/UploadNews";
import NewsDashboard from "@/components/NewsDashboard";
import Roro from "@/components/Roro";

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [newsCount, setNewsCount] = useState(0);

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        // Gantikan konten Home dengan komponen Roro
        return <Roro />;
      case "tambah-berita":
        return <UploadNews onNewsAdded={handleNewsCountChange} />;
      case "daftar-berita":
        return <NewsDashboard onNewsCountChange={handleNewsCountChange} />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  const handleNewsCountChange = (count: number) => {
    setNewsCount((prevCount) => prevCount + count); // Hitung jumlah baru
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-800 text-white p-4 hidden md:block">
        <h1 className="text-2xl font-bold mb-6">Dashboard Berita</h1>
        <nav>
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("daftar-berita")}>
            Daftar Berita
          </button>
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("home")}>
            Home
          </button>
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("tambah-berita")}>
            Tambah Berita
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{renderPage()}</main>
    </div>
  );
}
