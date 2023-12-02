import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createProductSchema, updateProductSchema } from '../product.schema';
import { ZodError } from 'zod';

export async function GET (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  const uniqueProduct = await prisma.product.findUnique({
    where: {
      product_id: parseInt(params.id)
    },
    include: {
      ProductCategory: {
        include: {
          category: true
        }
      },
      Attribute: {
        include: {
          size: true,
          color: true,
        }
      }
    }
  })

  return NextResponse.json(uniqueProduct)
}

export async function DELETE (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  try {
    await prisma.$transaction([
      prisma.productCategory.deleteMany({
        where: {
          product_id: parseInt(params.id)
        }
      }),
      prisma.attribute.deleteMany({
        where: {
          product_id: parseInt(params.id)
        }
      }),
      prisma.orderProduct.deleteMany({
        where: {
          product_id: parseInt(params.id)
        }
      }),
      prisma.product.delete({
        where: {
          product_id: parseInt(params.id)
        }
      })
    ]);

    return NextResponse.json('Successful Product Deleted');
  } catch (error) {
    console.error('Error during deletion:', error);
    return NextResponse.json('Failed to delete product', { status: 500 });
  }
}


export async function PUT (
  req: NextRequest,
  { params }: { params: { id: string }; }
) {
  try {
    const data = await req.json()
    updateProductSchema.parse(data)
    await prisma.productCategory.deleteMany({
      where: {
        product_id: parseInt(params.id)
      }
    });
  
    await prisma.product.update({
      where: {
        product_id: parseInt(params.id)
      },
      data: {
        description: data.description,
        ProductCategory: {
          create: data.ProductCategory.map((category: { category_id: number }) => ({
            category: {
              connect: { category_id: category.category_id }
            }
          }))
        }
      }
    })
  
    return NextResponse.json('Successful Product Updated')
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json({ error: (error as any).errors }, { status: 400 })
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}
