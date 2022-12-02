import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormInput from './FormInput';
import { mockFormInputProps } from './FormInput.mocks';

export default {
  title: 'common/FormInput',
  component: FormInput,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FormInput>;

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
