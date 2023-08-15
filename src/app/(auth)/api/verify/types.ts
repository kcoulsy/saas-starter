import { ZodIssue, z } from 'zod';
import { verifyPostInputSchema } from './schemas';

export type VerifyPostInput = z.infer<typeof verifyPostInputSchema>;

export interface VerifyPostSuccessResponse {
  success: boolean;
}

export interface VerifyPostErrorResponse {
  error: string | ZodIssue[];
}
