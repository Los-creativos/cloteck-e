'use server'

import { prisma } from "@/lib/prisma";
import {Prisma, Order} from "@prisma/client";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {createOrderValidator, updateOrderValidator} from "@/app/(backend)/api/order/order.schema";
import {OrderProduct} from "@/app/(backend)/api/order/order-dto";


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
                                         quantity: number,
                                         image: string
) => {
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
        quantity: quantity,
        image: image
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
    const order = await prisma.order.findFirst({
      where: {
        user_id: userID,
        active: true
      }, include: {
        OrderProduct: true
      }
    })
    if (!order) {
      throw new Error("Order Not Found")
    }

    return NextResponse.json(order.order_id);
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
};

export const getOrdersByItems = async (userID: number) => {
  try {
    const order = await prisma.order.findFirst({
      where: {
        user_id: userID,
        active: true
      },
      include: {
        OrderProduct: {
          include: {
            Product: true
          }
        }
      }
    });

    const productList: OrderProduct[] = [];
    const productMap: Map<string, number> = new Map();

    order?.OrderProduct.forEach((orderProduct) => {
      const colorName = orderProduct.color_name.trim();
      const productId = orderProduct.product_id.toString();
      const key = `${colorName}-${productId}`;

      if (productMap.has(key)) {
        const index = productMap.get(key) as number;
        productList[index].sizes.push(orderProduct.size_name.trim());
        productList[index].quantity.push(orderProduct.quantity);
        productList[index].orderProduct.push(orderProduct.order_product_id);
        //productList[index].stock.push(orderProduct.Product);
      } else {
        productMap.set(key, productList.length);
        productList.push({
          id: order.order_id,
          title: orderProduct.Product.name,
          description: orderProduct.Product.description,
          price: orderProduct.Product.price.toNumber(),
          image: orderProduct.image.trim(),
          color: colorName,
          sizes: [orderProduct.size_name.trim()],
          orderProduct: [],
          quantity: [orderProduct.quantity],
          stock: []
        });
      }
    });

    console.log("FINALMENTE LLEGUÉ SOY UN CRACK: ");
    return productList;
  } catch (error) {
    console.error('Error', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 });
  }
};

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

export const deleteOrderProduct = async (orderID: number, size: string, color: string) => {
  try {
    await prisma.orderProduct.delete({
      where: {
        order_product_id: orderID,
        size_name: size,
        color_name: color
      }
    })

    return NextResponse.json("Successful delete", {status: 200})
  } catch (error) {
    console.error(error)
  }
}

export const clearOrders = async () => {
  try {
    await prisma.order.deleteMany({
      where: {}
    });
    return "Successful Clear Cart";
  } catch (error) {
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}
