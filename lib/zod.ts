import { object, string } from "zod";
import { z } from "zod";

export const PengurusSchema = object({
  name: string().min(1, "Name at least 6 characters"),
  position: string().min(1, "Position at least 6 characters"),
  sektor: z.enum([
    "Sektor_1",
    "Sektor_2",
    "Sektor_3",
    "Sektor_4",
    "Sektor_5",
    "Sektor_6",
  ]),
});
