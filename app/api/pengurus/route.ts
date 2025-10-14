import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pelayan = await prisma.pelayan.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    return NextResponse.json(pelayan);
  } catch (error) {
    console.error("Error fetching pelayan:", error);
    return NextResponse.json(
      { error: "Failed to fetch pelayan" },
      { status: 500 },
    );
  }
}
