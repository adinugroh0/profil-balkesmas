"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const StrukturOrganisasi = () => {
  return (
    <>
      <div className=" h-auto  w-full">
        <Image
          src="/strukturorganisasi/struktur.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7">
        <h1 className="text-4xl font-extrabold">PEMELIK KLINIK</h1>
        <p>KA BALKESMAS WIL SMG</p>
      </div>
      {/*penangung jawab klinik */}
      <div className="flex p-7 items-center justify-center gap-5">
        <div>
          <Image
            src="/strukturorganisasi/Human.png"
            alt="Background Image"
            className="w-20"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="bg-[#2337EB] p-2 rounded-tl-xl rounded-br-xl">
            <h1 className="text-white">PENANGGUNG JAWAB KLINIK</h1>
          </div>
          <div>
            <p>dr LIDYA DIAH, SpA</p>
          </div>
        </div>
      </div>
      {/*penangung jawab mutu */}
      <div className="flex p-7 items-center justify-center gap-5">
        <div>
          <Image
            src="/strukturorganisasi/Human.png"
            alt="Background Image"
            className="w-20"
            width={500}
            height={500}
          />
        </div>
        <div>
          <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
            <h1 className="text-white ">PENANGGUNG JAWAB MUTU</h1>
          </div>
          <div>
            <p>WAHYU HANDOYO SKM., M.Kes (Epid)</p>
          </div>
        </div>
      </div>
      {/*TIM TATAKELOLA KLINIK dan TIM KESLAMATAN KERJA & MANAJEMEN FASILITAS KESEHATAN */}
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-20"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white ">TIM TATAKELOLA KLINIK </h1>
            </div>
            <div>
              <p>dr ANITA VIRGIYANTI, Sp.KJ</p>
              <p>DEWI SEKAR RAHAYUNINGSIH, A.Md.Rad</p>
              <p>WIEN KARTIKA PURNAMASARI, S.Tr.Kes</p>
              <p>SISWATI</p>
              <p>KISTIONO,SKM</p>
            </div>
          </div>
        </div>
        {/*TIM KESLAMATAN KERJA & MANAJEMEN FASILITAS KESEHATAN */}
        <div className="flex p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-20"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white ">
                TIM KESLAMATAN KERJA & <br /> MANAJEMEN FASILITAS KESEHATAN
              </h1>
            </div>
            <div>
              <p>dr. MEKY TRI ANGGRAINI</p>
              <p>DYAH PERTIWI PUSPITOSARI, S.KM</p>
              <p>AGUS SUTRISNO</p>
              <p>ZOKY ABADI HARAHAP,SKM,M.Kes</p>
              <p>AYU DIAN NOVITA, A.Md.</p>
              <p>LULIK PUJIANTORO</p>
            </div>
          </div>
        </div>
      </div>
      {/*TIM MUTU & KESLAMATAN PASIEN  dan TIM MANAEMEN RISIKO  */}
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="flex p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-20"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white ">TIM MUTU & KESLAMATAN PASIEN </h1>
            </div>
            <div>
              <p>dr. YULIASTUTI </p>
              <p>ENISULIS TYANINGSIH, S.Kep.Ners</p>
              <p>RURI ENDARWATI, S.Gz</p>
              <p>KUANESAH, SST</p>
              <p>RATIH PRAMESTI, AMK</p>
            </div>
          </div>
        </div>
        {/*TIM MANAEMEN RISIKO */}
        <div className="flex p-7 items-center justify-center gap-5">
          <div>
            <Image
              src="/strukturorganisasi/Human.png"
              alt="Background Image"
              className="w-20"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="bg-[#2337EB] p-2 flex rounded-tl-xl rounded-br-xl items-center justify-center">
              <h1 className="text-white ">TIM MANAEMEN RISIKO</h1>
            </div>
            <div>
              <p>dr. LAKSMI SATRIANA </p>
              <p>OCTARINA IKA ARFIEYANI, A.Md.Farm</p>
              <p>ARIEYANTI BIYONO, S.Tr.Rad</p>
              <p>SYABRINA DINAR N, S.Kep.,Ners</p>
              <p>SEPTIVIANA RAKHMATIKA, S.Tr.AK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrukturOrganisasi;
