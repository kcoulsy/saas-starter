import { renderComponent } from '@src/utils/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import LoginFormController from './LoginFormController';
import mockRouter from 'next-router-mock';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next-router-mock');
  return {
    ...actual,
    useSearchParams: vi.fn(),
  };
});

const render = () => renderComponent(<LoginFormController />);

describe('LoginFormController', () => {
  const spy = vi.spyOn(mockRouter, 'push');
  import.meta.env.NEXTAUTH_URL = 'http://localhost:3000/';

  it('can log in successfully and redirect', async () => {
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'valid@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(spy).toHaveBeenCalledWith('/');
  });

  it('redirects if email is not verified', async () => {
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'unverfied@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(spy).toHaveBeenCalledWith('/login?email=unverfied@email.com&verified=false');
  });

  // it('clears email verified message if invalid login', async () => {
  //   mockRouter.setCurrentUrl('/login?email=unverfied@email.com&verified=false');
  //   render();

  //   expect(screen.getByText('Email not verified')).toBeInTheDocument();

  //   const emailField = screen.getByLabelText('Email');
  //   const passwordField = screen.getByLabelText('Password');
  //   const loginButton = screen.getByRole('button', { name: 'Login' });

  //   await userEvent.type(emailField, 'somethingelse@email.com');
  //   await userEvent.type(passwordField, 'Password1!');
  //   await userEvent.click(loginButton);

  //   expect(spy).toHaveBeenCalledWith('/login');
  //   expect(screen.queryByText('Email not verified')).not.toBeInTheDocument();
  // });

  it('shows error if login fails', async () => {
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'invalid@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(screen.getByText('Invalid Login')).toBeInTheDocument();
  });
});
