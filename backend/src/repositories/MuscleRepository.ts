import { prisma } from "@/utils/lib/prisma";
import { Prisma } from "@prisma/client";
import { MuscleInterface } from "./Interfaces/MuscleInterface";

export class MuscleReposity implements MuscleInterface {
  // Create Muscle Measurement
  async create(data: Prisma.MuscleMeasurementUncheckedCreateInput) {
    const muscleMeasurement = await prisma.muscleMeasurement.create({
      data,
    });

    return muscleMeasurement;
  }

  // Find Physical Evaluation by Id
  async physicalEvaluationById(id: string) {
    const physicalEvaluation = await prisma.physicalEvaluation.findUnique({
      where: { id },
    });

    return physicalEvaluation;
  }
}
