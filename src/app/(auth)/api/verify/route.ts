import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { resendVerificationEmail } from '@src/server/services/verification.service';
import { verifyPostInputSchema } from './schemas';
import { VerifyPostErrorResponse, VerifyPostSuccessResponse } from './types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = verifyPostInputSchema.parse(body);
    await resendVerificationEmail(email);

    return NextResponse.json<VerifyPostSuccessResponse>({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json<VerifyPostErrorResponse>({ error: error.issues }, { status: 422 });
    }
    if (error instanceof Error) {
      return NextResponse.json<VerifyPostErrorResponse>({ error: error.message }, { status: 500 });
    }
    return NextResponse.json<VerifyPostErrorResponse>({ error: 'unknown error' }, { status: 500 });
  }
}
