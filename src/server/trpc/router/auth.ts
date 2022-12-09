import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '@src/constants/auth';

import { registerUser } from '@src/server/services/auth.service';
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
});
