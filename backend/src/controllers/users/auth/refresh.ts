import { FastifyReply, FastifyRequest } from "fastify";

export const refresh = async (request: FastifyRequest, reply: FastifyReply) => {
  await request.jwtVerify({ onlyCookie: true });

  const { role } = request.user;

  const token = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
        expiresIn: "10s",
      },
    }
  );

  const refreshToken = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
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
};
