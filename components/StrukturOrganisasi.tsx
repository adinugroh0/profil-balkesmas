"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const StrukturOrganisasi = () => {
  return (
    <div>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/strukturorganisasi/struktur.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7">
        <h1 className="text-4xl font-extrabold ">PEMELIK KLINIK</h1>
        <p>KA BALKESMAS WIL SMG</p>
      </div>
      {/*penangung jawab klinik */}
      <div className="flex flex-col p-7 items-center justify-center gap-5">
        <div>
          <Image
            src="/strukturorganisasi/kepala.png"
            alt="Background Image"
            className="w-32"
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="bg-[#2337EB] p-2 rounded-tl-xl rounded-br-xl">
            <h1 className="text-white text-center">
              PH KEPALA BALKESMAS WILAYAH SEMARANG
            </h1>
          </div>
          <div>
            <p>dr Elhamangto Zuhdan, MKM</p>
            <p>19730320 2008001 1 004</p>
          </div>
        </div>
      </div>

      {/*KELOMPOK JABATAN */}
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-32"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white text-center">KELOMPOK JABATAN </h1>
            </div>
            <div>
              <p>Fungsional</p>
            </div>
          </div>
        </div>
        {/*TIM KESLAMATAN KERJA & MANAJEMEN FASILITAS KESEHATAN */}
        <div className="flex flex-col p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/kepala2.png"
              alt="Background Image"
              className="w-32"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white text-center">
                PH. KA. SUB BAGIAN TATAUSAHA
              </h1>
            </div>
            <div>
              <p>Wahyu Handaya, SKM, M.Kes (Epid)</p>
              <p>19700221 199403 1 002</p>
            </div>
          </div>
        </div>
      </div>

      {/*TIM MUTU & KESLAMATAN PASIEN  dan TIM MANAEMEN RISIKO  */}
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex flex-col p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/kepala2.png"
              alt="Background Image"
              className="w-32"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white text-center">
                SUB. KOORDINATOR PELAYANAN
              </h1>
            </div>
            <div>
              <p>Wahyu Handaya, SKM, M.Kes (Epid)</p>
              <p>19700221 199403 1 002</p>
            </div>
          </div>
        </div>
        {/*TIM MANAEMEN RISIKO */}
        <div className="flex flex-col p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-32"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white text-center">SUB KOORDINATOR</h1>
            </div>
            <div>
              <p>Pnunjang Pelayanan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
