import { UserRepository } from "@/repositories/UserRepository";
import { AuthenticateService } from "@/services/users/auth/AuthenticateService";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { InvalidCredentials } from "../../errors/invalid-credentials-error";

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

    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: "10s",
        },
      }
    );

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: "7d",
        },
      }
    );

    return reply
      .setCookie("refreshToken", refreshToken, {
        path: "/", // All backend can access the coockie value
        secure: true, // HTTPs encryption
        sameSite: true, // Only accessible inside the same Site
        httpOnly: true, // Only accessible in the BE
      })
      .status(200)
      .send({
        token,
      });
  } catch (error) {
    if (error instanceof InvalidCredentials) {
      return reply.status(400).send({ message: error.message });
    }

    throw error;
  }
};
