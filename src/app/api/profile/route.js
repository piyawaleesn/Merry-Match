import prisma from "@/src/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const profiles = await prisma.users.findMany();

    return NextResponse.json(
      { message: "Complete fetching profile", profiles },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: err.message },
      {
        status: 500,
      }
    );
  }
}
