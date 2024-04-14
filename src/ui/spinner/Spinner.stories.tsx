import { Meta, StoryObj } from '@storybook/react';
import Spinner, { SpinnerProps } from './Spinner';

const meta: Meta = {
  title: 'common/Spinner',
  component: Spinner,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

const Template = (args: SpinnerProps) => <Spinner {...args} />;

export const Default: Story = {
  render: Template,
};

Default.args = {};
