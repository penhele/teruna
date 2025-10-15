import { prisma } from "@/lib/prisma";

export const getPelayan = async () => {
  try {
    const result = await prisma.pelayan.findMany();
    return result;
  } catch (error) {
    console.error("Error fetching pelayan:", error);
    return [];
  }
};

export const getPelayanById = async (pelayanId: string) => {
  try {
    const result = await prisma.pelayan.findUnique({
      where: { id: pelayanId },
    });
    return result;
  } catch (error) {
    console.error("Error fetching pelayan by id:", error);
  }
};

export const getTeruna = async () => {
  try {
    const result = await prisma.teruna.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching teruna:", error);
    return [];
  }
};

export const getTerunaById = async (terunaId: string) => {
  try {
    const result = await prisma.teruna.findUnique({
      where: { id: terunaId },
    });
    return result;
  } catch (error) {
    console.error("Error fetching teruna by id:", error);
  }
};

export const getJadwalIbadah = async () => {
  try {
    const result = await prisma.jadwalIbadah.findMany({
      include: {
        eka: true,
        dwi: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getJadwalIbadahById = async (jadwalIbadahId: string) => {
  try {
    const result = await prisma.jadwalIbadah.findUnique({
      where: { id: jadwalIbadahId },
      include: {
        eka: true,
        dwi: true,
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching jadwal ibadah by id:", error);
    return null;
  }
};

export const getLatestJadwalIbadah = async () => {
  try {
    const result = await prisma.jadwalIbadah.findFirst({
      include: {
        eka: true,
        dwi: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    console.error("Error fetching latest jadwal ibadah:", error);
    return null;
  }
};
