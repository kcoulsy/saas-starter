import { describe } from 'vitest';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './BaseComponent.stories';

const { Default } = composeStories(stories);

describe('BaseComponent', () => {
  it('should render', () => {
    const { container } = render(<Default />);
    expect(container).toBeTruthy();
  });
});
