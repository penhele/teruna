import { prisma } from "@/lib/prisma";

export const getPengurus = async () => {
  try {
    const result = await prisma.pengurus.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getTeruna = async () => {
  try {
    const result = await prisma.teruna.findMany();
    return result;
  } catch (error) {
    console.log(error);
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
  }
};
