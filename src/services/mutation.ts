import { api } from "./axios";

export const mutation = async <T>(
  url: string,
  { arg }: { arg: Partial<T> }
) => {
  const { data } = await api.patch<T>(url, arg);
  return data;
};
