import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StandartPelayanan from "@/components/StandartPelayanan";
import TarifPelayanan from "@/components/TarifPelayanan";
import VisiMisi from "@/components/VisiMisi";
import Image from "next/image";
import React from "react";
import UploadNews from "@/components/Uploadnews";

function page() {
  return (
    <>
      <div>
        <Navbar />
        <h1>Selamat Datang di Halaman Berita</h1>
        <UploadNews />
      </div>
    </>
  );
}

export default page;
