import { redirectIfNotLoggedIn } from '../utils';

const Dashboard = async () => {
  await redirectIfNotLoggedIn();

  return <div className="container mx-auto">Dashboard page</div>;
};

export default Dashboard;
