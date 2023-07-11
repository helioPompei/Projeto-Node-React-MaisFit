import jwt from "@fastify/jwt";
import fastify from "fastify";
import { ZodError } from "zod";
import { usersRoutes } from "./controllers/users/routes";
import { env } from "./env";

export const app = fastify();

// All Routes
app.register(usersRoutes);

// JWT
app.register(jwt, { secret: env.SECRET });

// Error Handler
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: "Internal server error." });
});
