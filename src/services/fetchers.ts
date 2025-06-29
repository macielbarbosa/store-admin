import type { Product } from "@/models/product";

import { api } from "./axios";

export const fetchProducts = async () => {
  const { data: products } = await api.get<Product[]>("/products");
  return products;
};
