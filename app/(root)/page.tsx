import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getLatestJadwalIbadah } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import React from "react";

const HomePage = async () => {
  const jadwalIbadah = await getLatestJadwalIbadah();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="">
        <h1>Persekutuan Teruna</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id suscipit
          rem deserunt repellendus nobis? Adipisci.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col col-span-2 gap-3">
          <h2 className="text-xl font-semibold">Jadwal Ibadah</h2>

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
                <TableCell>Kak {jadwalIbadah?.eka?.name}</TableCell>
                <TableCell>Kak {jadwalIbadah?.dwi?.name}</TableCell>
                <TableCell>{jadwalIbadah?.time} WIB</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>
              Jadwal IHMPT {formatDate(jadwalIbadah?.date ?? "", "full")}
            </TableCaption>
          </Table>
        </div>

        <div className="bg-gray-200"></div>
      </div>
    </div>
  );
};

export default HomePage;
