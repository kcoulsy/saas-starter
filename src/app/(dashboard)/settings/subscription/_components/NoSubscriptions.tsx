import Link from '@src/components/common/link/Link';

interface NoSubscriptionsProps {
  subscribeLink: string;
}
export default function NoSubscriptions({ subscribeLink }: NoSubscriptionsProps) {
  return (
    <div className="p-3">
      <div className="grid gap-2">
        <h2 className="text-lg font-semibold">You are not subscribed yet.</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Subscribe to enjoy exclusive benefits and support our service.
        </p>
        <div className="flex gap-2 w-full mt-1">
          <Link variant="button-primary" href="/pricing">
            View Plans
          </Link>
          <Link variant="button-primary" href={subscribeLink}>
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
}
