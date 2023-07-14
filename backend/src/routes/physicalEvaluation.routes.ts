import { createPhysicalEvaluation } from "@/controllers/physical_evaluation/createPhysicalEvaluation";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function physicalEvaluationRoutes(app: FastifyInstance) {
  app.post("/create", { onRequest: [verifyJWT] }, createPhysicalEvaluation);
}
