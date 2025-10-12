import React from "react";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getJadwalIbadah } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const ReadJadwalIbadah = async () => {
  const jadwalIbadahList = await getJadwalIbadah();
  if (!jadwalIbadahList?.length) return <p>Data tidak ditemukan</p>;

  return (
    <div>
      <h2 className="text-lg font-medium">Minggu, 12 Oktober 2025</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tempat</TableHead>
            <TableHead>EKA</TableHead>
            <TableHead>DWI</TableHead>
            <TableHead>Waktu</TableHead>
            <TableHead>Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jadwalIbadahList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.place}</TableCell>
              <TableCell>{item.eka?.name}</TableCell>
              <TableCell>{item.dwi?.name}</TableCell>
              <TableCell>{item.time} WIB</TableCell>
              <TableCell>
                {formatDate(item.updatedAt.toLocaleDateString())}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReadJadwalIbadah;
