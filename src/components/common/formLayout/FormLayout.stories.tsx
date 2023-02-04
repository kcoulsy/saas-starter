import { ComponentStory, Meta } from '@storybook/react';
import FormLayout from './FormLayout';
import { mockFormLayoutProps } from './FormLayout.mocks';

const meta: Meta = {
  title: 'common/FormLayout',
  component: FormLayout,
};

export default meta;

const Template: ComponentStory<typeof FormLayout> = (args) => (
  <div className="lg:w-1/3 md:w-1/2 w-full">
    <FormLayout {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockFormLayoutProps.base,
};

export const WithLinkInDescription = Template.bind({});

WithLinkInDescription.args = {
  ...mockFormLayoutProps.withLinkInDescription,
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  ...mockFormLayoutProps.withFooter,
};

export const WithErrors = Template.bind({});

WithErrors.args = {
  ...mockFormLayoutProps.withErrors,
};
