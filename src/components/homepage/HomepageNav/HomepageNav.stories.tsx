import HomepageNav from './HomepageNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomepageNav> = {
  title: 'Homepage/HomepageNav',
  component: HomepageNav,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomepageNav>;

export const Primary: Story = {
  render: () => <HomepageNav />,
};
