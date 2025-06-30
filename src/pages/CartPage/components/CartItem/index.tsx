import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Heading, IconButton, Text } from "@radix-ui/themes";

import type { Product } from "@/models/product";
import { toCurrency } from "@/utils/toCurrency";
import { useCartState } from "@/state/cart";
import { Actions, Quantity, Root, Total } from "./style";

interface Props {
  product: Product;
}

export const CartItem = ({ product: { id, name, price } }: Props) => {
  const { cart, increaseItem, decreaseItem, removeItem } = useCartState();
  const item = cart.find((item) => item.id === id)!;
  const total = price * item.quantity;

  return (
    <Root>
      <div>
        <Heading>{name}</Heading>
        <Text>{toCurrency(price)}</Text>
      </div>
      <Quantity>
        <Text>Quant.</Text>
        <Text weight="medium">{item.quantity}</Text>
        <Actions>
          <IconButton
            variant="soft"
            disabled={item.quantity === 1}
            onClick={() => decreaseItem(id)}
          >
            <MinusIcon />
          </IconButton>
          <IconButton variant="soft" onClick={() => increaseItem(id)}>
            <PlusIcon />
          </IconButton>
          <IconButton color="red" onClick={() => removeItem(id)}>
            <TrashIcon />
          </IconButton>
        </Actions>
      </Quantity>
      <Total>
        <Text>Total:</Text>
        <Text weight="medium" color="blue">
          {toCurrency(total)}
        </Text>
      </Total>
    </Root>
  );
};
