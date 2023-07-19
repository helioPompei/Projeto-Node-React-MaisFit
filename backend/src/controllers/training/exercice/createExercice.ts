import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const createExercice = (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const createExerciceSchema = z.object({
    muscleName: z.string(),
    measurement: z.number().positive(),
  });

  const { muscleName, measurement } = createExerciceSchema.parse(request.body);

  try {
  } catch (error) {}
};
