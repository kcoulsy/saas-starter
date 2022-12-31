import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './ForgotPasswordView.stories';

const { Default, WithErrors } = composeStories(stories);

const mockRegisterEmail = { onBlur: vi.fn(), onChange: vi.fn(), name: 'email', ref: vi.fn() } as const;

describe('ForgotPasswordView', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = renderComponent(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render errors and match snapshot', () => {
    const { asFragment } = renderComponent(<WithErrors />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and register email field', async () => {
    renderComponent(<Default registerEmail={mockRegisterEmail} />);

    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();

    await userEvent.type(emailField, 'test@email.com');

    expect(mockRegisterEmail.onChange).toHaveBeenCalled();
  });

  it('renders email error', () => {
    renderComponent(<WithErrors errors={{ email: ['Test email error'] }} />);
    const emailError = screen.getByText('Test email error');
    expect(emailError).toBeInTheDocument();
  });

  it('renders multiple form errors', () => {
    renderComponent(<WithErrors errors={{ forgotPasswordError: ['Test email error 1', 'Test form error 2'] }} />);
    const emailError = screen.getByText('Test email error 1');
    const formError = screen.getByText('Test form error 2');
    expect(emailError).toBeInTheDocument();
    expect(formError).toBeInTheDocument();
  });
});
