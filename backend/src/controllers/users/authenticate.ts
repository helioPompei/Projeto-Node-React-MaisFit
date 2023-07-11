import { UserRepository } from "@/repositories/UserRepository";
import { AuthenticateService } from "@/services/users/AuthenticateService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { InvalidCredentials } from "../errors/invalid-credentials-error";

export const authenticate = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(request.body);

  try {
    const userRepository = new UserRepository();
    const authenticateService = new AuthenticateService(userRepository);

    const { user } = await authenticateService.execute({
      email,
      password,
    });

    const token = await reply.jwtSign({
      sign: {
        sub: user.id,
      },
    });

    return reply.status(200).send({
      token,
    });
  } catch (error) {
    if (error instanceof InvalidCredentials) {
      return reply.status(400).send({ message: error.message });
    }

    throw error;
  }
};