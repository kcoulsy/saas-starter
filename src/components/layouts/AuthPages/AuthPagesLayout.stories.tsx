import AuthPagesLayout from './AuthPagesLayout';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AuthPagesLayout> = {
  title: 'Layouts/AuthPagesLayout',
  component: AuthPagesLayout,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthPagesLayout>;

export const Primary: Story = {
  render: () => (
    <AuthPagesLayout>
      <h2>Hello world</h2>
    </AuthPagesLayout>
  ),
};
