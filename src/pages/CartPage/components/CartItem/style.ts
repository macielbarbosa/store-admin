import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  > :first-child {
    max-width: 400px;
    min-width: 150px;
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 100px;
  > * {
    text-align: right;
  }
`;
