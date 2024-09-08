"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MaklumatPelayanan = () => {
  return (
    <>
      <div className=" h-auto  w-full">
        <Image
          src="/maklumatpelayanan/pelayanan.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
};

export default MaklumatPelayanan;
