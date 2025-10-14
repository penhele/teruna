import { getLatestJadwalIbadah, getPelayan, getTeruna } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { formatDate } from "@/lib/utils";

const DashboardPage = async () => {
  const pengurusList = await getPelayan();
  const terunaList = await getTeruna();
  const jadwalIbadah = await getLatestJadwalIbadah();

  return (
    <div className="flex flex-col gap-3 bg-gray-100 shadow-lg p-4 rounded-sm">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at
          similique fuga consequuntur, tempora dolorem.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="p-4 col-span-2 bg-white rounded-sm shadow-sm">
          <p>{formatDate(jadwalIbadah?.date ?? "", "full")}</p>

          <div className="">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tempat</TableHead>
                  <TableHead>EKA</TableHead>
                  <TableHead>DWI</TableHead>
                  <TableHead>Waktu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{jadwalIbadah?.place}</TableCell>
                  <TableCell>Kak {jadwalIbadah?.eka?.nickname}</TableCell>
                  <TableCell>Kak {jadwalIbadah?.dwi?.nickname}</TableCell>
                  <TableCell>{jadwalIbadah?.time}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-sm shadow-sm">
          <p>Total Pelayan</p>
          <p className="text-2xl font-semibold">{pengurusList.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-sm shadow-sm">
          <p>Total Teruna</p>
          <p className="text-2xl font-semibold">{terunaList.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
