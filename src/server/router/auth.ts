import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '../../constants/auth';
import { registerUser } from '../services/auth.service';
import { createRouter } from './context';

export const authRouter = createRouter().mutation('createUser', {
  input: z.object({
    email: z.string().email(),
    password: z.string().min(MIN_PASSWORD_LENGTH),
  }),
  resolve: async ({ input: { email, password } }) => {
    return registerUser({ email, password });
  },
});
