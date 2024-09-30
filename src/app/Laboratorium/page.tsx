/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import Link from "next/link";
import Beranda from "@/components/Beranda";
import TampilkanBerita from "@/components/TampilkanBerita";
import Berita from "@/components/Berita";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/beranda/laboratorium/laburatoriumbg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20 justify-center font-bold text-justify">
        <p>
          Dengan Pesatnya ilmu pengetahuan dan tehnologi dibidang ilmu
          kesehatan, maka tenaga medis tidak mau gegabah hanya mengandalkan
          pemeriksaan klinis saja dalam mengobati pasiennya, karena bisa
          menyebabkan kekeliruan dalam menentukan penyakit, untuk itu diperlukan
          pemeriksaan laboratorium.
        </p>
        <p>
          Tujuan Pemeriksaan laboratorium diantaranya : Sebagai penunjang
          diagnosa, Membantu menegakkan diagnosa, mengetahui status kesehatan
          seseorang
        </p>
        <p>
          Manfaat pemeriksaaan laboratorium yaitu : untuk mengetahui perjalanan
          penyakit, mengetahui tingkat keberhasilan pengobatan dan untuk
          mengetahui tingkat penyebaran atau penularan penyakit.
        </p>
        <p>
          Pemeriksaan laboratorium di Balkesmas Wilayah Semarang meliputi :
          pemeriksaan sampel darah Rutin, darah lengkap, Urin Rutin, urin
          lengkap, Kimia Klinik, Dahak (TCM dan Mikroskopis), Immunoserolog(
          Rapid dan Swab).
        </p>
        <p>
          Untuk Mendukung Pelayanan Pemeriksaan di laboratorium dilengkapi
          dengan alat spektrofotometer semi Automatic / Full Automatic,
          Sedangkan pemeriksaan dengan sampel Dahak sudah dilakukan didalam Bio
          Safety Cabinet (BSC II). Dan untuk pemeriksaan dahak juga dilakukan
          dengan mesin TCM yang sudah tersedia.
        </p>
        <p>
          Dengan adanya ISO 9001 -2015 Untuk menjaga mutu layanan, kami
          Laboratorium Balkesmas Wilayah Semarang juga melaksanakan Pemantapan
          Mutu Internal dan Pemantapan Mutu Eksternal dan demi terciptanya
          pelayanan yang berkualitas.
        </p>
      </div>

      <Footer />
    </>
  );
}
