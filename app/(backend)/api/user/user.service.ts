'use server'

import { prisma } from "@/lib/prisma";
import { Prisma, Customer } from "@prisma/client";
import { createCustomerValidator } from "./user.schema";
import { NextResponse } from "next/server";
import { ZodError } from "zod";


export const createUser = async (input: Prisma.CustomerCreateInput) => {
  try {
    createCustomerValidator.parse(input)

    const createdUser = await prisma.customer.create({
      data: input
    }) as Customer
    return NextResponse.json(createdUser)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400})
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export const getAllUsers = async () => {
  try {
    const users = await prisma.customer.findMany()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const getAllUserByPagination = async (
  page: number, users: number
) => {
  const take = users || 10
  const skip = (page - 1) * users
  try {
    const users = await prisma.customer.findMany({
      take: take,
      skip: skip
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export const getUniqueUser = async (
  where: Prisma.CustomerWhereUniqueInput
) => {
  try {
    const user = await prisma.customer.findUnique({
      where
    }) as Customer
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export const updateUser = async (
  where: Prisma.CustomerWhereUniqueInput,
  data: Prisma.CustomerUpdateInput
) => {
  try {
    createCustomerValidator.parse(data)
    const user = await prisma.customer.update({
      where,
      data
    }) as Customer
    return NextResponse.json(user)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400})
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export const deleteUser = async (
  where: Prisma.CustomerWhereUniqueInput,
) => {
  try {
    await prisma.order.deleteMany({
      where
    })
    await prisma.customer.delete({
      where
    })
    return NextResponse.json('Successful Customer Deleted')
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export const findUserForLogin = async (
  email: string
) => {
  try {
    const user = await prisma.customer.findUnique({
      where: {
        email
      }
    }) as Customer
    return user
  } catch (error) {
    return NextResponse.json(error, {status: 500})
  }
}
