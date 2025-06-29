import { IconButton as RIconButton, Badge as RBadge } from "@radix-ui/themes";
import styled from "styled-components";

export const IconButton = styled(RIconButton)`
  position: relative;
`;

export const Badge = styled(RBadge)`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
