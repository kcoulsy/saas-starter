import { PropsWithChildren } from 'react';
// import { getServerSession } from 'next-auth';
import DashboardNavbar from '@src/app/(dashboard)/_components/navbar/DashboardNavbar';
// import { authOptions } from '@src/app/api/auth/[...nextauth]/route';
// import { findOrCreateStripeCustomer, getUserHasActiveSubscription } from '@src/server/services/stripe.service';
// import { redirectIfNotLoggedIn } from './utils';

const Layout = ({ children }: PropsWithChildren) => {
  // await redirectIfNotLoggedIn();
  // const session = await getServerSession(authOptions);
  // // TODO - we don't need to call this on every page load, should put the customerID in the session
  // const customer = await findOrCreateStripeCustomer(session?.user?.id || '');
  // const isFreePlan = await getUserHasActiveSubscription(customer.id);

  return (
    <>
      <DashboardNavbar isFreePlan={false} />
      {children}
    </>
  );
};

export default Layout;
