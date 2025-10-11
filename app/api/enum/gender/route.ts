import { NextResponse } from "next/server";
import { Gender } from "@prisma/client";

export async function GET() {
  const genderValues = Object.values(Gender);
  return NextResponse.json(genderValues);
}
