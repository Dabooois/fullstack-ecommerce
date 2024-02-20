// src/schemas/userSchemas.ts
import { z } from 'zod';

export const UserRegistrationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18, 'The age must 18 years old and above')
});

export const userLoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});


export type TUser = {
  id: string,
  username: string
  email: string
  roles: string[]
}

export type TUserRegistration = z.infer<typeof UserRegistrationSchema>