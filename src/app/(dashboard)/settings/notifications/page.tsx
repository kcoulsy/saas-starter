import { redirectIfNotLoggedIn } from '../../utils';
import NotificationForm from './_components/NotificationForm/NotificationForm';

const SettingsNotifications = async () => {
  await redirectIfNotLoggedIn();

  return (
    <div>
      <NotificationForm />
    </div>
  );
};

export default SettingsNotifications;
