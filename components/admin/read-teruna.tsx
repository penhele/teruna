import { getTeruna } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAge, formatDate, formatGender, formatSektor } from "@/lib/utils";
import { DeleteButton, UpdateButton } from "@/components/admin/button";
import { DeleteTerunaWithId } from "@/lib/action";

const ReadTeruna = async () => {
  const terunaList = await getTeruna();
  if (!terunaList?.length) return <p>Data tidak ditemukan</p>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Birth</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Sektor</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {terunaList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{formatGender(item.gender)}</TableCell>
              <TableCell>{formatDate(item.birth)}</TableCell>
              <TableCell>{formatAge(item.birth)}</TableCell>
              <TableCell>{formatSektor(item.sektor)}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <UpdateButton id={item.id} path="teruna" />
                  <DeleteButton id={item.id} action={DeleteTerunaWithId} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReadTeruna;
