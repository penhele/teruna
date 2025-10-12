-- CreateTable
CREATE TABLE "JadwalIbadah" (
    "id" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "ekaId" TEXT,
    "dwiId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JadwalIbadah_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JadwalIbadah" ADD CONSTRAINT "JadwalIbadah_ekaId_fkey" FOREIGN KEY ("ekaId") REFERENCES "Pengurus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalIbadah" ADD CONSTRAINT "JadwalIbadah_dwiId_fkey" FOREIGN KEY ("dwiId") REFERENCES "Pengurus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
