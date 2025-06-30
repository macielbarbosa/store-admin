import type { ReactNode } from "react";
import { Button, Flex, Text } from "@radix-ui/themes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: Props) => (
  <Flex gap="2" align="center">
    <ExclamationTriangleIcon color="red" width={20} height={20} />
    <Text>{children}</Text>
    <Button onClick={() => window.location.reload()} size="1">
      Recarregar
    </Button>
  </Flex>
);
