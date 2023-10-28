import prisma from "@/src/app/lib/prisma";
import bcrypt, { hash } from "bcrypt";
import { NextResponse } from "next/server";

// export async function POST(req) {
//   const body = await req.json();
//   const {
//     // name,
//     // username,
//     email,
//     password,
//     // date_of_birth,
//     // location,
//     // city,
//     // sexual_identity,
//     // sexual_preference,
//     // recial_preference,
//     // meeting_interests,
//     // hobbies_interests,
//     // profile_image,
//     // role,
//   } = body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         // name,
//         // username,
//         email,
//         password: hashedPassword,
//         // date_of_birth,
//         // location,
//         // city,
//         // sexual_identity,
//         // sexual_preference,
//         // recial_preference,
//         // meeting_interests,
//         // hobbies_interests,
//         // profile_image,
//         // role: "user",
//       },
//     });

//     return NextResponse.json(
//       { message: "Register successfully", newUser },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.log("Register error", error);
//     return NextResponse.error({ error: "Failed to register" }, { status: 400 });
//   }
// }

export async function POST(request) {
  const body = await request.json();
  const { name, city, email, password } = body;

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
        city,
        email,
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

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email, password } = body;

//     const existingUserByEmail = await prisma.users.findUnique({
//       where: { email: email },
//     });
//     if (existingUserByEmail) {
//       return NextResponse.json(
//         { user: null, message: "User with this email already exists" },
//         { status: 409 }
//       );
//     }

//     const hashedPassword = await hash(password, 10);
//     const newUser = await prisma.users.create({
//       data: { email, password: hashedPassword },
//     });

//     return NextResponse.json(
//       { user: newUser, message: "User register successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error registering user", error);
//     return NextResponse.error({ error: "Failed to register" }, { status: 500 });
//   }
// }
