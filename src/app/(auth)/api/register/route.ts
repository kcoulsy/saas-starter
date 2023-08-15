import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { registerUser } from '@src/server/services/auth.service';
import { registerPostInputSchema } from './schemas';
import { RegisterPostErrorResponse, RegisterPostSuccessResponse } from './types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = registerPostInputSchema.parse(body);
    const { success } = await registerUser({ email, password });

    return NextResponse.json<RegisterPostSuccessResponse>({ success });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json<RegisterPostErrorResponse>({ error: error.issues }, { status: 422 });
    }
    if (error instanceof Error) {
      return NextResponse.json<RegisterPostErrorResponse>({ error: error.message }, { status: 500 });
    }
    return NextResponse.json<RegisterPostErrorResponse>({ error: 'Unknown error' }, { status: 500 });
  }
}
