"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // Menu yang sedang aktif

  const toggleMenu = (menu) => {
    // Tutup menu yang sama atau buka menu baru
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <div className="container w-full mx-auto flex justify-between bg-white items-center sticky top-0 z-50 p-4">
      <Image
        src="/beranda/logo.png"
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

        {/* Profil Menu */}
        <div className="relative group md:hoverable">
          <button
            onClick={() => toggleMenu("profil")}
            className="text-black py-2 px-4 md:py-0 hover:text-blue-500 flex items-center">
            Profil
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${
                activeMenu === "profil" ? "rotate-180" : "rotate-0"
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
          <div
            className={`absolute top-full left-0 w-48 bg-white mt-1 shadow-lg rounded-xl transition-opacity duration-300 ${
              activeMenu === "profil"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}>
            <Link
              href="/Sejarah"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Sejarah
            </Link>
            <Link
              href="/Visi-Misi"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Visi dan Misi
            </Link>
            <Link
              href="/MaklumatPelayanan"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Maklumat Pelayanan
            </Link>
            <Link
              href="/StrukturOrganisasi"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Struktur Organisasi
            </Link>
            <Link
              href="/SumberdayaManusia"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Sumberdaya Manusia
            </Link>
          </div>
        </div>

        {/* Pelayanan Menu */}
        <div className="relative group md:hoverable">
          <button
            onClick={() => toggleMenu("pelayanan")}
            className="text-black py-2 px-4 md:py-0 hover:text-blue-500 flex items-center">
            Pelayanan
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${
                activeMenu === "pelayanan" ? "rotate-180" : "rotate-0"
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
          <div
            className={`absolute top-full left-0 w-48 bg-white mt-1 shadow-lg rounded-xl transition-opacity duration-300 ${
              activeMenu === "pelayanan"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}>
            <Link
              href="/StandartPelayanan"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Standart Pelayanan
            </Link>
            <Link
              href="/SOP"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              SOP
            </Link>
            <Link
              href="/AlurPelayananPasienBaru"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Alur Pelayanan Pasien Baru
            </Link>
            <Link
              href="/AlurPelayananPasienLama"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Alur Pelayanan Pasien Lama
            </Link>
            <Link
              href="/TarifPelayanan"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Tarif Pelayanan
            </Link>
            <Link
              href="/LaporanPengaduan"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Laporan Pengaduan
            </Link>
            <Link
              href="/LaporanSKM"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Laporan SKM
            </Link>
          </div>
        </div>

        {/* Informasi Menu */}
        <div className="relative group md:hoverable">
          <button
            onClick={() => toggleMenu("informasi")}
            className="text-black py-2 px-4 md:py-0 hover:text-blue-500 flex items-center">
            Informasi
            <svg
              className={`w-4 h-4 inline-block ml-2 transition-transform ${
                activeMenu === "informasi" ? "rotate-180" : "rotate-0"
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
          <div
            className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-xl transition-opacity duration-300 ${
              activeMenu === "informasi"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}>
            <Link
              href="/LatarBelakang"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Latar Belakang
            </Link>
            <Link
              href="/Tujuan"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Tujuan
            </Link>
            <Link
              href="/RuangLingkup"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Ruang Lingkup
            </Link>
            <Link
              href="/DasarHukum"
              className="block py-2 px-4 text-black hover:bg-[#2c39e2] hover:text-white">
              Dasar Hukum
            </Link>
          </div>
        </div>

        <Link
          href="/PendaftaranOnline"
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

        {/* Close Menu Button for Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black md:hidden">
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
