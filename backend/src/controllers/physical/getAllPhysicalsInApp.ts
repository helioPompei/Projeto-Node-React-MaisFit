import { PhysicalRepository } from "@/repositories/PhysicalRepository";
import { GetAllPhysicalsInAppService } from "@/services/physical/GetAllPhysicalsInAppService";
import { FastifyReply, FastifyRequest } from "fastify";

export const getAllPhysicalsInApp = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const physicalRepository = new PhysicalRepository();
  const getAllPhysicalsInAppService = new GetAllPhysicalsInAppService(
    physicalRepository
  );

  const { physicals } = await getAllPhysicalsInAppService.execute();

  return reply.status(200).send({
    physicals,
  });
};
