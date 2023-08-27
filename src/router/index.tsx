import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy} from 'react'

const Layout = lazy(() => import("@/components/Layout/index"))
const Setting = lazy(() => import("@/pages/setting"))
const FindMusic = lazy(() => import("@/pages/findMusic"))
const SongListDetail = lazy(() => import("@/pages/findMusic/SongListDetail"))

const router = createBrowserRouter([
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
        path: '/songlistdetail/:id',
        element: <SongListDetail />
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  }
]);

export default router;
