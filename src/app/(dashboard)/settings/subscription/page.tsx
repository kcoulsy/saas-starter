import { redirectIfNotLoggedIn } from '../../utils';

const SettingsSubscription = async () => {
  await redirectIfNotLoggedIn();

  return <div>Manage your subscription and billing information.</div>;
};

export default SettingsSubscription;
