'use client';

import { usePathname } from 'next/navigation';
import { pageRoutes } from '@src/constants/routes';
import Logo from '@src/components/common/logo';
import { cn } from '@src/utils/cn';
import UserMenu from './UserMenu';

const DashboardNavbar = async () => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b">
      <div className="py-5 md:py-3 container mx-auto px-6 flex items-center justify-between">
        <a href={pageRoutes.home} className="flex items-center">
          <Logo />
        </a>
        <div className="flex flex-row space-x-8 items-center">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href={pageRoutes.dashboard}
                className={cn(
                  'block py-2 pl-3 pr-4 text-white md:p-0',
                  pathname === pageRoutes.dashboard ? 'text-blue-700' : 'text-gray-800 hover:text-blue-700',
                )}
              >
                Dashboard
              </a>
            </li>
          </ul>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
