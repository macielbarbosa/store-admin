import useSWR from "swr";
import { useAtomValue } from "jotai";
import queryString from "query-string";

import type { Product } from "@/models/product";
import { fetcher } from "@/services/fetcher";
import { useProductsState } from "@/state/products";
import { searchAtom } from "@/state/search";

export const useSWRProducts = (ids: string[] = []) => {
  const { setProducts } = useProductsState();
  const search = useAtomValue(searchAtom);
  const searchQuery = search.length ? "name_like=" + search : "";
  const idsQuery = queryString.stringify({ id: ids });
  return useSWR<Product[]>("/products?" + searchQuery + idsQuery, fetcher, {
    onSuccess: setProducts,
  });
};
