import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/products",
        Component: Products,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/products/:id",
        Component: ProductDetails,
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const product = data.find((item) => item.id === parseInt(params.id));

          if (!product) {
            throw new Response("App not found", { status: 404 });
          }

          return product;
        },
      },
      {
        path: "/footer",
      },
    ],
  },
]);
