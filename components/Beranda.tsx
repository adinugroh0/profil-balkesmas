"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImagesSlider } from "./ui/images-slider";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import AnimatedSection from "../components/AnimatedSection";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Footer from "./Footer";

export function Beranda() {
  const imageUrls = [
    "https://th.bing.com/th/id/OIP.ZFhOPejMa4yQeBxCy4XfpgHaE0?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.mBuiA0eh1H370KH4XR2lXgHaFj?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.JAdCsuYM81tRTlOqjLDX1wHaDs?rs=1&pid=ImgDetMain",
  ];
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ImagesSlider className="h-[40rem] " images={imageUrls}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col lg-flex-row justify-center items-center">
          <Image
            src="/beranda/logopolos.png"
            alt="Background Image"
            className="w-40"
            width={800}
            height={800}
          />
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            BALKESMAS <br /> WILAYAH SEMARANG
          </motion.p>

          <button
            onClick={scrollToBottom}
            className="px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-blue-600 transition duration-1000 ">
            <span>Hubungi Kami →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent  to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <AnimatedSection>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
            {" "}
            <Highlight className="text-white items-center justify-center flex dark:text-white">
              LAYANAN BALKESMAS
            </Highlight>
          </motion.h1>
        </HeroHighlight>

        <div className=" flex flex-col lg:flex-row  items-center justify-around gap-3 p-6">
          {/* klinik anak */}
          <div className=" group  bg-slate-50 shadow-indigo-500/50 shadow-xl drop-shadow-2xl p-7 rounded-xl transition duration-300 hover:bg-[#2A8EE4]">
            <div className="block">
              <svg
                className="transition duration-300 fill-[#2A8EE4] group-hover:fill-white transform group-hover:scale-x-[-1]"
                width="105"
                height="105"
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M63.4375 51.4063C61.9062 51.4063 60.6113 50.8769 59.5525 49.8181C58.4938 48.7594 57.9658 47.4659 57.9688 45.9375C57.9717 44.4092 58.501 43.1142 59.5569 42.0525C60.6127 40.9909 61.9062 40.4629 63.4375 40.4688C64.9688 40.4746 66.2637 41.004 67.3225 42.0569C68.3812 43.1098 68.9092 44.4034 68.9062 45.9375C68.9033 47.4717 68.374 48.7667 67.3181 49.8225C66.2623 50.8784 64.9688 51.4063 63.4375 51.4063ZM41.5625 51.4063C40.0313 51.4063 38.7363 50.8769 37.6775 49.8181C36.6188 48.7594 36.0908 47.4659 36.0938 45.9375C36.0967 44.4092 36.626 43.1142 37.6819 42.0525C38.7377 40.9909 40.0313 40.4629 41.5625 40.4688C43.0938 40.4746 44.3888 41.004 45.4475 42.0569C46.5063 43.1098 47.0342 44.4034 47.0313 45.9375C47.0283 47.4717 46.499 48.7667 45.4431 49.8225C44.3873 50.8784 43.0938 51.4063 41.5625 51.4063ZM52.5 74.375C48.125 74.375 44.1685 73.1719 40.6306 70.7656C37.0927 68.3594 34.4867 65.1875 32.8125 61.25H72.1875C70.5104 65.1875 67.9044 68.3594 64.3694 70.7656C60.8344 73.1719 56.8779 74.375 52.5 74.375ZM52.5 91.875C47.0312 91.875 41.9096 90.8367 37.135 88.76C32.3604 86.6834 28.2042 83.8761 24.6663 80.3382C21.1283 76.8002 18.321 72.644 16.2444 67.8694C14.1677 63.0948 13.1279 57.9717 13.125 52.5C13.1221 47.0284 14.1619 41.9067 16.2444 37.135C18.3269 32.3634 21.1327 28.2071 24.6619 24.6663C28.191 21.1254 32.3473 18.3181 37.1306 16.2444C41.914 14.1706 47.0371 13.1309 52.5 13.125C57.9629 13.1192 63.086 14.159 67.8694 16.2444C72.6527 18.3298 76.809 21.1356 80.3381 24.6619C83.8673 28.1881 86.6746 32.3444 88.76 37.1307C90.8454 41.9169 91.8838 47.04 91.875 52.5C91.8662 57.96 90.8279 63.0831 88.76 67.8694C86.6921 72.6556 83.8848 76.8119 80.3381 80.3382C76.7915 83.8644 72.6352 86.6717 67.8694 88.76C63.1035 90.8484 57.9804 91.8867 52.5 91.875ZM52.5 83.125C60.9583 83.125 68.1771 80.1354 74.1562 74.1563C80.1354 68.1771 83.125 60.9584 83.125 52.5C83.125 44.0417 80.1354 36.8229 74.1562 30.8438C68.1771 24.8646 60.9583 21.875 52.5 21.875H51.1875C50.75 21.875 50.3125 21.9479 49.875 22.0938C49.4375 22.5313 49.1458 23.0052 49 23.5156C48.8542 24.0261 48.7812 24.5729 48.7812 25.1563C48.7812 26.6875 49.3092 27.9825 50.365 29.0413C51.4208 30.1 52.7158 30.6279 54.25 30.625C54.9062 30.625 55.5085 30.5156 56.0569 30.2969C56.6052 30.0781 57.1696 29.9688 57.75 29.9688C58.625 29.9688 59.3542 30.2969 59.9375 30.9531C60.5208 31.6094 60.8125 32.375 60.8125 33.25C60.8125 34.9271 60.0279 36.0034 58.4588 36.4788C56.8896 36.9542 55.4867 37.1904 54.25 37.1875C50.9688 37.1875 48.144 36.0034 45.7756 33.635C43.4073 31.2667 42.2217 28.4404 42.2188 25.1563V24.5C42.2188 24.2813 42.2552 23.9896 42.3281 23.625C36.276 25.8125 31.3542 29.4948 27.5625 34.6719C23.7708 39.849 21.875 45.7917 21.875 52.5C21.875 60.9584 24.8646 68.1771 30.8438 74.1563C36.8229 80.1354 44.0417 83.125 52.5 83.125Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href={"/KlinikAnak"}>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold group-hover:text-white transition duration-300">
                  Klinik Anak
                </h1>
                <p className="max-w-56 group-hover:text-white  transition duration-300">
                  Pelayanan Pemeriksaan kesehatan, Medical check up, Screening
                  TBC, Screening stunting, TB anak, dll.
                </p>
                <p className="text-[#2A8EE4] group-hover:text-white transition duration-300">
                  SELENGKAPNYA +
                </p>
              </div>
            </Link>
          </div>
          {/* klinik Umum */}
          <div className=" group  bg-slate-50 shadow-indigo-500/50 shadow-xl drop-shadow-2xl p-7 rounded-xl transition duration-300 hover:bg-[#2A8EE4]">
            <div className="block">
              <svg
                className="transition duration-300 fill-[#2A8EE4] group-hover:fill-white transform group-hover:scale-x-[-1]"
                width="105"
                height="105"
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M45.9375 74.375H59.0625V63.4375H70V50.3125H59.0625V39.375H45.9375V50.3125H35V63.4375H45.9375V74.375ZM17.5 91.875V39.375L52.5 13.125L87.5 39.375V91.875H17.5ZM26.25 83.125H78.75V43.75L52.5 24.0625L26.25 43.75V83.125Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href={"/klinik-anak"}>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold group-hover:text-white transition duration-300">
                  Klinik Umum
                </h1>
                <p className="max-w-56 group-hover:text-white   transition duration-300">
                  Pelayanan medis kepada seorang pasien untuk tujuan screening
                  awal, diagnosis,dan pelayanan kesehatan lainnya.
                </p>
                <p className="text-[#2A8EE4] group-hover:text-white transition duration-300">
                  SELENGKAPNYA +
                </p>
              </div>
            </Link>
          </div>
          {/*  Laboratorium */}
          <div className=" group bg-slate-50 shadow-indigo-500/50 shadow-xl drop-shadow-2xl p-7 rounded-xl transition duration-300 hover:bg-[#2A8EE4]">
            <div className="block">
              <svg
                className="transition duration-300 fill-[#2A8EE4] group-hover:fill-white transform group-hover:scale-x-[-1]"
                width="105"
                height="105"
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M56.875 17.5H48.125L43.75 8.75H61.25L56.875 17.5ZM83.125 56.875V96.25H21.875V56.875C21.875 44.8 31.675 35 43.75 35V26.25H39.375V21.875H65.625V26.25H61.25V35C73.325 35 83.125 44.8 83.125 56.875ZM74.375 56.875C74.375 49.6563 68.4688 43.75 61.25 43.75H43.75C36.5313 43.75 30.625 49.6563 30.625 56.875V87.5H74.375V56.875ZM65.625 70H56.875V78.75H48.125V70H39.375V61.25H48.125V52.5H56.875V61.25H65.625V70Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href={"/KlinikAnak"}>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold group-hover:text-white transition duration-300">
                  Laboratorium
                </h1>
                <p className="max-w-56 group-hover:text-white    transition duration-300">
                  Sebagai penunjang diagnosa, Membantu menegakkan diagnosa,
                  mengetahui status kesehatan seseorang
                </p>
                <p className="text-[#2A8EE4] group-hover:text-white transition duration-300">
                  SELENGKAPNYA +
                </p>
              </div>
            </Link>
          </div>
          {/*  Fisioterapi */}
          <div className=" group  bg-slate-50 shadow-indigo-500/50 shadow-xl drop-shadow-2xl p-7 rounded-xl transition duration-300 hover:bg-[#2A8EE4]">
            <div className="block">
              <svg
                className="transition duration-300 fill-[#2A8EE4] group-hover:fill-white transform group-hover:scale-x-[-1]"
                width="105"
                height="105"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M45.8333 8.33331C53.9278 8.33206 61.7462 11.2763 67.8293 16.6164C73.9124 21.9565 77.8444 29.3277 78.8917 37.3541L88.2667 52.1C88.8833 53.0708 88.7583 54.5167 87.3292 55.1333L79.1667 58.625V70.8333C79.1667 73.0435 78.2887 75.1631 76.7259 76.7259C75.1631 78.2887 73.0435 79.1667 70.8333 79.1667H62.5042L62.5 91.6667H25V76.275C25 71.3583 23.1833 66.7042 19.8125 62.5042C15.8863 57.6019 13.4249 51.6901 12.7121 45.45C11.9992 39.2098 13.0638 32.8952 15.7833 27.2338C18.5028 21.5723 22.7664 16.7944 28.0829 13.4505C33.3995 10.1065 39.5526 8.33268 45.8333 8.33331ZM45.8333 16.6666C41.1233 16.6664 36.5089 17.9968 32.5219 20.5046C28.5349 23.0123 25.3374 26.5953 23.2978 30.8409C21.2582 35.0864 20.4594 39.8218 20.9935 44.5015C21.5276 49.1812 23.3729 53.6148 26.3167 57.2917C30.875 62.975 33.3333 69.4458 33.3333 76.275V83.3333H54.1667L54.175 70.8333H70.8333V53.1333L77.2917 50.3667L70.8625 40.2625L70.625 38.4208C69.8371 32.4034 66.8872 26.8781 62.3256 22.8753C57.764 18.8726 51.9021 16.6659 45.8333 16.6666ZM45.8333 29.1666C46.9384 29.1666 47.9982 29.6056 48.7796 30.387C49.561 31.1684 50 32.2282 50 33.3333V37.5H54.1667C55.2717 37.5 56.3315 37.939 57.1129 38.7204C57.8943 39.5018 58.3333 40.5616 58.3333 41.6666C58.3333 42.7717 57.8943 43.8315 57.1129 44.6129C56.3315 45.3943 55.2717 45.8333 54.1667 45.8333H50V50C50 51.1051 49.561 52.1649 48.7796 52.9463C47.9982 53.7277 46.9384 54.1666 45.8333 54.1666C44.7283 54.1666 43.6685 53.7277 42.8871 52.9463C42.1057 52.1649 41.6667 51.1051 41.6667 50V45.8291L37.5 45.8333C36.3949 45.8333 35.3351 45.3943 34.5537 44.6129C33.7723 43.8315 33.3333 42.7717 33.3333 41.6666C33.3333 40.5616 33.7723 39.5018 34.5537 38.7204C35.3351 37.939 36.3949 37.5 37.5 37.5L41.6667 37.4958V33.3333C41.6667 32.2282 42.1057 31.1684 42.8871 30.387C43.6685 29.6056 44.7283 29.1666 45.8333 29.1666Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href={"/klinik-anak"}>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold group-hover:text-white transition duration-300">
                  Fisioterapi
                </h1>
                <p className="max-w-56 group-hover:text-white    transition duration-300">
                  Pelayanan Rawat Jalan yang memberikan pelayanan fisioterapi
                  kepada seorang pasien untuk tujuan anamnesa,
                </p>
                <p className="text-[#2A8EE4] group-hover:text-white transition duration-300">
                  SELENGKAPNYA +
                </p>
              </div>
            </Link>
          </div>
          {/*  Klinik vct-cst */}
          <div className=" group  bg-slate-50 shadow-indigo-500/50 shadow-xl drop-shadow-2xl p-7 rounded-xl transition duration-300 hover:bg-[#2A8EE4]">
            <div className="block">
              <svg
                className="transition duration-300 stroke-[#2A8EE4] group-hover:stroke-white transform group-hover:scale-x-[-1]"
                width="105"
                height="105"
                viewBox="0 0 119 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.7084 104.125C34.7084 104.125 80.7515 55.33 80.7515 35.4967C80.9105 32.7348 80.469 29.9713 79.4572 27.3965C78.4454 24.8216 76.8875 22.4968 74.8907 20.582C72.8548 18.6269 70.4367 17.1137 67.7881 16.1376C65.1396 15.1614 62.3178 14.7434 59.5 14.9097C56.6826 14.7427 53.8611 15.16 51.2125 16.1353C48.564 17.1106 46.1457 18.6228 44.1094 20.5771C42.1113 22.4929 40.5526 24.8194 39.5408 27.396C38.5289 29.9727 38.0881 32.7381 38.2486 35.5017C38.2486 55.335 84.2917 104.125 84.2917 104.125"
                  stroke-width="9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Link href={"/klinik-anak"}>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold group-hover:text-white transition duration-300">
                  VCT-CST
                </h1>
                <p className="max-w-56 group-hover:text-white    transition duration-300">
                  Bertujuan untuk membantu pencegahan, perawatan dan pengobatan
                  bagi penderita HIV/AIDS.
                </p>
                <p className="text-[#2A8EE4] group-hover:text-white transition duration-300">
                  SELENGKAPNYA +
                </p>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>
      {/*  card tujuan */}
      <AnimatedSection>
        <CardContainer className="  w-full h-screen">
          <CardBody className="w-11/12 h-screen bg-[#D4E8FA] flex flex-col lg:flex-row  items-center justify-around group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   rounded-xl p-6 border  ">
            <div className="flex flex-col gap-9">
              <CardItem
                translateZ="50"
                className="bg-[#A1CDF3] rounded-lg p-2 font-bold text-[#0014CA]">
                TENTANG BALKESMAS
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-[#000000] dark:text-white">
                Tujuan Balai <br /> Kesehatan Masyarakat <br /> Wilayah Semarang
              </CardItem>
              <CardItem
                as="ul"
                translateZ="60"
                className="text-neutral-500  text-sm max-w-xl mt-3 dark:text-neutral-300">
                <ul className="list-decimal mt-9 flex flex-col gap-4">
                  <li>
                    Memberikan gambaran singkat tentang ketersediaan sumber daya
                    manusia kesehatan menurut jenis dan jumlahnya.
                  </li>
                  <li>
                    Mendapatkan gambaran kecukupan jenis dan jumlah SDM
                    Kesehatan dibandingkan dengan hasil perhitungan perencanaan
                    kebutuhan SDM Kesehatan dengan menggunakan metode ABK
                    Kesehatan dan standart minimal ketenagaan.
                  </li>
                  <li>
                    Menjadi acuan dalam meningkatkan pemerataan SDM Kesehatan.
                  </li>
                  <li>
                    Menjadi acuan dalam perencanaan, Pendayagunaan dan
                    Pemberdayaan Sumber Daya Manusia Kesehatan. 
                  </li>
                </ul>
              </CardItem>
            </div>
            <div>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/beranda/gambartujuan.png"
                  height="800"
                  width="800"
                  className=" w-96 object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default Beranda;
