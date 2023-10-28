import prisma from "@/src/app/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    date_of_birth,
    location,
    city,
    username,
    email,
    sexual_identity,
    sexual_preference,
    recial_preference,
    meeting_interests,
    hobbies_interests,
    about_me,
    password,
  } = body;

  try {
    const hashedPassword = await hash(password, 10);
    //validate email
    const existingUserByEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }
    const newUser = await prisma.users.create({
      data: {
        name,
        date_of_birth,
        location,
        city,
        username,
        email,
        sexual_identity,
        sexual_preference,
        recial_preference,
        meeting_interests,
        hobbies_interests,
        about_me,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Registration has been successfully completed", newUser },
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
