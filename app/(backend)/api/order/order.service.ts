'use server'

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {createOrderValidator, updateOrderValidator} from "@/app/(backend)/api/order/order.schema";


export const createOrder = async (userID: number) => {
  try {
    //createOrderValidator.parse(input)
    const createdOrder = await prisma.order.create({
      data: {
        user_id: userID,
        active: true
      }
    })

    return createdOrder;
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 400 })
  }
}

export const createOrderProduct = async (productID: number,
                                         sizeName: string,
                                         colorName: string,
                                         quantity: number) => {
  try {
    const id = await prisma.order.findFirst({
      where: {
        active: true
      },
      select: {
        order_id: true
      }
    })

    if(!id) {
      throw new Error('A error happens')
    }
    const createOrderProduct = await prisma.orderProduct.create({
      data: {
        order_id: id.order_id,
        product_id: productID,
        size_name: sizeName,
        color_name: colorName,
        quantity: quantity
      }
    })

    return createOrderProduct;
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
}

export const getOrdersByUser = async (userID: number) => {
  try {
    const order = await prisma.order.findMany({
      where: {
        user_id: userID,
        active: true
      }, include: {
        OrderProduct: true
      }
    })
    // if (!order) {
    //   throw new Error("Order Not Found")
    // }

    return order;
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
};

export const getOrdersByItems = async (userID: number, productID: number) => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        user_id: userID,
        active: true
      }, include: {
        OrderProduct: {
          where: {
            product_id: productID
          }
        }
      }
    })

    const productColorMap: Record<string, any[]> = {};
    order?.OrderProduct.map((orderProduct) => {
      const key = orderProduct.color_name;

      if(key in productColorMap) {
        productColorMap[key].push({
          size_name: orderProduct.size_name.trim(),
          quantity: orderProduct.quantity
        });
      } else {
        productColorMap[key] = [{
          size_name: orderProduct.size_name.trim(),
          quantity: orderProduct.quantity
        }]
      }
    })

    console.log("FINALMENTe LLEGUE SOY UN CRACK:  ");
    return productColorMap;
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
};

export const getOrderById = async (orderID: number) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        order_id: orderID
      },
      include: {
        customer: true,
        OrderProduct: {
          include: {
            Product: true
          }
        }
      }
    })
    return order
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
}


export const updateOrderStatus = async (orderId: number, active: boolean) => {
  try {
    
    const newOrder = await prisma.order.update({
      where: {
        order_id: orderId
      }, data: {
        active: active
      }
    })
    return newOrder;
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400})
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export const updateProductOrderStatus = async (productOrderId: number, quantity: number) => {
  try {
    const newProductOrder = await prisma.orderProduct.update({
      where: {
        order_product_id: productOrderId 
      }, data: {
        quantity: quantity
      }
    })
    return newProductOrder;
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error }, { status: 400})
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}
