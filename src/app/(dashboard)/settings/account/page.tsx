import { getServerSession } from 'next-auth';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';
import AccountForm from '@src/components/dashboard/settings/account-form';
import { redirectIfNotLoggedIn } from '../../utils';

const SettingsAccount = async () => {
  await redirectIfNotLoggedIn();
  const session = await getServerSession(authOptions);

  return (
    <div>
      <AccountForm email={session?.user?.email || ''} />
    </div>
  );
};

export default SettingsAccount;
