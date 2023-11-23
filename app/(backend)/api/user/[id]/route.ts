import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET (
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  try {
    const uniqueCustomer = await prisma.customer.findUnique({
      where: {
        customer_id: parseInt(params.id)
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

export async function DELETE (
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  await prisma.order.deleteMany({
    where: {
      user_id: parseInt(params.id)
    }
  })
  await prisma.customer.delete({
    where: {
      customer_id: parseInt(params.id)
    }
  })

  return NextResponse.json('Successful Customer Deleted')
}

export async function PUT (
  req: NextRequest,
  {
    params
  }: {
    params: { id: string };
  }
) {
  const data = await req.json()
  try {
    await prisma.customer.update({
      where: {
        customer_id: parseInt(params.id)
      },
      data: {
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
        type_user: data.type_user,
        password: data.password,
      }
    })
    return NextResponse.json('Successful Customer Updated')
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}
