-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Lakilaki', 'Perempuan');

-- CreateTable
CREATE TABLE "Teruna" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "sektor" "Sektor" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teruna_pkey" PRIMARY KEY ("id")
);
