"use client";
// components/PdfViewer.js
import React from "react";

const StandartPelayanan = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <iframe
        src="/sk_standart_pelayanan.pdf"
        className="w-9/12 h-svh p-7"
        width="1000"
        height="600"
      />
    </div>
  );
};

export default StandartPelayanan;
