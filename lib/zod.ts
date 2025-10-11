import { object, string, z } from "zod";

export const PengurusSchema = object({
  name: string()
    .min(6, "Nama harus memiliki minimal 6 karakter. ")
    .refine((val) => val.trim().length > 0, {
      message: "Nama wajib diisi",
    }),

  // 2️⃣ Phone
  phone: string()
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka. ")
    .min(8, "Nomor telepon harus minimal 8 digit"),

  // 3️⃣ Birth
  birth: string()
    .min(1, "Tanggal lahir wajib diisi. ")
    .refine((val) => val.trim().length > 0, {
      message: "Tanggal lahir tidak boleh kosong",
    }),

  // 4️⃣ Category
  category: z
    .enum(["Pengurus", "Pelayan"], {
      message: "Kategori tidak valid",
    })
    .refine((val) => val.length > 0, {
      message: "Kategori wajib diisi",
    }),

  // 5️⃣ Position
  position: string().optional().default(""),

  // 6️⃣ Sektor
  sektor: z.enum(
    ["Sektor_1", "Sektor_2", "Sektor_3", "Sektor_4", "Sektor_5", "Sektor_6"],
    {
      message: "Sektor tidak valid",
    },
  ),
})
  // 7️⃣ Validasi bersyarat: position wajib diisi jika category diisi
  .refine(
    (data) => {
      if (data.category === "Pengurus" && data.position.trim().length === 0)
        return false;
      return true;
    },
    {
      message: "Jabatan wajib diisi jika kategori dipilih",
      path: ["position"],
    },
  );

export const TerunaSchema = object({
  name: string()
    .min(6, "Nama harus memiliki minimal 6 karakter. ")
    .refine((val) => val.trim().length > 0, {
      message: "Nama wajib diisi",
    }),

  // 2️⃣ Phone
  phone: string()
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka. ")
    .min(8, "Nomor telepon harus minimal 8 digit"),

  // 6️⃣ Gender
  gender: z.enum(["Lakilaki", "Perempuan"], {
    message: "Gender tidak valid",
  }),

  // 3️⃣ Birth
  birth: string()
    .min(1, "Tanggal lahir wajib diisi. ")
    .refine((val) => val.trim().length > 0, {
      message: "Tanggal lahir tidak boleh kosong",
    }),

  // 6️⃣ Sektor
  sektor: z.enum(
    ["Sektor_1", "Sektor_2", "Sektor_3", "Sektor_4", "Sektor_5", "Sektor_6"],
    {
      message: "Sektor tidak valid",
    },
  ),
});
