import Home from "../pages/home";
import Flight from "../pages/flight";
import ErrorPage from "./errorpage";
import Vouchers from "../pages/voucher";

const ROUTESDATA = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flight",
    element: <Flight />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vouchers",
    element: <Vouchers />,
    errorElement: <ErrorPage />,
  },
];

export default ROUTESDATA;
