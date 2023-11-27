import {compare, hash} from 'bcrypt-ts'
import { findUserForLogin } from '../(backend)/api/user/user.service'
import { Customer } from '@prisma/client'
import { setTokenCookie } from './CookieManagement'
import { SignJwt } from './JwtUtils'

export const hashPassword = async (password: string) => {
  const hashedPassword = hash(password, 10)
  return hashedPassword
}

export const login = async (email: string, password: string) => {
  const user = await findUserForLogin(email) as Customer

  if (!user || !await compare(password, user.password)) return false

  const data = {
    id: user.customer_id,
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    type_user: user.type_user //roles andre arregla
  }

  const token = await SignJwt(data, '5h')
  setTokenCookie(token)
  return true
}
