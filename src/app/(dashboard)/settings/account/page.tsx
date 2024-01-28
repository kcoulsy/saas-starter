import ChangePasswordForm from './_components/ChangePasswordForm/ChangePasswordForm';
import AccountForm from './_components/AccountForm/AccountForm';

const SettingsAccount = () => {
  return (
    <div className="px-4 py-2 max-w-lg mx-auto">
      <AccountForm />
      <ChangePasswordForm />
    </div>
  );
};

export default SettingsAccount;
