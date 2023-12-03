import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {createOrderValidator} from "@/app/(backend)/api/order/order.schema";
import {createOrder, getOrdersByItems, getOrdersByUser} from "@/app/(backend)/api/order/order.service";

export async function GET () {
    try {
        const orders = await getOrdersByItems(1);
        return NextResponse.json(orders)
    } catch (error) {
        console.error('Error', error)
        return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
}

export async function POST (request: NextRequest) {
    try {
        const data = await request.json()
        const createdOrder = await createOrder(data.user_id);
        
        return NextResponse.json(createdOrder)
    } catch (error) {
        console.error('Error', error)
        return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
}

export async function DELETE (request: NextRequest) {
    try {
        const data = await request.json();
        
        return NextResponse.json('Successful deletion of all orders for the user')
    } catch (error) {
        return NextResponse.json({error}, { status: 500})
    }

}
