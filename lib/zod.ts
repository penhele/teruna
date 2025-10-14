import { object, string, z } from "zod";

export const PelayanSchema = object({
  // Name
  name: string().refine((val) => val.trim().length > 0, {
    message: "Nama wajib diisi",
  }),

  // Nickaname
  nickname: string().refine((val) => val.trim().length > 0, {
    message: "Nickname wajib diisi",
  }),

  // Phone
  phone: string()
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka. ")
    .min(8, "Nomor telepon harus minimal 8 digit"),

  // Birth
  birth: string()
    .min(1, "Tanggal lahir wajib diisi. ")
    .refine((val) => val.trim().length > 0, {
      message: "Tanggal lahir tidak boleh kosong",
    }),

  // Category
  category: z
    .enum(["Pengurus", "Pelayan"], {
      message: "Kategori tidak valid",
    })
    .refine((val) => val.length > 0, {
      message: "Kategori wajib diisi",
    }),

  // Position
  position: string().optional().default(""),

  // Sektor
  sektor: z.enum(
    ["Sektor_1", "Sektor_2", "Sektor_3", "Sektor_4", "Sektor_5", "Sektor_6"],
    {
      message: "Sektor tidak valid",
    },
  ),
})
  // Validasi bersyarat: position wajib diisi jika category diisi
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
  name: string().refine((val) => val.trim().length > 0, {
    message: "Nama wajib diisi",
  }),

  // Phone
  phone: string()
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka. ")
    .min(8, "Nomor telepon harus minimal 8 digit"),

  // Gender
  gender: z.enum(["Lakilaki", "Perempuan"], {
    message: "Gender tidak valid",
  }),

  // Birth
  birth: string()
    .min(1, "Tanggal lahir wajib diisi. ")
    .refine((val) => val.trim().length > 0, {
      message: "Tanggal lahir tidak boleh kosong",
    }),

  // Sektor
  sektor: z.enum(
    ["Sektor_1", "Sektor_2", "Sektor_3", "Sektor_4", "Sektor_5", "Sektor_6"],
    {
      message: "Sektor tidak valid",
    },
  ),
});

export const JadwalIbadahSchema = object({
  // Tempat Ibadah
  place: string()
    .min(3, "Tempat ibadah harus memiliki minimal 3 karakter.")
    .refine((val) => val.trim().length > 0, {
      message: "Tempat ibadah wajib diisi.",
    }),

  // Pelayan Firman (EKA)
  ekaId: string().min(1, "Pelayan Firman (EKA) wajib dipilih."),

  // Pelayan Firman (DWI)
  dwiId: string().min(1, "Pelayan Firman (DWI) wajib dipilih."),

  // Tanggal Ibadah
  date: string()
    .min(1, "Tanggal ibadah wajib diisi.")
    .refine((val) => val.trim().length > 0, {
      message: "Tanggal ibadah tidak boleh kosong.",
    }),

  // Waktu Ibadah
  time: string()
    .regex(
      /^([0-1]\d|2[0-3]):([0-5]\d)$/,
      "Format waktu tidak valid (gunakan HH:mm).",
    )
    .refine((val) => val.trim().length > 0, {
      message: "Waktu ibadah wajib diisi.",
    }),
});
