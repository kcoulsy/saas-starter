import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './ResetPasswordView.stories';

const { Default, WithErrors } = composeStories(stories);

const mockRegisterPassword = { onBlur: vi.fn(), onChange: vi.fn(), name: 'password', ref: vi.fn() } as const;
const mockRegisterConfirm = { onBlur: vi.fn(), onChange: vi.fn(), name: 'confirm', ref: vi.fn() } as const;

describe('ForgotPasswordView', () => {
  it('should render and match snapshot', () => {
    const { asFragment } = renderComponent(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render errors and match snapshot', () => {
    const { asFragment } = renderComponent(<WithErrors />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render and register password field', async () => {
    renderComponent(<Default registerPassword={mockRegisterPassword} />);

    const emailField = screen.getByLabelText('New Password');
    expect(emailField).toBeInTheDocument();

    await userEvent.type(emailField, 'Password1!');

    expect(mockRegisterPassword.onChange).toHaveBeenCalled();
  });

  it('should render and register password confirm field', async () => {
    renderComponent(<Default registerConfirm={mockRegisterConfirm} />);

    const emailField = screen.getByLabelText('Confirm Password');
    expect(emailField).toBeInTheDocument();

    await userEvent.type(emailField, 'Password1!');

    expect(mockRegisterConfirm.onChange).toHaveBeenCalled();
  });

  it('renders password error', () => {
    renderComponent(<WithErrors errors={{ password: ['Test password error'] }} />);
    const passwordError = screen.getByText('Test password error');
    expect(passwordError).toBeInTheDocument();
  });

  it('renders confirm error', () => {
    renderComponent(<WithErrors errors={{ confirm: ['Test confirm error'] }} />);
    const confirmError = screen.getByText('Test confirm error');
    expect(confirmError).toBeInTheDocument();
  });

  it('renders multiple form errors', () => {
    renderComponent(<WithErrors errors={{ resetPasswordError: ['Test form error 1', 'Test form error 2'] }} />);
    const formError1 = screen.getByText('Test form error 1');
    const formError2 = screen.getByText('Test form error 2');
    expect(formError1).toBeInTheDocument();
    expect(formError2).toBeInTheDocument();
  });

  it('shows password in plain text if you click the toggle button', async () => {
    renderComponent(<Default registerPassword={mockRegisterPassword} />);

    const passwordField = screen.getByLabelText('New Password');
    const confirmField = screen.getByLabelText('Confirm Password');
    const [passwordToggle, confirmToggle] = screen.getAllByRole('button', { name: 'Toggle password visibility' });

    expect(passwordField).toHaveAttribute('type', 'password');
    expect(confirmField).toHaveAttribute('type', 'password');

    if (passwordToggle) {
      await userEvent.click(passwordToggle);
    }

    if (confirmToggle) {
      await userEvent.click(confirmToggle);
    }

    expect(passwordField).toHaveAttribute('type', 'text');
    expect(confirmField).toHaveAttribute('type', 'text');
  });
});
