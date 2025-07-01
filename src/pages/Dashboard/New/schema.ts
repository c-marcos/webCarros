import {z} from 'zod'


export const schemaNewCar = z.object({
  imagem: z.any().refine((file) => file instanceof File || file?.length > 0, {
    message: "Imagem obrigatória",
  }),
  nome: z.string().nonempty('Campo obrigátoria'),
  modelo: z.string().nonempty('Campo obrigátoria'),
  ano: z.string().nonempty('Campo obrigátoria'),
  km: z.string().nonempty('Campo obrigátoria'),
  valor: z.string().nonempty('Campo obrigátoria'),
  cidade: z.string().nonempty('Campo obrigátoria'),
  whats: z.string().nonempty('Campo obrigátoria'),
  descricao: z.string().nonempty('Campo obrigátoria')
}) 


export const fieldsNewCar = [
  { nome: 'nome', tipo: 'text', label: 'Nome do carro' },
  { nome: 'modelo', tipo: 'text', label: 'Modelo' },
  { nome: 'ano', tipo: 'text', label: 'Ano' },
  { nome: 'km', tipo: 'text', label: 'Km rodados' },
  { nome: 'valor', tipo: 'text', label: 'Valor em R$' },
  { nome: 'cidade', tipo: 'text', label: 'Cidade' },
  { nome: 'whats', tipo: 'text', label: 'WhatsApp' },
];




export type TypeNewCar = z.infer<typeof schemaNewCar>; 


