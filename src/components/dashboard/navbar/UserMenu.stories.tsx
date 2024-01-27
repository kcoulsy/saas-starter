import UserMenu from './UserMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UserMenu> = {
  title: 'Dashboard/UserMenu',
  component: UserMenu,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Primary: Story = {
  render: () => <UserMenu />,
};
