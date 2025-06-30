import useSWR from "swr";

import { fetchProducts } from "@/services/fetchers";

export const useSWRProducts = () => useSWR("products", fetchProducts);
