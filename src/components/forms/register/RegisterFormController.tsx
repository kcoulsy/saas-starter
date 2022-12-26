import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { trpc } from '@src/utils/trpc';
import { useI18nContext } from '@src/i18n/i18n-react';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@src/constants/auth';
import RegisterFormView from './registerFormView/RegisterFormView';
import RegisterSuccessView from './registerSuccessView/RegisterSuccessView';
import type { TranslationFunctions } from '@src/i18n/i18n-types';

const formSchema = (LL: TranslationFunctions) =>
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

type RegisterFormFields = z.infer<ReturnType<typeof formSchema>>;

const RegisterFormController = () => {
  const { LL } = useI18nContext();
  const [registerError, setRegisterError] = useState<string | undefined>(undefined);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const mutation = trpc.auth.createUser.useMutation({ onSuccess: () => setRegisterSuccess(true) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(formSchema(LL)),
  });

  const onSubmit = async (data: RegisterFormFields) => {
    try {
      await mutation.mutate({ email: data.email, password: data.password });
    } catch (error) {
      setRegisterError('Unable to register');
    }
  };

  const formErrors = {
    email: errors.email?.message ? [errors.email.message] : undefined,
    password: errors.password?.message ? [errors.password.message] : undefined,
    confirm: errors.confirm?.message ? [errors.confirm.message] : undefined,
    register: registerError,
  };

  if (registerSuccess) {
    return <RegisterSuccessView />;
  }

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
