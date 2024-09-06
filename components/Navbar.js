"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    const toggleMenu = () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("block");
    };

    if (menuBtn) {
      menuBtn.addEventListener("click", toggleMenu);
    }

    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <div className="container mx-auto flex justify-between bg-white items-center sticky top-0 z-50  p-4">
      <Image
        src="/logo.png"
        alt="Logo"
        className="w-44 h-12 "
        width={458}
        height={636}
      />
      <button
        id="menu-btn"
        className="text-black md:hidden"
        onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div
        id="menu"
        className={`fixed inset-0 z-50 flex flex-col gap-1 justify-center items-center  bg-opacity-50 backdrop-blur-lg bg-[#708fff]	 text-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex-row md:bg-transparent md:space-x-4 md:block`}>
        <Link
          href="/"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500 ">
          Beranda
        </Link>
        <Link
          href="/profil"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Profil
        </Link>
        <Link
          href="/pelayanan"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Pelayanan
        </Link>
        <Link
          href="/informasi"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Informasi
        </Link>
        <Link
          href="/pendaftaran"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Pendaftaran Online
        </Link>
        <Link
          href="/berita"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Berita
        </Link>
        <Link
          href="/pengaduan"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Pengaduan
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
