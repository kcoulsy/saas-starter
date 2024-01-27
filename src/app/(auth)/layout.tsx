import { PropsWithChildren } from 'react';
import AuthPagesLayout from '@src/components/layouts/AuthPages/AuthPagesLayout';

const Layout = ({ children }: PropsWithChildren) => {
  return <AuthPagesLayout>{children}</AuthPagesLayout>;
};

export default Layout;
