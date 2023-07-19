import { createMuscle } from "@/controllers/physical/muscle/createMuscle";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { verifyUserRole } from "@/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";

export async function muscleMeasurementRoutes(app: FastifyInstance) {
  app.post(
    "/create",
    { onRequest: [verifyJWT, verifyUserRole("ADMIN")] },
    createMuscle
  );
}
