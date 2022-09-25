import NextAuth, { type NextAuthOptions } from 'next-auth';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '../../../server/db/client';
import { verify } from '../../../server/utils/password';

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  session: { strategy: 'jwt' },
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
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { email, password } = credentials;

        try {
          const user = await prisma.credentialsAuth.findFirst({
            where: { email },
          });
          if (!user) throw new Error('User not found');

          const result = await verify(password, user.password);
          if (!result) throw new Error('Bad password');

          return { id: user.id, email: user.email };
        } catch (error) {
          throw new Error('Invalid Login');
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
