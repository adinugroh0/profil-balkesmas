import { supabase } from "@/src/lib/supabaseClient";
import Image from "next/image";

interface NewsDetailProps {
  params: { id: string };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { id } = params;

  const { data: newsItem, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !newsItem) {
    return (
      <div className="bg-[#2A8EE4] min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-2xl">Berita tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#2A8EE4] min-h-screen flex flex-col items-center">
      <div className="max-w-3xl mx-auto py-10 px-4 text-white">
        {newsItem.image_url && (
          <div className="mb-6">
            <Image
              src={newsItem.image_url}
              alt={newsItem.title}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
        <p className="mb-6">{newsItem.content}</p>
        <p className="italic mb-2">
          <strong>Penulis:</strong> {newsItem.author}
        </p>
        <p className="text-sm">
          <em>
            Dipublikasikan pada{" "}
            {new Date(newsItem.created_at).toLocaleDateString()}
          </em>
        </p>
      </div>
    </div>
  );
}
