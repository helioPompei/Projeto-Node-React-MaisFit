import { UserRepository } from "@/repositories/UserRepository";
import { GetProfileService } from "@/services/users/GetProfileService";
import { FastifyReply, FastifyRequest } from "fastify";

export const getProfile = async (request: FastifyRequest, reply: FastifyReply) => {
  const userRepository = new UserRepository();
  const getProfileService = new GetProfileService(userRepository);

  const { user } = await getProfileService.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({
    user: {
      ...user,
      passwordHash: undefined,
    },
  });
};
