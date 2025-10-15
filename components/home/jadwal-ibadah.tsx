import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLatestJadwalIbadah, getPelayan } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SlLocationPin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const JadwalIbadah = async () => {
  const jadwalIbadah = await getLatestJadwalIbadah();
  const pelayan = await getPelayan();

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Jadwal Ibadah</h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col col-span-3 lg:col-span-2 gap-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tempat</TableHead>
                <TableHead>PF (EKA)</TableHead>
                <TableHead>PF (DWI)</TableHead>
                <TableHead>Waktu</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{jadwalIbadah?.place}</TableCell>
                <TableCell>Kak {jadwalIbadah?.eka?.nickname}</TableCell>
                <TableCell>Kak {jadwalIbadah?.dwi?.nickname}</TableCell>
                <TableCell>{jadwalIbadah?.time} WIB</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>
              Jadwal IHMPT {formatDate(jadwalIbadah?.date ?? "", "full")}
            </TableCaption>
          </Table>
        </div>

        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-base bg-gray-200 rounded-sm w-fit px-2">
              Lokasi
            </h3>
            <div className="flex gap-2 items-center text-sm">
              <SlLocationPin />
              <span>Jl. Baladewa 32, Tanah Tinggi</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base bg-gray-200 rounded-sm w-fit px-2">
              Kontak
            </h3>
            <div className="flex gap-2 items-center text-sm">
              <FaWhatsapp />
              <span>{pelayan[1].phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalIbadah;
