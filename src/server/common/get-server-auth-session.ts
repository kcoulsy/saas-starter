// Wrapper for unstable_getServerSession https://next-auth.js.org/configuration/nextjs

// eslint-disable-next-line camelcase
import { unstable_getServerSession } from 'next-auth';
import { authOptions as nextAuthOptions } from '../../pages/api/auth/[...nextauth]';
import type { GetServerSidePropsContext } from 'next';

// Next API route example - /pages/api/restricted.ts
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => unstable_getServerSession(ctx.req, ctx.res, nextAuthOptions);
