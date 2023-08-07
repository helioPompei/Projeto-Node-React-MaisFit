import { UserRepository } from "@/repositories/UserRepository";
import { GetProfileService } from "@/services/users/GetProfileService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const getOneProfile = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const userRepository = new UserRepository();
  const getProfileService = new GetProfileService(userRepository);

  const getOneProfileBodySchema = z.object({
    id: z.string(),
  });

  const { id } = getOneProfileBodySchema.parse(request.params);

  const { user } = await getProfileService.execute({
    userId: id,
  });

  return reply.status(200).send({
    user: {
      ...user,
      passwordHash: undefined,
    },
  });
};
