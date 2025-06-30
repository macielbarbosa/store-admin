import styled from "styled-components";

export const Root = styled.div`
  max-width: 1250px;
  width: 100%;
`;

export const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  gap: 1rem;
  > :first-child {
    cursor: pointer;
    user-select: none;
  }
`;
