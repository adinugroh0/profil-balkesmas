"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between bg-white items-center sticky top-0 z-50 p-4">
      <Image
        src="/logo.png"
        alt="Logo"
        className="w-44 h-12"
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
        className={`fixed inset-0 z-50 flex flex-col gap-1 justify-center items-center bg-opacity-50 backdrop-blur-lg bg-[#708fff] text-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex-row md:bg-transparent md:space-x-4 md:items-center md:gap-2`}>
        <Link
          href="/"
          className="text-black py-2 px-4 md:py-0 hover:text-blue-500">
          Beranda
        </Link>
        <div className="relative">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="text-black py-2 px-4 md:py-0 hover:text-blue-500 flex items-center">
            Profil
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${
                profileMenuOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
          {profileMenuOpen && (
            <div className="absolute top-full text-black  left-0 w-48 bg-white  mt-1 shadow-lg rounded-xl md:w-60">
              <Link
                href="/Sejarah"
                className="block py-2 px-4  hover:bg-[#2c39e2] hover:text-white">
                Sejarah
              </Link>
              <Link
                href="/Visi-Misi"
                className="block py-2 px-4  hover:bg-[#2c39e2] hover:text-white">
                Visi dan Misi
              </Link>
              <Link
                href="/MaklumatPelayanan"
                className="block py-2 px-4  hover:bg-[#2c39e2] hover:text-white">
                Maklumat Pelayanan
              </Link>
              <Link
                href="/StrukturOrganisasi"
                className="block py-2 px-4  hover:bg-[#2c39e2] hover:text-white">
                Struktur Organisasi
              </Link>
              <Link
                href="/sumberdaya-manusia"
                className="block py-2 px-4 hover:bg-[#2c39e2] hover:text-white">
                Sumberdaya Manusia
              </Link>
            </div>
          )}
        </div>
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
};

export default Navbar;
