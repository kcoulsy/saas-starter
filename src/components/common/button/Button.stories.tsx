import { ComponentStory, Meta } from '@storybook/react';
import Button from './Button';
import { mockButtonProps } from './Button.mocks';

const meta: Meta = {
  title: 'common/Button',
  component: Button,
};

export default meta;

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
