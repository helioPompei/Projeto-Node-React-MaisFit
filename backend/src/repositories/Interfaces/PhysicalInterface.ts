import { PhysicalEvaluation, Prisma, User } from "@prisma/client";

export interface PhysicalInterface {
  create(
    data: Prisma.PhysicalEvaluationUncheckedCreateInput
  ): Promise<PhysicalEvaluation>;
  findUserById(id: string): Promise<User | null>;
  edit(data: PhysicalEvaluation): Promise<PhysicalEvaluation | null>;
}
