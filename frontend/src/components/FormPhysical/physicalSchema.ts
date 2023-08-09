import { z } from "zod";

export const physicalSchema = z.object({
  height: z.number().positive(),

  weight: z.number().positive(),

  imc: z.number().positive(),

  currentFat: z.number().positive(),

  idealFat: z.number().positive(),

  goal: z.string(),

  observation: z.string(),

  userId: z.string(),

  evaluationDate: z.string(),
});
