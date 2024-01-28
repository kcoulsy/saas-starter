import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { pageRoutes } from '@src/constants/routes';
import { authOptions } from '@src/app/api/auth/[...nextauth]/route';

export async function redirectIfNotLoggedIn() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect(pageRoutes.login);
  }
}
