import { getServerSession } from 'next-auth';
import { authOptions } from '@src/app/api/auth/[...nextauth]/route';
import {
  createCheckoutLink,
  findOrCreateStripeCustomer,
  getCustomerPortalLink,
  getUserSubscriptions,
} from '@src/server/services/stripe.service';
import { env } from '@src/env/server.mjs';
import { redirectIfNotLoggedIn } from '../../utils';
import { PlanDetails } from './_components/PlanDetails';
import NoSubscriptions from './_components/NoSubscriptions';

const SettingsSubscription = async () => {
  await redirectIfNotLoggedIn();
  const session = await getServerSession(authOptions);
  const customer = await findOrCreateStripeCustomer(session?.user?.id || '');
  const [subscription] = await getUserSubscriptions(customer.id);

  if (!subscription) {
    const hobbyPlanID = env.STRIPE_HOBBY_PLAN_ID;
    const hobbyPlanLink = await createCheckoutLink(customer.id, hobbyPlanID);
    return <NoSubscriptions subscribeLink={hobbyPlanLink.url || ''} />;
  }

  const portal = await getCustomerPortalLink(customer.id);

  return (
    <PlanDetails
      portalUrl={portal.url}
      planName={subscription.productName || ''}
      renewalDate={subscription.renewalDate || ''}
      price={subscription.price}
      status={subscription.status}
    />
  );
};

export default SettingsSubscription;
