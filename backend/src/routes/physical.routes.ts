import { createPhysicalEvaluation } from "@/controllers/physical/createPhysical";
import { editPhysicalEvaluation } from "@/controllers/physical/editPhysical";
import { getAllPhysicalsInApp } from "@/controllers/physical/getAllPhysicalsInApp";
import { getAllPhysicalsByUserId } from "@/controllers/physical/getAllPhysicalsByUserId";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function physicalEvaluationRoutes(app: FastifyInstance) {
  app.post("/create", { onRequest: [verifyJWT] }, createPhysicalEvaluation);
  app.put("/update", { onRequest: [verifyJWT] }, editPhysicalEvaluation);
  app.get("/all/:userId", { onRequest: [verifyJWT] }, getAllPhysicalsByUserId);
  app.get("/all", { onRequest: [verifyJWT] }, getAllPhysicalsInApp);
}
