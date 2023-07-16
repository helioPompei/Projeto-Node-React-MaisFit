import { createPhysicalEvaluation } from "@/controllers/physical/createPhysical";
import { editPhysicalEvaluation } from "@/controllers/physical/editPhysical";
import { getEveryPhysical } from "@/controllers/physical/getEveryPhysical";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";

export async function physicalEvaluationRoutes(app: FastifyInstance) {
  app.post("/create", { onRequest: [verifyJWT] }, createPhysicalEvaluation);
  app.put("/update", { onRequest: [verifyJWT] }, editPhysicalEvaluation);
  app.get("/every", { onRequest: [verifyJWT] }, getEveryPhysical);
}
