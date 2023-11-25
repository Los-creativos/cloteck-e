import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { createCustomerValidator } from "./user.schema";
import { hashPassword } from "@/app/utils/LoginUtils";

export async function GET () {
  const users = await prisma.customer.findMany({
    include: {
      Order: true
    }
  })

  return NextResponse.json(users)
}

export async function POST (request: NextRequest) {
  try {
    const data = await request.json()
    
    createCustomerValidator.parse(data)
    const hashedPassword = await hashPassword(data.password)

    const createdUser = await prisma.customer.create({
      data: {
        name: data.name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone,
        type_user: data.type_user,
        password: hashedPassword,
      }
    })
    return NextResponse.json(createdUser)
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 400 })
  }
}

export async function DELETE () {
  await prisma.order.deleteMany()
  await prisma.customer.deleteMany()
  return NextResponse.json('Successful deletion of all users')
}
