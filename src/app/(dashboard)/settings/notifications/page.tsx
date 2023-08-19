import { redirectIfNotLoggedIn } from '../../utils';

const SettingsNotifications = async () => {
  await redirectIfNotLoggedIn();

  return <div className="container mx-auto">Settings Notifications page</div>;
};

export default SettingsNotifications;
