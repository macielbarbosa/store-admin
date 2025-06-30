import { useState } from "react";
import useSWRMutation from "swr/mutation";
import {
  Badge,
  Button,
  Dialog,
  Flex,
  Switch,
  Text,
  TextField,
} from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";

import type { Product, Status } from "@/models/product";
import { mutation } from "@/services/mutation";
import { useProductsState } from "@/state/products";
import { Actions, Fields } from "./style";

interface Props {
  product: Product;
}

export const EditProductModal = ({ product }: Props) => {
  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<string>(product.price.toString());
  const [status, setStatus] = useState<Status>(product.status);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const { trigger, isMutating } = useSWRMutation<
    Product,
    Error,
    string,
    Partial<Product>
  >("/products/" + product.id, mutation);
  const { updateProduct } = useProductsState();
  const isActive = status === "active";

  const onSave = async () => {
    const updatedProduct = { name, price: Number(price), status };
    await trigger(updatedProduct);
    updateProduct(product.id, updatedProduct);
    setDialogOpen(false);
  };

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger>
        <Button variant="soft">
          <Pencil2Icon /> Editar
        </Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title mb="5">Editar Produto</Dialog.Title>
        <Fields>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Root
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Digite o nome do Produto"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Preço
            </Text>
            <TextField.Root
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Digite o preço do Produto"
            />
          </label>
          <div>
            <Text as="div" size="2" mb="1" weight="bold">
              Status
            </Text>
            <Flex gap="2">
              <Switch
                checked={isActive}
                onCheckedChange={(checked) =>
                  setStatus(checked ? "active" : "inactive")
                }
              />
              <Badge color={isActive ? "green" : "red"}>
                {isActive ? "Ativo" : "Inativo"}
              </Badge>
            </Flex>
          </div>
        </Fields>
        <Actions>
          <Dialog.Close>
            <Button variant="soft">Cancelar</Button>
          </Dialog.Close>
          <Button loading={isMutating} onClick={onSave}>
            Salvar
          </Button>
        </Actions>
      </Dialog.Content>
    </Dialog.Root>
  );
};
