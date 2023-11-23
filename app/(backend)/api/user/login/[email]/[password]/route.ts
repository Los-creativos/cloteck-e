import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import jwt from 'jsonwebtoken'
import { setTokenCookie } from "@/app/utils/CookieManagement";

const KEY = 'qz8yrcyAfz5iBVwBItQxQmC7INCAGiS2Hw5X'

export async function GET (
  req: NextRequest,
  {
    params
  }: {
    params: { email: string, password: string };
  }
) {
  try {
    const uniqueCustomer = await prisma.customer.findFirstOrThrow({
      where: {
        email: params.email,
        password: params.password
      }
    })

    const token = jwt.sign({
      id: uniqueCustomer.customer_id,
      name: uniqueCustomer.name,
      last_name: uniqueCustomer.last_name,
      email: uniqueCustomer.email,
      type_user: uniqueCustomer.type_user
    }, KEY, { expiresIn: '5h'})

    setTokenCookie(token)

    return NextResponse.json({token})
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })

  }
}
