import { Prisma, User } from "@prisma/client";

export interface UserInterface {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  getAllUsersProfiles(): Promise<{ id: string; name: string }[] | null>;
}
