import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { UserInterface } from "./Interfaces/UserInterface";

export class UserRepository implements UserInterface {
  // Create user
  async create({ name, email, password_hash }: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });

    return user;
  }

  // Find user by E-mail
  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }
}
