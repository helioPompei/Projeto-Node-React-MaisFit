import { prisma } from "@/utils/lib/prisma";
import { PhysicalEvaluation, Prisma } from "@prisma/client";
import { PhysicalInterface } from "./Interfaces/PhysicalInterface";

export class PhysicalRepository implements PhysicalInterface {
  // Create Physical Evaluation
  async create(data: Prisma.PhysicalEvaluationUncheckedCreateInput) {
    const physicalEvaluation = await prisma.physicalEvaluation.create({
      data,
    });

    return physicalEvaluation;
  }

  // Edit Physical Evaluation
  async edit(data: PhysicalEvaluation) {
    const physicalEvaluation = await prisma.physicalEvaluation.update({
      where: {
        id: data.id,
      },
      data,
    });

    return physicalEvaluation;
  }

  // Find Every Physical in the Application
  async findEveryRepositoy() {
    const physicals = await prisma.physicalEvaluation.findMany();

    return physicals;
  }

  // Find User by Id
  async findUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }
}
