import jwt from "@fastify/jwt";
import fastify from "fastify";
import { ZodError } from "zod";
import { physicalEvaluationRoutes } from "./routes/physicalEvaluation.routes";
import { usersRoutes } from "./routes/users.routes";
import { env } from "./utils/env";

export const app = fastify();

// JWT
app.register(jwt, { secret: env.SECRET });

// All Routes
app.register(usersRoutes, { prefix: "/user" });
app.register(physicalEvaluationRoutes, { prefix: "/physical" });

// Error Handler
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: "Internal server error." });
});
