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
          src="/beranda/klinikanakbg.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col p-7 gap-5 items-center mx-20">
        <p>
          Anak adalah aset berharga bagi orang tua sekaligus generasi penerus
          bangsa. Setiap anak merupakan individu yang unik, dengan latar
          belakang yang berbeda-beda. Anak yang sehat, sakit, atau pun anak yang
          berkebutuhan khusus memiliki hak yang sama untuk tumbuh dan berkembang
          secara optimal sesuai dengan potensinya. Sebagai upaya untuk
          berkontribusi dan berperanserta dalam peningkatan kualitas layanan
          kesehatan di Semarang, Balkesmas Wilayah Semarang mendirikan klinik
          anak yang dikenal sebagai KLIRAMAS (Klinik Ramah Anak
          Balkesmas).Harapan kami semua anak yang mendapatkan pelayanan di
          Balkesmas merasa nyaman seperti dirumah sendiri, anak dapat bermain,
          berinteraksi dengan dokter dan perawat tanpa ada rasa takut karena
          tujuan dari Kliramas adalah untuk mengurangi efek hospitalisasi pada
          anak.
        </p>
        <Image
          src={"/beranda/klinikanak/image1.png"}
          alt={""}
          height={1080}
          width={1920}
          className="w-60 items-center justify-center"
        />{" "}
        <p>
          Kami mengerahkan segala upaya untuk memberikan layanan kesehatan yang
          terintegrasi, dengan pelayanan prima sepenuh hati.
        </p>
        <Image
          src={"/beranda/klinikanak/image2.png"}
          alt={""}
          height={1080}
          width={1920}
          className="w-60 items-center justify-center"
        />
        <ol className="flex flex-col gap-5 list-disc">
          <li className="flex gap-5 flex-col ">
            1.Pelayanan Dr.Spesialis Anak
            <div className="flex gap-5 flex-col lg:flex-row justify-center">
              <Image
                src={"/beranda/klinikanak/image3.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image4.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image5.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
            </div>
            <p>
              Pelayanan dokter spesialis anak terjadwal setiap hari senin –jumat
              pukul 08.00-11.00 WIB. Kami fokus pada Masalah-masalah kesehatan
              anak merupakan hal yang sensitif dan perlu mendapatkan tatalaksana
              atas dasar pengetahuan dan keterampilan khusus. Seperti tumbuh
              kembang anak mulai dari pencegahan hingga pengobatan, screening
              stunting, TB anak,dll
            </p>
          </li>
          <li className="flex gap-5 flex-col ">
            2. Pelayanan Dokter Umum Pelayanan dokter umum buka setiap hari
            dengan dokter umum plus yang sudah terlatih, pelayan tersebut
            meliputi pelayanan pemeriksaan kesehatan,medical cek up,screening
            TBC.Jika terjadi permasalahan kesehatan yang serius akan dikonsulkan
            ke dokter spesialis anak.
            <div className="flex gap-5 flex-col lg:flex-row justify-center">
              <Image
                src={"/beranda/klinikanak/image6.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image7.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
            </div>
          </li>
          <li className="flex gap-5 flex-col">
            3.Tes Mantoux/Tuberculin skin test
            <p>
              Tes Mantoux atau tuberculin skin test (TST) adalah pemeriksaan
              yang dilakukan untuk mengetahui ada atau tidaknya kuman penyebab
              penyakit tuberkulosis pada tubuh. Tes ini sangat disarankan bagi
              Anda yang kerap melakukan kontak langsung dengan penderita
              tuberkulosis.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row justify-center">
              <Image
                src={"/beranda/klinikanak/image8.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image9.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
            </div>
            <p>
              Test mantoux dilaksanakan setiap hari senin,selasa dan jumat agar
              pembacaan hasil tepat dan didapatkan diagnose yang akurat.
            </p>
          </li>
          <li className="flex gap-5 flex-col">
            4.Klinik Laktasi
            <p>
              Memberikan ASI adalah sebuah pilihan terbaik untuk mendukung
              kesehatan dan pertumbuhan bayi, terlebih bila Ibu dapat memberikan
              ASI eksklusif selama 6 bulan pertama. Namun, seringkali Ibu
              menyusui menemui beberapa kendala dalam memberikan ASI, sehingga
              tak jarang menghentikan pemberiannya pada bayi. Sediaan ASI yang
              berkurang, payudara terasa sakit saat menyusui, kenaikan berat
              badan bayi kurang walau telah diberi ASI, merupakan beberapa hal
              yang dapat membuat Ibu menghentikan pemberian ASI. Hal ini akan
              membuat semua manfaat baik bagi bayi dan Ibu pun menjadi tidak
              optimal. Jika Ibu merupakan salah satunya, sebaiknya segera
              berkonsultasi pada tenaga medis melalui klinik laktasi yang kini
              terdapat di beberapa rumah sakit dan pusat kesehatan ibu dan anak
              di Indonesia. Apa Itu Klinik Laktasi?s
            </p>
            <p>
              Klinik laktasi merupakan tempat ibu berkonsultasi dengan tenaga
              medis yang memiliki pengetahuan mengenai serba serbi pemberian
              ASI. Di tempat ini, tenaga medis akan memberikan penyuluhan,
              dukungan, dan pelatihan pada Ibu untuk mendapatkan informasi dan
              untuk mengatasi masalah pemberian ASI.
            </p>
            <p>
              Umumnya, Ibu memerlukan dua hingga tiga kali kunjungan selama 45
              menit hingga 1 jam. Sebagian besar masalah pemberian ASI dapat
              dibantu dengan konseling di klinik ini dengan dokter spesialis
              anak. Di klinik laktasi, Ibu juga dapat berjumpa dengan Ibu
              lainnya yang memiliki masalah yang serupa, sehingga Ibu dapat
              berbagi cerita dan bertukar pendapat.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row justify-center">
              <Image
                src={"/beranda/klinikanak/image10.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image11.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
              <Image
                src={"/beranda/klinikanak/image12.png"}
                alt={""}
                height={1080}
                width={1920}
                className="w-60 items-center justify-center"
              />
            </div>
            <p>Konseling Laktasi oleh dokter spesialis Anak</p>
          </li>
        </ol>
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
        <h1>PELAYANAN : SENIN - JUMAT</h1>
        <h1>
          JAM PENDAFTARAN : SENIN - KAMIS (07.00 - 11.00 WIB) JUMAT (07.00 -
          10.00 WIB)
        </h1>
        <h1>
          SABTU-MINGGU , CUTI BERSAMA DAN HARI LIBUR NASIONAL : PELAYANAN TUTUP
        </h1>
      </div>

      <Footer />
    </>
  );
}
