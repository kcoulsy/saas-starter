import { Meta, StoryObj } from '@storybook/react';
import RegisterSuccessView from './RegisterSuccessView';

const meta: Meta<typeof RegisterSuccessView> = {
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
};

export default meta;

type Story = StoryObj<typeof RegisterSuccessView>;

const Template = () => <RegisterSuccessView />;

export const Default: Story = {
  render: Template,
};
