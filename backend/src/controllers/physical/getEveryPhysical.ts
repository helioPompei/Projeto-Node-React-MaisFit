import { PhysicalRepository } from "@/repositories/PhysicalRepository";
import { GetEveryPhysicalService } from "@/services/physical/GetEveryPhysicalService";
import { FastifyReply, FastifyRequest } from "fastify";

export const getEveryPhysical = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const physicalRepository = new PhysicalRepository();
  const getEveryPhysicalService = new GetEveryPhysicalService(
    physicalRepository
  );

  const { physicals } = await getEveryPhysicalService.execute();

  return reply.status(200).send({
    physicals,
  });
};
