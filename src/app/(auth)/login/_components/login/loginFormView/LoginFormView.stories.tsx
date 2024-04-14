import { Meta, StoryObj } from '@storybook/react';
import LoginFormView, { LoginFormViewProps } from './LoginFormView';
import { mockLoginFormViewProps } from './LoginFormView.mocks';

const meta: Meta = {
  title: 'forms/login/LoginFormView',
  component: LoginFormView,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginFormView>;

const Template = (args: LoginFormViewProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <LoginFormView {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockLoginFormViewProps.base,
};

export const EmailVerified: Story = {
  render: Template,
};

EmailVerified.args = {
  ...mockLoginFormViewProps.emailVerified,
};

export const EmailUnverified: Story = {
  render: Template,
};

EmailUnverified.args = {
  ...mockLoginFormViewProps.emailUnverified,
};

export const Errors: Story = {
  render: Template,
};

Errors.args = {
  ...mockLoginFormViewProps.errors,
};
