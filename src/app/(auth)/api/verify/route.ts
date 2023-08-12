import { resendVerificationEmail } from '@src/server/services/verification.service';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

export const postVerifyInputSchema = z.object({
  email: z.string().email(),
});

export type PostVerifyInput = z.infer<typeof postVerifyInputSchema>;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = postVerifyInputSchema.parse(body);
    await resendVerificationEmail(email);

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
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
