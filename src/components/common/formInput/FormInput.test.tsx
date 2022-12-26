import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as stories from './FormInput.stories';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

const { Default, WithError, Password } = composeStories(stories);

describe('FormInput', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with error and match snapshot', () => {
    const { asFragment } = render(<WithError />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render password and match snapshot', () => {
    const { asFragment } = render(<Password />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain label text', () => {
    render(<Default label="test-label" />);
    const label = screen.getByText('test-label');
    expect(label).toBeInTheDocument();
  });

  it('should contain error text', () => {
    render(<WithError errors={['test-error']} />);
    const error = screen.getByText('test-error');
    expect(error).toBeInTheDocument();
  });

  it('should toggle between text and password', async () => {
    render(<Password label="password" />);
    const toggleButton = screen.getByRole('button');

    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'password');

    await userEvent.click(toggleButton);

    expect(screen.getByLabelText('password')).toHaveAttribute('type', 'text');
  });

  it('should render placeholder text', () => {
    render(<Default placeholder="test-placeholder" />);
    const input = screen.getByPlaceholderText('test-placeholder');
    expect(input).toBeInTheDocument();
  });

  it('should pass register props', async () => {
    const mockRegister = { onBlur: vi.fn(), onChange: vi.fn(), name: 'example', ref: vi.fn() };

    render(
      <div data-testid="outside">
        <Default register={mockRegister} label="test-label" />
      </div>,
    );

    const input = screen.getByLabelText('test-label');

    await userEvent.type(input, 'test');
    expect(mockRegister.onChange).toHaveBeenCalled();

    await userEvent.click(screen.getByTestId('outside'));
    expect(mockRegister.onBlur).toHaveBeenCalled();

    expect(mockRegister.ref).toHaveBeenCalled();
    expect(input).toHaveAttribute('name', mockRegister.name);
  });

  it('should be accessible', async () => {
    render(<Default label="test-label" />);
    const input = screen.getByLabelText('test-label');

    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');

    expect(input).toHaveAccessibleName('test-label');
  });
});
