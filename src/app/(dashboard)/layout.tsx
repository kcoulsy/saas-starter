import { PropsWithChildren } from 'react';
import DashboardNavbar from '@src/components/dashboard/navbar/DashboardNavbar';

const Layout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
};

export default Layout;
