import { z } from 'zod';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@src/constants/auth';
import { TranslationFunctions } from '@src/i18n/i18n-types';

const registerFormSchema = (LL: TranslationFunctions) =>
  z
    .object({
      email: z
        .string({
          required_error: LL.register.form.emailRequired(),
        })
        .min(1, { message: LL.register.form.emailRequired() })
        .email(LL.register.form.emailValid()),
      password: z
        .string({
          required_error: LL.register.form.passwordRequired(),
        })
        .min(1, { message: LL.register.form.passwordRequired() })
        .min(MIN_PASSWORD_LENGTH, { message: LL.register.form.passwordMinError({ min: MIN_PASSWORD_LENGTH }) })
        .max(MAX_PASSWORD_LENGTH, { message: LL.register.form.passwordMaxError({ max: MAX_PASSWORD_LENGTH }) })
        .regex(/^.*[a-z]/, { message: LL.register.form.passwordLowerCaseError() })
        .regex(/^.*[A-Z]/, { message: LL.register.form.passwordUppercaseCaseError() })
        .regex(/^.*[0-9]/, { message: LL.register.form.passwordNumberError() })
        .regex(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, { message: LL.register.form.passwordSpecialError() }),
      confirm: z
        .string({
          required_error: LL.register.form.confirmPasswordRequired(),
        })
        .min(1, { message: LL.register.form.confirmPasswordRequired() }),
    })
    .refine((data) => data.password === data.confirm, {
      message: LL.register.form.confirmPasswordError(),
      path: ['confirm'],
    });

export default registerFormSchema;
