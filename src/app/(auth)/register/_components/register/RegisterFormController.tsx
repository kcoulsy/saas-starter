'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import registerFormSchema from '@src/schemas/registerFormSchema';
import { registerUser } from '@src/server/services/auth.service';
import { useI18nContext } from '@src/i18n/i18n-react';
import RegisterFormView from './registerFormView/RegisterFormView';
import RegisterSuccessView from './registerSuccessView/RegisterSuccessView';

type RegisterFormFields = z.infer<ReturnType<typeof registerFormSchema>>;

const RegisterFormController = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { LL } = useI18nContext();
  const [registerError, setRegisterError] = useState<string | undefined>(undefined);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(registerFormSchema(LL)),
  });

  const onSubmit = async (data: RegisterFormFields) => {
    try {
      setIsRegistering(true);
      const { success } = await registerUser({
        email: data.email,
        password: data.password,
      });

      if (!success) {
        throw new Error('Unable to register');
      }

      setRegisterSuccess(true);
    } catch (error) {
      setRegisterError('Unable to register');
    }
    setIsRegistering(false);
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
        isRegistering={isRegistering}
      />
    </form>
  );
};

export default RegisterFormController;
