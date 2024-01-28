import Button from '@src/ui/button/Button';
import { capitalize } from '@src/utils/capitalize';

interface PlanCardProps {
  plan: {
    name: string;
    price: {
      currency: string;
      amount: number;
    };
    features: string[];
  };
  onSelectPlan?: () => void;
}

export default function PlanCard({ plan, onSelectPlan }: PlanCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <h2 className="text-2xl font-bold">{`${capitalize(plan.name)} Plan`}</h2>
      <p className="text-4xl font-bold">{`${plan.price.currency}${plan.price.amount}`}</p>
      <ul className="list-disc list-inside flex-1 my-2">
        {plan.features.map((feature) => (
          <li>{feature}</li>
        ))}
        <li>10 Users</li>
        <li>2 GB Storage</li>
        <li>Email Support</li>
        <li>Help Center Access</li>
      </ul>
      <Button type="button" label="Choose Plan" onClick={onSelectPlan} />
    </div>
  );
}
