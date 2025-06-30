import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { Flex, Heading, Text } from "@radix-ui/themes";

import { cartAtom } from "@/state/cart";
import { productsAtom } from "@/state/products";
import { toCurrency } from "@/utils/toCurrency";

export const Resume = () => {
  const cart = useAtomValue(cartAtom);
  const products = useAtomValue(productsAtom);

  const getPrice = (id: string) => {
    const product = products.find((product) => product.id === id);
    return product!.price;
  };

  const total = useMemo(
    () =>
      products.length
        ? cart.reduce(
            (total, item) => total + getPrice(item.id) * item.quantity,
            0
          )
        : 0,
    [cart, products]
  );

  return (
    <Flex direction="column">
      <Heading size="4" mb="3">
        Resumo
      </Heading>
      <Text>Valor dos produtos:</Text>
      <Text weight="medium">{toCurrency(total)}</Text>
    </Flex>
  );
};
