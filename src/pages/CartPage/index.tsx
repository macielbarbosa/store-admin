import { useSetAtom } from "jotai";
import useSWR from "swr";
import { useNavigate } from "react-router";
import { Button } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { useCartStore } from "@/state/cart";
import { Loader } from "@/components/Loader";
import { productsAtom } from "@/state/products";
import type { Product } from "@/models/product";
import { fetcher } from "@/services/fetcher";
import { Empty } from "@/components/Empty";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Resume } from "./components/Resume";
import { Paper, Root } from "./style";
import { CartItem } from "./components/CartItem";

export const CartPage = () => {
  const { cart, isInCart } = useCartStore();
  const setProducts = useSetAtom(productsAtom);
  const { isLoading, error } = useSWR<Product[]>("/products", fetcher, {
    onSuccess: (data) => {
      setProducts(data.filter((product) => isInCart(product.id)));
    },
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  } else if (!cart.length) {
    return (
      <Empty>
        O carrinho está vazio.
        <Button onClick={() => navigate("/")}>
          <ArrowLeftIcon /> Continuar comprando
        </Button>
      </Empty>
    );
  } else if (error) {
    return <ErrorMessage>Ocorreu um erro ao carregar o Carrinho.</ErrorMessage>;
  }

  return (
    <Root>
      <Paper>
        {cart?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Paper>
      <Resume />
    </Root>
  );
};
