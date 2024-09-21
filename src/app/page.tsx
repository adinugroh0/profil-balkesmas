/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Beranda from "@/components/Beranda.js";
import TampilkanBerita from "@/components/TampilkanBerita";
import Berita from "@/components/Berita";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Beranda />
      <Berita />
      <TampilkanBerita />
    </>
  );
}
