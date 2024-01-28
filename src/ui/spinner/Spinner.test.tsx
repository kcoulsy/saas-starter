import { describe } from 'vitest';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('BaseComponent', () => {
  it('should render', () => {
    const { container } = render(<Spinner />);
    expect(container).toBeTruthy();
  });
});
