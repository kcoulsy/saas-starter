import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginUser = z.infer<typeof loginUserSchema>;

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type RegisterUser = z.infer<typeof registerUserSchema>;
