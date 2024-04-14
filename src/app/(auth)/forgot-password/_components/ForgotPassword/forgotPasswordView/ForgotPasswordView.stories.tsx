import { Meta, StoryObj } from '@storybook/react';
import ForgotPasswordView, { ForgotPasswordViewProps } from './ForgotPasswordView';
import { mockForgotPasswordViewProps } from './ForgotPasswordView.mocks';

const meta: Meta<typeof ForgotPasswordView> = {
  title: 'forms/forgotPassword/ForgotPasswordView',
  component: ForgotPasswordView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ForgotPasswordView>;

const Template = (args: ForgotPasswordViewProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ForgotPasswordView {...args} />;
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockForgotPasswordViewProps.base,
};

export const WithErrors: Story = {
  render: Template,
};

WithErrors.args = {
  ...mockForgotPasswordViewProps.errors,
};
