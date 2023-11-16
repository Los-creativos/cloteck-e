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
          color: true
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
        image: data.image,
        ProductCategory: {
          create: data.ProductCategory.map((category: { category_id: any }) => ({
            category: {
              connect: { category_id: category.category_id }
            }
          }))
        },
        Attribute: {
          create: data.Attribute.map((attribute: { size_id: any; color_id: any; quantity: any }) => ({
            size: {
              connect: { size_id: attribute.size_id }
            },
            color: {
              connect: { color_id: attribute.color_id }
            },
            quantity: attribute.quantity
          }))
        }
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
            color: true
          }
        }
      }
    })

    return NextResponse.json(createdProduct)
  } catch (error) {
    console.error('Error', error)
    return NextResponse.json({ error: (error as any).errors }, { status: 401 })
  }
}

export async function DELETE () {
  await prisma.product.deleteMany()
  return NextResponse.json('Successful deletion of all products')
}
