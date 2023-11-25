import bycrypt from 'bcrypt-ts'
import { findUserForLogin } from '../(backend)/api/user/user.service'
import jwt from 'jsonwebtoken'
import { Customer } from '@prisma/client'
import { setTokenCookie } from './CookieManagement'

const KEY = 'qz8yrcyAfz5iBVwBItQxQmC7INCAGiS2Hw5X'

export const hashPassword = async (password: string) => {
  const hashedPassword = bycrypt.hash(password, 10)
  return hashedPassword
}

export const login = async (email: string, password: string) => {
  const user = await findUserForLogin(email) as Customer
  
  if (!user) return false
  const isMatch = await bycrypt.compare(password, user?.password)
  if (!isMatch) return false

  const token = jwt.sign({
    id: user.customer_id,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    type_user: user.type_user
  }, KEY, { expiresIn: '5h'})
  setTokenCookie(token)

  return true
}
