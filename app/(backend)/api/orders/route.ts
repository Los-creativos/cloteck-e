import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createOrderSchema } from './order.schema';

export async function POST(
  req: NextRequest,
) {
  try {
    const data = await req.json();
    createOrderSchema.parse(data);

    const order = await prisma.order.create({
      data,
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Error', error);
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
