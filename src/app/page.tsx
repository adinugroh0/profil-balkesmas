/* eslint-disable @next/next/no-css-tags */
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Beranda from "@/components/Beranda";
import Berita from "@/components/Berita";

export default function Home() {
  return (
    <>
      <Beranda />
      <Berita />
    </>
  );
}
