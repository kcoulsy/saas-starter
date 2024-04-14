import { Meta, StoryObj } from '@storybook/react';
import FormInput, { FormInputProps } from './FormInput';
import { mockFormInputProps } from './FormInput.mocks';

const meta: Meta<typeof FormInput> = {
  title: 'common/FormInput',
  component: FormInput,
};

export default meta;

type Story = StoryObj<typeof FormInput>;

const Template = (args: FormInputProps) => <FormInput {...args} />;

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockFormInputProps.base,
};

export const WithError: Story = {
  render: Template,
};

WithError.args = {
  ...mockFormInputProps.withError,
};

export const Password: Story = {
  render: Template,
};

Password.args = {
  ...mockFormInputProps.password,
};
