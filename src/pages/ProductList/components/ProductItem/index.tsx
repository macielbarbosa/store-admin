import { Badge, Button, Heading } from "@radix-ui/themes";
import { Pencil2Icon, PlusCircledIcon } from "@radix-ui/react-icons";

import type { Product } from "@/models/product";
import { toCurrency } from "@/utils/toCurrency";

import { Actions, Card } from "./style";

interface Props {
  product: Product;
}

export const ProductItem = ({ product: { name, price, status } }: Props) => {
  const isActive = status === "active";

  return (
    <Card>
      <Heading size="4">{name}</Heading>
      <Heading color="blue">{toCurrency(price)}</Heading>
      <Badge color={isActive ? "green" : "red"}>
        {isActive ? "Ativo" : "Inativo"}
      </Badge>
      <Actions>
        <Button disabled={status === "inactive"}>
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
