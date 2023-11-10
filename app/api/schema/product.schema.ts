import { number, object, string, TypeOf } from 'zod'

export const createProductSchema = object({
  body: object({
    name: string({
      required_error: 'Product name is required',
    }),
    price: number({
      required_error: 'Product price is required',
    }),
    description: string({
      required_error: 'Product description is required',
    }),
    image: string({
      required_error: 'Product image is required',
    }),
    quantity: number({
      required_error: 'Product quantity is required',
    }),
  }).refine((data) => data.price >= 0, {
    message: 'Product price must be greater than 0',
    path: ['price'],
  }).refine((data) => data.quantity >= 0, {
    message: 'Product quantity must be grater than 0',
    path: ['quantity'],
  }),
});

export const updateProductSchema = object({
  body: object({
    name: string(),
    price: number(),
    description: string(),
    image: string(),
    quantity: number(),
  }).partial(),
});

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
});

export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
export type FilterQueryInput = TypeOf<typeof filterQuery>
