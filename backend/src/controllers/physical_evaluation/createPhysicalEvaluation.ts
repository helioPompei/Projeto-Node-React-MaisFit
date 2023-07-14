import { PhysicalEvaluationRepository } from "@/repositories/PhysicalEvaluationRepository";
import { CreatePhysicalEvaluationService } from "@/services/physical_evaluation/createPhysicalEvaluationService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserNotFound } from "../errors/user-not-found-error";

export const createPhysicalEvaluation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const createPhysicalEvaluationSchema = z.object({
    evaluationDate: z.string().pipe(z.coerce.date()),
    height: z.number().positive(),
    weight: z.number().positive(),
    imc: z.number().positive(),
    currentFat: z.number().positive(),
    idealFat: z.number().positive(),
    goal: z.string(),
    observation: z.string().optional(),
    userId: z.string(),
  });

  const {
    evaluationDate,
    height,
    weight,
    imc,
    currentFat,
    idealFat,
    goal,
    observation,
    userId,
  } = createPhysicalEvaluationSchema.parse(request.body);

  try {
    const physicalEvaluationRepository = new PhysicalEvaluationRepository();
    const createPhysicalEvaluationService = new CreatePhysicalEvaluationService(
      physicalEvaluationRepository
    );

    await createPhysicalEvaluationService.execute({
      evaluationDate,
      height,
      weight,
      imc,
      currentFat,
      idealFat,
      goal,
      observation,
      userId,
    });
  } catch (error) {
    if (error instanceof UserNotFound) {
      return reply.status(409).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
};
