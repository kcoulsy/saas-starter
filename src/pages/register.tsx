import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import AuthPagesLayout from '../components/layouts/AuthPagesLayout';

const RegisterPage = () => {
  return (
    <div>
      <Link href="/login">
        <span
          tabIndex={0}
          role="link"
          className="text-sm font-medium leading-none underline ml-1 text-gray-800 cursor-pointer"
        >
          Back to login
        </span>
      </Link>
    </div>
  );
};

RegisterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AuthPagesLayout>{page}</AuthPagesLayout>;
};

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale as string, ['common', 'login-form'])),
//     // Will be passed to the page component as props
//   },
// });

export default RegisterPage;
