import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatSektor = (sektor: string) => {
  if (!sektor) return "";
  return sektor
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatDate = (
  dateStr: string,
  dateStyle: "full" | "long" | "medium" | "short" = "medium",
): string => {
  if (!dateStr) return "";

  let date: Date;

  if (dateStr.includes("-")) {
    // format "yyyy-mm-dd"
    const [year, month, day] = dateStr.split("-").map(Number);
    date = new Date(year, month - 1, day);
  } else if (dateStr.includes("/")) {
    // format "dd/mm/yyyy"
    const [day, month, year] = dateStr.split("/").map(Number);
    date = new Date(year, month - 1, day);
  } else {
    // fallback: biarkan JS parse
    date = new Date(dateStr);
  }

  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("id-ID", { dateStyle }).format(date);
};

export const formatGender = (gender: string) => {
  if (gender === "Lakilaki") {
    return gender.slice(0, 4) + "-" + gender.slice(4);
  }
  return gender;
};

export const formatAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Jika bulan atau hari belum lewat di tahun ini, umur dikurangi 1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};
