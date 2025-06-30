import { atom, useAtom } from "jotai";

import type { Product } from "@/models/product";

const productAtom = atom<Product[]>([]);

export const useProductsState = () => {
  const [products, setProducts] = useAtom(productAtom);

  const updateProduct = (id: string, data: Partial<Product>) => {
    const index = products.findIndex((product) => product.id === id);
    const newProducts = [...products];
    newProducts[index] = {
      ...newProducts[index],
      ...data,
    };
    setProducts(newProducts);
  };

  return {
    products,
    setProducts,
    updateProduct,
  };
};
