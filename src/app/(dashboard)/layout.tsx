import { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';
import DashboardNavbar from '@src/components/dashboard/navbar/DashboardNavbar';
import { authOptions } from '@src/pages/api/auth/[...nextauth]';
import { findOrCreateStripeCustomer, getUserHasActiveSubscription } from '@src/server/services/stripe.service';

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);
  // TODO - we don't need to call this on every page load, should put the customerID in the session
  const customer = await findOrCreateStripeCustomer(session?.user?.id || '');
  const isFreePlan = await getUserHasActiveSubscription(customer.id);

  return (
    <>
      <DashboardNavbar isFreePlan={isFreePlan} />
      {children}
    </>
  );
};

export default Layout;
