import { Meta, StoryObj } from '@storybook/react';
import FormLayout, { FormLayoutProps } from './FormLayout';
import { mockFormLayoutProps } from './FormLayout.mocks';

const meta: Meta = {
  title: 'common/FormLayout',
  component: FormLayout,
};

export default meta;

type Story = StoryObj<typeof FormLayout>;

const Template = (args: FormLayoutProps) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <FormLayout {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockFormLayoutProps.base,
};

export const WithLinkInDescription: Story = {
  render: Template,
};

WithLinkInDescription.args = {
  ...mockFormLayoutProps.withLinkInDescription,
};

export const WithFooter: Story = {
  render: Template,
};

WithFooter.args = {
  ...mockFormLayoutProps.withFooter,
};

export const WithErrors: Story = {
  render: Template,
};

WithErrors.args = {
  ...mockFormLayoutProps.withErrors,
};
