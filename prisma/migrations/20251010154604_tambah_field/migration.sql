/*
  Warnings:

  - Added the required column `birth` to the `Pengurus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Pengurus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Pengurus` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Pengurus', 'Pelayan');

-- AlterTable
ALTER TABLE "Pengurus" ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
