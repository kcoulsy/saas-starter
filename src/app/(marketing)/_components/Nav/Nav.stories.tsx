import Nav from './Nav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Nav> = {
  title: 'Marketing/Nav',
  component: Nav,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Primary: Story = {
  render: () => <Nav />,
};
