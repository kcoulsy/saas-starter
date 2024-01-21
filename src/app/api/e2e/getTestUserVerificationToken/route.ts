import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@src/server/db/client';

/**
 * Helper function to get the verification token for a user for e2e testing to mimic the user clicking the verification link in their email
 *
 * @param request NextRequest
 * @returns NextResponse
 */
export async function GET(request: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') {
    return NextResponse.json({ error: 'Page is not found' }, { status: 404 });
  }

  const { searchParams } = request.nextUrl;
  const email = searchParams.get('email');

  const user = await prisma.credentialsAuth.findFirst({
    where: { email: email || '' },
    include: { verificationToken: true },
  });

  if (user && user.verificationToken) {
    return NextResponse.json({ token: user.verificationToken[0]?.token }, { status: 200 });
  }

  return NextResponse.json({ error: 'User not found' }, { status: 404 });
}
