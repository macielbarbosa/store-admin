import { createBrowserRouter } from "react-router";

import { Layout } from "./components/Layout";
import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: ProductList,
      },
      {
        path: "cart",
        Component: Cart,
      },
    ],
  },
]);
