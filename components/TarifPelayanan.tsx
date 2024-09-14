"use client";
// components/PdfViewer.js
import React from "react";

const TarifPelayanan = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <iframe
        src="/tarif.pdf"
        className="w-9/12 h-svh p-7"
        width="1000"
        height="600"
      />
    </div>
  );
};

export default TarifPelayanan;
