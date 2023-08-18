import { Meta, ComponentStory } from '@storybook/react';
import LoginFormView from './LoginFormView';
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

const Template: ComponentStory<typeof LoginFormView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <LoginFormView {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockLoginFormViewProps.base,
};

export const Errors = Template.bind({});

Errors.args = {
  ...mockLoginFormViewProps.errors,
};
