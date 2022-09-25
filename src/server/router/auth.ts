import { z } from 'zod';
import { MIN_PASSWORD_LENGTH } from '../../constants/auth';
import { hash } from '../utils/password';
import { createRouter } from './context';

export const authRouter = createRouter().mutation('createUser', {
  input: z.object({
    email: z.string().email(),
    password: z.string().min(MIN_PASSWORD_LENGTH),
  }),
  resolve: async ({ input: { email, password }, ctx: { prisma } }) => {
    try {
      const existingEmail = await prisma.credentialsAuth.findFirst({ where: { email } });

      if (existingEmail) throw new Error('Email Exists');
      // TODO vaidat password with schema

      let hashedPassword: string;

      try {
        hashedPassword = await hash(password);
      } catch (error) {
        throw new Error('Password Error');
      }

      await prisma.credentialsAuth.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return { success: true };
    } catch (error) {
      throw new Error('Unable to create user');
    }
  },
});
