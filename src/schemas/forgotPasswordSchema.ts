import { z } from 'zod';
import { TranslationFunctions } from '@src/i18n/i18n-types';

const forgotPasswordSchema = (LL: TranslationFunctions) =>
  z.object({
    email: z
      .string({
        required_error: LL.forgotPassword.form.emailRequired(),
      })
      .min(1, { message: LL.forgotPassword.form.emailRequired() })
      .email(LL.forgotPassword.form.emailValid()),
  });

export default forgotPasswordSchema;
