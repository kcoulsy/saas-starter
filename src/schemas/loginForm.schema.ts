import { TFunction } from 'next-i18next';
import { z } from 'zod';

const loginFormSchema = (t: TFunction) =>
  z.object({
    email: z
      .string({
        required_error: t('loginFormEmailRequired'),
      })
      .email(t('loginFormEmailValid')),
    password: z
      .string({
        required_error: t('loginFormPasswordRequired'),
      })
      .min(1, { message: t('loginFormPasswordRequired') }),
  });

export default loginFormSchema;
