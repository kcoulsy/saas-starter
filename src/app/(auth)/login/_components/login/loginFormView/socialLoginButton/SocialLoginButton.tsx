import { useI18nContext } from '@src/i18n/i18n-react';
import IconGithub from '@src/ui/icons/github';
import IconGoogle from '@src/ui/icons/google';
import IconTwitter from '@src/ui/icons/twitter';
import { capitalize } from '@src/utils/capitalize';

export interface SocialLoginButtonProps {
  type: 'google' | 'twitter' | 'github';
  onClick: () => void;
}

const SocialLoginButton = ({ type = 'google', onClick }: SocialLoginButtonProps) => {
  const { LL } = useI18nContext();

  return (
    <button
      type="button"
      aria-label="Continue with google"
      className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
      onClick={onClick}
    >
      {(() => {
        switch (type) {
          case 'google':
            return <IconGoogle />;
          case 'twitter':
            return <IconTwitter />;
          case 'github':
            return <IconGithub />;
          default:
            return null;
        }
      })()}
      <p className="text-base font-medium ml-4 text-gray-700">{LL.login.form[`socialLogin${capitalize(type)}`]()}</p>
    </button>
  );
};

export default SocialLoginButton;
