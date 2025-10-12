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

export const formatDate = (dateStr: string) => {
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
    // fallback: biarkan JS parse sendiri
    date = new Date(dateStr);
  }

  if (Number.isNaN(date.getTime())) return "";

  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  });

  return formatter.format(date);
};

export const formatGender = (gender: string) => {
  if (gender === "Lakilaki") {
    return gender.slice(0, 4) + "-" + gender.slice(4);
  }
  return gender;
};
