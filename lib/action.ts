"use server";

import { prisma } from "@/lib/prisma";
import { PengurusSchema } from "./zod";
import { redirect } from "next/navigation";

export const SavePengurus = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    position: formData.get("position"),
    sektor: formData.get("sektor"),
  };

  const validatedFields = PengurusSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { name, position, sektor } = validatedFields.data;

  try {
    await prisma.pengurus.create({
      data: {
        name,
        position,
        sektor,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/pengurus");
};
