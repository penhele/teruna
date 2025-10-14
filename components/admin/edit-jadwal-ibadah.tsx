import React from "react";
import { getJadwalIbadahById, getPelayanById } from "@/lib/data";
import { notFound } from "next/navigation";
import EditFormJadwalIbadah from "./edit-form-jadwal-ibadah";

const EditJadwalIbadah = async ({
  jadwalIbadahId,
}: {
  jadwalIbadahId: string;
}) => {
  const [jadwalIbadah] = await Promise.all([
    getJadwalIbadahById(jadwalIbadahId),
  ]);
  if (!jadwalIbadah) return notFound();

  return <EditFormJadwalIbadah jadwalIbadah={jadwalIbadah} />;
};

export default EditJadwalIbadah;
