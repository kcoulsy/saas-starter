import DashboardNavbar from '@src/components/dashboard/navbar/DashboardNavbar';
import SettingsTabs from '@src/components/dashboard/settingsTabs/SettingsTabs';

const Dashboard = () => {
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
