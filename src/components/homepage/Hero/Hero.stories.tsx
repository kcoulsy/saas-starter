import Hero from './Hero';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  title: 'Homepage/Hero',
  component: Hero,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: () => <Hero />,
};
