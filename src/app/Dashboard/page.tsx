import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StandartPelayanan from "@/components/StandartPelayanan";
import TarifPelayanan from "@/components/TarifPelayanan";
import VisiMisi from "@/components/VisiMisi";
import Image from "next/image";
import React from "react";
import UploadNews from "@/components/UploadNews";
import NewsList from "@/components/news-list";
import NewsDashboard from "@/components/NewsDashboard";

function page() {
  return (
    <>
      <div>
        <NewsDashboard />
      </div>
    </>
  );
}

export default page;
