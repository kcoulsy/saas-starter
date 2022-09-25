import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'next-i18next';
import { z } from 'zod';
import RegisterFormView from './registerFormView/RegisterFormView';

const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 100;

const formSchema = (t: TFunction) =>
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

type RegisterFormFields = z.infer<ReturnType<typeof formSchema>>;

const RegisterFormController = () => {
  const { t } = useTranslation('register-form');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(formSchema(t)),
  });

  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    confirm: errors.confirm?.message ? [errors.confirm.message] : undefined,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/3 md:w-1/2 w-full">
      <RegisterFormView
        registerEmail={register('email')}
        registerPassword={register('password')}
        registerConfirmPassword={register('confirm')}
        errors={formErrors}
      />
    </form>
  );
};

export default RegisterFormController;
