import {number, object, } from "zod";

export const createOrderValidator = object({
  product_id: number({required_error: "The product id is required"}).
  positive("The product id should be positive"),
  user_id: number({required_error: "The user id is required"}).
  positive("The user id should be positive"),
  size_id: number({required_error: "The size id is required"}).
  positive("The size id should be positive"),
  color_id: number({required_error: "The color id is required"}).
  positive("The color id should be positive"),
  product_quantity: number({required_error: "The product quantity is required"}).
  positive("The product quantity should be positive").
  finite().lte(10000000000, "The product quantity can just has 10 digits")
})

export const updateOrderValidator = object({
  product_quantity: number({required_error: "The product quantity is required"}).
  positive("The product quantity should be positive").
  finite().lte(10000000000, "The product quantity can just has 10 digits")
})