'use server'

import { cookies } from 'next/headers'

export const setTokenCookie = (token: string) => {
  cookies().set('token', token)
}

export const getTokenCookie = async () => {
  return cookies().get('token')
}

export const removeTokenCookie = (): void => {
  cookies().delete('token')
}
