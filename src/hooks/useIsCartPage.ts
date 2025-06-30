import { useLocation } from "react-router";

export const useIsCartPage = () => {
  const { pathname } = useLocation();
  return pathname.includes("/cart");
};
