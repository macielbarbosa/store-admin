import { useMemo } from "react";
import useSWR from "swr";
import { useAtomValue, useSetAtom } from "jotai";
import { LuSearchX } from "react-icons/lu";

import { Loader } from "@/components/Loader";
import { productsAtom, useProductsState } from "@/state/products";
import { searchAtom } from "@/state/search";
import { fetcher } from "@/services/fetcher";
import type { Product } from "@/models/product";
import { Empty } from "@/components/Empty";
import { ProductItem } from "./components/ProductItem";
import { Root } from "./style";
import { ErrorMessage } from "@/components/ErrorMessage";

export const ProductList = () => {
  const setProducts = useSetAtom(productsAtom);
  const search = useAtomValue(searchAtom);
  const searchQuery = search.length ? "name_like=" + search : "";
  const timestamp = useMemo(() => "&t=" + Date.now(), [searchQuery]);
  const { isLoading, error } = useSWR<Product[]>(
    "/products?" + searchQuery + timestamp,
    fetcher,
    {
      onSuccess: setProducts,
    }
  );
  const { products } = useProductsState();

  if (isLoading) {
    return <Loader />;
  } else if (!products.length) {
    return (
      <Empty>
        <LuSearchX fontSize={30} />
        Nenhum produto foi encontrado.
      </Empty>
    );
  } else if (error) {
    return (
      <ErrorMessage>Ocorreu um erro ao carregar os Produtos.</ErrorMessage>
    );
  }

  return (
    <Root>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Root>
  );
};
