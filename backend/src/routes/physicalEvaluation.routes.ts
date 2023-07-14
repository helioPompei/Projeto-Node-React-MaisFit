import { createPhysicalEvaluation } from "@/controllers/physical_evaluation/createPhysical";
import { editPhysicalEvaluation } from "@/controllers/physical_evaluation/editPhysical";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function physicalEvaluationRoutes(app: FastifyInstance) {
  app.post("/create", { onRequest: [verifyJWT] }, createPhysicalEvaluation);
  app.put("/update", { onRequest: [verifyJWT] }, editPhysicalEvaluation);
}
