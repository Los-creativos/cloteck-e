import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {createOrderValidator} from "@/app/(backend)/api/order/order.schema";
import {createOrder, deleteAllOrderByUser} from "@/app/(backend)/api/order/order.service";
import {Prisma} from "@prisma/client";

export async function GET () {
    try {
        const orders = await prisma.order.findMany({
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

export async function POST (request: NextRequest) {
    try {
        const data = await request.json()
        const order: Prisma.OrderCreateInput = {
            product_id: data.product_id,
            user_id: data.user_id,
            size_id: data.size_id,
            color_id: data.color_id,
            product_quantity: data.product_quantity,
        }
        const createdOrder = await createOrder(order);

        return NextResponse.json(createdOrder)
    } catch (error) {
        console.error('Error', error)
        return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
}

export async function DELETE (request: NextRequest) {
    try {
        const data = await request.json();
        await deleteAllOrderByUser(data.user_id);
        return NextResponse.json('Successful deletion of all orders for the user')
    } catch (error) {
        return NextResponse.json({error}, { status: 500})
    }

}
