import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { cn } from '@src/utils/cn';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'button-primary';
  href: string;
}

export default function Link({ variant, children, className, ...rest }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink
      {...rest}
      className={cn(
        {
          'text-sm font-semibold leading-none text-white focus:outline-none flex justify-center items-center h-10 px-4':
            variant === 'button-primary',
          'bg-indigo-700 border rounded hover:bg-indigo-600': variant === 'button-primary',
          'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700': variant === 'button-primary',
        },
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
