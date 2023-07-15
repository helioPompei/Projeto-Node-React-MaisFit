import { MuscleMeasurement, Prisma } from "@prisma/client";

export interface MuscleInterface {
  create(
    data: Prisma.MuscleMeasurementUncheckedCreateInput
  ): Promise<MuscleMeasurement>;
}
