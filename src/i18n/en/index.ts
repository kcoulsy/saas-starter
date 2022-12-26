import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
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
      passwordRequired: 'Please enter your password',
      passwordMinError: 'Password must be at least {min:number} characters',
      passwordMaxError: 'Password must be at most {max:number} characters',
      passwordLowerCaseError: 'Password must contain at least one lowercase letter',
      passwordUppercaseCaseError: 'Password must contain at least one uppercase letter',
      passwordNumberError: 'Password must contain at least one number',
      passwordSpecialError: 'Password must contain at least one special character',
      confirmPasswordRequired: 'Please confirm your password',
      confirmPasswordError: 'Passwords do not match',
      success: 'You have successfully registered. Please check your email to confirm your account.',
      successReturn: 'Click here to return to the login page',
    },
  },
};

export default en;
