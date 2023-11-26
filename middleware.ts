import { NextRequest, NextResponse } from 'next/server'
import { getTokenCookie } from '@/app/utils/CookieManagement'
import { VerifyJwt } from './app/utils/JwtUtils'
import { Customer } from '@prisma/client'

export default async function middleware (request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    const token = await getTokenCookie()    
    const data = await VerifyJwt(token?.value as string) as Customer
    
    console.log(data)
    if (data) {
      if (data.type_user === 'Admin') {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}
