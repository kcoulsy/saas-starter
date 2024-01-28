import { ComponentStory, Meta } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta = {
  title: 'common/Spinner',
  component: Spinner,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {};
