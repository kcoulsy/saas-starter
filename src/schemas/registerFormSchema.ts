import { TFunction } from 'next-i18next';
import { z } from 'zod';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@src/constants/auth';

const registerFormSchema = (t: TFunction) =>
  z
    .object({
      email: z
        .string({
          required_error: t('registerFormEmailRequired'),
        })
        .min(1, { message: t('registerFormEmailRequired') })
        .email(t('registerFormEmailValid')),
      password: z
        .string({
          required_error: t('registerFormPasswordRequired'),
        })
        .min(1, { message: t('registerFormPasswordRequired') })
        .min(MIN_PASSWORD_LENGTH, { message: t('registerFormPasswordMinError', { min: MIN_PASSWORD_LENGTH }) })
        .max(MAX_PASSWORD_LENGTH, { message: t('registerFormPasswordMaxError', { max: MAX_PASSWORD_LENGTH }) })
        .regex(/^.*[a-z]/, { message: t('registerFormPasswordLowerCaseError') })
        .regex(/^.*[A-Z]/, { message: t('registerFormPasswordUppercaseCaseError') })
        .regex(/^.*[0-9]/, { message: t('registerFormPasswordNumberError') })
        .regex(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, { message: t('registerFormPasswordSpecialError') }),
      confirm: z
        .string({
          required_error: t('registerFormConfirmPasswordRequired'),
        })
        .min(1, { message: t('registerFormConfirmPasswordRequired') }),
    })
    .refine((data) => data.password === data.confirm, {
      message: t('registerFormConfirmPasswordError'),
      path: ['confirm'],
    });

export default registerFormSchema;
