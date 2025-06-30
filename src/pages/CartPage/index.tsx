import { useRef } from "react";
import { useSetAtom } from "jotai";
import useSWR from "swr";
import queryString from "query-string";

import { useCartState } from "@/state/cart";
import { Loader } from "@/components/Loader";
import { productsAtom } from "@/state/products";
import type { Product } from "@/models/product";
import { fetcher } from "@/services/fetcher";
import { Resume } from "./components/Resume";
import { Items, Root } from "./style";
import { CartItem } from "./components/CartItem";

export const CartPage = () => {
  const { cart } = useCartState();
  const cartIds = useRef<string[]>(cart.map((item) => item.id));
  const setProducts = useSetAtom(productsAtom);
  const idsQuery = queryString.stringify({ id: cartIds.current });
  const { isLoading } = useSWR<Product[]>("/products?" + idsQuery, fetcher, {
    onSuccess: setProducts,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Root>
      <Items>
        {cart?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Items>
      <Resume />
    </Root>
  );
};
