import { Card as RCard } from "@radix-ui/themes";
import styled from "styled-components";

export const Card = styled(RCard)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: start;
  min-width: 300px;
  max-width: 300px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;
