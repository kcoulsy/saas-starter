import { describe } from 'vitest';
import { render } from '@testing-library/react';
import BaseComponent from './BaseCompnent';
import { mockBaseComponentProps } from './BaseComponent.mocks';

describe('BaseComponent', () => {
  it('should render', () => {
    const { container } = render(<BaseComponent {...mockBaseComponentProps.base} />);
    expect(container).toBeTruthy();
  });
});
