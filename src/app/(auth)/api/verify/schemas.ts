import { z } from 'zod';

export const verifyPostInputSchema = z.object({
  email: z.string().email(),
});
