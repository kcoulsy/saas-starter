import { pageRoutes } from '@src/constants/routes';
import { verifyToken } from '@src/server/services/verification.service';
import { redirect } from 'next/navigation';

export default async function VerifyPage({ params }: { params: { token: string } }) {
  if (!params || !params.token) {
    return redirect(pageRoutes.login);
  }

  const { token } = params;

  try {
    const user = await verifyToken(token);
    if (user) {
      return redirect(`${pageRoutes.login}?verified=true`);
    }
  } catch (error) {
    // Do nothing, redirect
  }
  return redirect(`${pageRoutes.login}?verified=false`);
}
