import { renderComponent } from '@src/utils/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import LoginFormController from './LoginFormController';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => require('next-router-mock'));

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

    await userEvent.type(emailField, 'invalidemail@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(spy).toHaveBeenCalledWith('/login?email=invalidemail%40email.com&verified=false');

    // assert api request was made
  });

  it('clears email verified message if invalid login', async () => {
    mockRouter.setCurrentUrl('/login?email=invalidemail%40email.com&verified=false');
    render();

    expect(screen.getByText('Email not verified')).toBeInTheDocument();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'somethingelse@email.com');
    await userEvent.type(passwordField, 'Password1!');
    await userEvent.click(loginButton);

    expect(spy).toHaveBeenCalledWith('/login');
    expect(screen.queryByText('Email not verified')).not.toBeInTheDocument();
  });

  it('shows error if login fails', async () => {
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'invalid@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(screen.getByText('Login failed')).toBeInTheDocument();
  });

  it('clears error when email is changed', async () => {
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'invalid@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    await userEvent.type(emailField, '');

    expect(screen.getByText('Login failed')).not.toBeInTheDocument();
  });
});
