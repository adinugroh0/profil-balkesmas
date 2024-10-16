"use client"; // Penanda bahwa ini adalah Client Component

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/Sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import UploadNews from "@/components/UploadNews";
import NewsDashboard from "@/components/NewsDashboard";
import Roro from "@/components/Roro";

export default function DashboardPage() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [newsCount, setNewsCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUploadNews, setShowUploadNews] = useState(false); // State to manage the UploadNews visibility

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
      href: "#", // Keep href as "#" since we handle it with onClick
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  // Handle page rendering
  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Roro />;
      case "daftar-berita":
        return <NewsDashboard onNewsCountChange={handleNewsCountChange} />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  // Handle news count changes
  const handleNewsCountChange = (count: number) => {
    setNewsCount(count); // Update news count
  };

  const handleNewsAdded = (count: number) => {
    setNewsCount((prevCount) => prevCount + count); // Add new news count
  };

  const handleLinkClick = (label: string) => {
    if (label === "Tambah Berita") {
      setShowUploadNews(true); // Show the upload news component
    } else {
      setSelectedPage(label.toLowerCase().replace(" ", "-")); // Handle other links
      setShowUploadNews(false); // Ensure UploadNews is hidden for other links
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
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
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
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

// Reused Logo component from SidebarDemo
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        Acet Labs
      </motion.span>
    </Link>
  );
};
