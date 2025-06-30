import { useLocation, useNavigate } from "react-router";
import { useAtomValue } from "jotai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { cartAtom } from "@/state/cart";
import { Badge, IconButton } from "./style";

export const CartIcon = () => {
  const cart = useAtomValue(cartAtom);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton
      size="3"
      onClick={() => {
        const isCartPage = pathname.includes("cart");
        if (!isCartPage) navigate("cart");
      }}
    >
      <AiOutlineShoppingCart size={24} />
      <Badge radius="full" variant="solid" color="orange">
        {totalItems}
      </Badge>
    </IconButton>
  );
};
