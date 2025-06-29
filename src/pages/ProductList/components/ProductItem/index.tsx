import { Badge, Button, Heading } from "@radix-ui/themes";
import { Pencil2Icon, PlusCircledIcon } from "@radix-ui/react-icons";

import type { Product } from "@/models/product";
import { toCurrency } from "@/utils/toCurrency";

import { Actions, Card } from "./style";
import { useCartState } from "@/state/cart";

interface Props {
  product: Product;
}

export const ProductItem = ({
  product: { id, name, price, status },
}: Props) => {
  const { increaseItem } = useCartState();
  const isActive = status === "active";

  return (
    <Card>
      <Heading size="4">{name}</Heading>
      <Heading color="blue">{toCurrency(price)}</Heading>
      <Badge color={isActive ? "green" : "red"}>
        {isActive ? "Ativo" : "Inativo"}
      </Badge>
      <Actions>
        <Button
          disabled={status === "inactive"}
          onClick={() => increaseItem(id)}
        >
          <PlusCircledIcon />
          Adicionar ao Carrinho
        </Button>
        <Button variant="soft">
          <Pencil2Icon /> Editar
        </Button>
      </Actions>
    </Card>
  );
};
