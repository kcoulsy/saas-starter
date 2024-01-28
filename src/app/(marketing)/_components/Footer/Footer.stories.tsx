import Footer from './Footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Marketing/Footer',
  component: Footer,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  render: () => <Footer />,
};
