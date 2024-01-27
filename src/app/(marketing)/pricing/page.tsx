import PlanCard from '@src/components/pricing/PlanCard/PlanCard';

export default function Component() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <PlanCard
        plan={{
          name: 'free',
          price: {
            currency: '$',
            amount: 0,
          },
          features: ['10 Users', '2 GB Storage', 'Email Support', 'Help Center Access'],
        }}
      />
      <PlanCard
        plan={{
          name: 'hobby',
          price: {
            currency: '$',
            amount: 9,
          },
          features: ['100 Users', '10 GB Storage', 'Email Support', 'Help Center Access', 'Priority Email Support'],
        }}
      />
      <PlanCard
        plan={{
          name: 'pro',
          price: {
            currency: '$',
            amount: 49,
          },
          features: [
            'Unlimited Users',
            'Unlimited Storage',
            'Email Support',
            'Help Center Access',
            'Priority Email Support',
            'Dedicated Support',
          ],
        }}
      />
    </div>
  );
}
