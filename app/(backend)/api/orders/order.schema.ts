import { number, object, date, TypeOf } from 'zod';

export const createOrderSchema = object({
  product_id: number({ required_error: "The product_id is required" }).positive('It should be a positive number').finite(),
  user_id: number({ required_error: "The user_id is required" }).positive('It should be a positive number').finite(),
  product_quantity: number({ required_error: "The product_quantity is required" }).int().positive('It should be a positive number'),
  date: date({ required_error: "The date is required" }),
});

export type CreateOrderInput = TypeOf<typeof createOrderSchema>;
