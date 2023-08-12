import { MIN_PASSWORD_LENGTH } from '@src/constants/auth';
import { registerUser } from '@src/server/services/auth.service';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

export const postRegisterInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD_LENGTH),
});

export type PostRegisterInput = z.infer<typeof postRegisterInputSchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = postRegisterInputSchema.parse(body);
    const { success } = await registerUser({ email, password });

    return new NextResponse(JSON.stringify({ success }), { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse(JSON.stringify({ error: error.issues }), { status: 422 });
    }
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new NextResponse('Unknown error', { status: 500 });
  }
}
