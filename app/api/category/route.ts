import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createCategoryValidator } from '@/app/api/category/category.schema'
import { ZodError } from 'zod'

export async function GET () {
  const categories = await prisma.category.findMany({
    include: {
      ProductCategory: {
        include: {
          product: true
        }
      }
    }
  })
  return NextResponse.json(categories)
}

export async function POST (req: NextRequest) {
  try {
    const data = await req.json()
    createCategoryValidator.parse(data)
    await prisma.category.create({
      data: {
        name: data.name,
        description: data.description
      }
    })

    return NextResponse.json('Successful category creation')
  } catch (error) {
    console.error('Error', error)
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: (error as any).errors },
        { status: 401 }
      )
    }
    return NextResponse.json({ error: (error as any).errors }, { status: 500 })
  }
}

export async function DELETE () {
  await prisma.category.deleteMany()
  return NextResponse.json('Successful All items of Category')
}
