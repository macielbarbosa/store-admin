import { Outlet } from "react-router";
import { Heading } from "@radix-ui/themes";

import { CartIcon } from "../CartIcon";
import { AppBar, Root } from "./style";

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
