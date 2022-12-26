import { z } from 'zod';
import { TranslationFunctions } from '@src/i18n/i18n-types';

const loginFormSchema = (LL: TranslationFunctions) =>
  z.object({
    email: z
      .string({
        required_error: LL.login.form.emailRequired(),
      })
      .email(LL.login.form.emailValid()),
    password: z
      .string({
        required_error: LL.login.form.passwordRequired(),
      })
      .min(1, { message: LL.login.form.passwordRequired() }),
  });

export default loginFormSchema;
