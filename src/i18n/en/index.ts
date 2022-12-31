import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
  common: {
    inputField: {
      passwordToggle: 'Toggle password visibility',
    },
  },
  login: {
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
};

export default en;
