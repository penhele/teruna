import React from "react";
import EditFormPelayan from "./edit-form-pelayan";
import { getPelayanById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPelayan = async ({ pelayanId }: { pelayanId: string }) => {
  const [pelayan] = await Promise.all([getPelayanById(pelayanId)]);
  if (!pelayan) return notFound();

  return <EditFormPelayan pelayan={pelayan} />;
};

export default EditPelayan;
