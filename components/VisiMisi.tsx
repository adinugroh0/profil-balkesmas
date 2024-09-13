"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const VisiMisi = () => {
  return (
    <>
      <div className=" h-auto  w-full">
        <Image
          src="/visi-misi/VisiMisibackground.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className=" flex flex-col justify-center m-11  gap-14 ">
            <div className="flex flex-col   p-10 gap-5">
              <h1 className="flex flex-col  text-5xl font-extrabold text-[#3C44EE]">
                Visi
              </h1>
              <p className="max-w-3xl text-lg ">
                “Menjadi Rujukan Pelayanan Kesehatan Masyarakat Yang Profesional
                dan bertanggung jawab di Wilayah Kerja”
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/visi gamar.png"
              alt="Background Image"
              className="w-2/3 "
              width={700}
              height={500}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex justify-center">
            <Image
              src="/misi gambar.png"
              alt="Background Image"
              className="w-2/3 "
              width={700}
              height={500}
            />
          </div>
          <div className=" flex flex-col justify-between p-8  gap-14 ">
            <div className="flex flex-col  justify-start  gap-5">
              <h1 className="flex flex-col  text-5xl font-extrabold text-[#3C44EE]">
                Misi
              </h1>
              <div className="flex gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain  "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Melaksanakan pelayanan Masyarakat yang bermutu dan terjangkau.
                </p>
              </div>
              <div className="flex  gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain  "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Meningkatkan sumber daya manusia, kinerja, profesionalisme dan
                  kesejahteraan.
                </p>
              </div>
              <div className="flex  gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain float-start "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Meningkatkan Profesionalisme, dedikasi dan loyalitas serta
                  kesejahteraan.
                </p>
              </div>
              <div className="flex  gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain float-start "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Menggerakkan peran serta masyarakat untuk melaksanakan
                  pembangunan kesehatan Masyarakat secara terpadu dan
                  terintegrasi.
                </p>
              </div>
              <div className="flex  gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain float-start "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Pemenuhan sarana dan prasarana untuk kenyamanan dan keamanan.
                </p>
              </div>
              <div className="flex  gap-2">
                <Image
                  src="/ceklist.png"
                  alt="Background Image"
                  className="w-6 object-contain float-start "
                  width={500}
                  height={500}
                />
                <p className="max-w-3xl text-lg ">
                  Mengupayakan peran serta masyarakat dalam peningkatan
                  kesehatan Msayarakat melalui Pencegahan serta Promosi
                  kesehatan dengan kerjasama lintas sektoral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
