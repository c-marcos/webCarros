import { z } from "zod";

export const schemaRegister = z.object({
  nome: z.string().nonempty("O campo nome é obrigatório."),
  email: z
    .string()
    .nonempty("O campo email é obrigatório.")
    .email("Insira um email válido."),
  password: z
    .string()
    .nonempty("O campo email é obrigatório.")
    .min(6, "A senha tem que ter no minimo 6 caractere."),
});

export type FormRegister = z.infer<typeof schemaRegister>;
