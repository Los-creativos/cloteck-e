import { Prisma } from '@prisma/client';
import { array, number, object, string, TypeOf, z } from 'zod'

export const createProductSchema = object({
  name: string({required_error: "The name is mandatory"})
    .trim()
    .min(4, 'Minimum of 4 characters required')
    .max(50, 'Maximum characters are 50'),
  description: string()
    .trim()
    .min(20, 'Minium of 20 characters required')
    .max(200, 'Maximun characters are 200'),
  price: z.instanceof(Prisma.Decimal).refine((price) => price.greaterThan('0.01')),
  ProductCategory: array(
    object({
      category_id: number().positive('It should be a positive number').finite(),
    })
    ).nonempty(),
    Attribute: array(
      object({
        size: string({required_error: "The size is mandatory"}).trim(),
        color: string({required_error: "The color is mandatory"}).trim(),
        quantity: number({required_error: "The quantity is mandatory"}).int().positive('It should be a positive number'),
        image: string({required_error: "The image URL is mandatory"}).trim().min(10, 'Minuim of 10 characters required').max(300, 'Maxium characters are 100'),
    })
  ).nonempty()
})

export const updateProductSchema = object({
  body: object({
    description: string(),
  }).partial()
})

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10)
})

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type FilterQueryInput = TypeOf<typeof filterQuery>;
