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
});
