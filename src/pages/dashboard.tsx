import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Dashboard = () => {
  const { status } = useSession();

  return (
    <div>
      {status === 'authenticated' ? (
        <div>
          <p>Authenticated</p>
          <button type="button" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <p>Not authenticated</p>
          <Link href="/login">Sign In</Link>
        </>
      )}
    </div>
  );
};

export default Dashboard;
