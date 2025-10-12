import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pengurus = await prisma.pengurus.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    return NextResponse.json(pengurus);
  } catch (error) {
    console.error("Error fetching pengurus:", error);
    return NextResponse.json(
      { error: "Failed to fetch pengurus" },
      { status: 500 },
    );
  }
}
