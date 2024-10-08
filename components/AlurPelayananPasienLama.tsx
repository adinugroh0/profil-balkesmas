"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AlurPelayananPasienLama = () => {
  return (
    <div>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/pelayanan/AlurPelayananPasienLama.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex h-auto  w-full items-center justify-center p-12">
        <Image
          src="/pelayanan/Pasien Lama.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default AlurPelayananPasienLama;
