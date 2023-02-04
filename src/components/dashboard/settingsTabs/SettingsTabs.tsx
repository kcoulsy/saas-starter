import * as Tabs from '@radix-ui/react-tabs';
import { useI18nContext } from '@src/i18n/i18n-react';

const tabTriggerClasses =
  'inline-block p-4 border-b-2 border-blue-400 font-medium border-transparent rounded-t-lg hover:text-gray-600';
const TABS = {
  ACCOUNT: 'account',
};

const SettingsTabs = () => {
  const { LL } = useI18nContext();
  return (
    <Tabs.Root className="m-4" defaultValue={TABS.ACCOUNT}>
      <Tabs.List className="" aria-label="Manage your account">
        <Tabs.Trigger className={tabTriggerClasses} value={TABS.ACCOUNT}>
          Account
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="p-4" value={TABS.ACCOUNT}>
        <h1
          aria-level={1}
          aria-label={LL.login.form.title()}
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Change your password
        </h1>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default SettingsTabs;
