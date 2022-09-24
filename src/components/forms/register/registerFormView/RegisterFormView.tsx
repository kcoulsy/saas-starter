// import styles from './RegisterFormView.module.scss';

export interface RegisterFormViewProps {
  example?: string;
}

const RegisterFormView = ({ example = 'test' }: RegisterFormViewProps) => {
  return (
    <div className="bg-white shadow rounded w-full p-10">
      <span>{example}</span>
    </div>
  );
};

export default RegisterFormView;
