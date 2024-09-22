import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.1";
import Image from "next/image";
import VisiMisi from "@/components/VisiMisi";
import Tujuan from "@/components/Tujuan";
import React from "react";
import RuangLingkup from "@/components/RuangLingkup";
import AlurPelayananPasienBaru from "@/components/AlurPelayananPasienBaru";
import AlurPelayananPasienLama from "@/components/AlurPelayananPasienLama";

const page = () => {
  return (
    <>
      <AlurPelayananPasienLama />
    </>
  );
};

export default page;
