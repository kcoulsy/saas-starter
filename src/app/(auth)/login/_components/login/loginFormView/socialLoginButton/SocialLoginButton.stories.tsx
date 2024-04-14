import { Meta, StoryObj } from '@storybook/react';
import SocialLoginButton, { SocialLoginButtonProps } from './SocialLoginButton';
import { mockSocialLoginButtonProps } from './SocialLoginButton.mocks';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'forms/login/SocialLoginButton',
  component: SocialLoginButton,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SocialLoginButton>;

const Template = (args: SocialLoginButtonProps) => <SocialLoginButton {...args} />;

export const Google: Story = {
  render: Template,
};

Google.args = {
  ...mockSocialLoginButtonProps.google,
};

export const Twitter: Story = {
  render: Template,
};

Twitter.args = {
  ...mockSocialLoginButtonProps.twitter,
};

export const Github: Story = {
  render: Template,
};

Github.args = {
  ...mockSocialLoginButtonProps.github,
};
