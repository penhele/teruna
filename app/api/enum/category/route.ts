import { NextResponse } from "next/server";
import { Category } from "@prisma/client";

export async function GET() {
  const categoryValues = ["Pengurus", "Pelayan"] as const;
  return NextResponse.json(categoryValues);
}
