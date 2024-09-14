import Footer from "@/components/Footer";
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
          src="/pelayanan/SOP.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <Sop />
    </>
  );
};

export default page;
