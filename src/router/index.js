import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Detail = lazy(() => import("@/views/detail"));
const Home = lazy(() => import("@/views/home"));
const Entire = lazy(() => import("@/views/entire"));
const NotFound = lazy(() => import("@/views/notfound"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routes;
