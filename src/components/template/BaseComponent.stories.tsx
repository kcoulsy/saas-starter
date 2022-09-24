import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseComponent from './BaseCompnent';
import { mockBaseComponentProps } from './BaseComponent.mocks';

export default {
  title: 'template/BaseComponent',
  component: BaseComponent,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseComponent>;

const Template: ComponentStory<typeof BaseComponent> = (args) => <BaseComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockBaseComponentProps.base,
};
