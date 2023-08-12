import { pageRoutes } from '@src/constants/routes';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function redirectIfLoggedIn() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    redirect(pageRoutes.dashboard);
  }
}
