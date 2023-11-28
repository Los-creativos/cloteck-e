import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createProductSchema } from './product.schema'

export async function GET () {
    const orders = await prisma.order.findMany({
        include: {
            product: true,
            size: true,
            color: true
        }
    })

    return NextResponse.json(orders)
}

export async function POST (request: NextRequest) {
    try {
        const data = await request.json()

        createProductSchema.parse(data)

        const createdOrder = await prisma.order.create({
            data: {
                product_id: data.product_id,
                user_id: data.user_id,
                size_id: data.size_id,
                color_id: data.color_id,
                product_quantity: data.product_quantity
            }
        })

        return NextResponse.json(createdOrder)
    } catch (error) {
        console.error('Error', error)
        return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
}

export async function DELETE () {
    await prisma.order.deleteMany();
    return NextResponse.json('Successful deletion of all orders')
}
