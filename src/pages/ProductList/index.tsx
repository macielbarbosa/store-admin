import useSWR from "swr";

import { fetchProducts } from "../../services/fetchers";

export const ProductList = () => {
  const { data: products } = useSWR("products", fetchProducts);

  console.log(products);

  return <div>Product List</div>;
};
