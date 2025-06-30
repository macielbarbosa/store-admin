import useSWR from "swr";

import type { Product } from "@/models/product";
import { fetcher } from "@/services/fetcher";
import { useProductsState } from "@/state/products";

export const useSWRProducts = () => {
  const { setProducts } = useProductsState();
  return useSWR<Product[]>("/products", fetcher, { onSuccess: setProducts });
};
