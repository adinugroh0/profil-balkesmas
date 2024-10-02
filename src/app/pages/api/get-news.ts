import { NextApiRequest, NextApiResponse } from "next";

// Simulasi data berita dari "database"
const newsData = [
  {
    id: 1,
    title: "First News",
    content: "This is the first news content",
    imageUrl: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Second News",
    content: "This is the second news content",
    imageUrl: "/images/news2.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(newsData);
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
