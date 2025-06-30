import { useSetAtom } from "jotai";
import { Badge, Button, Heading } from "@radix-ui/themes";
import { Pencil2Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useSnackbar } from "notistack";

import type { Product } from "@/models/product";
import { toCurrency } from "@/utils/toCurrency";
import { useCartState } from "@/state/cart";
import { editProductIdAtom } from "@/state/editProductId";
import { Actions, Card } from "./style";

interface Props {
  product: Product;
}

export const ProductItem = ({
  product: { id, name, price, status },
}: Props) => {
  const { increaseItem } = useCartState();
  const { enqueueSnackbar } = useSnackbar();
  const setProductEditId = useSetAtom(editProductIdAtom);
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
        <Button variant="soft" onClick={() => setProductEditId(id)}>
          <Pencil2Icon /> Editar
        </Button>
      </Actions>
    </Card>
  );
};
