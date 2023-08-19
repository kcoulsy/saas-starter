import { redirectIfNotLoggedIn } from '../../utils';

const SettingsAccount = async () => {
  await redirectIfNotLoggedIn();

  return <div className="container mx-auto">Settings Account page</div>;
};

export default SettingsAccount;
