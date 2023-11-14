import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createProductSchema } from './product.schema';

export async function GET() {
  const products = await prisma.product.findMany({
    include: {
      ProductCategory: {
        include: {
          category: true,
        },
      },
      Attribute: {
        include: {
          size: true,
          color: true,
        },
      },
    },
  });


  return NextResponse.json(products);
}

export async function POST(request: { json: () => any; }) {
  try {
    const data = await request.json();

    createProductSchema.parse(data);

    const createdProduct = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        ProductCategory: {
          create: {
            category: {
              connect: {
                category_id: data.ProductCategory[0].category_id,
              },
            },
          },
        },
        Attribute: {
          create: {
            size: {
              connect: {
                size_id: data.Attribute[0].size_id,
              },
            },
            color: {
              connect: {
                color_id: data.Attribute[0].color_id,
              },
            },
            quantity: data.Attribute[0].quantity,
          },
        },
      },
    });
    return NextResponse.json(createdProduct);
  } catch (error) {
    console.error("Error", error)
    return NextResponse.json({ error: (error as any).errors }, { status: 401 });
  }
}

export async function DELETE() {
  await prisma.product.deleteMany();
  return NextResponse.json("Successful deletion of all products");
}