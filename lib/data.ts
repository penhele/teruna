import { prisma } from "@/lib/prisma";

export const getPengurus = async () => {
  try {
    const result = await prisma.pengurus.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};
