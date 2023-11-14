import { array, number, object, string, TypeOf } from 'zod'

export const createProductSchema = object({
  name: string(),
  description: string(),
  price: number(),
  image: string(),
  ProductCategory: array(
    object({
      product_category_id: number(),
      product_id: string(),
      category_id: number(),
      category: object({
        category_id: number(),
        name: string(),
        description: string(),
      }),
    })
  ),
  Attribute: array(
    object({
      attribute_id: number(),
      product_id: string(),
      size_id: number(),
      color_id: number(),
      quantity: number(),
      size: object({
        size_id: number(),
        name: string(),
      }),
      color: object({
        color_id: number(),
        name: string(),
      }),
    })
  ),
}).refine((data) => data.price >= 0, {
  message: 'Product price must be greater than or equal to 0',
  path: ['price'],
}).refine((data) => data.Attribute.every((attr) => attr.quantity >= 0), {
  message: 'Attribute quantity must be greater than or equal to 0 for all attributes',
  path: ['Attribute', 'quantity'],
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
