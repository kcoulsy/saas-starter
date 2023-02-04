import Tabs from '@src/components/common/tabs/Tabs';

const SettingsTabs = () => {
  return (
    <Tabs
      defaultIndex={0}
      ariaLabel="Manage your account"
      data={[
        {
          value: 'account',
          label: 'Account',
          content: (
            <h1 aria-level={1} aria-label="Account" className="text-2xl font-extrabold leading-6 text-gray-800">
              Account
            </h1>
          ),
        },
      ]}
    />
  );
};

export default SettingsTabs;
