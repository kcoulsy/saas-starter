import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginFormView from './LoginFormView';
import { mockLoginFormViewProps } from './LoginFormView.mocks';

export default {
  title: 'forms/login/LoginFormView',
  component: LoginFormView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
} as ComponentMeta<typeof LoginFormView>;

const Template: ComponentStory<typeof LoginFormView> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <LoginFormView {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockLoginFormViewProps.base,
};
