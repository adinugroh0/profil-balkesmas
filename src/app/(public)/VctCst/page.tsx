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
          src="/beranda/vct-cst/vctbg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20">
        <p>
          Sebagai upaya pencegahan dan pengendalian HIV-AIDS Balkesmas Wilayah
          Semarang turut berpartisipasi dengan didirikannya Klinik Perawatan
          Dukungan Pengobatan (PDP) yang kita sebut klinik VCT-CST Balkesmas
          Wilayah Semarang
        </p>
        <p>
          Klinik VCT-CST (Voluntary Counselling and Testing / Care, Support and
          Treatment) bertujuan untuk membantu pencegahan, perawatan dan
          pengobatan bagi penderita HIV/AIDS.
        </p>
        <h3>APA ITU VCT ?</h3>
        <p>
          VCT diartikan sebagai konseling dan tes HIV secara sukarela (KTS). VCT
          perlu dilakukan sebagai langkah awal untuk mendapat informasi mengenai
          HIV sehingga penderita HIV bisa segera melakukan deteksi sedini
          mungkin dan mendapat pengobatan yang dibutuhkan. Dengan berbekal
          pengetahuan yang baik, VCT tidak hanya mampu mencegah penularan HIV,
          namun juga mengurangi stigma dan diskriminasi terhadap ODHA.
        </p>
        <p>
          VCT bersifat rahasia dan dilakukan secara sukarela. Artinya, hanya
          dilakukan atas inisiatif dan persetujuan pihak yang datang ke penyedia
          layanan VCT untuk diperiksa. Hasil pemeriksaan yang dilakukan selama
          VCT pun terjaga kerahsaiaannya. Tes HIV biasanya berupa tes darah
          untuk memastikan adanya antibodi HIV didalam sampel darah.
        </p>
        <h3>TAHAPAN DAN PROSES DALAM VCT</h3>
        <p>
          Setelah menandatangani persetujuan tertulis, maka VCT dapat segera
          dilakukan. Adapun proses utama dalam penanganan HIV-AIDS melaui VCT
          adalah sebagai berikut :
        </p>
        <h3>Konseling tes HIV</h3>
        <p>
          Tahap ini dilakukan pemberian informasi tentang HIV dan AIDS oleh
          konselor. Klien diharapkan jujur menceritakan kegiatan sebelumnya yang
          dicurigai dapat berisiko terpapar virus HIV.
        </p>
        <h3>Testing HIV</h3>
        <p>
          Konselor menjelaskan mengenai pemeriksaan yang bisa dilakukan dan
          meminta persetujuan klien untuk dilakukan tes HIV. Setelah mendapat
          persetujuan tertulis, maka tes dapat dilakukan.
        </p>
        <p>
          Pada tahapan-tahapan berikutnya, peran konselor adalah untuk lebih
          mendukung dan membangun mental penderita agar tetap semangat hidup,
          dan juga membantu perawatan medis yang umum dilakukan. Selain itu,
          konselor juga akan memberi saran agar klien mendorong pasangan seksual
          untuk turut diperiksa.
        </p>
        <h3>MANFAAT MELAKUKAN VCT</h3>
        <p>
          Infeksi HIV/AIDS harus diwaspadai, karena infeksi HIV tidak memiliki
          gejala awal yang jelas, sehingga tanpa pengetahuan yang cukup
          penyebaran HIV akan semakin sulit dihindari. Oleh karena itu, VCT
          perlu dilakukan sebagai langkah awal untuk segera mendapat informasi
          mengenai HIV, juga agar penderita HIV bisa dilakukan deteksi sedini
          mungkin dan mendapat pertolongan kesehatan yang dibutuhkan. Hal ini
          sangat membantu sebagai langkah pencegahan dan pengendalian HIV/AIDS.
        </p>
        <p>
          Bagi semua kalangan, terutama mulai sejak masa remaja, perlu diadakan
          pendidikan dan pemahaman HIV/AIDS agar terhindar dari aktivitas yang
          memicu penyakit tersebut. Tidak perlu takut untuk menjalani VCT,
          langkah ini justru dapat membantu meningkatkan pengetahuan mengenai
          pencegahan dan penanganan HIV/AIDS. Juga dapat membantu untuk semakin
          mengurangi stigma dan diskriminasi terhadap orang yang hidup dengan
          HIV/AIDS (ODHA).
        </p>
        <h3>WAKTU DILAKUKANNYA VCT</h3>
        <p>
          VCT perlu dilakukan bila seseorang merasa khawatir atau takut akan
          tertular HIV dikarenakan:
        </p>
        <div className="font-semibold gap-5">
          <ol className="list-decimal">
            <li>
              Perilaku beresiko dengan berganti-ganti pasangan seks tanpa
              menggunakan kondom.
            </li>
            <li>
              Pernah tertular IMS atau penyakit kelamin lebih dari dua kali.
            </li>
            <li>
              Menggunkan jarum suntik secara bergantian atau tidak steril.
            </li>
            <li>
              Pernah menerima tranfusi darah tanpa melalui proses pemeriksaan
              (screening).
            </li>
          </ol>
        </div>
        <h3>APA ITU CST?</h3>
        <p>
          CST (Care, Support and Treatment) adalah perawatan yang melibatkan
          suatu jejaring sumberdaya dan pelayanan serta dukungan secara
          holistik, komprehensif dan luas untuk ODHA (Orang Dengan HIV Aids),
          dan keluarganya. Sumber : www.alodokter.com, depkes.
        </p>
        <h1>TIM KLINIK ANAK</h1>
        <h1>BALKESMAS WILAYAH SEMARANG</h1>
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <div className="font-semibold gap-5">
            <h1>Dokter</h1>
            <ol className="list-decimal">
              <li>dr. Lidya Dyah Wulandari,SpA</li>
              <li>dr. Yuli Elvita</li>
              <li>dr.Meky Tri Anggreni</li>
            </ol>
          </div>
          <div className="font-semibold gap-5">
            <h1>Perawat</h1>
            <ol className="list-decimal">
              <li>Enisulis Tyaningsih, S.Kep, Ns.</li>
              <li>Budi Utami,S.Kep</li>
              <li>Ummi Muhammad Annur,Amk</li>
            </ol>
          </div>
        </div>
        <h1>RR (Pencatatan & Pelaporan) : Edi Mulyanto, A.Md Kep.</h1>
        <h1>Farmasi : Sri Widyastuti, A.MF</h1>
        <h1>Laboratorium : Septiviana R S.Tr AK</h1>
        <div className="flex flex-col gap-10 lg:flex-row items-center">
          <div className="font-semibold gap-5">
            <h1>Konselor :</h1>
            <ol className="list-decimal">
              <li>Dr. Laksmi Satriana</li>
              <li>Umi Rochayati, S. Kep</li>
              <li>Kistiyono, SKM</li>
              <li>Didik Suwarsono, SKM MH. Kes</li>
              <li>Delta Lima November, S.Kep. Ns</li>
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
    </>
  );
}
