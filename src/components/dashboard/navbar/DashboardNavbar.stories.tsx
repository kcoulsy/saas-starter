import DashboardNavbar from './DashboardNavbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DashboardNavbar> = {
  title: 'Dashboard/DashboardNavbar',
  component: DashboardNavbar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof DashboardNavbar>;

export const Primary: Story = {
  render: () => <DashboardNavbar isFreePlan={false} />,
};

export const FreePlan: Story = {
  render: () => <DashboardNavbar isFreePlan />,
};
