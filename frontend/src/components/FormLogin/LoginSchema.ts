import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  password: z
    .string()
    .nonempty("Senha obrigatória")
    .min(6, "A senha precisa ter no minimo 6 caracteres"),
});
