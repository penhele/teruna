import { getKegiatan } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { IoCloudUploadOutline } from "react-icons/io5";
import { DeleteButton } from "./button";
import { DeleteKegiatan } from "@/lib/action";

const ReadKegiatan = async () => {
  const kegiatanList = await getKegiatan();
  if (!kegiatanList) return <p>Data tidak ditemukan</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <Link
        href={"/dashboard/kegiatan/create"}
        className="max-w-lg flex items-center justify-center aspect-video bg-gray-200 border-2 border-dashed rounded-sm transition hover:border-gray-400"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <IoCloudUploadOutline className="text-sm" />
          <span className="text-xs text-gray-500">Add Image</span>
        </div>
      </Link>

      {kegiatanList.map((item) => (
        <div
          key={item.id}
          className="relative max-w-lg aspect-video border-2 border-dashed rounded-sm transition hover:border-gray-400"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover rounded-sm"
          />

          <div className=" absolute top-1 right-1">
            <DeleteButton id={item.id} action={DeleteKegiatan} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadKegiatan;
