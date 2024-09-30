/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import Link from "next/link";
import Beranda from "@/components/Beranda";
import TampilkanBerita from "@/components/TampilkanBerita";
import Berita from "@/components/Berita";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/beranda/fisioterapi/fisioterapibg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20">
        <div className="flex flex-col p-7 gap-5 text-justify">
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
            Balkesmas Wilayah Semarang, meliputi masalah pernapasan serta
            masalah pada otot dan sendi. Fasilitas di Unit Fisioterapi adalah
            ruang tunggu pasien yang nyaman, ruang pemeriksaan, ruang tindakan
            fisioterapi dan konsultasi dokter Spesialis Rehabilitasi Medik
          </p>
          <p>
            Peralatan atau modalitas yang dimiliki di Unit Fisioterapi Balkesmas
            Wilayah Semarang antara lain : Nebulizer, Infra Merah (IR), Bed
            Postural Drainage, Suction Pump (alat isap lendir), Electrical
            Stimulation (ES), Ultra Sound (US) dan Micro Wave Diathermi (MWD).
          </p>
        </div>
        <h1>PETUGAS UNIT FISIOTERAPI</h1>
        <h1>BALKESMAS WILAYAH SEMARANG</h1>
        <div className="flex flex-col gap-10 lg:flex-row ">
          <div className="font-semibold gap-5">
            <h1>Dokter</h1>
            <ol className="list-decimal">
              <li>dr. Retno Hartanti, Sp.KFR</li>
            </ol>
          </div>
          <div className="font-semibold gap-5">
            <h1>Fisioterapis :</h1>
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
      <div className="flex flex-col p-7 gap-5  mx-20">
        <h1 className="font-bold">
          Pelayanan Fisioterapi dan Modalitas Fisioterapi
        </h1>
        <div>
          <p>TINDAKAN NEBULISASI</p>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
            <Image
              src={"/beranda/fisioterapi/image1.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
            <Image
              src={"/beranda/fisioterapi/image2.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
          </div>
        </div>
        <div>
          <p>TINDAKAN INFRA MERAH ( IR ) DAN TINDAKAN POSTURAL DRAINAGE</p>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
            <Image
              src={"/beranda/fisioterapi/image3.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
          </div>
        </div>
        <div>
          <p>TINDAKAN INFRA MERAH PADA KASUS NYERI OTOT DAN SENDI</p>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
            <Image
              src={"/beranda/fisioterapi/image4.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
          </div>
        </div>
        <div>
          <p>TINDAKAN ELECTRICAL STIMULASI</p>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
            <Image
              src={"/beranda/fisioterapi/image5.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
          </div>
        </div>
        <div>
          <p>ENTRI DATA PASIEN</p>
          <div className="flex gap-5 flex-col lg:flex-row justify-center">
            <Image
              src={"/beranda/fisioterapi/image6.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
            <Image
              src={"/beranda/fisioterapi/image7.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
            <Image
              src={"/beranda/fisioterapi/image8.png"}
              alt={""}
              height={1080}
              width={1920}
              className="w-60 items-center justify-center"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
