import { number, object, string } from 'zod'

const NO_SPECIAL_CHARACTERS_REGEX = new RegExp('^[\w\d\s]+$')

export const createCategoryValidator = object({
  name: string({
    required_error: "The name is required",
    invalid_type_error: "The name must be a string"
  }).trim().min(5, 'Minimum of 5 characters required').max(50, 'Maximum characters is 50').regex(NO_SPECIAL_CHARACTERS_REGEX, 'The name should not have special characters'),
  description: string({
    required_error: "The description is required",
    invalid_type_error: "The description must be a string"
  }).trim().min(20, 'Minimum of 20 characters required').max(200, 'Maximum characters is 200').regex(NO_SPECIAL_CHARACTERS_REGEX, 'The description should not have special characters')
})

export const updateCategoryValidator = object({
  description: string({
    required_error: "The description is required",
    invalid_type_error: "The description must be a string"
  }).trim().min(20, 'Minimum of 20 characters required').max(200, 'Maximum characters is 200').regex(NO_SPECIAL_CHARACTERS_REGEX, 'The description should not have special characters')
}).partial()

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10)
})
