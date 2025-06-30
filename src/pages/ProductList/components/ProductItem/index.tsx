import { Badge, Button, Heading } from "@radix-ui/themes";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useSnackbar } from "notistack";

import type { Product } from "@/models/product";
import { toCurrency } from "@/utils/toCurrency";
import { useCartState } from "@/state/cart";
import { Actions, Card } from "./style";
import { EditProductModal } from "../EditProductModal";

interface Props {
  product: Product;
}

export const ProductItem = ({
  product,
  product: { id, name, price, status },
}: Props) => {
  const { increaseItem } = useCartState();
  const { enqueueSnackbar } = useSnackbar();
  const isActive = status === "active";

  const addToCart = () => {
    increaseItem(id);
    enqueueSnackbar("Produto adicionado ao Carrinho.");
  };

  return (
    <Card>
      <Heading size="4">{name}</Heading>
      <Heading color="blue">{toCurrency(price)}</Heading>
      <Badge color={isActive ? "green" : "red"}>
        {isActive ? "Ativo" : "Inativo"}
      </Badge>
      <Actions>
        <Button disabled={status === "inactive"} onClick={addToCart}>
          <PlusCircledIcon />
          Adicionar ao Carrinho
        </Button>
        <EditProductModal product={product} />
      </Actions>
    </Card>
  );
};
