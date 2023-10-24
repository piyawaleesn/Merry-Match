import prisma from "../../lib/prisma.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const complaintId = Number(id);
    const complaintById = await prisma.complaints.findUnique({
      where: {
        id: complaintId,
      },
    });
    return NextResponse.json(complaintById);
  } catch (error) {
    console.log("Error to GET complaint by ID", error);
  }
}
