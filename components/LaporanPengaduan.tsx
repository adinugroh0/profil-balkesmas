"use client";
// components/PdfViewer.js
import React from "react";

const LaporanPengaduan = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <iframe
        src="/laporan-pengaduan.pdf"
        className="w-9/12 h-svh p-7"
        width="600"
        height="400"
      />
    </div>
  );
};

export default LaporanPengaduan;
