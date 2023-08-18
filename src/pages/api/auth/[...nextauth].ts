import NextAuth, { type AuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@src/server/db/client';

export const authOptions: AuthOptions = {
  // Include user.id on session
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 60 * 60, // 1h
  // },
  // callbacks: {
  //   session({ session, user }) {
  //     if (session.user && user) {
  //       // eslint-disable-next-line no-param-reassign
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // Configure one or more authentication providers
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    // Credentials({
    //   name: 'Credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials) return null;
    //     return loginUser(credentials);
    //   },
    // }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default NextAuth(authOptions);
