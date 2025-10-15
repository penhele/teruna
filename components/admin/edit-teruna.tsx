import { notFound } from "next/navigation";
import React from "react";
import EditFormTeruna from "./edit-form-teruna";
import { getTerunaById } from "@/lib/data";

const EditTeruna = async ({ terunaId }: { terunaId: string }) => {
  const [teruna] = await Promise.all([getTerunaById(terunaId)]);
  if (!teruna) return notFound();

  return <EditFormTeruna teruna={teruna} />;
};

export default EditTeruna;
