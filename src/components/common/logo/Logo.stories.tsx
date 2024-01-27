import Logo from './Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  title: 'Common/Logo',
  component: Logo,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  render: () => <Logo />,
};
