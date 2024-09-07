import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  ">
      <div className=" h-auto bg-[url('/background.png')] w-full bg-cover">
        <div className="relative p-9  flex py-32 justify-center items-center before:absolute before:h-[500px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <p></p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white  p-5 rounded-md -mt-28 md:flex-row md:w-1/2 ">
        <div className="flex text-justify flex-col gap-6 relative md:w-8/12 justify-center items-center ">
          <h1 className="text-xl font-bold">Disclaimer</h1>
          <p>April 19, 2024</p>
          <p>
            Informasi yang terdapat dalam website ini adalah untuk tujuan umum
            saja. Informasi ini disediakan oleh Liputan6.com dan kami senantiasa
            berusaha untuk menjaga informasi yang aktual dan benar. Kami tidak
            membuat pernyataan atau jaminan apapun, tersurat maupun tersirat,
            tentang akurasi kelengkapan, kesesuaian, atau ketersediaan ke situs
            web atau informasi, produk, jasa, atau gambar terkait yang terdapat
            pada website ini untuk tujuan apapun. Setiap ketergantungan yang
            anda tempatkan pada informasi tersebut adalah risiko anda sendiri.
            Dalam hal apapun kami tidak bertanggung jawab atas kerugian atau
            kerusakan termasuk tanpa batasan, kerugian tidak langsung atau
            kerusakan apapun yang timbul dari hilangnya data atau keuntungan
            yang timbul dari penggunaan website ini.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
