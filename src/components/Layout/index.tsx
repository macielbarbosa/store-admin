import { Outlet } from "react-router";
import { Heading } from "@radix-ui/themes";

import { useIsCartPage } from "@/hooks/useIsCartPage";
import { CartIcon } from "@/components/CartIcon";
import { SearchInput } from "@/components/SearchInput";
import { AppBar, Root } from "./style";

export const Layout = () => {
  const isCartPage = useIsCartPage();

  return (
    <Root>
      <AppBar>
        <Heading color="blue">Triskin Store Admin</Heading>
        {!isCartPage && <SearchInput />}
        <CartIcon />
      </AppBar>
      <Outlet />
    </Root>
  );
};
