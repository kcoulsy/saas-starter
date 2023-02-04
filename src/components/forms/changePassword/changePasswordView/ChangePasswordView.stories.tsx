import { ComponentStory, Meta } from '@storybook/react';
import { mockChangePasswordViewProps } from './ChangePassword.mocks';
import ChangePasswordView from './ChangePasswordView';

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

export default meta;

const Template: ComponentStory<typeof ChangePasswordView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <ChangePasswordView {...args} />;
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockChangePasswordViewProps.base,
};

export const WithErrors = Template.bind({});

WithErrors.args = {
  ...mockChangePasswordViewProps.errors,
};
