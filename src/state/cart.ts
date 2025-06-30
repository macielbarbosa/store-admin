import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { Cart } from "@/models/cart";
import { getInitialCart } from "@/utils/getInitialCart";

const cartAtom = atomWithStorage<Cart>("cart", getInitialCart());

export const useCartState = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const findItemIndex = (id: number) =>
    cart.findIndex((item) => item.id === id);

  const isInCart = (id: number) => findItemIndex(id) !== -1;

  const increaseItem = (id: number) => {
    const index = findItemIndex(id);
    const newCart = [...cart];
    const isInCart = index !== -1;
    if (isInCart) {
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
    cart,
    increaseItem,
    decreaseItem,
    removeItem,
    isInCart,
    totalItems: cart.reduce((total, item) => total + item.quantity, 0),
  };
};
