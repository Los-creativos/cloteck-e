import { array, number, object, string, TypeOf } from 'zod'

export const createProductSchema = object({
  name: string()
    .trim()
    .min(4, 'Minimum of 4 characters required')
    .max(50, 'Maximum characters are 50'),
  description: string()
    .trim()
    .min(20, 'Minium of 20 characters required')
    .max(200, 'Maximun characters are 200'),
  price: number().positive('It should be a positive number').finite().safe(),
  image: string()
    .trim()
    .min(10, 'Minuim of 10 characters required')
    .max(100, 'Maxium characters are 100'),
  ProductCategory: array(
    object({
      category_id: number().positive('It should be a positive number').finite(),
      category: object({
        category_id: number().positive('It should be a positive number').finite()
      })
    })
  ).nonempty(),
  Attribute: array(
    object({
      size_id: number().positive('It should be a positive number').int(),
      color_id: number().positive('It should be a positive number').int(),
      quantity: number().int().positive('It should be a positive number'),
      size: object({
        size_id: number()
      }),
      color: object({
        color_id: number()
      })
    })
  ).nonempty()
})

export const updateProductSchema = object({
  body: object({
    name: string(),
    price: number(),
    description: string(),
    image: string(),
    quantity: number()
  }).partial()
})

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10)
})

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type FilterQueryInput = TypeOf<typeof filterQuery>;
