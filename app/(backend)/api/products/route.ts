import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createProductSchema } from './product.schema'

export async function GET () {
  const products = await prisma.product.findMany({
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

  return NextResponse.json(products)
}

export async function POST (request: NextRequest) {
  try {
    const data = await request.json()

    createProductSchema.parse(data)
    
    const createdProduct = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        ProductCategory: {
          create: data.ProductCategory.map((category: { category_id: number }) => ({
            category: {
              connect: { category_id: category.category_id }
            }
          }))
        }
      },
      include: {
        ProductCategory: {
          include: {
            category: true
          }
        }
      }
    })
    
    const attributes = data.Attribute.map(async (attribute: { size: string; color: string; quantity: number; image: string }) => {
      const createColor = await prisma.color.create({
        data: {
          name: attribute.color,
        },
      });

      const createSize = await prisma.size.create({
        data: {
          name: attribute.size,
        },
      });

      const createAttribute = await prisma.attribute.create({
        data: {
          product: {
            connect: {
              product_id: createdProduct.product_id,
            },
          },
          size: {
            connect: {
              size_id: createSize.size_id,
            },
          },
          color: {
            connect: {
              color_id: createColor.color_id,
            },
          },
          quantity: attribute.quantity,
          image: attribute.image,
        },
      });

      return createAttribute;
    });

    return NextResponse.json(createdProduct, attributes)
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 400 })
  }
}

export async function DELETE () {
  await prisma.productCategory.deleteMany()
  await prisma.attribute.deleteMany()
  await prisma.color.deleteMany()
  await prisma.size.deleteMany()
  await prisma.product.deleteMany()
  return NextResponse.json('Successful deletion of all products')
}
