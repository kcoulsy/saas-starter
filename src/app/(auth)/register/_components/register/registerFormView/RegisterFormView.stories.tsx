import { Meta, StoryObj } from '@storybook/react';
import RegisterFormView, { RegisterFormViewProps } from './RegisterFormView';
import { mockRegisterFormViewProps } from './RegisterFormView.mocks';

const meta: Meta<typeof RegisterFormView> = {
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
};

export default meta;

type Story = StoryObj<typeof RegisterFormView>;

const Template = (args: RegisterFormViewProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <RegisterFormView {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockRegisterFormViewProps.base,
};

export const Errors: Story = {
  render: Template,
};

Errors.args = {
  ...mockRegisterFormViewProps.errors,
};
