import { array, number, object, string, TypeOf } from 'zod'

const COLOR_REGEX = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$")

export const createProductSchema = object({
  name: string({required_error: "The name is mandatory"})
    .trim()
    .min(4, 'Minimum of 4 characters required')
    .max(50, 'Maximum characters are 50'),
  description: string()
    .trim()
    .min(20, 'Minium of 20 characters required')
    .max(200, 'Maximun characters are 200'),
  price: number({required_error: "The price is required"}).positive('It should be a positive number')
    .lte(100000000 , "Invalid quantity, only numbers less than 10 digits are allowed."),
  ProductCategory: array(
    object({
      category_id: number().positive('It should be a positive number').finite(),
    })
    ).nonempty('It should have at least one category'),
  Attribute: array(
    object({
      size: string({required_error: "The size is mandatory"}).trim(),
      color: string({required_error: "The color is mandatory"}).trim().regex(COLOR_REGEX, "The color is not a valid Hex color"),
      quantity: number({required_error: "The quantity is mandatory"}).int().positive('It should be a positive number'),
      image: string({required_error: "The image URL is mandatory"}).trim().min(10, 'Minuim of 10 characters required').max(300, 'Maxium characters are 300'),
  })
  ).nonempty('It should have at least one attribute')
})

export const updateProductSchema = object({
    description: string()
    .trim()
    .min(20, 'Minium of 20 characters required')
    .max(200, 'Maximun characters are 200'),
    ProductCategory: array(
      object({
        category_id: number().positive('It should be a positive number').finite(),
      })
      ).nonempty('It should have at least one category'),
    }).partial()

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10)
})

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type FilterQueryInput = TypeOf<typeof filterQuery>;
