import NextAuth, { type NextAuthOptions } from 'next-auth';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '../../../server/db/client';
import { loginUser } from '../../../server/services/auth.service';

export const authOptions: NextAuthOptions = {
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
  // adapter: PrismaAdapter(prisma),
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
