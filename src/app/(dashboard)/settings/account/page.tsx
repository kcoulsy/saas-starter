import { getServerSession } from 'next-auth';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';
import AccountForm from '@src/components/dashboard/settings/account-form';
import { redirectIfNotLoggedIn } from '../../utils';
import ChangePasswordForm from './_components/ChangePasswordForm/ChangePasswordForm';

const SettingsAccount = async () => {
  await redirectIfNotLoggedIn();
  const session = await getServerSession(authOptions);

  return (
    <div className="px-4 py-2 max-w-lg mx-auto">
      <AccountForm email={session?.user?.email || ''} />
      <ChangePasswordForm />
    </div>
  );
};

export default SettingsAccount;
