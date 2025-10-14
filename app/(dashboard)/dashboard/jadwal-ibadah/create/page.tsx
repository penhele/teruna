import CreateFormJadwalIbadah from "@/components/admin/create-form-jadwal-ibadah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Jadwal Ibadah",
};

const CreatePage = () => {
  return <CreateFormJadwalIbadah />;
};

export default CreatePage;
