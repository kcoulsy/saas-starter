import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialLoginButton from './SocialLoginButton';
import { mockSocialLoginButtonProps } from './SocialLoginButton.mocks';

export default {
  title: 'forms/login/SocialLoginButton',
  component: SocialLoginButton,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SocialLoginButton>;

const Template: ComponentStory<typeof SocialLoginButton> = (args) => <SocialLoginButton {...args} />;

export const Google = Template.bind({});

Google.args = {
  ...mockSocialLoginButtonProps.google,
};

export const Twitter = Template.bind({});

Twitter.args = {
  ...mockSocialLoginButtonProps.twitter,
};

export const Github = Template.bind({});

Github.args = {
  ...mockSocialLoginButtonProps.github,
};
