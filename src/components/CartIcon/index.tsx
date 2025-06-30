import { useNavigate } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useCartState } from "@/state/cart";
import { Badge, IconButton } from "./style";

export const CartIcon = () => {
  const { totalItems } = useCartState();
  const navigate = useNavigate();

  return (
    <IconButton size="3" onClick={() => navigate("cart")}>
      <AiOutlineShoppingCart size={24} />
      <Badge radius="full" variant="solid" color="orange">
        {totalItems}
      </Badge>
    </IconButton>
  );
};
