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
      title: 'Login or Sign up Page',
      description: 'Login or Sign up for an account',
    },
    form: {
      emailSuccess: 'An email has been sent to your inbox',
      emailSuccessSubcopy: 'Please visit the link in the email to sign in',
      socialLoginGithub: 'Login with Github',
      socialLoginGoogle: 'Login with Google',
      socialLoginTwitter: 'Login with Twitter',
      title: 'Login or Sign up',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      submitButton: 'Login or Sign up',
      seperatorLabel: 'or',
      emailRequired: 'Please enter your email',
      emailValid: 'Please enter a valid email',
      passwordRequired: 'Please enter your password',
      loginError: 'Invalid Login',
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
