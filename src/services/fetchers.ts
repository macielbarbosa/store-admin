import { api } from "./axios";

export const fetchProducts = async () => {
  const { data: products } = await api.get("/products");
  return products;
};
