import { useForm } from 'react-hook-form';
import LoginFormView from './LoginFormView';
import { CredentialsLoginForm } from './types';

const LoginFormController = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CredentialsLoginForm>();
  const onSubmit = (data: CredentialsLoginForm) => {
    console.log(data);
    // return console.log(data);
  };

  console.log(watch('email')); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormView registerEmail={register('email')} registerPassword={register('password')} />
    </form>
  );
};

export default LoginFormController;
