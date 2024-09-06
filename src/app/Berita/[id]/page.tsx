import { useRouter } from "next/router";
import EditBerita from "@/components/EditBerita";

const EditBeritaPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return <p>Invalid ID</p>;
  }

  return <EditBerita id={id} />;
};

export default EditBeritaPage;
