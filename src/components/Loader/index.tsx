import { Text } from "@radix-ui/themes";

import { Dots, Root } from "./style";

export const Loader = () => {
  return (
    <Root>
      <Dots />
      <Text>Carregando os produtos...</Text>
    </Root>
  );
};
