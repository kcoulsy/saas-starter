'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface SettingsHeadingProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    subtitle: string;
  }[];
}

export function SettingsHeading({ items }: SettingsHeadingProps) {
  const pathname = usePathname();

  const currentItem = items.find((item) => item.href === pathname);
  const title = currentItem?.title;
  const subtitle = currentItem?.subtitle;

  return (
    <div className="p-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
