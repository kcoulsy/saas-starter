import DashboardNavbar from '@src/components/dashboard/navbar/DashboardNavbar';
import SettingsTabs from '@src/components/dashboard/settingsTabs/SettingsTabs';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Dashboard = () => {
  const { status } = useSession();

  return (
    <div>
      <DashboardNavbar />
      <div className="container mx-auto">
        <SettingsTabs />
      </div>
    </div>
  );
};

export default Dashboard;
