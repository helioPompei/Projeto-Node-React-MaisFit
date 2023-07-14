import { PhysicalEvaluationRepository } from "@/repositories/PhysicalEvaluationRepository";
import { EditPhysicalService } from "@/services/physical_evaluation/EditPhysicalService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserNotFound } from "../errors/user-not-found-error";

export const editPhysicalEvaluation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const createPhysicalEvaluationSchema = z.object({
    id: z.string(),
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
    id,
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
    const editPhysicalService = new EditPhysicalService(
      physicalEvaluationRepository
    );

    await editPhysicalService.execute({
      id,
      evaluationDate,
      height,
      weight,
      imc,
      currentFat,
      idealFat,
      goal,
      observation: observation ? observation : null,
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
