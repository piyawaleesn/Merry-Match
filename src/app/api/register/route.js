import prisma from "@/src/app/lib/prisma";
import { NextResponse } from "next/server";

export default async function POST(req) {
  try {
    const { email, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    // If the email is not in use, create a new user
    const newUser = await prisma.users.create({
      data: { email, password },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.error();
  }
}
