'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@src/utils/cn';
import { pageRoutes } from '@src/constants/routes';

const DropdownItem = ({
  children,
  ...props
}: DropdownMenu.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>) => (
  <DropdownMenu.Item
    className="group text-[13px] leading-none text-gray-900 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-2 select-none outline-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-400 data-[highlighted]:text-white"
    {...props}
  >
    {children}
  </DropdownMenu.Item>
);

const UserMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            CT
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          )}
          sideOffset={5}
        >
          <DropdownItem asChild>
            <Link href={pageRoutes.dashboard}>Dashboard</Link>
          </DropdownItem>
          <DropdownItem asChild>
            <Link href={pageRoutes.settings.account}>Account Settings</Link>
          </DropdownItem>
          <DropdownItem disabled>Profile</DropdownItem>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownItem
            onClick={() => {
              signOut({
                callbackUrl: pageRoutes.login,
              });
            }}
          >
            Sign out
          </DropdownItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default UserMenu;
