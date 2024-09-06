"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Berita = () => {
  const [isOpen, setIsOpen] = useState(false);
  ("use client");
  return (
    <>
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-xl lg:text-3xl leading-tight">Berita Terbaru</h1>
        <Link
          href="/"
          className="text-blue-500 py-2 px-4 md:py-0 hover:text-black">
          Beranda
        </Link>
      </div>
    </>
  );
};

export default Berita;
