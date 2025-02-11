import React, { useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";

const PDFUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      setMessage("Please upload a valid PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("No file selected!");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("pdf-files")
      .upload(fileName, file);

    if (error) {
      setMessage(`Error uploading file: ${error.message}`);
    } else {
      setMessage("File uploaded successfully!");
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow-md">
      <h1 className="text-lg font-bold mb-4">Upload PDF SDM</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Upload
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default PDFUploader;
