'use client';

import * as Label from '@radix-ui/react-label';
import * as Switch from '@radix-ui/react-switch';
import Button from '@src/components/common/button/Button';
import { cn } from '@src/utils/cn';

const NotificationForm = () => {
  return (
    <form action="" className="space-y-4">
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label.Root
            className={cn(
              'text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              false && 'text-destructive',
            )}
            htmlFor="marketing-emails"
          >
            Communication emails
          </Label.Root>
          <p className={cn('text-[0.8rem] text-muted-foreground')}>Receive emails about your account activity.</p>
        </div>
        <Switch.Root className="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-indigo-700 data-[state=unchecked]:bg-gray-300">
          <Switch.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
        </Switch.Root>
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label.Root
            className={cn(
              'text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              false && 'text-destructive',
            )}
            htmlFor="security-emails"
          >
            Security emails
          </Label.Root>
          <p className={cn('text-[0.8rem] text-muted-foreground')}>
            Receive emails about your account security and privacy.
          </p>
        </div>
        <Switch.Root
          className="peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-indigo-700 data-[state=unchecked]:bg-gray-300"
          checked
          disabled
          aria-readonly
        >
          <Switch.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
        </Switch.Root>
      </div>
      <div className="flex justify-end">
        <Button label="Update preferences" type="submit" classes="w-fit px-4" />
      </div>
    </form>
  );
};

export default NotificationForm;
