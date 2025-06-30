import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import { useAtom } from "jotai";
import {
  Badge,
  Button,
  Dialog,
  Flex,
  Switch,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useSnackbar } from "notistack";

import type { Product, Status } from "@/models/product";
import { mutation } from "@/services/mutation";
import { useProductsStore } from "@/state/products";
import { editProductIdAtom } from "@/state/editProductId";
import { Actions, Fields } from "./style";

export const EditProductModal = () => {
  const [productId, setEditProductId] = useAtom(editProductIdAtom);
  const { updateProduct, products } = useProductsStore();
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [status, setStatus] = useState<Status>();
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const { trigger, isMutating } = useSWRMutation<
    Product,
    Error,
    string,
    Partial<Product>
  >("/products/" + productId, mutation);
  const { enqueueSnackbar } = useSnackbar();
  const isActive = status === "active";

  useEffect(() => {
    if (productId) {
      const product = products.find((product) => product.id === productId)!;
      setName(product.name);
      setPrice(product.price.toString());
      setStatus(product.status);
    }
    setDialogOpen(Boolean(productId));
  }, [productId]);

  const onSave = async () => {
    if (name === "") {
      enqueueSnackbar("Preencha o nome do Produto", {
        variant: "info",
      });
      return;
    }
    const updatedProduct = { name, price: Number(price), status };
    await trigger(updatedProduct);
    updateProduct(productId!, updatedProduct);
    setEditProductId(null);
    enqueueSnackbar("O produto foi atualizado.");
  };

  const handlePriceChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const inputValue = event.target.value;
    if (inputValue === "" || /^\d*\.?\d{0,2}$/.test(inputValue)) {
      setPrice(inputValue);
    }
  };

  return (
    <Dialog.Root
      open={isDialogOpen}
      onOpenChange={() => setEditProductId(null)}
    >
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
              onChange={handlePriceChange}
              onBlur={() => {
                if (price === "") setPrice("0");
              }}
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
