"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DasarHukum = () => {
  return (
    <div>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/dasarhukum/dasarhukum.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <ul className=" flex flex-col gap-5 list-decimal p-24 text-justify">
        <li>
          {" "}
          Undang-Undang RI Nomor 17 Tahun 2007 tentang Rencana Pembangunan
          Jangka Panjang Nasional (Lembaran Negara Republik Indonesia Tahun 2007
          Nomor 33, tambahan lembaran Negara Republi Indonesia Nomor 4700).
        </li>
        <li>
          {" "}
          Undang-undang Republik Indonesia Nomor : 36 tahun 2009 tentang
          Kesehatan (Lembaran Negara Republik Indonesia Tahun 2009 Nomor 144,
          Tambahan Lembaran Negara Republik Indonesia No : 5063).
        </li>
        <li> Undang-undang Nomor : 36 tahun 2014 tentang Tenaga Kesehatan</li>
        <li>
          {" "}
          Peraturan Pemerintah Nomor : 38 tahun 2007 tentang Pembagian Urusan
          Pemerintahan, Antara Pemerintah, Pemerintahan Daerah Provinsi dan
          Pemerintahan Daerah Kabupaten / Kota (Lembaga Negara republik
          Indonesia Tahun 2007 No.82, Tambahan Lembaran Negara Republik
          Indonesia No. 4737).
        </li>
        <li>
          {" "}
          Peraturan Daerah Provinsi Jawa Tengah Nomor : 6 tahun 2008 tentang
          Organisasi dan Tata Kerja Dinas daerah Provinsi Jawa Tengah. (Lembaran
          daerah Provinsi Jawa Tengah Tahun 2008 Nomor 6 Seri D Nomor 2).
        </li>
        <li>
          {" "}
          Peraturan Menteri Kesehatan Republik Indonesia Nomor :
          1295/MenKes/Per/XII/2007 tentang Organisasi dan Tata Kerja Kementerian
          Kesehatan sebagaimana telah diubah dengan Peraturan Menteri Kesehatan
          Nomor : 1144/MenKes/Per/VIII/2010.
        </li>
        <li>
          {" "}
          Peraturan Menteri Kesehatan Republik Indonesia Nomor 425 Tahun 2006.
          Tentang Kebijakan Dasar Balai Kesehatan Masyarakat.
        </li>
        <li>
          {" "}
          Peraturan Menteri Kesehatan Republik Indonesia Nomor 75 Tahun 2014.
          Tentang Pusat Kesehatan Masyarakat.
        </li>
        <li>
          {" "}
          Peraturan Menteri Kesehatan Nomor 33 Tahun 2015 tentang Pedoman
          Perencanaan Kebutuhan Sumber Daya Manusia Kesehatan.
        </li>
        <li>
          {" "}
          Peraturan Menteri Kesehatan Nomor 39 Tahun 2016 tentang Pedoman
          Penyelenggaraan Program Indonesia Sehat Dengan Pendekatan Keluarga
          (PIS PK).
        </li>
        <li>
          {" "}
          Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi
          Birokrasi Nomor 41 Tahun 2018 tentang Nomenklatur Jabatan Pelaksana
          Bagi PNS di Lingkungan Instansi Pemerintah.
        </li>
        <li>
          {" "}
          Peraturan Gubernur Jawa Tengah Nomor 99 Tahun 2016 tentang Organisasi
          dan Tata Kerja Unit Pelaksana Teknis Dinas Kesehatan Provinsi Jawa
          Tengah.
        </li>
      </ul>
    </div>
  );
};

export default DasarHukum;
