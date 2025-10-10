import { Sektor } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const sektorValues = Object.values(Sektor);
  return NextResponse.json(sektorValues);
}
