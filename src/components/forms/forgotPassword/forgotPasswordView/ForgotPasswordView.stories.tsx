import { ComponentStory, Meta } from '@storybook/react';
import ForgotPasswordView from './ForgotPasswordView';
import { mockForgotPasswordViewProps } from './ForgotPasswordView.mocks';

const meta: Meta = {
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

const Template: ComponentStory<typeof ForgotPasswordView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ForgotPasswordView {...args} />;
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockForgotPasswordViewProps.base,
};

export const WithErrors = Template.bind({});

WithErrors.args = {
  ...mockForgotPasswordViewProps.errors,
};
