import { z } from 'zod';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@src/constants/auth';
import { TranslationFunctions } from '@src/i18n/i18n-types';

const passwordSchema = (LL: TranslationFunctions) =>
  z
    .string({
      required_error: LL.passwordValidation.required(),
    })
    .min(1, { message: LL.passwordValidation.required() })
    .min(MIN_PASSWORD_LENGTH, { message: LL.passwordValidation.minError({ min: MIN_PASSWORD_LENGTH }) })
    .max(MAX_PASSWORD_LENGTH, { message: LL.passwordValidation.maxError({ max: MAX_PASSWORD_LENGTH }) })
    .regex(/^.*[a-z]/, { message: LL.passwordValidation.lowerCaseError() })
    .regex(/^.*[A-Z]/, { message: LL.passwordValidation.uppercaseCaseError() })
    .regex(/^.*[0-9]/, { message: LL.passwordValidation.numberError() })
    .regex(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, { message: LL.passwordValidation.specialError() });

export default passwordSchema;
