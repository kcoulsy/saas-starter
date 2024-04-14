import { Meta, StoryObj } from '@storybook/react';
import ResetPasswordView, { ResetPasswordViewProps } from './ResetPasswordView';
import { mockResetPasswordViewProps } from './ResetPasswordView.mocks';

const meta: Meta = {
  title: 'forms/resetPassword/ResetPasswordView',
  component: ResetPasswordView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
};

type Story = StoryObj<typeof ResetPasswordView>;

export default meta;

const Template = (args: ResetPasswordViewProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ResetPasswordView {...args} />;
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockResetPasswordViewProps.base,
};

export const WithErrors: Story = {
  render: Template,
};

WithErrors.args = {
  ...mockResetPasswordViewProps.errors,
};
