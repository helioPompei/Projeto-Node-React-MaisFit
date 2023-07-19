import { MuscleReposity } from "@/repositories/MuscleRepository";
import { CreateMuscleService } from "@/services/muscle_measurement/CreateMuscle";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error";

export const createMuscle = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const createMuscleSchema = z.object({
    muscleName: z.string(),
    measurement: z.number().positive(),
    physicalEvaluationId: z.string(),
  });

  const { muscleName, measurement, physicalEvaluationId } =
    createMuscleSchema.parse(request.body);

  try {
    const muscleReposity = new MuscleReposity();
    const createMuscleService = new CreateMuscleService(muscleReposity);

    await createMuscleService.execute({
      muscleName,
      measurement,
      physicalEvaluationId,
    });

    return reply.status(201).send();
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: error.message });
    }

    throw error;
  }
};
