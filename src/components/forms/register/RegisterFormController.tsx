import RegisterFormView from './registerFormView/RegisterFormView';

const RegisterFormController = () => {
  return (
    <form onSubmit={() => console.log('submit')} className="lg:w-1/3 md:w-1/2 w-full">
      <RegisterFormView />
    </form>
  );
};

export default RegisterFormController;
