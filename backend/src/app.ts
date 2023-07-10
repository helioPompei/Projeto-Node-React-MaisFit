import fastify from "fastify";
import { usersRoutes } from "./controllers/users/routes";
import { ZodError } from "zod";

export const app = fastify();

// All Routes
app.register(usersRoutes);

// Error Handler
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: "Internal server error." });
});
