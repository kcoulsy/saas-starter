import { Meta, StoryObj } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';
import { mockTabsProps } from './Tabs.mocks';

const meta: Meta = {
  title: 'common/Tabs',
  component: Tabs,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
};

type Story = StoryObj<typeof Tabs>;

export default meta;

const Template = (args: TabsProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <Tabs {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockTabsProps.base,
};
