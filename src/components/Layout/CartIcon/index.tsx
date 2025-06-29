import { AiOutlineShoppingCart } from "react-icons/ai";

import { useCartState } from "@/state/cart";
import { Badge, IconButton } from "./style";

export const CartIcon = () => {
  const { totalItems } = useCartState();

  return (
    <IconButton size="3">
      <AiOutlineShoppingCart size={24} />
      <Badge radius="full" variant="solid" color="orange">
        {totalItems}
      </Badge>
    </IconButton>
  );
};
