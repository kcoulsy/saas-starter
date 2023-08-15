import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '@src/constants/auth';

export const registerPostInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD_LENGTH),
});
