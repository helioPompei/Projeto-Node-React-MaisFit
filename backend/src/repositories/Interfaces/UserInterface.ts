import { Prisma, User } from "@prisma/client";

export interface UserInterface {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
}
