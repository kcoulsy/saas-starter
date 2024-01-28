import { capitalize } from '@src/utils/capitalize';
import Link from '@src/ui/link/Link';

interface PlanDetailsProps {
  portalUrl: string;
  planName: string;
  price: {
    currency: string;
    amount: number;
    interval: string;
  };
  renewalDate: string;
  status: string;
}

export function PlanDetails({ portalUrl, planName, price, renewalDate, status }: PlanDetailsProps) {
  return (
    <div className="p-3">
      <dl className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8">
        <div>
          <dt className="text-sm font-medium text-gray-500">Subscription Plan</dt>
          <dd className="mt-1 text-sm text-gray-900">{planName}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Price</dt>
          <dd className="mt-1 text-sm text-gray-900">{`${price.currency}${price.amount}/${price.interval}`}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Renewal date</dt>
          <dd className="mt-1 text-sm text-gray-900">{renewalDate}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Status</dt>
          <dd className="mt-1 text-sm text-gray-900">{capitalize(status)}</dd>
        </div>
      </dl>
      <div className="mt-5">
        <Link variant="button-primary" href={portalUrl} className="w-fit">
          Manage
        </Link>
      </div>
    </div>
  );
}
