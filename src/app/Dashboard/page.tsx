"use client";

import { useState } from "react";
import UploadNews from "@/components/UploadNews";
import NewsDashboard from "@/components/NewsDashboard";
import Roro from "@/components/Roro";

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [newsCount, setNewsCount] = useState(0);

  // Fungsi untuk menangani perubahan jumlah berita
  const handleNewsCountChange = (count: number) => {
    setNewsCount(count); // Set jumlah baru
  };

  const handleNewsAdded = (count: number) => {
    setNewsCount((prevCount) => prevCount + count); // Tambah jumlah berita baru
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Roro />;
      case "tambah-berita":
        return <UploadNews onNewsAdded={handleNewsAdded} />;
      case "daftar-berita":
        return <NewsDashboard onNewsCountChange={handleNewsCountChange} />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3699FF] text-white p-4 hidden md:block">
        <h1 className="text-2xl font-bold mb-6 flex  justify-center">
          Dashboard{" "}
        </h1>
        <nav>
          {/* Urutan menu: Home, Daftar Berita, Tambah Berita */}
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("home")}>
            Home
          </button>
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("daftar-berita")}>
            Daftar Berita
          </button>
          <button
            className="block py-2 px-4 rounded hover:bg-blue-700 w-full text-left"
            onClick={() => setSelectedPage("tambah-berita")}>
            Tambah Berita
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">{renderPage()}</main>
    </div>
  );
}
