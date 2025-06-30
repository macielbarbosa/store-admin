import useSWR from "swr";
import { useAtomValue } from "jotai";

import type { Product } from "@/models/product";
import { fetcher } from "@/services/fetcher";
import { useProductsState } from "@/state/products";
import { searchAtom } from "@/state/search";

export const useSWRProducts = () => {
  const { setProducts } = useProductsState();
  const search = useAtomValue(searchAtom);
  return useSWR<Product[]>(
    `/products${search.length ? "?name_like=" + search : ""}`,
    fetcher,
    { onSuccess: setProducts }
  );
};
