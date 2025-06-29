import { z } from "zod";

export const schemaLogin = z.object({
  email: z
    .string()
    .nonempty("O campo email é obrigatório.")
    .email("Insira um email válido."),
  password: z.string().nonempty("O campo Senha é obrigatório."),
});

export type FormLogin = z.infer<typeof schemaLogin>;
