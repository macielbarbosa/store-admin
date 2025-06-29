export const toCurrency = (value: number) =>
  `R$${value.toFixed(2).replace(".", ",")}`;
