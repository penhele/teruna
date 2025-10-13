import { prisma } from "@/lib/prisma";

export const getPengurus = async () => {
  try {
    const result = await prisma.pengurus.findMany();
    return result;
  } catch (error) {
    console.error("Error fetching pengurus:", error);
    return [];
  }
};

export const getTeruna = async () => {
  try {
    const result = await prisma.teruna.findMany();
    return result;
  } catch (error) {
    console.error("Error fetching teruna:", error);
    return [];
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
