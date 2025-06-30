import {string, z} from 'zod'


export const schemaNewCar = z.object({
  imagem: string().nonempty('Campo obrigátoria.'),
  nome: string().nonempty('Campo obrigátoria'),
  modelo: string().nonempty('Campo obrigátoria'),
  ano: string().nonempty('Campo obrigátoria'),
  km: string().nonempty('Campo obrigátoria'),
  valor: string().nonempty('Campo obrigátoria'),
  cidade: string().nonempty('Campo obrigátoria'),
  whats: string().nonempty('Campo obrigátoria'),
  descricao: string().nonempty('Campo obrigátoria')
}) 


export const fieldsNewCar = [
  { nome: 'imagem', tipo: 'string' },
  { nome: 'nome', tipo: 'string' },
  { nome: 'modelo', tipo: 'string' },
  { nome: 'ano', tipo: 'string' },
  { nome: 'km', tipo: 'string' },
  { nome: 'valor', tipo: 'string' },
  { nome: 'cidade', tipo: 'string' },
  { nome: 'whats', tipo: 'string' },
  { nome: 'descricao', tipo: 'string' }
];



export type TypeNewCar = z.infer<typeof schemaNewCar>; 