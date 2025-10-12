"use server";

import { prisma } from "@/lib/prisma";
import { JadwalIbadahSchema, PengurusSchema, TerunaSchema } from "./zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const SavePengurus = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone")?.toString() || "",
    birth: formData.get("birth"),
    category: formData.get("category"),
    position: formData.get("position"),
    sektor: formData.get("sektor"),
  };

  const validatedFields = PengurusSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { name, phone, birth, category, position, sektor } =
    validatedFields.data;

  try {
    await prisma.pengurus.create({
      data: {
        name,
        phone,
        birth,
        category,
        position,
        sektor,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/pengurus");
};

export const SaveTeruna = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    gender: formData.get("gender"),
    birth: formData.get("birth"),
    sektor: formData.get("sektor"),
  };

  const validatedFields = TerunaSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { name, phone, gender, birth, sektor } = validatedFields.data;

  try {
    await prisma.teruna.create({
      data: {
        name,
        phone,
        gender,
        birth,
        sektor,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/teruna");
};

export const SaveJadwalIbadah = async (
  prevState: unknown,
  formData: FormData,
) => {
  const rawData = {
    place: formData.get("place"),
    ekaId: formData.get("ekaId"),
    dwiId: formData.get("dwiId"),
    date: formData.get("date"),
    time: formData.get("time"),
  };

  const validatedFields = JadwalIbadahSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { place, ekaId, dwiId, date, time } = validatedFields.data;

  try {
    await prisma.jadwalIbadah.create({
      data: {
        place,
        ekaId,
        dwiId,
        date,
        time,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/jadwal-ibadah");
};

// Delete
export const DeletePengurus = async (id: string) => {
  try {
    await prisma.pengurus.delete({
      where: { id },
    });
  } catch (error) {
    console.log();
  }

  revalidatePath("/admin/pengurus");
};
