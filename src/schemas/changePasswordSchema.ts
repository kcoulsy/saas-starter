import { z } from 'zod';
import { TranslationFunctions } from '@src/i18n/i18n-types';
import passwordSchema from './passwordSchema';

export const changePasswordSchema = (LL: TranslationFunctions) =>
  z
    .object({
      currentPassword: z.string().min(1, {
        message: LL.passwordValidation.required(),
      }),
      newPassword: passwordSchema(LL),
      confirmNewPassword: z.string({
        required_error: LL.passwordValidation.required(),
      }),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: LL.passwordValidation.confirmError(),
      path: ['confirmNewPassword'],
    });
