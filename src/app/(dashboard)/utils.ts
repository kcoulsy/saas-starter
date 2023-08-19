import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { pageRoutes } from '@src/constants/routes';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';

export async function redirectIfNotLoggedIn() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect(pageRoutes.login);
  }
}
