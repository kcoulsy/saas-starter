import NextAuth, { type AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginUser } from '@src/server/services/auth.service';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1h
  },
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
