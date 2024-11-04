import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppBase from "./base/AppBase";
import { Home, Meow } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBase />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "meow",
        element: <Meow />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
