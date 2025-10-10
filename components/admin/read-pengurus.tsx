import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPengurus } from "@/lib/data";
import { formatSektor } from "@/lib/utils";
import { DeleteButton, UpdateButton } from "./button";

const ReadPengurus = async () => {
  const pengurusList = await getPengurus();
  if (!pengurusList?.length) return <p>Data tidak ditemukan</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama</TableHead>
          <TableHead>Jabatan</TableHead>
          <TableHead>Sektor</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pengurusList.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.position}</TableCell>
            <TableCell>{formatSektor(item.sektor)}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <UpdateButton id={item.id} />
                <DeleteButton id={item.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReadPengurus;
