import Add from "../Pages/Admin/Add";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Home from "../Pages/Client/Home";
import MainRoot from "../Pages/Client/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Add />,
      },
    ],
  },
];
