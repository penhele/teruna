-- Hapus constraint foreign key lama yang menunjuk ke tabel Pengurus
ALTER TABLE "JadwalIbadah" DROP CONSTRAINT "JadwalIbadah_ekaId_fkey";
ALTER TABLE "JadwalIbadah" DROP CONSTRAINT "JadwalIbadah_dwiId_fkey";

-- Ubah nama tabel Pengurus menjadi Pelayan (data tetap aman)
ALTER TABLE "Pengurus" RENAME TO "Pelayan";

-- Jika kolom ID tetap sama, kita hanya rename constraintnya juga agar konsisten
ALTER TABLE "Pelayan" RENAME CONSTRAINT "Pengurus_pkey" TO "Pelayan_pkey";

-- Tambahkan kembali foreign key constraint tapi arahkan ke tabel baru (Pelayan)
ALTER TABLE "JadwalIbadah"
ADD CONSTRAINT "JadwalIbadah_ekaId_fkey"
FOREIGN KEY ("ekaId") REFERENCES "Pelayan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "JadwalIbadah"
ADD CONSTRAINT "JadwalIbadah_dwiId_fkey"
FOREIGN KEY ("dwiId") REFERENCES "Pelayan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
