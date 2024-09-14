"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Tujuan = () => {
  return (
    <>
      <div className="flex h-auto  w-full items-center justify-center">
        <Image
          src="/tujuan/backgroundtujuan.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="p-12">
        <p>
          Dokumen Perencanaan Kebutuhan Sumber Daya Manusia Kesehatan Balai
          Kesehatan Masyarakat Wilayah Semarang Tahun 2020 disusun dengan metode
          Analisa Beban Kerja (ABK) bertujuan menghasilkan perhitungan kebutuhan
          SDM Kesehatan di Balai Kesehatan Masyarakat Wilayah Semarang, dengan
          tujuan khusus
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-around items-center p-7">
        <Image
          src="/tujuan/tujuanvektor.png"
          alt="Background Image"
          className="w-96 h-80 "
          width={800}
          height={800}
        />
        <ul className="flex flex-col list-decimal gap-2 max-w-xl ">
          <li>
            Memberikan gambaran singkat tentang ketersediaan sumber daya manusia
            kesehatan menurut jenis dan jumlahnya di Balai Kesehatan Masyarakat
            Wilayah Semarang.
          </li>
          <li>
            Untuk mendapatkan gambaran kecukupan jenis dan jumlah SDM Kesehatan
            dibandingkan dengan hasil perhitungan perencanaan kebutuhan SDM
            Kesehatan dengan menggunakan metode ABK Kesehatan dan standart
            minimal Ketenagaan. 
          </li>
          <li>Menjadi acuan dalam meningkatkan pemerataan SDM Kesehatan.</li>
          <li>
            Menjadi acuan dalam perencanaan, Pendayagunaan dan Pemberdayaan
            Sumber Daya Manusia Kesehatan di Balai Kesehatan Masyarakat Wilayah
            Semarang.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tujuan;
