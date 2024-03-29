import React from 'react';
import { Metadata } from 'next';

import { pageRoutes } from '@src/constants/routes';
import { SidebarNav } from './_components/SidebarNav';
import { SettingsHeading } from './_components/SettingsHeading';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
  {
    title: 'Account',
    subtitle: 'Update your profile and account settings.',
    href: pageRoutes.settings.account,
  },
  {
    title: 'Subscription',
    subtitle:
      'Your current subscription details are listed below. You can manage your subscription and payment details by clicking the "Manage" button.',
    href: pageRoutes.settings.subscription,
  },
  {
    title: 'Notifications',
    subtitle: 'Configure how you receive notifications.',
    href: pageRoutes.settings.notifications,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="space-y-6 p-4 pb-16 max-w-5xl mx-auto">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      </div>
      <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-300 h-[1px] w-full my-3" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 rounded-md border shadow p-4">
          <SettingsHeading items={sidebarNavItems} />
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-300 h-[1px] w-full my-3" />
          {children}
        </div>
      </div>
    </div>
  );
}
