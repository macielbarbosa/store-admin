import { useCartState } from "@/state/cart";
import { useSWRProducts } from "@/hooks/useSWRProducts";
import { CartItem } from "./components/CartItem";
import { Items, Root } from "./style";

export const CartPage = () => {
  const { cart } = useCartState();
  const cartIds = cart.map((item) => item.id);
  const { data: products } = useSWRProducts(cartIds);

  return (
    <Root>
      <Items>
        {products?.map((product) => (
          <CartItem product={product} />
        ))}
      </Items>
    </Root>
  );
};
