"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SumberdayaManusia = () => {
  return (
    <div>
      <div className="flex h-auto w-full items-center justify-center">
        <Image
          src="/sumberdayamanusia/sumberdayamanusia.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-3">
        <div>
          <p>
            Data Sumber Daya Manusia Kesehatan (SDMK) di Fasilitas Kesehatan di
            Balai Kesehatan Masyarakat Wilayah Semarang  sebanyak 70 orang,
            PNS sebanyak 68 orang,dan sebanyak 2 orang tenaga kontrak
            daerah. Jenis dan Jumlah SDM Kesehatan yang ada saat ini:
          </p>
          <h1 className="p-7 text-xl font-semibold ">
            Keadaan SDM Kesehatan Balai Kesehatan Masyarakat Wilayah Semarang
          </h1>
          <p>
            Susunan organisasi Balai Kesehatan Masyarakat Wilayah Semarang
            terdiri dari Kepala Balai, Sub. Bag. Tata Usaha dan 2 seksi
            (Pelayanan dan Penunjang Pelayanan). Pejabat Struktural Balai
            Kesehatan Masyarakat Wilayah Semarang terdiri dari : 1 orang pejabat
            eselon III (tiga), 3 orang pejabat eselon IV (empat), 51 orang
            tenaga fungsional khusus kesehatan,13 tenaga fungsional umum dan 2
            orang tenaga kontrak daerah
          </p>
        </div>
        <div
          className="flex p-7 items-center border-x-2 border-[#2337EB] justify-center gap-5 bg-transparent  w-48 h-5 rounded-xl text-[#2337EB] hover:bg-[#2337EB]
         hover:text-white  hover:shadow ">
          <Link href="#" className="font-semibold">
            Lihat Data
          </Link>
          <Image
            src="/beranda/panahbawah.png"
            alt="icon"
            className="w-3 h-3"
            width={80}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default SumberdayaManusia;
