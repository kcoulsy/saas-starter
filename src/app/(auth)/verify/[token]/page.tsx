import { redirect } from 'next/navigation';
import { pageRoutes } from '@src/constants/routes';
import { verifyToken } from '@src/server/services/verification.service';

export default async function VerifyPage({ params }: { params: { token: string } }) {
  if (!params || !params.token) {
    return redirect(pageRoutes.login);
  }

  const { token } = params;

  console.log('token', token);
  let success = false;
  try {
    const user = await verifyToken(token);
    console.log('Verifying token', user, token);
    if (user) {
      success = true;
    }
  } catch (error) {
    console.log('error', error);
    // Do nothing, redirect
  }
  if (success) {
    redirect(`${pageRoutes.login}?verified=true`);
  }
  redirect(`${pageRoutes.login}?verified=false`);
}
