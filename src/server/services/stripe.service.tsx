import Stripe from 'stripe';
import getSymbolFromCurrency from 'currency-symbol-map';
import { env } from '@src/env/server.mjs';
import { prisma } from '../db/client';

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function createCustomer(email: string) {
  const customer = await stripe.customers.create({
    email,
  });

  return customer;
}

export async function getUserSubscriptions(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
  });

  return Promise.all(
    subscriptions?.data?.map(async (subscription) => {
      const product = await stripe.products.retrieve((subscription.items.data[0]?.price.product as string) || '');
      const renewalDate = new Date(subscription.current_period_end * 1000);
      const amount = subscription.items.data[0]?.price.unit_amount || 0;

      return {
        id: subscription.id,
        status: subscription.status,
        price: {
          amount: amount / 100,
          currency: getSymbolFromCurrency(subscription.items.data[0]?.price.currency.toUpperCase() || '') || '',
          interval: subscription.items.data[0]?.price.recurring?.interval || '',
        },
        renewalDate: renewalDate.toDateString(),
        productName: product.name,
      };
    }),
  );
}

export async function getUserHasActiveSubscription(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
  });

  return subscriptions?.data?.some((subscription) => subscription.status === 'active');
}

export async function createCheckoutLink(customerId: string, priceId: string) {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card', 'paypal'],
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${env.NEXTAUTH_URL}/dashboard`,
    cancel_url: `${env.NEXTAUTH_URL}/pricing`,
  });

  return session;
}

export async function findOrCreateStripeCustomer(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) throw new Error('User not found');

  if (user.stripeCustomerId) {
    const customer = await stripe.customers.retrieve(user.stripeCustomerId);
    return customer;
  }

  const customer = await createCustomer(user.email);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      stripeCustomerId: customer.id,
    },
  });

  return customer;
}

export async function getCustomerPortalLink(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${env.NEXTAUTH_URL}/dashboard`,
  });

  return session;
}
