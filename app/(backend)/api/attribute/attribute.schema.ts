import { TypeOf, number, object, string } from "zod";

const COLOR_REGEX = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$")

export const createAttributeSchema = object({
  size: string({required_error: "The size is mandatory"}).trim(),
  color: string({required_error: "The color is mandatory"}).trim().regex(COLOR_REGEX, "The color is not a valid Hex color"),
  quantity: number({required_error: "The quantity is mandatory"}).int().positive('It should be a positive number'),
  image: string({required_error: "The image URL is mandatory"}).trim().min(10, 'Minuim of 10 characters required').max(300, 'Maxium characters are 300'),
})

export type CreateAttributeInput = TypeOf<typeof createAttributeSchema>
