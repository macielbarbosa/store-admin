import styled from "styled-components";

import { Paper as CPaper } from "@/components/Paper";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Paper = styled(CPaper)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  width: 100%;
`;
