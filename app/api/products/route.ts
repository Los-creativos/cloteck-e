import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: { json: () => any; }) {
  const data = await request.json();
  await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      quantity: data.quantity
    }
  });

  return NextResponse.json("Successful product creation");
}

export async function DELETE() {
  await prisma.product.deleteMany();
  return NextResponse.json("Successful deletion of all products");
}
