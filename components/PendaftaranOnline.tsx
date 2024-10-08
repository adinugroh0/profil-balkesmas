"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PendaftaranOnline = () => {
  return (
    <div>
      <div className=" h-auto  w-full flex flex-col  justify-center items-center gap-8 p-24">
        <h1 className="text-4xl font-extrabold  underline underline-offset-4">
          POLES BALSEM
        </h1>
        <div className="flex gap-5 flex-col lg:flex-row ">
          <div
            className="flex p-7 items-center border-x-2 border-[#2337EB] justify-center  bg-transparent  w-64 h-5 rounded-xl text-[#2337EB] hover:bg-[#2337EB]
          hover:text-white  hover:shadow ">
            <Link href="/PasienBaru" className="font-semibold">
              Pasien Baru
            </Link>
          </div>
          <div
            className="flex p-7 items-center border-x-2 border-[#2337EB] justify-center bg-transparent w-64 h-5 rounded-xl text-[#2337EB] hover:bg-[#2337EB]
          hover:text-white  hover:shadow ">
            <Link href="#" className="font-semibold">
              Pasien lama
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranOnline;
