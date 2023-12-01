import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import {createOrderValidator} from "@/app/(backend)/api/order/order.schema";
import {createOrder, getOrdersByUser} from "@/app/(backend)/api/order/order.service";
import {Prisma} from "@prisma/client";
import {undefined} from "zod";

export async function GET () {
    try {
        const orders = await getOrdersByUser(1, 1);
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
