import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { UserInterface } from "./Interfaces/UserInterface";

export class UserRepository implements UserInterface {
  // Create user
  async create({ name, email, passwordHash }: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
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

  // Find user by Id
  async findUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }
}
