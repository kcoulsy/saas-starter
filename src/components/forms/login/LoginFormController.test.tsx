import { renderComponent } from '@src/utils/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import LoginFormController from './LoginFormController';
import mockRouter from 'next-router-mock';

vi.mock('next/router', () => require('next-router-mock'));

const render = () => renderComponent(<LoginFormController />);

describe('LoginFormController', () => {
  it('can log in successfully and redirect', async () => {
    const spy = vi.spyOn(mockRouter, 'push');
    import.meta.env.NEXTAUTH_URL = 'http://localhost:3000/';
    render();

    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailField, 'valid@email.com');
    await userEvent.type(passwordField, 'Password1!');

    await userEvent.click(loginButton);

    expect(spy).toHaveBeenCalledWith('/');
  });
});
