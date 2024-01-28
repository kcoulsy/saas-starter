import { ComponentStory, Meta } from '@storybook/react';
import FormInput from './FormInput';
import { mockFormInputProps } from './FormInput.mocks';

const meta: Meta = {
  title: 'common/FormInput',
  component: FormInput,
};

export default meta;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockFormInputProps.base,
};

export const WithError = Template.bind({});

WithError.args = {
  ...mockFormInputProps.withError,
};

export const Password = Template.bind({});

Password.args = {
  ...mockFormInputProps.password,
};
