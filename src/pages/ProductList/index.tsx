import { useSWRProducts } from "@/hooks/useSWRProducts";
import { useProductsState } from "@/state/products";
import { ProductItem } from "./components/ProductItem";
import { Root } from "./style";

export const ProductList = () => {
  useSWRProducts();
  const { products } = useProductsState();

  return (
    <Root>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Root>
  );
};
