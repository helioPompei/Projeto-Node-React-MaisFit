import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { authenticate } from "../controllers/users/auth/authenticate";
import { register } from "../controllers/users/auth/register";
import { getAllProfile } from "../controllers/users/getAllProfile";
import { getProfile } from "../controllers/users/getProfile";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/login", authenticate);
  app.get("/profile", { onRequest: [verifyJWT] }, getProfile);
  app.get("/profiles", { onRequest: [verifyJWT] }, getAllProfile);
}
