import { GetServerSideProps } from 'next';
import { verifyToken } from '@src/server/services/verification.service';

export default function Verify() {
  return <div>Verifying...</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { token, email } = query;

  try {
    const user = await verifyToken(token as string);
    if (user) {
      return {
        redirect: {
          destination: '/login?verified=true',
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
  return {
    redirect: {
      destination: `/login?verified=false&email=${email}`,
      permanent: false,
    },
  };
};
