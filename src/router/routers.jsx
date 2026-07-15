import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
