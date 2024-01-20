import { z } from 'zod';
import { TranslationFunctions } from '@src/i18n/i18n-types';
import passwordSchema from './passwordSchema';

const registerFormSchema = (LL: TranslationFunctions) =>
  z
    .object({
      email: z
        .string({
          required_error: LL.register.form.emailRequired(),
        })
        .min(1, { message: LL.register.form.emailRequired() })
        .email(LL.register.form.emailValid()),
      password: passwordSchema(LL),
      confirm: z
        .string({
          required_error: LL.passwordValidation.confirmRequired(),
        })
        .min(1, { message: LL.passwordValidation.confirmRequired() }),
    })
    .refine((data) => data.password === data.confirm, {
      message: LL.passwordValidation.confirmError(),
      path: ['confirm'],
    });

export default registerFormSchema;
