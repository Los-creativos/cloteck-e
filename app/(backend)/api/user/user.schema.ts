import { number, object, string } from 'zod';

const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')
const PASSWORD_REGEX = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')

export const createCustomerValidator = object({
  name: string({
    required_error: 'The name is required',
    invalid_type_error: 'The name must be a string'
  }).trim().min(3, 'Minimum of 3 characters are required').max(50, 'Maxium characters are 50'),
  last_name: string({
    required_error: 'The last name is required',
    invalid_type_error: 'The last name must be a string'
  }).trim().min(3, 'Minimum of 3 characters are required').max(50, 'Maxium characters are 50'),
  email: string({
    required_error: 'The email is required',
    invalid_type_error: 'The email must be a string'
  }).trim().min(6, 'Minimum of 6 characters are required').max(50, 'Maxium characters are 50').regex(EMAIL_REGEX),
  password: string({
    required_error: 'The password is required',
    invalid_type_error: 'The password must be a string'
  }).min(8, 'Minimum of 8 characters are required').max(100, 'Maxium characters are 100').regex(PASSWORD_REGEX),
  phone_number: number({
    invalid_type_error: 'The phone number must be a number'
  }),
  type_user: string({
    required_error: 'The type user is required',
    invalid_type_error: 'The type user must be a string'
  }).trim().min(3, 'Minimum of 3 characters are required').max(50, 'Maxium characters are 50'),
})

export const updateCustomerValidator = object({
  name: string({
    required_error: 'The name is required',
    invalid_type_error: 'The name must be a string'
  }).trim().min(3, 'Minimum of 3 characters are required').max(50, 'Maxium characters is 50'),
  last_name: string({
    required_error: 'The last name is required',
    invalid_type_error: 'The last name must be a string'
  }).trim().min(3, 'Minimum of 3 characters are required').max(50, 'Maxium characters is 50'),
  email: string({
    required_error: 'The email is required',
    invalid_type_error: 'The email must be a string'
  }).trim().min(6, 'Minimum of 6 characters are required').max(50, 'Maxium characters are 50').regex(EMAIL_REGEX),
  password: string({
    required_error: 'The password is required',
    invalid_type_error: 'The password must be a string'
  }).min(8, 'Minimum of 8 characters are required').max(100, 'Maxium characters are 100').regex(PASSWORD_REGEX),
  phone_number: number({
    invalid_type_error: 'The phone number must be a number'
  }),
  type_user: string({
    required_error: 'The type user is required',
    invalid_type_error: 'The type user must be a string'
  }),
}).partial()
