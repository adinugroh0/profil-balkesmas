// src/app/Dashboard/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconKey,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import UploadNews from "@/components/UploadNews";
import NewsDashboard from "@/components/NewsDashboard";
import Roro from "@/components/Roro";
import ChangePassword from "@/components/ChangePassword"; // Import ChangePassword component
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [newsCount, setNewsCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUploadNews, setShowUploadNews] = useState(false); // State to manage the UploadNews visibility
  const router = useRouter();

  // Cek apakah pengguna sudah login (token di localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/Login");
    }
  }, [router]);

  // Sidebar links
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Daftar Berita",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Tambah Berita",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Ganti Password", // Tambahkan link untuk ganti password
      href: "#",
      icon: (
        <IconKey className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/Login",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Roro />;
      case "daftar-berita":
        return <NewsDashboard onNewsCountChange={handleNewsCountChange} />;
      case "ganti-password": // Tambahkan case untuk ganti password
        return <ChangePassword />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  const handleNewsCountChange = (count: number) => {
    setNewsCount(count);
  };

  const handleNewsAdded = (count: number) => {
    setNewsCount((prevCount) => prevCount + count);
  };

  const handleLinkClick = (label: string) => {
    if (label === "Tambah Berita") {
      setShowUploadNews(true);
    } else if (label === "Logout") {
      localStorage.removeItem("token");
      router.push("/Login");
    } else {
      setSelectedPage(label.toLowerCase().replace(" ", "-"));
      setShowUploadNews(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Link
              href="#"
              className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre">
                Dashboard Balkesmas
              </motion.span>
            </Link>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  className="block py-2 px-4 rounded hover:bg-blue-700 hover:text-white w-full text-left transition duration-200"
                  onClick={() => handleLinkClick(link.label)}>
                  <SidebarLink link={{ ...link, href: "#" }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Admin Balkesmas",
                href: "#",
                icon: (
                  <Image
                    src="/icon.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {showUploadNews ? (
          <UploadNews onNewsAdded={handleNewsAdded} />
        ) : (
          renderPage()
        )}
      </main>
    </div>
  );
}
