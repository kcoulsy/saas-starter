import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '@src/constants/auth';

import { registerUser } from '@src/server/services/auth.service';
import { resendVerificationEmail } from '@src/server/services/verification.service';
import { router, publicProcedure } from '../trpc';

export const authRouter = router({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(MIN_PASSWORD_LENGTH),
      }),
    )
    .mutation((req) => {
      const {
        input: { email, password },
      } = req;
      return registerUser({ email, password });
    }),
  verifyUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async (req) => {
      const {
        input: { email },
      } = req;
      await resendVerificationEmail(email);
      return { success: true };
    }),
});
