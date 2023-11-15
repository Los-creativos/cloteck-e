import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  const uniqueProduct = await prisma.product.findUnique({
    where: {
      product_id: parseInt(params.id)
    }
  })

  return NextResponse.json(uniqueProduct)
}

export async function DELETE (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  await prisma.product.delete({
    where: {
      product_id: parseInt(params.id)
    }
  })

  return NextResponse.json('Successful Product Deleted')
}

export async function PUT (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  const data = await req.json()
  await prisma.product.update({
    where: {
      product_id: parseInt(params.id)
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image
    }
  })

  return NextResponse.json('Successful Product Updated')
}
