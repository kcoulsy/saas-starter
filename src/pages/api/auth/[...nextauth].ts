import NextAuth, { type AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@src/server/db/client';
import { loginUser } from '@src/server/services/auth.service';

export const authOptions: AuthOptions = {
  // Include user.id on session
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1h
  },
  callbacks: {
    session({ session, user }) {
      if (session.user && user) {
        // eslint-disable-next-line no-param-reassign
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        return loginUser(credentials);
      },
    }),
  ],
};

export default NextAuth(authOptions);
