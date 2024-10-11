import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StandartPelayanan from "@/components/StandartPelayanan";
import TarifPelayanan from "@/components/TarifPelayanan";
import VisiMisi from "@/components/VisiMisi";
import Image from "next/image";
import React from "react";
import UploadNews from "@/components/UploadNews";
import NewsList from "@/components/news-list";

function page() {
  return (
    <>
      <div>
        <UploadNews
          onNewsAdded={function (count: number): void {
            throw new Error("Function not implemented.");
          }}
        />
        <NewsList />
      </div>
    </>
  );
}

export default page;
