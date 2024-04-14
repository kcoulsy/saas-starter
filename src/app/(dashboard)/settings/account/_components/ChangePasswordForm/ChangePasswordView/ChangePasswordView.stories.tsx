import { Meta, StoryObj } from '@storybook/react';
import { mockChangePasswordViewProps } from './ChangePassword.mocks';
import ChangePasswordView, { ChangePasswordViewProps } from './ChangePasswordView';

const meta: Meta = {
  title: 'forms/changePassword/ChangePasswordView',
  component: ChangePasswordView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
};

type Story = StoryObj<typeof ChangePasswordView>;

export default meta;

const Template = (args: ChangePasswordViewProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ChangePasswordView {...args} />;
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockChangePasswordViewProps.base,
};

export const WithErrors: Story = {
  render: Template,
};

WithErrors.args = {
  ...mockChangePasswordViewProps.errors,
};
