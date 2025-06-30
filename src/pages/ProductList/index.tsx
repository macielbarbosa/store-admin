import { useSWRProducts } from "@/hooks/useSWRProducts";
import { ProductItem } from "./components/ProductItem";
import { Root } from "./style";

export const ProductList = () => {
  const { data: products } = useSWRProducts();

  return (
    <Root>
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Root>
  );
};
