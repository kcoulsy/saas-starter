import { SocialLoginButtonProps } from './SocialLoginButton';

const google: SocialLoginButtonProps = {
  type: 'google',
  onClick: () => alert('Login with google'),
};

const twitter: SocialLoginButtonProps = {
  type: 'twitter',
  onClick: () => alert('Login with twitter'),
};

const github: SocialLoginButtonProps = {
  type: 'github',
  onClick: () => alert('Login with github'),
};

export const mockSocialLoginButtonProps = {
  google,
  twitter,
  github,
};
