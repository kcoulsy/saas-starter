import { getServerSession } from 'next-auth';
import {
  createCheckoutLink,
  findOrCreateStripeCustomer,
  getCustomerPortalLink,
  getUserSubscriptions,
} from '@src/server/services/stripe.service';
import { env } from '@src/env/server.mjs';
import { authOptions } from '@src/app/api/auth/[...nextauth]/route';
import { redirectIfNotLoggedIn } from '../utils';

const Dashboard = async () => {
  await redirectIfNotLoggedIn();
  const session = await getServerSession(authOptions);
  const customer = await findOrCreateStripeCustomer(session?.user?.id || '');
  const subscriptions = await getUserSubscriptions(customer.id);

  if (!subscriptions.length) {
    const hobbyPlanID = env.STRIPE_HOBBY_PLAN_ID;
    const hobbyPlanLink = await createCheckoutLink(customer.id, hobbyPlanID);
    return (
      <div className="container mx-auto">
        <h1>Dashboard</h1>
        <p>No subscriptions</p>
        {hobbyPlanLink.url ? <a href={hobbyPlanLink.url}>Subscribe now!</a> : null}
      </div>
    );
  }

  const portal = await getCustomerPortalLink(customer.id);

  return (
    <div className="container mx-auto">
      <h1>Dashboard</h1>
      <p>Subscriptions:</p>
      <ul>
        {subscriptions.map((sub) => (
          <li key={sub.id}>
            {sub.productName} - {sub.status}
          </li>
        ))}
      </ul>
      {portal.url ? <a href={portal.url}>Manage your subscriptions</a> : null}
    </div>
  );
};

export default Dashboard;
