import { api } from "./axios";

export const fetcher = async <T>(url: string) => {
  const { data } = await api.get<T>(url);
  return data;
};
