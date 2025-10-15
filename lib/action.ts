"use server";

import { prisma } from "@/lib/prisma";
import {
  JadwalIbadahSchema,
  KegiatanSchema,
  PelayanSchema,
  TerunaSchema,
} from "./zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const SavePelayan = async (prevState: unknown, formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    nickname: formData.get("nickname"),
    phone: formData.get("phone")?.toString() || "",
    birth: formData.get("birth"),
    category: formData.get("category"),
    position: formData.get("position"),
    sektor: formData.get("sektor"),
  };

  const validatedFields = PelayanSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { name, nickname, phone, birth, category, position, sektor } =
    validatedFields.data;

  try {
    await prisma.pelayan.create({
      data: {
        name,
        nickname,
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

  redirect("/dashboard/pelayan");
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

export const SaveKegiatan = async (
  image: string,
  prevState: unknown,
  formData: FormData,
) => {
  if (!image) return { message: "Image is Required" };

  const rawData = {
    title: formData.get("title"),
    alt: formData.get("alt"),
  };

  const validatedFields = KegiatanSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { title, alt } = validatedFields.data;

  try {
    await prisma.kegiatan.create({
      data: {
        image,
        title,
        alt,
      },
    });
  } catch (error) {
    console.log(error);
  }

  redirect("/dashboard/kegiatan");
};

// Delete
export const DeleteKegiatan = async (id: string) => {
  try {
    await prisma.kegiatan.delete({
      where: { id },
    });
  } catch (error) {
    console.log();
  }

  revalidatePath("/admin/kegiatan");
};

export const DeletePengurus = async (id: string) => {
  try {
    await prisma.pelayan.delete({
      where: { id },
    });
  } catch (error) {
    console.log();
  }

  revalidatePath("/admin/pelayan");
};

export const DeleteJadwalIbadahWithId = async (id: string) => {
  try {
    await prisma.jadwalIbadah.delete({
      where: { id },
    });
  } catch (error) {
    console.log();
  }

  revalidatePath("/admin/jadwal-ibadah");
};

export const DeleteTerunaWithId = async (id: string) => {
  try {
    await prisma.teruna.delete({
      where: { id },
    });
  } catch (error) {
    console.log();
  }

  revalidatePath("/admin/jadwal-ibadah");
};

// Update
export const UpdatePelayan = async (
  pelayanId: string,
  prevState: unknown,
  formData: FormData,
) => {
  const rawData = {
    name: formData.get("name"),
    nickname: formData.get("nickname"),
    phone: formData.get("phone")?.toString() || "",
    birth: formData.get("birth"),
    category: formData.get("category"),
    position: formData.get("position"),
    sektor: formData.get("sektor"),
  };

  const validatedFields = PelayanSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { name, nickname, phone, birth, category, position, sektor } =
    validatedFields.data;

  try {
    await prisma.pelayan.update({
      where: { id: pelayanId },
      data: {
        name,
        nickname,
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

  revalidatePath("/dashboard/pelayan");
  redirect("/dashboard/pelayan");
};

export const UpdateJadwalIbadah = async (
  jadwalibadahId: string,
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
    await prisma.jadwalIbadah.update({
      where: { id: jadwalibadahId },
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

  revalidatePath("/dashboard/jadwal-ibadah");
  redirect("/dashboard/jadwal-ibadah");
};

export const UpdateTeruna = async (
  terunaId: string,
  prevState: unknown,
  formData: FormData,
) => {
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
    await prisma.teruna.update({
      where: { id: terunaId },
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

  revalidatePath("/dashboard/teruna");
  redirect("/dashboard/teruna");
};
