import { env } from "@/env";
import { PrismaClient } from "@prisma/client";

// Config to use logs if it's on dev environment 
export const prisma = new PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : [],
});
