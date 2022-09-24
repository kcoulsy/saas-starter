import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'common/Button',
  component: Button,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="w-40">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...mockButtonProps.base,
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...mockButtonProps.disabled,
};
