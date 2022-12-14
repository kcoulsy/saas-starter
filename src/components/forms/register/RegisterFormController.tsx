import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { z } from 'zod';
import { trpc } from '@src/utils/trpc';
import registerFormSchema from '@src/schemas/registerFormSchema';
import RegisterFormView from './registerFormView/RegisterFormView';
import RegisterSuccessView from './registerSuccessView/RegisterSuccessView';

type RegisterFormFields = z.infer<ReturnType<typeof registerFormSchema>>;

const RegisterFormController = () => {
  const { t } = useTranslation('register-form');
  const [registerError, setRegisterError] = useState<string | undefined>(undefined);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const mutation = trpc.auth.createUser.useMutation({ onSuccess: () => setRegisterSuccess(true) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(registerFormSchema(t)),
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
