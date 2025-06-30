import { useCartState } from "@/state/cart";
import { useSWRProducts } from "@/hooks/useSWRProducts";
import { CartItem } from "./components/CartItem";
import { Items, Root } from "./style";

export const CartPage = () => {
  const { isInCart } = useCartState();
  const { data: products } = useSWRProducts();
  const cartProducts = products?.filter((product) => isInCart(product.id));

  return (
    <Root>
      <Items>
        {cartProducts?.map((product) => (
          <CartItem product={product} />
        ))}
      </Items>
    </Root>
  );
};
