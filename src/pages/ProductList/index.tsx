import useSWR from "swr";

import { fetchProducts } from "@/services/fetchers";

import { ProductItem } from "./components/ProductItem";
import { Root } from "./style";

export const ProductList = () => {
  const { data: products } = useSWR("products", fetchProducts);

  return (
    <Root>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Root>
  );
};
