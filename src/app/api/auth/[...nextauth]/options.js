import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/src/app/lib/prisma";
import bcrypt from "bcrypt";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectedPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isCorrectedPassword) {
          throw new Error("Invalid credentials");
        }
        const authorizedUser = {
          id: user.id,
          email: user.email,
          password: user.password,
        };
        return authorizedUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      throw new Error("Invalid credentials");
    }
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user || !user?.password) {
      throw new Error("Invalid credentials");
    }

    const isCorrectedPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isCorrectedPassword) {
      throw new Error("Invalid credentials");
    }
    const authorizedUser = {
      id: user.id,
      email: user.email,
      password: user.password,
    };
    return authorizedUser;
  },

  session: {
    strategy: "jwt",
  },
};
