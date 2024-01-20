import { renderComponent } from '@src/utils/testing';
import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as stories from './ChangePasswordView.stories';

const { Default, WithErrors } = composeStories(stories);

const mockRegisterCurrentPassword = {
  onBlur: vi.fn(),
  onChange: vi.fn(),
  name: 'currentPassword',
  ref: vi.fn(),
} as const;
const mockRegisterNewPassword = { onBlur: vi.fn(), onChange: vi.fn(), name: 'newPassword', ref: vi.fn() } as const;
const mockRegisterConfirmNewPassword = {
  onBlur: vi.fn(),
  onChange: vi.fn(),
  name: 'confirmNewPassword',
  ref: vi.fn(),
} as const;

describe('ChangePasswordView', () => {
  test('should render and match snapshot', () => {
    const { asFragment } = renderComponent(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render errors and match snapshot', () => {
    const { asFragment } = renderComponent(<WithErrors />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render and register current password field', async () => {
    renderComponent(<Default registerCurrentPassword={mockRegisterCurrentPassword} />);

    const currentPasswordField = screen.getByLabelText('Current Password');
    expect(currentPasswordField).toBeInTheDocument();

    await userEvent.type(currentPasswordField, 'testpassword');

    expect(mockRegisterCurrentPassword.onChange).toHaveBeenCalled();
  });

  test('should render and register new password field', async () => {
    renderComponent(<Default registerNewPassword={mockRegisterNewPassword} />);

    const newPasswordField = screen.getByLabelText('New Password');
    expect(newPasswordField).toBeInTheDocument();

    await userEvent.type(newPasswordField, 'testpassword');

    expect(mockRegisterNewPassword.onChange).toHaveBeenCalled();
  });

  test('should render and register confirm new password field', async () => {
    renderComponent(<Default registerConfirmNewPassword={mockRegisterConfirmNewPassword} />);

    const confirmNewPasswordField = screen.getByLabelText('Confirm New Password');
    expect(confirmNewPasswordField).toBeInTheDocument();

    await userEvent.type(confirmNewPasswordField, 'testpassword');

    expect(mockRegisterConfirmNewPassword.onChange).toHaveBeenCalled();
  });

  test('renders current password error', () => {
    renderComponent(<WithErrors errors={{ currentPassword: ['Test current password error'] }} />);
    const currentPasswordError = screen.getByText('Test current password error');
    expect(currentPasswordError).toBeInTheDocument();
  });

  test('renders new password error', () => {
    renderComponent(<WithErrors errors={{ newPassword: ['Test new password error'] }} />);
    const newPasswordError = screen.getByText('Test new password error');
    expect(newPasswordError).toBeInTheDocument();
  });

  test('renders confirm new password error', () => {
    renderComponent(<WithErrors errors={{ confirmNewPassword: ['Test confirm new password error'] }} />);
    const confirmNewPasswordError = screen.getByText('Test confirm new password error');
    expect(confirmNewPasswordError).toBeInTheDocument();
  });

  test('renders multiple form errors', () => {
    renderComponent(
      <WithErrors errors={{ changePasswordError: ['Test current password error 1', 'Test form error 2'] }} />,
    );
    const currentPasswordError = screen.getByText('Test current password error 1');
    const formError = screen.getByText('Test form error 2');
    expect(currentPasswordError).toBeInTheDocument();
    expect(formError).toBeInTheDocument();
  });
});
