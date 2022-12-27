import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import * as stories from './LoginFormView.stories';

const { Default, Errors } = composeStories(stories);

const mockRegisterEmail = { onBlur: vi.fn(), onChange: vi.fn(), name: 'email', ref: vi.fn() } as const;
const mockRegisterPassword = { onBlur: vi.fn(), onChange: vi.fn(), name: 'password', ref: vi.fn() } as const;

describe('LoginFormView', () => {
  test('it renders Default and matches snapshots', () => {
    const { asFragment } = renderComponent(<Default />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders Errors and matches snapshots', () => {
    const { asFragment } = renderComponent(<Errors />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('it renders and registers username field', async () => {
    renderComponent(<Default registerEmail={mockRegisterEmail} />);

    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();

    await userEvent.type(emailField, 'something@email.com');

    expect(mockRegisterEmail.onChange).toHaveBeenCalled();
  });

  test('it renders and registers password field', async () => {
    renderComponent(<Default registerPassword={mockRegisterPassword} />);

    const passwordField = screen.getByLabelText('Password');
    expect(passwordField).toBeInTheDocument();

    await userEvent.type(passwordField, 'password');

    expect(mockRegisterPassword.onChange).toHaveBeenCalled();
  });

  it('renders email verified text', () => {
    renderComponent(<Default emailVerified />);

    const emailVerifiedText = screen.getByText('Email successfully verified, you may now login');
    expect(emailVerifiedText).toBeInTheDocument();
  });

  it('renders email not verified text', () => {
    renderComponent(<Default emailVerified={false} />);
    const emailNotVerifiedText = screen.getByText('Email not verified');
    expect(emailNotVerifiedText).toBeInTheDocument();
  });

  it('renders email not verified button and calls onResendEmail', async () => {
    const onResendEmail = vi.fn();
    renderComponent(<Default emailVerified={false} onResendEmail={onResendEmail} />);

    const resendEmailButton = screen.getByRole('button', { name: 'Click here to resend verification email' });
    expect(resendEmailButton).toBeInTheDocument();
    await userEvent.click(resendEmailButton);
    expect(onResendEmail).toHaveBeenCalled();
  });

  it('renders login error', () => {
    renderComponent(<Default errors={{ loginError: ['Login error test 1', 'Login error test 2'] }} />);
    const loginError1 = screen.getByText('Login error test 1');
    const loginError2 = screen.getByText('Login error test 2');
    expect(loginError1).toBeInTheDocument();
    expect(loginError2).toBeInTheDocument();
  });
});
