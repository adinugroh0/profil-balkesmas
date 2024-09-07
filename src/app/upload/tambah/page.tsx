import UploadBerita from "@/components/UploadBerita";
import TampilkanBerita from "@/components/TampilkanBerita";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <UploadBerita />
      <TampilkanBerita />
    </div>
  );
}
