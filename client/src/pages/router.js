import Home01 from "./Home01";
import MyReferrals from "./Referrals";
import Admin from "./Admin";

const routes = [
  { path: "/", component: <Home01 /> },
  { path: "/my-referrals", component: <MyReferrals /> }, 
  { path: "/admin/user-views/referrals", component: <Admin /> }
];

export default routes;
