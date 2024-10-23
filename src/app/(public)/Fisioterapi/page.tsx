/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import React from "react";
import { FocusCards } from "@/components/ui/focus-cards"; // pastikan path ini benar

// Fungsi pendukung untuk menampilkan kartu
function FocusCardsDemo() {
  const cards = [
    {
      title: "TINDAKAN NEBULISASI",
      src: "/beranda/fisioterapi/image1.png",
    },
    {
      title: "TINDAKAN INFRA MERAH ( IR ) DAN TINDAKAN POSTURAL DRAINAGE",
      src: "/beranda/fisioterapi/image2.png",
    },
    {
      title: "TINDAKAN INFRA MERAH ( IR ) DAN TINDAKAN POSTURAL DRAINAGE",
      src: "/beranda/fisioterapi/image3.png",
    },
    {
      title: "TINDAKAN INFRA MERAH PADA KASUS NYERI OTOT DAN SENDI",
      src: "/beranda/fisioterapi/image4.png",
    },
    {
      title: "ENTRI DATA PASIEN",
      src: "/beranda/fisioterapi/image6.png",
    },
  ];

  return <FocusCards cards={cards} />;
}

// Komponen halaman utama
export default function Home() {
  return (
    <>
      <div className="flex h-auto w-full items-center justify-center">
        <Image
          src="/beranda/fisioterapi/fisioterapibg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20">
        <p>
          Unit Fisioterapi Balkesmas Wiayah Semarang merupakan pelayanan Rawat
          Jalan yang memberikan pelayanan fisioterapi kepada seorang pasien
          untuk tujuan anamnesa, pemeriksaan, penegakan diagnosis, tindakan
          fisioterapi, evaluasi, dan edukasi. Bagi penderita yang memerlukan
          pelayanan fisioterapi dapat memeriksakan atau mengatasi gangguan
          keluhan kesehatannya di Balkesmas Wilayah Semarang.
        </p>
        <p>
          Pelayanan Fisioterapi yang dapat diberikan di Unit Fisioterapi
          Balkesmas Wilayah Semarang, meliputi masalah pernapasan serta masalah
          pada otot dan sendi. Fasilitas di Unit Fisioterapi adalah ruang tunggu
          pasien yang nyaman, ruang pemeriksaan, ruang tindakan fisioterapi dan
          konsultasi dokter Spesialis Rehabilitasi Medik.
        </p>
        <p>
          Peralatan atau modalitas yang dimiliki di Unit Fisioterapi Balkesmas
          Wilayah Semarang antara lain : Nebulizer, Infra Merah (IR), Bed
          Postural Drainage, Suction Pump (alat isap lendir), Electrical
          Stimulation (ES), Ultra Sound (US) dan Micro Wave Diathermi (MWD).
        </p>
        <p>
          Kami mengerahkan segala upaya untuk memberikan layanan kesehatan yang
          terintegrasi, dengan pelayanan prima sepenuh hati.
        </p>
        <h1>PETUGAS UNIT FISIOTERAPI</h1>
        <h1>BALKESMAS WILAYAH SEMARANG</h1>
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <div className="font-semibold gap-5">
            <h1>Dokter</h1>
            <ol className="list-decimal">
              <li>dr. Retno Hartanti, Sp.KFR</li>
            </ol>
          </div>
          <div className="font-semibold gap-5">
            <h1>Perawat</h1>
            <ol className="list-decimal">
              <li>Vironica Dwi Permatasari, AMF</li>
              <li>Dyah Pertiwi Puspitosari, SKM</li>
              <li>Ajeng Nastiti, AMF</li>
            </ol>
          </div>
        </div>
        <h1>PELAYANAN : SENIN - JUMAT</h1>
        <h1>
          JAM PENDAFTARAN : SENIN - KAMIS (07.00 - 11.00 WIB) JUMAT (07.00 -
          10.00 WIB)
        </h1>
        <h1>
          SABTU-MINGGU , CUTI BERSAMA DAN HARI LIBUR NASIONAL : PELAYANAN TUTUP
        </h1>
      </div>

      {/* Insert the FocusCardsDemo component here */}
      <div className="flex justify-center py-10">
        <FocusCardsDemo />
      </div>
    </>
  );
}
