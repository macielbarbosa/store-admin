import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { Cart } from "@/models/cart";

const cartAtom = atomWithStorage<Cart>("cart", []);

export const useCartState = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const findItemIndex = (id: number) =>
    cart.findIndex((item) => item.id === id);

  const increaseItem = (id: number) => {
    const index = findItemIndex(id);
    const newCart = [...cart];
    const isItemInCart = index !== -1;
    if (isItemInCart) {
      newCart[index].quantity += 1;
    } else {
      newCart.push({ id, quantity: 1 });
    }
    setCart(newCart);
  };

  const decreaseItem = (id: number) => {
    const index = findItemIndex(id);
    const newCart = [...cart];
    newCart[index].quantity -= 1;
    setCart(newCart);
  };

  const removeItem = (id: number) => {
    const index = findItemIndex(id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return {
    increaseItem,
    decreaseItem,
    removeItem,
    totalItems: cart.reduce((total, item) => total + item.quantity, 0),
  };
};
