import { createBrowserRouter } from "react-router";

import { Layout } from "./components/Layout";
import { ProductList } from "./pages/ProductList";
import { CartPage } from "./pages/CartPage";

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
        Component: CartPage,
      },
    ],
  },
]);
