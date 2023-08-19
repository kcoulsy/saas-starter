import { redirectIfNotLoggedIn } from '../../utils';

const SettingsSubscription = async () => {
  await redirectIfNotLoggedIn();

  return <div className="container mx-auto">Settings Subscription page</div>;
};

export default SettingsSubscription;
