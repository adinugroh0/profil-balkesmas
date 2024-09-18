"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Beranda = function () {
  const [currentImage, setCurrentImage] = useState(
    "/beranda/gambat beranda.png"
  );

  const images = ["/beranda/gambat beranda.png", "/beranda/gambarmagang2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:gap-8 p-4">
        <div className="flex flex-col justify-center gap-3 content-center lg:h-1/2 text-center lg:text-left">
          <h1 className="font-black text-xl lg:text-3xl leading-tight">
            BALKESMAS <br /> WILAYAH SEMARANG
          </h1>
          <p className="max-w-full lg:max-w-screen-sm text-sm lg:text-base">
            Temukan informasi tentang Balkesmas Wilayah Semarang kami, visi &
            misi, fasilitas, berita terbaru, dan agenda kegiatan. Jelajahi
            bagaimana sejarah dan struktur organisasi kami.
          </p>
          <div>
            <HoverBorderGradient
              containerClassName="border-4 animate-bounce transition duration-800 hover:animate-none top-5"
              as="a"
              href="/Visi-Misi"
              className=" w-full lg:w-44 h-14 font-semibold gap-2 items-center justify-center rounded-xl hover:fill-white text-black hover:text-white flex  space-x-3">
              <span>Hubungi Kami</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 hover:fill-white"
                viewBox="0 0 384 512">
                <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
              </svg>
            </HoverBorderGradient>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          {/* Gambar yang berubah secara otomatis */}
          <Image
            src={currentImage}
            alt="icon"
            className="w-full lg:w-[458px] h-auto lg:h-[636px]"
            width={458}
            height={636}
          />
        </div>
      </div>
    </>
  );
};

export default Beranda;
