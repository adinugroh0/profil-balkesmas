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
import React from "react";

export default function Home() {
  return (
    <>
      <div className=" flex h-auto  w-full items-center justify-center">
        <Image
          src="/beranda/klinikumum/klinikumumbarubg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20 justify-center">
        <p>
          Klinik Umum Baru Balkesmas Wiayah Semarang merupakan pelayanan Rawat
          Jalan yang memberikan pelayanan medis kepada seorang pasien untuk
          tujuan screening awal, diagnosis, pengobatan, rehabilitasi, dan
          pelayanan kesehatan lainnya. Bagi penderita yang mempunyai keluhan
          kesehatan dapat memeriksakan atau mengatasi gangguan keluhan
          kesehatannya di Balkesmas Wilayah Semarang.
        </p>
        <p>
          Pemeriksaan Penunjang yang dilakukan guna penegakan diagnosis di
          Klinik Umum Baru, meliputi pelayanan Radiologi, Laboratorium
          hematologi klinik dan Laboratorium mikrobiologi, serta
          Elektrokardiografi (EKG). Sedangkan, layanan konseling berupa Layanan
          Konseling Gizi, Konseling Berhenti Merokok, Konseling VCT. Rujukan
          Spesialistik yang ada adalah Rujukan Spesialis Penyakit Dalam,
          Spesialis Keterapian Fisik dan Rehabilitasi, Spesialis Radiologi.
        </p>
        <p>
          Fasilitas di Klinik Umum Baru adalah, ruang tunggu pasien yang nyaman,
          ruang pemeriksaan dan konsultasi dokter.
        </p>
        <div className="flex flex-col p-7 gap-5 items-center mx-20 justify-center">
          <h1>PETUGAS KLINIK UMUM BARU</h1>
          <h1>BALKESMAS WILAYAH SEMARANG</h1>
          <div className="flex flex-col gap-10 lg:flex-row items-center justify-around">
            <div className="font-semibold gap-5">
              <h2>Dokter :</h2>
              <ul className="list-decimal">
                <li>dr. Amalia Zulfa Amanda</li>
                <li>dr. Endang Suminten</li>
              </ul>
            </div>
            <div className="font-semibold gap-5">
              <h2>Perawat :</h2>
              <ul className="list-decimal">
                <li>Umi Rochayati, S.Kep</li>
                <li>Nurhudi, AmK</li>
              </ul>
            </div>
          </div>
          <h2>PELAYANAN : SENIN - JUMAT</h2>
          <h2>
            JAM PENDAFTARAN : SENIN - KAMIS (07.00 - 11.00 WIB) JUMAT (07.00 -
            10.00 WIB)
          </h2>
          <h2>
            SABTU-MINGGU , CUTI BERSAMA DAN HARI LIBUR NASIONAL : PELAYANAN
            TUTUP
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <h2
            className="flex
          items-center justify-center font-bold text-2xl">
            Pelayanan Pemeriksaan Tanda Vital Pasien
          </h2>
          <div>
            <div>
              <p>Pemeriksaan Tekanan Darah</p>
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/beranda/klinikumum/image0.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/beranda/klinikumum/image1.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>

            <div>
              <p>Pengukuran Berat Badan dan Tinggi Badan</p>
              <div>
                <Image
                  src="/beranda/klinikumum/image2.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div>
              <p>Konsultasi Dokter Umum</p>
              <div>
                <Image
                  src="/beranda/klinikumum/image3.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div>
              <p>Pemeriksaan Dokter</p>
              <div className="flex flex-col lg:flex-row gap-5">
                <Image
                  src="/beranda/klinikumum/image4.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/beranda/klinikumum/image5.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div>
              <p>Pemeriksaan Dokter</p>
              <div>
                <Image
                  src="/beranda/klinikumum/image6.png"
                  alt="Background Image"
                  className="w-60 items-center justify-center"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
