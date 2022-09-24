import { useTranslation } from 'next-i18next';
import { capitalize } from '../../../../../utils/capitalize';
import IconGithub from '../../../../icons/github';
import IconGoogle from '../../../../icons/google';
import IconTwitter from '../../../../icons/twitter';

export interface SocialLoginButtonProps {
  type: 'google' | 'twitter' | 'github';
  onClick: () => void;
}

const SocialLoginButton = ({ type = 'google', onClick }: SocialLoginButtonProps) => {
  const { t } = useTranslation('login-form');
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
      <p className="text-base font-medium ml-4 text-gray-700">{t(`socialLogin${capitalize(type)}`)}</p>
    </button>
  );
};

export default SocialLoginButton;