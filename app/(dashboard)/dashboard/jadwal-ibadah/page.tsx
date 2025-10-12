import ReadJadwalIbadah from "@/components/admin/read-jadwal-ibadah";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JadwalIbadahPage = () => {
  return (
    <div className="">
      <ReadJadwalIbadah />

      <Link href={"/dashboard/jadwal-ibadah/create"}>
        <Button>Add New</Button>
      </Link>
    </div>
  );
};

export default JadwalIbadahPage;
