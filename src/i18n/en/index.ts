import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
  common: {
    meta: {
      title: 'DEFAULT TITLE',
      description: 'DEFAULT DESCRIPTION',
    },
    inputField: {
      passwordToggle: 'Toggle password visibility',
    },
  },
  login: {
    meta: {
      title: 'Login Page',
      description: 'Log in to your account',
    },
    form: {
      socialLoginGithub: 'Login with Github',
      socialLoginGoogle: 'Login with Google',
      socialLoginTwitter: 'Login with Twitter',
      title: 'Login to your account',
      registerLabel: 'Dont have account?',
      registerLink: 'Sign up here',
      forgotPasswordLabel: 'Forgot password?',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      submitButton: 'Login',
      seperatorLabel: 'or',
      emailRequired: 'Please enter your email',
      emailValid: 'Please enter a valid email',
      passwordRequired: 'Please enter your password',
      loginError: 'Invalid Login',
      emailNotVerified: 'Email not verified',
      emailNotVerifiedLink: 'Click here to resend verification email',
      emailVerified: 'Email successfully verified, you may now login',
    },
  },
  register: {
    meta: {
      title: 'Register Page',
      description: 'Register for a new account',
    },
    form: {
      title: 'Create a new account',
      loginLabel: 'Already registered?',
      loginLink: 'Log in here',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      passwordConfirmLabel: 'Confirm Password',
      passwordConfirmPlaceholder: 'Enter your password again',
      submitButton: 'Register',
      emailRequired: 'Please enter your email',
      emailValid: 'Please enter a valid email',
      success: 'You have successfully registered. Please check your email to confirm your account.',
      successReturn: 'Click here to return to the login page',
    },
  },
  forgotPassword: {
    meta: {
      title: 'Forgot Password',
      description: 'Forgot Password',
    },
    form: {
      title: 'Forgot Password',
      description: "Enter your email address below and we'll send you a link to reset your password.",
      loginLink: 'Back to login',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      submitButton: 'Reset Password',
      emailRequired: 'Please enter your email',
      emailValid: 'Please enter a valid email',
      success:
        'If the email you entered is associated with an account, you will receive an email with a link to reset your password.',
      successReturn: 'Click here to return to the login page',
    },
  },
  resetPassword: {
    meta: {
      title: 'Reset Password',
      description: 'Reset Password',
    },
    form: {
      title: 'Reset Password',
      description: 'Enter your new password below.',
      passwordLabel: 'New Password',
      passwordPlaceholder: 'Enter your new password',
      passwordConfirmLabel: 'Confirm Password',
      passwordConfirmPlaceholder: 'Enter your new password again',
      submitButton: 'Reset Password',
    },
  },
  passwordValidation: {
    required: 'Please enter your password',
    minError: 'Password must be at least {min:number} characters',
    maxError: 'Password must be at most {max:number} characters',
    lowerCaseError: 'Password must contain at least one lowercase letter',
    uppercaseCaseError: 'Password must contain at least one uppercase letter',
    numberError: 'Password must contain at least one number',
    specialError: 'Password must contain at least one special character',
    confirmRequired: 'Please confirm your password',
    confirmError: 'Passwords do not match',
  },
  changePassword: {
    form: {
      title: 'Change Password',
      description: 'Enter your current password and new password below.',
      currentPasswordLabel: 'Current Password',
      currentPasswordPlaceholder: 'Enter your current password',
      newPasswordLabel: 'New Password',
      newPasswordPlacehodler: 'Enter your new password',
      newPasswordConfirmLabel: 'Confirm New Password',
      newPasswordConfirmPlaceholder: 'Enter your new password again',
      submitButton: 'Change Password',
    },
  },
  emails: {
    confirmEmail: {
      subject: 'Confirm your email',
      text: 'Please click the link to confirm your email address. {link}',
      preview: 'Confirm your email address',
      heading: 'Thanks for registering!',
      button: 'Click here to confirm your email',
      subcopy:
        'This link and code will only be valid for the next 5 minutes. If the link does not work, you can copy this link and paste it into your browser',
      footerLink: 'Saas Name',
    },
    forgotPassword: {
      subject: 'Reset your password',
      text: 'Please click the link to reset your password. {link}',
      preview: 'Reset your password',
      heading: 'Reset your password',
      body: "Someone has requested a link to change your password. You can do this through the button below. If you didn't request this, please ignore this email.",
      button: 'Click here to reset your password',
      subcopy:
        'This link and code will only be valid for the next 5 minutes. If the link does not work, you can copy this link and paste it into your browser',
      footerLink: 'Saas Name',
    },
  },
};

export default en;
