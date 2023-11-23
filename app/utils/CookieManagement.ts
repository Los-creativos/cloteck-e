import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setTokenCookie = (token: string): void => {
  cookies.set('token', token, { maxAge: 5 * 24 * 60 * 60, secure: true })
}

export const getTokenCookie = (): string | undefined => {
  return cookies.get('token')
}

export const removeTokenCookie = (): void => {
  cookies.remove('token')
}
