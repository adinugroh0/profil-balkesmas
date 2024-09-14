"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MaklumatPelayanan = () => {
  return (
    <>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/maklumatpelayanan/pelayanan.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="p-7">
        <div className="flex flex-col items-center justify-center ">
          <Image
            src="/maklumatpelayanan/logopolos.png"
            alt="Background Image"
            className="w-40"
            width={500}
            height={500}
          />
          <h1 className="text-4xl font-extrabold ">MAKLUMAT PELAYANAN</h1>
          <p className="text-center p-5 font-extrabold">
            KAMI MENYATAKAN SANGGUP MEYELANGGARAKAN <br /> PELAYANAN DENGAN
            SEPENUH HATI SESUAI STANDART <br /> PELAYANAN YANG TELAH DITETAPKAN{" "}
            <br /> DAN APABILA TIDAK MENEPATI JANJI INI KAMI SIAP MENERIMA{" "}
            <br />
            SANKSI SESUAI PERATURAN PERUNDANG - UNDANGAN YANG BERLAKU
          </p>
        </div>
        <div className="flex flex-col items-end m-7 gap-12 ">
          <p className="text-center">
            KEPALA BALAI KESEHATAN MASYARAKAT <br /> WILAYAH SEMARANG
          </p>
          <p className=" flextext-right text-start ">
            Subur Hadi Marhaento, SKM, M.Kes.
          </p>
        </div>
        <div className="flex animate-bounce border-2 border-[#3C44EE] text-[#3C44EE] bg-transparent w-full lg:w-52 h-14 items-center justify-center rounded-xl gap-2 mx-auto lg:mx-0 m-7 hover:drop-shadow-2xl hover:bg-[#3C44EE] hover:text-white hover:stroke-[#3C44EE]">
          <Link href="#">Maklumat Pernyataan</Link>
          <Image
            src="/maklumatpelayanan/icon surat.png"
            alt="icon"
            className="w-3 h-3 "
            width={80}
            height={60}
          />
        </div>
      </div>
    </>
  );
};

export default MaklumatPelayanan;
