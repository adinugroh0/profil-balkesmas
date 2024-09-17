"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "./ui/3d-pin";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-0">
        <PinContainer
          title="Lokasi"
          href="https://www.google.co.id/maps/@-6.9877499,110.4272876,3a,75y,105.58h,87.72t/data=!3m6!1e1!3m4!1skVC6jaG6nrI7WyVg8KUOWg!2e0!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
          <Link href="https://www.google.co.id/maps/@-6.9877499,110.4272876,3a,75y,105.58h,87.72t/data=!3m6!1e1!3m4!1skVC6jaG6nrI7WyVg8KUOWg!2e0!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
            <div className="bg-[#3C44EE] flex flex-col justify-center items-center p-5 rounded-xl mx-full lg:w-80 text-center">
              <Image
                src="/footer/adress.png"
                alt="Address Icon"
                className="rounded-lg w-[35] h-[55]"
                width={458}
                height={636}
              />
              <p className="text-white mt-2">
                Kh Ahmad Dahlan No.39,
                <br /> Karangkidul, Kec. Semarang Tengah,
                <br /> Kota Semarang, Jawa Tengah 50241
              </p>
            </div>
          </Link>
        </PinContainer>
        <PinContainer title="Contact" href="https://wa.me/08112966633">
          <Link href="https://wa.me/08112966633">
            <div className="bg-[#3C44EE] flex flex-col justify-center items-center p-5 rounded-xl w-full lg:w-80 text-center">
              <Image
                src="/footer/hotline.png"
                alt="Hotline Icon"
                className="rounded-lg w-[35] h-[55]"
                width={458}
                height={636}
              />
              <p className="text-white mt-2">
                Telp (024) 8316758 <br />
                WA 0811-2966-633
              </p>
            </div>
          </Link>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="#">
          <div className="bg-[#3C44EE] flex flex-col justify-center items-center p-5 rounded-xl w-full lg:w-80 text-center">
            <Image
              src="/footer/email.png"
              alt="Email Icon"
              className="rounded-lg w-[35] h-[55]"
              width={458}
              height={636}
            />
            <p className="text-white mt-2">bp4smg@yahoo.com</p>
          </div>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="#">
          <div className="bg-[#3C44EE] flex flex-col justify-center items-center p-5 rounded-xl w-full lg:w-80 text-center">
            <Image
              src="/footer/website.png"
              alt="Website Icon"
              className="rounded-lg w-[35] h-[55]"
              width={458}
              height={636}
            />
            <p className="text-white mt-2">
              balkessemarang.
              <br />
              dinkesjatengprov.go.id
            </p>
          </div>
        </PinContainer>
      </div>
    </>
  );
};

export default Footer;
