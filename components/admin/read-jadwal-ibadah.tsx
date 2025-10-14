import React from "react";
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
import { DeleteButton, UpdateButton } from "./button";
import { DeleteJadwalIbadahWithId } from "@/lib/action";

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
            <TableHead>Date</TableHead>
            <TableHead>EKA</TableHead>
            <TableHead>DWI</TableHead>
            <TableHead>Waktu</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jadwalIbadahList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.place}</TableCell>
              <TableCell>{formatDate(item.date)}</TableCell>
              <TableCell>Kak {item.eka?.nickname}</TableCell>
              <TableCell>Kak {item.dwi?.nickname}</TableCell>
              <TableCell>{item.time} WIB</TableCell>
              <TableCell>
                {formatDate(item.createdAt.toLocaleDateString())}
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <UpdateButton id={item.id} path="jadwal-ibadah" />
                  <DeleteButton
                    id={item.id}
                    action={DeleteJadwalIbadahWithId}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReadJadwalIbadah;
