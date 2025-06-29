import { AiOutlineShoppingCart } from "react-icons/ai";

import { Badge, IconButton } from "./style";

export const CartIcon = () => {
  return (
    <IconButton size="3">
      <AiOutlineShoppingCart size={24} />
      <Badge radius="full" variant="solid" color="orange">
        3
      </Badge>
    </IconButton>
  );
};
