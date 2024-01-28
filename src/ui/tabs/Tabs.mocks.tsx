import { TabsProps } from './Tabs';

const baseTabsProps: TabsProps = {
  defaultIndex: 0,
  ariaLabel: 'Manage your account',
  data: [
    {
      value: 'account',
      label: 'Account',
      content: (
        <h1
          aria-level={1}
          aria-label="Change your password"
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Change your password
        </h1>
      ),
    },
    {
      value: 'subscription',
      label: 'Subscription',
      content: (
        <h1
          aria-level={1}
          aria-label="Change your password"
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Manage your subscription
        </h1>
      ),
    },
  ],
};

export const mockTabsProps = {
  base: baseTabsProps,
};
