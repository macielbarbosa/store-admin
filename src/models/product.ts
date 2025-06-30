export type Status = "active" | "inactive";

export interface Product {
  id: string;
  name: string;
  price: number;
  status: Status;
}
