import { Prisma, PhysicalEvaluation, User } from "@prisma/client";

export interface PhysicalEvaluationInterface {
  create(
    data: Prisma.PhysicalEvaluationUncheckedCreateInput
  ): Promise<PhysicalEvaluation>;
  findUserById(id: string): Promise<User | null>;
  edit(data: PhysicalEvaluation): Promise<PhysicalEvaluation | null>;
}
