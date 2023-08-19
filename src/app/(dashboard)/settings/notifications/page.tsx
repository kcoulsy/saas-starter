import NotificationForm from '@src/components/dashboard/settings/notification-form';
import { redirectIfNotLoggedIn } from '../../utils';

const SettingsNotifications = async () => {
  await redirectIfNotLoggedIn();

  return (
    <div>
      <NotificationForm />
    </div>
  );
};

export default SettingsNotifications;
