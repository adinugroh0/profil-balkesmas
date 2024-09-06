"use client"; // Menandai file ini sebagai Client Component

import { useParams } from "next/navigation"; // Gunakan useParams dari next/navigation
import EditBerita from "@/components/EditBerita";

const EditBeritaPage = () => {
  const { id } = useParams(); // Menggunakan useParams untuk mendapatkan parameter dari URL

  if (!id || typeof id !== "string") {
    return <p>ID tidak valid</p>;
  }

  return <EditBerita id={id} />;
};

export default EditBeritaPage;
