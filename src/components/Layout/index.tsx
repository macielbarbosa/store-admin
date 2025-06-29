import { Outlet } from "react-router";
import { Heading } from "@radix-ui/themes";

import { AppBar, Root } from "./style";
import { CartIcon } from "./CartIcon";

export const Layout = () => {
  return (
    <Root>
      <AppBar>
        <Heading color="blue">Triskin Store Admin</Heading>
        <CartIcon />
      </AppBar>
      <Outlet />
    </Root>
  );
};
