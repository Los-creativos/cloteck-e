export interface OrderProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  color: string;
  sizes: string[];
  orderProduct: number[];
  quantity: number[];
  stock: number[];
}