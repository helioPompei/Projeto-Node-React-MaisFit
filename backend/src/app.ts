import fastifyCookie from "@fastify/cookie";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import { ZodError } from "zod";
import { muscleMeasurementRoutes } from "./routes/muscle.routes";
import { physicalEvaluationRoutes } from "./routes/physical.routes";
import { usersRoutes } from "./routes/users.routes";
import { env } from "./utils/env";

export const app = fastify();

// Solve cors
app.register(cors, {
  origin: true,
  credentials: true,
});

// JWT
app.register(jwt, {
  secret: env.SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false, // Not Hashed
  },
  sign: {
    expiresIn: '10s'
  }
});

// Cookie
app.register(fastifyCookie);

// All Routes
app.register(usersRoutes, { prefix: "/user" });
app.register(physicalEvaluationRoutes, { prefix: "/physical" });
app.register(muscleMeasurementRoutes, { prefix: "/muscle" });

// Error Handler
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  return reply.status(500).send({ message: "Internal server error." });
});
