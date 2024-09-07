"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Beranda = function () {
  const [currentImage, setCurrentImage] = useState("/gambat beranda.png");

  const images = ["/gambat beranda.png", "/gambarmagang2.png"];

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
          <div className="flex bg-[#3C44EE] w-full lg:w-44 h-14 items-center justify-center rounded-xl gap-2 mx-auto lg:mx-0 m-7 hover:drop-shadow-2xl">
            <Link href="#" className="text-white">
              Hubungi Kami
            </Link>
            <Image
              src="/panahbawah.png"
              alt="icon"
              className="w-3 h-3"
              width={80}
              height={60}
            />
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start  mt-4 p-4">
            <Link href="#">
              <Image
                src="/pendafaran.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
            <Link href="#">
              <Image
                src="/klinik anak.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
            <Link href="#">
              <Image
                src="/klinik umum.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
            <Link href="#">
              <Image
                src="/laboratorium.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
            <Link href="#">
              <Image
                src="/fisioterapi.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
            <Link href="#">
              <Image
                src="/klinik vct-cst.png"
                alt="icon"
                className="w-24 lg:w-24  h-20  hover:bg-[#3C44EE]  rounded-xl"
                width={80}
                height={60}
              />
            </Link>
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
