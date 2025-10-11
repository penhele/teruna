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
  const date = new Date(dateStr);
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
