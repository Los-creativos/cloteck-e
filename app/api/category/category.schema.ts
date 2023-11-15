import { number, object, string } from 'zod'

export const createCategoryValidator = object({
  name: string().trim().min(5, 'Minimum of 5 characters required').max(50, 'Maximum characters is 50'),
  description: string().trim().min(20, 'Minimum of 20 characters required').max(200, 'Maximum characters is 200')
})

export const updateCategoryValidator = object({
  description: string().trim().min(20, 'Minimum of 20 characters required').max(200, 'Maximum characters is 200')
}).partial()

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10)
})
