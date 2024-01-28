import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/dom';
import { describe } from 'vitest';
import * as stories from './Tabs.stories';

const { Default } = composeStories(stories);

describe('Tabs', () => {
  it('should render', () => {
    renderComponent(<Default />);
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  it('should render the correct content', () => {
    renderComponent(<Default />);
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Change your password')).toBeInTheDocument();
    expect(screen.queryByText('Manage your subscription')).not.toBeInTheDocument();
  });
});
