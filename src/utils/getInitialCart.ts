export const getInitialCart = () => {
  const value = localStorage.getItem("cart");
  return value ? JSON.parse(value) : [];
};
