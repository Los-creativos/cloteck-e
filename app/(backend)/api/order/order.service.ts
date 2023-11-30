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

const getOrdersByUser = async (userId: number) => {
  try {
    const [productsID, colorsId] = await Promise.all([
      prisma.order.findMany({
        where: {
          user_id: userId,
        },
        select: {
          product_id: true,
        },
        distinct: ["product_id"],
      }),
      prisma.order.findMany({
        where: {
          user_id: userId,
        },
        select: {
          color_id: true,
        },
        distinct: ["color_id"],
      }),
    ]);

    const max = Math.max(productsID.length, colorsId.length);
    const orders = await Promise.all(
      Array.from({ length: max }).map(async (_, index) => {
        const product = productsID[index];
        const color = colorsId[index];
        return await getOrdersForItem(userId, product, color);
      })
    );

    return orders;
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
};

export const getOrdersForItem = async (userId: number,
                                       productId: number,
                                       colorId: number) => {
  try {
    const orderForItem = await prisma.order.findMany( {
      where: {
        user_id: userId,
        product_id: productId,
        color_id: colorId
      },
      include: {
        product: true,
        size: true,
        color: true
      }
    })



    return orderForItem;
  } catch (error) {
    return NextResponse.json({error}, { status: 500})
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

