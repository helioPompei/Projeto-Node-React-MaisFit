import { PhysicalRepository } from "@/repositories/PhysicalRepository";
import { GetAllPhysicalsByUserIdService } from "@/services/physical/GetAllPhysicalsByUserIdService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getAllPhysicalsByUserId = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const physicalRepository = new PhysicalRepository();
  const getAllPhysicalsByUserIdService = new GetAllPhysicalsByUserIdService(
    physicalRepository
  );
  const registerBodySchema = z.object({
    userId: z.string(),
  });

  const { userId } = registerBodySchema.parse(request.params);

  const { physicals } = await getAllPhysicalsByUserIdService.execute(userId);

  return reply.status(200).send({
    physicals,
  });
};
