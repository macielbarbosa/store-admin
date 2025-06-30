import { api } from "./axios";

export const mutation = async <T>(
  url: string,
  { arg }: { arg: Partial<T> }
) => {
  const { data } = await api.put<T>(url, arg);
  return data;
};
