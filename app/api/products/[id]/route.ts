import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextApiRequest,
  { params }: { params: { productId: string }; }
) {
  const uniqueProduct = await prisma.product.findUnique({
    where: {
      product_id: parseInt(params.productId)
    },
  });

  return NextResponse.json(uniqueProduct);
}

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { productId: string }; }
) {
  await prisma.product.delete({
    where: {
      product_id: parseInt(params.productId)
    },
  });

  return NextResponse.json("Successful Product Deleted");
}

export async function PUT(
  req: { json: () => any; },
  { params }: { params: { productId: string }; }
) {
  const data = await req.json();
  await prisma.product.update({
    where: {
      product_id: parseInt(params.productId)
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      quantity: data.quantity
    }
  });

  return NextResponse.json("Successful Product Updated");
}
