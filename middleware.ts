import { NextRequest, NextResponse } from 'next/server'
import { getTokenCookie } from '@/app/utils/CookieManagement'
import { VerifyJwt } from './app/utils/JwtUtils'
import { Customer } from '@prisma/client'

export default async function middleware (request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    const token = await getTokenCookie()    
    const data = await VerifyJwt(token?.value as string) as Customer
    //TODO: averiguar sobre los tipos de tokens que se envian al front
    //TODO: enum
    //TODO: poner en el env
    if (data) {
      if (data.type_user === 'Admin') {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (pathname.startsWith('/login')) {
    const token = await getTokenCookie()    
    const data = await VerifyJwt(token?.value as string) as Customer
    
    if (data) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }
}
