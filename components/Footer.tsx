"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-3 justify-stretch p-5">
        <div className="bg-[#3C44EE] flex flex-col justify-center items-center p-5 rounded-xl mx-full lg:w-80 text-center">
          <Image
            src="/footer/adress.png"
            alt="Address Icon"
            className="rounded-lg w-[35] h-[55"
            width={458}
            height={636}
          />
          <p className="text-white mt-2">
            Kh Ahmad Dahlan No.39, Karangkidul, Kec. Semarang Tengah, Kota
            Semarang, Jawa Tengah 50241
          </p>
        </div>
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
            Faks (024) 8450949
          </p>
        </div>
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
      </div>
    </>
  );
};

export default Footer;
