import { useSnackbar } from "notistack";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Heading, IconButton, Text } from "@radix-ui/themes";

import { toCurrency } from "@/utils/toCurrency";
import { useCartState } from "@/state/cart";
import { Actions, Quantity, Root, Total } from "./style";
import { productsAtom } from "@/state/products";
import type { CartItem as ICartItem } from "@/models/cart";
import { useAtomValue } from "jotai";

interface Props {
  item: ICartItem;
}

export const CartItem = ({ item: { id, quantity } }: Props) => {
  const { increaseItem, decreaseItem, removeItem } = useCartState();
  const products = useAtomValue(productsAtom);
  const { price, name } = products.find((product) => product.id === id)!;

  const total = price * quantity;
  const { enqueueSnackbar } = useSnackbar();

  const remove = () => {
    removeItem(id);
    enqueueSnackbar("Produto removido do Carrinho.");
  };

  return (
    <Root>
      <div>
        <Heading size="4" mb="2">
          {name}
        </Heading>
        <Text>{toCurrency(price)}</Text>
      </div>
      <Quantity>
        <Text>Quant.</Text>
        <Text weight="medium">{quantity}</Text>
        <Actions>
          <IconButton
            variant="soft"
            disabled={quantity === 1}
            onClick={() => decreaseItem(id)}
          >
            <MinusIcon />
          </IconButton>
          <IconButton variant="soft" onClick={() => increaseItem(id)}>
            <PlusIcon />
          </IconButton>
          <IconButton color="red" onClick={remove}>
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
