'use server'

import { prisma } from "@/lib/prisma";
import {Prisma, Order} from "@prisma/client";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {createOrderValidator, updateOrderValidator} from "@/app/(backend)/api/order/order.schema";


export const createOrder = async (input: Prisma.OrderCreateInput) => {
  try {
    createOrderValidator.parse(input)

    const createdOrder = await prisma.order.create({
      data: input
    }) as Order

    return createdOrder;
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 400 })
  }
}

export const getOrdersByUser = async (userId: number) => {
  try {


    const orders = await prisma.order.findMany({
      where: {
        user_id: userId
      },
      include: {
        product: true,
        size: true,
        color: true
      }
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 400 })
  }
}

export const deleteAllOrderByUser = async ( userId: number) => {
  await prisma.order.deleteMany({
    where: {
      user_id: userId
    }
  });

  return "Successful delete of all orders";
}

export const getUniqOrder = async (orderId: number) => {
  try {
    const uniqueOrder = await prisma.order.findUnique( {
      where: {
        order_id: orderId
      },
      include: {
        product: true,
        size: true,
        color: true
      }
    }) as Order

    return uniqueOrder;
  } catch (error) {
    return NextResponse.json({error}, { status: 500})
  }
}

export const updateOrder = async (orderId: number, quantity: number) => {
  try {
    updateOrderValidator.parse(quantity)
    const newOrder = await prisma.order.update({
      where: {
        order_id: orderId
      },
      data: {
        product_quantity: quantity
      }
    }) as Order
    return newOrder;
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400})
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export const deleteOrder = async ( orderId: number) => {
  try {
    await prisma.order.delete({
      where: {
        order_id: orderId
      }
    })
    return NextResponse.json('Successful Customer Deleted')
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

