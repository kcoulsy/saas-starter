import { ComponentStory, Meta } from '@storybook/react';
import BaseComponent from './BaseCompnent';
import { mockBaseComponentProps } from './BaseComponent.mocks';

const meta: Meta = {
  title: 'template/BaseComponent',
  component: BaseComponent,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;

const Template: ComponentStory<typeof BaseComponent> = (args) => <BaseComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockBaseComponentProps.base,
};
