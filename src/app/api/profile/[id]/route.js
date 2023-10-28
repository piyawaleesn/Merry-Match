import { NextResponse } from "next/server";
import prisma from "@/src/app/lib/prisma";

export async function GET(request) {
  try {
    const id = request.url.split("profile/")[1];

    const profile = await prisma.users.findUnique({
      where: { id: parseInt(id) },
    });

    if (profile) {
      return NextResponse.json(
        { message: `Complete fetching user Id: ${id}`, profile },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Profile not found" },
        {
          status: 404,
        }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: err.message },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request) {
  try {
    const { name, city } = await request.json();
    const id = request.url.split("profile/")[1];

    const updatedProfile = await prisma.users.update({
      where: { id: parseInt(id) },
      data: { name, city },
    });

    return NextResponse.json(
      { message: "OK", updatedProfile },
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
