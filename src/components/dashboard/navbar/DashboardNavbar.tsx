import { getServerSession } from 'next-auth';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';
import UserMenu from './UserMenu';

const DashboardNavbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="w-full border-b">
      <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
        <div aria-label="Home. logo" role="img">
          {/* logo */}
        </div>

        {session && <div>Signed in as {session.user?.email}</div>}
        <UserMenu />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
