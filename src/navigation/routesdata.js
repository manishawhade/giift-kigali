import Home from "../pages/home";
import Flight from "../pages/flight";
import ErrorPage from "./errorpage";
import Vouchers from "../pages/voucher";
import Hotel from "../pages/hotel";
import AirTime from "../pages/airtime";
import RedeemPage from "../pages/airtime/redeempage";
import Shop from "../pages/shop";
import Login from "../pages/login";
import FlightResult from "../pages/flightResult";

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
    path: "/hotel",
    element: <Hotel />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vouchers",
    element: <Vouchers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flightResult",
    element: <FlightResult />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/airtime",
    element: <AirTime />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/airtime/:id",
    element: <RedeemPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
];

export default ROUTESDATA;
