import { UserRepository } from "@/repositories/UserRepository";
import { GetAllUsersProfiles } from "@/services/users/GetAllProfileService";
import { FastifyReply, FastifyRequest } from "fastify";

export const getAllProfile = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const userRepository = new UserRepository();
  const getAllUsersProfiles = new GetAllUsersProfiles(userRepository);

  const { users } = await getAllUsersProfiles.execute();

  return reply.status(200).send({
    users,
  });
};
