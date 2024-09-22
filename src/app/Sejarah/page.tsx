import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar.1";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center  ">
      <div className=" h-auto  w-full">
        <Image
          src="/profil/backgroundsejarah.png"
          alt="Background Image"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex items-center justify-center bg-white  p-5 rounded-md -mt-28 md:flex-row md:w-1/2 ">
        <div className="flex justify-center flex-col gap-6 p-5 relative md:w-8/12 items-center ">
          <p className="">
            Balkesmas Wilayah Semarang didirikan pertama kali pada tanggal 2
            September 1962, dengan nama Balai Pemberantasan Penyakit Paru-paru
            (BP4) yang terletak di Jl. Pandanaran No. 25 Semarang. Dengan jumlah
            pegawai yang melaksanakan pelayanan saat itu sebanyak 23 orang
            pegawai. Pada tahun 1978 Balai Pemberantasan Penyakit Paru-paru
            (BP4) berubah nomenklatur menjadi Balai Pengobatan Penyakit
            Paru-paru (BP4), sesuai dengan SK Menkes No. 144/Menkes/SK/IV/1978.
            Kunjungan BP4 dari tahun ke tahun terus bertambah banyak, sehingga
            tempat pelayanan kurang mencukupi dan kurang memenuhi syarat untuk
            pelayanan. Sehingga pada tanggal 4 Februari 1980, BP4 Semarang
            pindah ke Jl. KH Ahmad Dahlan No. 39 Semarang.
          </p>
          <br />
          <p>
            Seiring berjalannya waktu, perkembangan pelayanan kesehatan paru
            dituntut tidak hanya melaksanakan upaya kesehatan perorangan saja,
            tetapi juga melaksanakan upaya kesehatan masyarakat. Untuk itu pada
            bulan Juni 2008 disahkan melalui Pergub No. 42 Tahun 2008 terjadi
            perubahan nomenklatur dari Balai Pencegahan dan Pengobatan Penyakit
            Paru (BP4) menjadi Balai Kesehatan Paru Masyarakat (BKPM) Wilayah
            Semarang. Dalam rangka meningkatkan Pelayanan Upaya Kesehatan
            Masyarakat (UKM), melalui Peraturan Gubernur Jawa Tengah Nomor 99
            Tahun 2016 Tanggal 1 Januari 2017 Tentang Organisasi dan tata Kerja
            Unit Pelaksana Teknis Dinas Kesehatan Provinsi Jawa Tengah, Balai
            Kesehatan Paru Masyarakat (BKPM) Wilayah Semarang berubah
            nomenklatur menjadi Balai Kesehatan Masyarakat (BALKESMAS) Wilayah
            Semarang
          </p>
          <br />
          <p>
            Pelayanan BKPM Wilayah Semarang pada awalnya mempunyai tujuan
            sosial, menolong masyarakat yang terkena penyakit paru-paru dengan
            pelayanan secara cuma-cuma. Karena harga obat semakin meningkat dan
            masyarakat yang mendapat pelayanan kesehatan semakin banyak,
            sedangkan kondisi keuangan pemerintah tidak mencukupi, maka
            penderita penyakit paru-paru yang berobat dipungut biaya sekedarnya.
            Kemudian sebagai dasar tarif pelayanan kesehatan di BP4 maka
            diterbitkan Surat Edaran Dirjen Binkesmas Departemen Kesehatan RI
            No. 958/BM/DJ/KEU/VI/1992, tentang Petunjuk Pelaksanaan Pola Tarif
            Pelayanan Kesehatan di BP4. Pada tahun 2001 diterbitkan Peraturan
            Pemerintah RI Nomor 43 Tahun 2001 tentang Tarif atas jenis
            Penerimaan Negara Bukan Pajak. Saat ini Balkesmas Wilayah Semarang
            berpedoman pada Peraturan Gubernur Jawa Tengah Nomor 25 Tahun 2019
            Tentang Perubahan Atas Peraturan Gubernur Jawa Tengah Nomor 4 Tahun
            2017 Tentang Perubahan Tarif Retribusi Daerah sebagai dasar tarif
            pelayanan.
          </p>
        </div>
      </div>
      <div className="w-full text-blue-500">
        <h1 className="font-black text-xl lg:text-3xl leading-tight flex justify-center text-blue-500">
          Pimpinan BP4 Sejak Berdirinya Sampai Sekarang
        </h1>
        <div>
          <div
            className="flex flex-col md:flex-row items-center justify-between p-5
          ">
            <p className="md:w-7/12">
              Tahun 1962 – 1970, dipimpin oleh dr. R. Soemartono, Ahli Paru-paru{" "}
              <br />
              Tahun 1970 – 1984, dipimpin oleh dr. R. Soemanto, Ahli Paru-paru{" "}
              <br />
              Tahun 1984 – 1988, dipimpin oleh dr. Agus Djupri <br /> Tahun 1988
              – 1992, dipimpin oleh dr. Raharjo, SP <br />
              Tahun 1992 – 1994, dipimpin oleh dr. Hermawati Anantaraharja{" "}
              <br />
              Tahun 1994 – 2002, dipimpin oleh dr. Endang Merdekaningsih, <br />
              Tahun 2002 – 2010, dipimpin oleh dr. Nurhayati, Mkes <br />
              Tahun 2010 – 2014, dipimpin oleh dr IGATrimurti M.Kes <br />
              Tahun 2014 – 5 November 2018 dipimpin oleh dr. AA Sg. Sri Rika
              Puniawati <br />5 November 2018 – sekarang dipimpin oleh Subur
              Hadi Marhaento, SKM, M.Kes.{" "}
            </p>
            <Image
              src="/beranda/vektorpimpinan.png"
              alt="pimpinan bp4"
              className="hidden md:block w-44 h-44 rounded-lg"
              width={800}
              height={700}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
