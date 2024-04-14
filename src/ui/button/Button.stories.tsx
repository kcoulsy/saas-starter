import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { mockButtonProps } from './Button.mocks';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const Template = (args: ButtonProps) => (
  <div className="w-40">
    <Button {...args} />
  </div>
);

export const Default: Story = {
  render: Template,
};

Default.args = {
  ...mockButtonProps.base,
};

export const Disabled: Story = {
  render: Template,
};

Disabled.args = {
  ...mockButtonProps.disabled,
};

export const Loading: Story = {
  render: Template,
};

Loading.args = {
  ...mockButtonProps.loading,
};
