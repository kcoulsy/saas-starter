import { z } from 'zod';
import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@src/server/db/client';

export async function DELETE(request: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') {
    return NextResponse.json({ error: 'Page is not found' }, { status: 404 });
  }

  console.log('here');

  try {
    const res = await request.json();

    const { email } = z
      .object({
        email: z.string().email(),
      })
      .parse(res);

    const user = await prisma.credentialsAuth.findFirst({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User is not found' }, { status: 404 });
    }

    const result = await prisma.credentialsAuth.delete({
      where: { id: user.id },
    });

    if (!result) {
      return NextResponse.json({ error: 'Something broke' }, { status: 500 });
    }

    return NextResponse.json({ message: 'User Deleted' }, { status: 200 });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error: 'Something broke' }, { status: 500 });
  }
}
