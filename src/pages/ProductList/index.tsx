import useSWR from "swr";

import { fetchProducts } from "../../services/fetchers";
import type { Product } from "../../models/product";

import { ProductItem } from "./components/ProductItem";
import { Root } from "./style";

export const ProductList = () => {
  const { data: products } = useSWR<Product[]>("products", fetchProducts);

  return (
    <Root>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Root>
  );
};
