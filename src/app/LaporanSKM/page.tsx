import Footer from "@/components/Footer";
import LaporanPengaduan from "@/components/LaporanPengaduan";
import LaporanSKM from "@/components/LaporanSkm";
import Navbar from "@/components/Navbar";
import Sop from "@/components/Sop";
import StandartPelayanan from "@/components/StandartPelayanan";
import VisiMisi from "@/components/VisiMisi";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" flex h-auto  w-full items-center justify-center ">
        <Image
          src="/pelayanan/laporanskm.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <LaporanSKM />
    </>
  );
};

export default page;
