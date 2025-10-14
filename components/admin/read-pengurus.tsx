import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatSektor } from "@/lib/utils";
import { DeleteButton, UpdateButton } from "./button";
import { DeletePengurus } from "@/lib/action";
import { getPelayan } from "@/lib/data";

const ReadPengurus = async () => {
  const pengurusList = await getPelayan();
  if (!pengurusList?.length) return <p>Data tidak ditemukan</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Birth</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Sektor</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pengurusList.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{formatDate(item.birth)}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.position}</TableCell>
            <TableCell>{formatSektor(item.sektor)}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <UpdateButton id={item.id} path="pelayan" />
                <DeleteButton id={item.id} action={DeletePengurus} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ReadPengurus;
