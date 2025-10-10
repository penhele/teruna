import { NextResponse } from "next/server";
import { Sektor } from "@prisma/client";

export async function GET() {
  const sektorValues = Object.values(Sektor);
  return NextResponse.json(sektorValues);
}
