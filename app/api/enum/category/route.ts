import { Category } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const categoryValues = Object.values(Category);
  return NextResponse.json(categoryValues);
}
