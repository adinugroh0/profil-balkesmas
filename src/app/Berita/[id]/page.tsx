// src/app/berita/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import EditBerita from "@/components/EditBerita";

const EditBeritaPage = () => {
  const { id } = useParams();

  if (!id || typeof id !== "string") {
    return <p>ID tidak valid</p>;
  }

  return <EditBerita id={id} />;
};

export default EditBeritaPage;
