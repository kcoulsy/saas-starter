import AuthPagesLayout from '@src/components/layouts/AuthPagesLayout';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <AuthPagesLayout>{children}</AuthPagesLayout>;
};

export default Layout;
