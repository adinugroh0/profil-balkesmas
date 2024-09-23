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
      <Beranda />
    </>
  );
}
