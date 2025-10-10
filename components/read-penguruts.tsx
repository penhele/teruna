import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPengurus } from "@/lib/data";
import { PiPencilLight, PiTrashSimpleLight } from "react-icons/pi";

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
            <TableCell>Sektor {item.sektor}</TableCell>
            <TableCell>
              <div className="flex gap-3">
                <PiPencilLight />
                <PiTrashSimpleLight />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReadPengurus;
