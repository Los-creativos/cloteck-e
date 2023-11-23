import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

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

    return NextResponse.json(uniqueCustomer)
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })

  }
}
