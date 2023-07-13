import { verifyJWT } from "@/middlewares/verify-jwt";
import { FastifyInstance } from "fastify";
import { allProfile } from "./allProfile";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { register } from "./register";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/login", authenticate);
  app.get("/profile", { onRequest: [verifyJWT] }, profile);
  app.get("/profiles", { onRequest: [verifyJWT] }, allProfile);
}
