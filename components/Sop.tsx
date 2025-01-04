"use client";
// components/PdfViewer.js
import React from "react";

const Sop = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <iframe
        src="/sop.pdf"
        className="w-9/12 h-svh p-7"
        width="600"
        height="400"
      />
    </div>
  );
};

export default Sop;
