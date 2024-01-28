import { ComponentStory, Meta } from '@storybook/react';
import ResetPasswordView from './ResetPasswordView';
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

export default meta;

const Template: ComponentStory<typeof ResetPasswordView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ResetPasswordView {...args} />;
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockResetPasswordViewProps.base,
};

export const WithErrors = Template.bind({});

WithErrors.args = {
  ...mockResetPasswordViewProps.errors,
};
