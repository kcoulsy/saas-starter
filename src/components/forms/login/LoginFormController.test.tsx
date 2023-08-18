import { renderComponent } from '@src/utils/testing';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe } from 'vitest';
import LoginFormController from './LoginFormController';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next-router-mock');
  return {
    // @ts-ignore
    ...actual,
    useSearchParams: vi.fn(),
  };
});

const render = () => renderComponent(<LoginFormController />);

describe('LoginFormController', () => {
  import.meta.env.NEXTAUTH_URL = 'http://localhost:3000/';

  // it('can log in successfully and redirect', async () => {
  //   render();

  //   const emailField = screen.getByLabelText('Email');
  //   const loginButton = screen.getByRole('button', { name: 'Login or Sign up' });

  //   await userEvent.type(emailField, 'valid@email.com');

  //   await userEvent.click(loginButton);

  //   await screen.getByText('An email has been sent to your inbox');
  // });

  it('shows error if login fails', async () => {
    render();
    const loginButton = screen.getByRole('button', { name: 'Login or Sign up' });

    await userEvent.click(loginButton);

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });
});
