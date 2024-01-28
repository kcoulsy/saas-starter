import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterFormView from './RegisterFormView';
import { mockRegisterFormViewProps } from './RegisterFormView.mocks';

export default {
  title: 'forms/register/RegisterFormView',
  component: RegisterFormView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
} as ComponentMeta<typeof RegisterFormView>;

const Template: ComponentStory<typeof RegisterFormView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <RegisterFormView {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockRegisterFormViewProps.base,
};

export const Errors = Template.bind({});

Errors.args = {
  ...mockRegisterFormViewProps.errors,
};
