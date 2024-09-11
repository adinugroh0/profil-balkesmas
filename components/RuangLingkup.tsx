"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RuangLingkup = () => {
  return (
    <>
      <div className=" h-auto  w-full">
        <Image
          src="/ruanglingkup/ruanglingkup.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-12 gap-4">
        <p>
          Sasaran Penyusunan Dokumen Perencanaan Kebutuhan Sumber Daya Manusia
          Kesehatan Balai Kesehatan Masyarakat Wilayah Semarang Tahun 2020
          adalah memiliki Sumber Daya Manusia yang bekerja di Instansi dan
          fasilitas pelayanan kesehatan milik Pemerintah Provinsi Jawa Tengah.
        </p>
        <p>
          Metode yang digunakan dalam Penyusunan Dokumen Perencaan Kebutuhan
          Sumber Daya Manusia Kesehatan adalah Metode Analisa Beban Kerja
          Kesehatan (ABK Kesehatan) dan Metode Standart Ketenagaan Minimal.
        </p>
      </div>
    </>
  );
};

export default RuangLingkup;
