import { UserRepository } from "@/repositories/UserRepository";
import { ProfileService } from "@/services/users/profileService";
import { FastifyReply, FastifyRequest } from "fastify";

export const profile = async (request: FastifyRequest, reply: FastifyReply) => {
  const userRepository = new UserRepository();
  const profileService = new ProfileService(userRepository);

  const { user } = await profileService.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({
    user: {
      ...user,
      passwordHash: undefined,
    },
  });
};
