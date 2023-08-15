import { ZodIssue, z } from 'zod';
import { registerPostInputSchema } from './schemas';

export type RegisterPostInput = z.infer<typeof registerPostInputSchema>;

export interface RegisterPostSuccessResponse {
  success: boolean;
}

export interface RegisterPostErrorResponse {
  error: string | ZodIssue[];
}
