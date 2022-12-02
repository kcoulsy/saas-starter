import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterSuccessView from './RegisterSuccessView';

export default {
  title: 'forms/register/RegisterSuccessView',
  component: RegisterSuccessView,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#3E3E3E' }],
    },
  },
} as ComponentMeta<typeof RegisterSuccessView>;

const Template: ComponentStory<typeof RegisterSuccessView> = () => <RegisterSuccessView />;

export const Default = Template.bind({});
