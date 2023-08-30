import { createHashRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("@/components/Layout/index"));
const Setting = lazy(() => import("@/pages/setting"));
const FindMusic = lazy(() => import("@/pages/findMusic"));

const router = createHashRouter([
  // 路由重定向
  {
    path: "/",
    element: <Navigate to="/find" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/find",
        element: <FindMusic />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
