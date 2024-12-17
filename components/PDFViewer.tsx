import React, { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabaseClient";

interface FileData {
  name: string;
  url: string;
}

const PDFViewer: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from("pdf-files").list();

    if (error) {
      console.error("Error fetching files:", error.message);
      setLoading(false);
      return;
    }

    const filesWithUrls = await Promise.all(
      data?.map(async (file) => {
        const { data: urlData } = await supabase.storage
          .from("pdf-files")
          .getPublicUrl(file.name);
        return { name: file.name, url: urlData?.publicUrl || "" };
      }) || []
    );

    setFiles(filesWithUrls);
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="p-4 border rounded bg-white shadow-md mt-6">
      <h1 className="text-lg font-bold mb-4">Uploaded PDFs</h1>
      {loading ? (
        <p>Loading files...</p>
      ) : files.length > 0 ? (
        <ul className="space-y-4">
          {files.map((file) => (
            <li key={file.name} className="flex flex-col border p-4 rounded">
              <p className="font-semibold text-gray-800">{file.name}</p>
              <iframe
                src={file.url}
                className="mt-2 w-full h-60 border"
                title={file.name}></iframe>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};

export default PDFViewer;
