import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/src/lib/supabaseClient";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

interface NewsDashboardProps {
  onNewsCountChange: (count: number) => void;
}

export default function NewsDashboard({
  onNewsCountChange,
}: NewsDashboardProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  // Mengambil berita dari database
  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);

      setNews(data || []);
      onNewsCountChange(data?.length || 0);
    } catch (error) {
      setError("Error fetching news.");
    } finally {
      setLoading(false);
    }
  }, [onNewsCountChange]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Fungsi hapus berita
  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      setError("Error deleting news.");
      return;
    }

    setNews((prevNews) => prevNews.filter((item) => item.id !== id));
    onNewsCountChange(news.length - 1); // Update jumlah berita setelah penghapusan
  };

  // Fungsi edit berita
  const handleEdit = (item: NewsItem) => {
    setIsEditing(item.id);
    setFormData({
      title: item.title,
      content: item.content,
      author: item.author,
    });
  };

  // Simpan perubahan berita yang diedit
  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEditing) return;

    const { error } = await supabase
      .from("news")
      .update({
        title: formData.title,
        content: formData.content,
        author: formData.author,
      })
      .eq("id", isEditing);

    if (error) {
      setError("Error updating news.");
      return;
    }

    setNews((prevNews) =>
      prevNews.map((item) =>
        item.id === isEditing
          ? {
              ...item,
              title: formData.title,
              content: formData.content,
              author: formData.author,
            }
          : item
      )
    );
    setIsEditing(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {news.length === 0 ? (
        <p className="text-lg text-gray-500">Tidak ada berita.</p>
      ) : (
        <ul className="space-y-4 w-full">
          {news.map((item) => (
            <li
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:justify-between">
              {isEditing === item.id ? (
                <form onSubmit={handleSave} className="w-full space-y-4">
                  <div>
                    <label className="block text-gray-700">Judul:</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Konten:</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      required
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Penulis:</label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                      }
                      required
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Simpan
                  </button>
                </form>
              ) : (
                <>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p>{item.content}</p>
                    <p>
                      <strong>Penulis:</strong> {item.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      <em>{new Date(item.created_at).toLocaleDateString()}</em>
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded-md">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 text-white py-1 px-3 rounded-md">
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
