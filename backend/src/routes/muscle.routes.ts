import { createMuscle } from "@/controllers/muscle/createMuscle";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function muscleMeasurementRoutes(app: FastifyInstance) {
  app.post("/create", { onRequest: [verifyJWT] }, createMuscle);
}
